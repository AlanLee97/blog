---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# 安装docker-compose（国内高速镜像）

gihub上下载docker-compose太慢了，下载不动，只能换成国内镜像（daocloud.io）来下载。

**下载**

```shell
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```



**修改权限**

```shell
chmod +x /usr/local/bin/docker-compose
```



**查看是否安装成功**

```shell
docker-compose -version
```



**卸载docker-compose**

```bash
# whereis docker-compose
# /usr/bin/docker-compose
# rm /usr/bin/docker-compose
```

