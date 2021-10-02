

# LVS + keepalived实现高可用

LVS可以实现负载均衡，但是不能够进行健康检查，比如一个rs出现故障，LVS 仍然会把请求转发给故障的rs服务器，这样就会导致请求的无效性。keepalive 软件可以进行健康检查，而且能同时实现 LVS 的高可用性，解决 LVS 单点故障的问题，其实 keepalive 就是为 LVS 而生的。



## 准备资源

| 主机    | ip            | 角色 |
| ------- | ------------- | ---- |
| master1 | 192.168.1.20  | DR1  |
| master1 | 192.168.1.200 | DR2  |
| node1   | 192.168.1.21  | RS1  |
| node2   | 192.168.1.22  | RS2  |



## 操作步骤



### DR上操作

#### 安装keepalived

```sh
yum install ipvsadm keepalived -y
```

### keepalived节点配置

#### DR1

编辑配置文件

```sh
vim /etc/keepalived/keepalived.conf
```

keepalived.conf

```conf
! Configuration File for keepalived

global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.200.1
   smtp_connect_timeout 30
   router_id LVS_DEVEL
   vrrp_skip_check_adv_addr
   vrrp_strict
   vrrp_garp_interval 0
   vrrp_gna_interval 0
}

vrrp_instance VI_1 {
    state MASTER
    interface ens33
    virtual_router_id 51
    priority 100
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.1.100
    }
}


virtual_server 192.168.1.100 80 {#设置虚拟lvs服务，VIP PORT
    delay_loop 6
    lb_algo rr #调度算法wrr
    lb_kind DR #lvs的模式
    nat_mask 255.255.255.0
    persistence_timeout 50 同一个IP地址在50秒内lvs转发给同一个后端服务器
    protocol TCP

    real_server 192.168.1.21 80 {#设置真实服务器的心跳机制 RID PORT
        weight 1 #权重
        HTTP_GET {#心跳检测的方式
            url {
              path / #心跳检查的地址
              status_code 200 #心跳检查返回的状态
            }
            connect_timeout 2 #超时时间
            nb_get_retry 3 #重复检查3次
            delay_before_retry 1 #每隔1秒钟再次检查
        }
    }
	
	real_server 192.168.1.22 80 {#设置真实服务器的心跳机制 RID PORT
        weight 1 #权重
        HTTP_GET {#心跳检测的方式
            url {
              path / #心跳检查的地址
              status_code 200 #心跳检查返回的状态
            }
            connect_timeout 2 #超时时间
            nb_get_retry 3 #重复检查3次
            delay_before_retry 1 #每隔1秒钟再次检查
        }
    }
    
}
```



#### DR2

编辑配置文件

```sh
vim /etc/keepalived/keepalived.conf
```

keepalived.conf

```conf
! Configuration File for keepalived

global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from Alexandre.Cassen@firewall.loc
   smtp_server 192.168.200.1
   smtp_connect_timeout 30
   router_id LVS_DEVEL
   vrrp_skip_check_adv_addr
   vrrp_strict
   vrrp_garp_interval 0
   vrrp_gna_interval 0
}

vrrp_instance VI_1 {
    state BACKUP
    interface ens33
    virtual_router_id 51
    priority 50
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.1.100
    }
}


virtual_server 192.168.1.100 80 {#设置虚拟lvs服务，VIP PORT
    delay_loop 6
    lb_algo rr #调度算法wrr
    lb_kind DR #lvs的模式
    nat_mask 255.255.255.0
    persistence_timeout 50 同一个IP地址在50秒内lvs转发给同一个后端服务器
    protocol TCP

    real_server 192.168.1.21 80 {#设置真实服务器的心跳机制 RID PORT
        weight 1 #权重
        HTTP_GET {#心跳检测的方式
            url {
              path / #心跳检查的地址
              status_code 200 #心跳检查返回的状态
            }
            connect_timeout 2 #超时时间
            nb_get_retry 3 #重复检查3次
            delay_before_retry 1 #每隔1秒钟再次检查
        }
    }
	
	real_server 192.168.1.22 80 {#设置真实服务器的心跳机制 RID PORT
        weight 1 #权重
        HTTP_GET {#心跳检测的方式
            url {
              path / #心跳检查的地址
              status_code 200 #心跳检查返回的状态
            }
            connect_timeout 2 #超时时间
            nb_get_retry 3 #重复检查3次
            delay_before_retry 1 #每隔1秒钟再次检查
        }
    }
    
}
```



> - state BACKUP 备用节点
> - interface ens33 网卡名称
> - priority 50 权重





### RS上操作

#### 安装软件

```sh
yum install epel-release -y
```



#### 配置脚本

编写脚本

```sh
vim /usr/local/sbin/lvs_dr_rs.sh
```



lvs_dr_rs.sh

```sh
#! /bin/bash

vip=192.168.1.100

ifconfig lo:0 $vip broadcast $vip netmask 255.255.255.255 up

route add -host $vip lo:0

echo "1" >/proc/sys/net/ipv4/conf/lo/arp_ignore

echo "2" >/proc/sys/net/ipv4/conf/lo/arp_announce

echo "1" >/proc/sys/net/ipv4/conf/all/arp_ignore

echo "2" >/proc/sys/net/ipv4/conf/all/arp_announce
```

执行脚本

```sh
bash /usr/local/sbin/lvs_dr_rs.sh
```



## 测试

启动DR1和DR2的keepalived

```sh
service keepalived start
```

打开http://192.168.1.100/

![image-20200513201047016](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513201047016.png)

查看ip

```sh
ip addr
```

vip在DR1机子上。

![image-20200513201336476](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513201336476.png)

手动停止keepalived

在DR2机子上输入

```sh
ip addr
```

vip跳到DR2机子上来了

![image-20200513201147559](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513201147559.png)

