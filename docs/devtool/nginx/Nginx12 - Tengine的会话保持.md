# Tengine的会话保持

## 概述

该模块是一个负载均衡模块，通过cookie实现客户端与后端服务器的会话保持, 在一定条件下可以保证同一个客户端访问的都是同一个后端服务器。



## 编辑配置文件

nginx.conf

```

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

	
	# =============BEGIN 会话保持 =============
	# 配置负载均衡要使用 upstream
	upstream myServers-session-keep{
        # 添加会话保持
		session_sticky cookie=uid fallback=on path=/ mode=insert option=indirect;
		server 192.168.1.21:8080;
		server 192.168.1.22:8080;
	}
		
	server {
	    listen       80;
        server_name  localhost;
		location / {
		    # 添加会话保持
			session_sticky_hide_cookie upstream=myServers-session-keep;
			proxy_pass http://myServers-session-keep;
		}
    }
	# =============END 会话保持 =============
	

}

```



## 重启Nginx

```sh
service nginx stop
service nginx start
```



## 访问测试

浏览器输入http://192.168.1.20/，多次刷新，会一直保持在同一个Tomcat

![image-20200430101212385](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200430101212385.png)