# 同步时间



**检查当前时间**

```date
date
```



**安装ntpdate工具**

```sh
yum -y install ntp ntpdate
```



**设置系统时间与网络时间同步**

```sh
ntpdate cn.pool.ntp.org
```



**将系统时间写入硬件时间**

```sh
hwclock --systohc
```

