# Nginx+Keepalived实现高可用

## 准备资源

2台Nginx，2台Tomcat

| 服务器             | IP            | 端口 | 角色       |
| ------------------ | ------------- | ---- | ---------- |
| 基于ip的虚拟主机   | 192.168.1.20  | 80   | MASTER     |
| Nginx - master - 2 | 192.168.1.200 | 80   | BACKUP     |
| Tomcat - 1         | 192.168.1.21  | 8080 | WEB SERVER |
| Tomcat - 2         | 192.168.1.22  | 8080 | WEB SERVER |





## 安装Keepalived

在2台Nginx下都安装Keepalived

```
yum -y install keepalived
```



## 配置Keepalived

主要配置4个地方

![image-20200425095003540](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425095003540.png)



### 主节点配置

修改主Nginx服务器的/etc/keepalived/keepalived.conf文件，内容如下

```
! Configuration File for keepalived

#全局配置
global_defs {
   notification_email {  #指定keepalived在发生切换时需要发送email到的对象，一行一个
     XXX@XXX.com
   }
   notification_email_from XXX@XXX.com  #指定发件人
   #smtp_server XXX.smtp.com                             #指定smtp服务器地址
   #smtp_connect_timeout 30                               #指定smtp连接超时时间
   router_id LVS_DEVEL                                    #运行keepalived机器的一个标识
}

vrrp_instance VI_1 { 
    state MASTER           #标示状态为MASTER 备份机为BACKUP
    interface ens33         #设置实例绑定的网卡
    virtual_router_id 51   #同一实例下virtual_router_id必须相同
    priority 100           #MASTER权重要高于BACKUP 比如BACKUP为99  
    advert_int 1           #MASTER与BACKUP负载均衡器之间同步检查的时间间隔，单位是秒
    authentication {       #设置认证
        auth_type PASS     #主从服务器验证方式
        auth_pass 8888
    }
    virtual_ipaddress {    #设置vip
        192.168.1.100       #可以多个虚拟IP，换行即可
    }
}
```

查看ip

![image-20200425102447353](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425102447353.png)



### 备用节点配置

修改备用Nginx服务器的/etc/keepalived/keepalived.conf文件，内容如下

```
! Configuration File for keepalived

#全局配置
global_defs {
   notification_email {  #指定keepalived在发生切换时需要发送email到的对象，一行一个
     XXX@XXX.com
   }
   notification_email_from XXX@XXX.com  #指定发件人
   #smtp_server XXX.smtp.com                             #指定smtp服务器地址
   #smtp_connect_timeout 30                               #指定smtp连接超时时间
   router_id LVS_DEVEL                                    #运行keepalived机器的一个标识
}

vrrp_instance VI_1 { 
    state BACKUP           #标示状态为MASTER 备份机为BACKUP
    interface ens33         #设置实例绑定的网卡
    virtual_router_id 51   #同一实例下virtual_router_id必须相同
    priority 99           #MASTER权重要高于BACKUP 比如BACKUP为99  
    advert_int 1           #MASTER与BACKUP负载均衡器之间同步检查的时间间隔，单位是秒
    authentication {       #设置认证
        auth_type PASS     #主从服务器验证方式
        auth_pass 8888
    }
    virtual_ipaddress {    #设置vip
        192.168.1.100       #可以多个虚拟IP，换行即可
    }
}
```

查看ip

![image-20200425102552945](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200425112737-652506.png)

只有当主节点的Keepalived停掉时，备用节点才会生成虚拟ip

![image-20200425120316441](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200425120320-891120.png)



## 配置主从切换

keepalived是通过检测keepalived进程是否存在判断服务器是否宕机，如果keepalived进程在但是nginx进程不在了那么keepalived是不会做主备切换，所以我们需要写个脚本来监控nginx进程是否存在，如果nginx不存在就将keepalived进程杀掉。

在主nginx上需要编写nginx进程检测脚本（check_nginx.sh），判断nginx进程是否存在，如果nginx不存在就将keepalived进程杀掉

**check_nginx.sh内容如下：**

```sh
#!/bin/bash
# 如果进程中没有nginx则将keepalived进程kill掉
A=`ps -C nginx --no-header |wc -l`      ## 查看是否有 nginx进程 把值赋给变量A 
if [ $A -eq 0 ];then                    ## 如果没有进程值得为 零
       service keepalived stop          ## 则结束 keepalived 进程
fi
```

**添加客执行权限**

```sh
chmod +x /etc/keepalived/check_nginx.sh
```

**修改主Nginx的配置**

添加如下两段代码

在vrrp_instance VI_1上面添加下面这段代码

```
vrrp_script check_nginx {
    script "/etc/keepalived/check_nginx.sh"         ##监控脚本
    interval 2                                      ##时间间隔，2秒
    weight 2                                        ##权重
}
```

在virtual_ipaddress上面添加下面这段代码

```
track_script {
	check_nginx        #监控脚本
}
```





## 访问测试

启动keepalived

```sh
service keepalived start
```

为了区分主备Nginx，修改一下Nginx主页

![image-20200425100407097](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200425100407-304620.png)

![image-20200425100502281](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200425100502-880517.png)

浏览器访问虚拟ip，http://192.168.1.100/

首先进来的是主Nginx

![image-20200425100638472](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425100638472.png)

当停掉主Nginx，会访问到备用Nginx

```sh
service nginx stop
```

再次访问http://192.168.1.100/，进入到备用Nginx

![image-20200425111547000](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200425111547000.png)