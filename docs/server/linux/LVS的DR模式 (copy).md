# LVS的DR模式

## 准备资源

| 主机   | ip           | 角色 |
| ------ | ------------ | ---- |
| master | 192.168.1.20 | DR   |
| node1  | 192.168.1.21 | RS1  |
| node2  | 192.168.1.22 | RS2  |



## 搭建步骤

1、 找一台主机作为DR（虚拟服务器），安装ipvsadm

a) Yum install ipvsadm

2、 在DR设置两个IP地址：

a) DIP: 192.168.1.134 ,设置静态ID

b) VIP:192.168.1.200 , ifconfig eth0:1 192.168.1.200/24

3、 找多台机器作为RS( apeche或者tomcat )

a) 两台：静态设置192.168.1.137

​          192.168.1.138

b) 修改报文源IP的设置，需要设置内核参数

i. echo 1 > /proc/sys/net/ipv4/conf/eth0/arp_ignore

ii. echo 1 > /proc/sys/net/ipv4/conf/all/arp_ignore

iii. echo 2 > /proc/sys/net/ipv4/conf/eth0/arp_announce

iv. echo 2 > /proc/sys/net/ipv4/conf/all/arp_announce

c) 在两台机器（RS）上，设置网卡的别名IP：192.168.1.200

i. ifconfig lo:0 192.168.1.200 netmask 255.255.255.255 broadcast 192.168.1.200

d) 在两台机器（RS）上，添加一个路由

i. route add -host 192.168.1.200 dev lo:0

4、 DR上需要加一个路由设置：route add -host 192.168.1.200 dev eth0:1

5、 在RS 检查web服务是否正常

6、 在DR上使用ipvsadm添加集群服务

a) Ipvsadm –C

b) ipvsadm -A -t 192.168.1.200:80 -s wlc

c) ipvsadm -a -t 192.168.1.200:80 -r 192.168.1.137 -g -w 1

d) ipvsadm -a -t 192.168.1.200:80 -r 192.168.1.138 -g -w 1