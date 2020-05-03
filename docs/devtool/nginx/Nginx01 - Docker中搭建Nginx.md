---
date: 2020-02-28
categories: 
 - 服务器
tags: 
 - nginx
---
# Docker中搭建nginx



## 方式1：docker-compose

### 创建目录

```sh
mkdir -p /usr/local/docker/nginx
cd /usr/local/docker/nginx
```





### 编写docker-compose.yml文件

```sh
vim docker-compose.yml
```



docker-compose.yml

```yml
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
     - 80:80
    volumes:
     - ./conf/nginx.conf:/etc/nginx/nginx.conf
     - ./wwwroot:/usr/share/nginx/wwwroot

```



### 创建目录用于挂载配置文件

```sh
mkdir ./wwwroot
vim ./conf/nginx.conf
```

nginx.conf的内容，见文章后面的附录



### 运行

```sh
docker-compose up -d
```





## 方式2：docker

### 创建目录用于挂载配置文件

```sh
mkdir -p /usr/local/docker/nginx/wwwroot
vim /usr/local/docker/nginx/conf
```



### 运行

直接输入命令

```sh
docker run \
-d --name nginx-1 \
-p 80:80 \
-v /usr/local/docker/nginx/conf:/etc/nginx/nginx.conf \
-v /usr/local/docker/nginx/wwwroot:/usr/share/nginx/wwwroot \
nginx
```



## 附录

nginx.conf

```conf

user  root;
worker_processes  1;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;

        location / {
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }

}

```



