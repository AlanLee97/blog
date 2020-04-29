---
date: 2020-02-28
categories: 
 - 服务器
tags: 
 - nginx
---
# Docker中搭建nginx





```yml
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
     - 81:80
     - 9000:9000
    volumes:
     - ./conf/nginx.conf:/etc/nginx/nginx.conf
     - ./wwwroot:/usr/share/nginx/wwwroot

```



```
docker run \
-d --name nginx-1 \
-p 81:80 \
-v /usr/local/docker/nginx/conf:/etc/nginx/nginx.conf \
-v /usr/local/docker/nginx/wwwroot:/usr/share/nginx/wwwroot \
nginx
```



```
docker run -d --name nginx-1 -p 81:80 -v ./conf/nginx.conf: /etc/nginx/nginx.conf -v ./wwwroot: /usr/share/nginx/wwwroot nginx
```

nginx.conf

```conf
worker_processes 1;

events {
    worker_connections 1024;
}

http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    server {
        listen 81;
        server_name 47.103.204.62;
        location / {
        	root /usr/share/nginx/wwwroot/html81;
        	index index.html index.htm;
        }
    }
    
    server {
        listen 9000;
        server_name 47.103.204.62;
        location / {
        	root /usr/share/nginx/wwwroot/html9000;
        	index index.html index.htm;
        }
    }
}
```

