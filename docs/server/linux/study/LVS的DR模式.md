# LVS的DR模式

## 准备资源

| 主机   | ip           | 角色 |
| ------ | ------------ | ---- |
| master | 192.168.1.20 | DR   |
| node1  | 192.168.1.21 | RS1  |
| node2  | 192.168.1.22 | RS2  |



## 搭建步骤

### DR服务器上操作

#### 设置临时虚拟IP

```sh
ip addr  add 192.168.1.100/24 dev ens33 label ens33:0
```

重启网络服务

```sh
service network restart
```



#### 安装ipvsadm

```sh
yum install -y ipvsadm
```



#### DR上配置脚本

编写脚本

```sh
vim /usr/local/sbin/lvs_dr.sh
```

lvs_dr.sh

```sh
#! /bin/bash

echo 1 > /proc/sys/net/ipv4/ip_forward

ipv=/sbin/ipvsadm

vip=192.168.1.100

rs1=192.168.1.21

rs2=192.168.1.22

#设置ds的ip和路由，也可以先手动设置好

ifconfig ens33:0 down

ifconfig ens33:0 $vip broadcast $vip netmask 255.255.255.255 up

route add -host $vip dev ens33:0

$ipv -C

$ipv -A -t $vip:80 -s wlc

$ipv -a -t $vip:80 -r $rs1:80 -g -w 1

$ipv -a -t $vip:80 -r $rs2:80 -g -w 1
```

执行脚本

```sh
bash /usr/local/sbin/lvs_dr.sh
```



### 在2台RS服务器上操作

编辑脚本

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

在浏览器输入http://192.168.1.100/

![image-20200513154141689](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513154141689.png)

如果stop掉node1的nginx，就会转发到node2的nginx

![image-20200513155009011](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513155009011.png)

再次访问http://192.168.1.100/

![image-20200513155023178](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200513155023178.png)