# Nginx实现负载均衡

## 准备资源

准备1个Nginx服务器和2个Tomcat服务器

| 服务器   | IP           | 端口 |
| -------- | ------------ | ---- |
| Nginx    | 192.168.1.20 | 84   |
| Tomcat 1 | 192.168.1.21 | 8080 |
| Tomcat 2 | 192.168.1.22 | 8080 |



## 编辑配置文件

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
	
	# =============BEGIN 负载均衡 =============
	# 配置负载均衡要使用 upstream
	upstream myServers{
		server 192.168.1.21:8080;
		server 192.168.1.22:8080;
	}
		
	server {
		listen 84;
		server_name localhost;
		
		location / {
			proxy_pass http://myServers;
		}

    }
	
	# =============END 负载均衡 =============

}

```



## 重新加载配置

```sh
sbin/nginx -s reload
```





## 访问测试

访问Nginx的http://192.168.1.20:84，请求会轮流的转发到`Tomcat1`和`Tomcat2`

![image-20200424223452544](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424223452544.png)

![image-20200424223615713](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200424223616-818039.png)



> **注意**
>
> 为了区分两个Tomcat，我在index.jsp上分别加了Node - 1 - Tomcat 和 Node - 2 - Tomcat 的字样