---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# CentOS安装Docker

1. 安装要求

  docker官方说Linux内核至少3.8以上，建议3.10以上


2. 查看Linux版本
```
uname -a
```
3. 更新yum版本

```
yum update
```
4. 安装需要的软件包
yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的
```
yum install -y yum-utils device-mapper-persistent-data lvm2
```


5. 设置yum源
选择阿里云的仓库

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）
```
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```


6. 查看docker版本

```
yum list docker-ce --showduplicates | sort -r
```


7. 选择docker版本安装
我选的是docker-ce-18.03.1.ce

```
yum install docker-ce-版本号
yum install docker-ce-18.03.1.ce
```


8. 启动Docker

```
systemctl start docker
```


9. 查看docker版本

```
docker version
```


10. 运行hello-docker测试

```
docker run hello-world
```
