---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# Docker常用命令

docker命令

构建镜像
```
docker build -t panda:1.1.1 .
```

运行容器

查看运行中的容器
```
docker ps
```

查看所有容器
```
docker ps -a
```

停止运行中的容器
```
docker stop 容器id
```

删除容器
```
docker rm 容器id
```

查看镜像
```
docker images
```

删除镜像
```
docker rmi 镜像id
```

运行镜像到容器
docker run -d -p 对外访问的端口号:你开发的应用的运行端口号 镜像名:版本号
例如：

```
docker run -d -p 8083:8083 panda:1.1.1
```

-d表示后台运行
-p表示端口映射
