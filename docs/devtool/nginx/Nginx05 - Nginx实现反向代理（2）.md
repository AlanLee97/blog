# Nginx实现反向代理

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

	
	# =============BEGIN 反向代理 =============
	server {
		listen 83;
		server_name localhost;
		
		location / {
			proxy_pass http://localhost:8080;
		}

    }
	
	# =============END 反向代理 =============

}

```

这里主要配置了2个地方

- listen 后面是要监听本机的端口
- proxy_pass， 后面接的是要代理的网址

>**说明**
>
>这里使用本机的83端口代理8080端口的Tomcat服务器，即实现在浏览器访问83端口，nginx将请求转发到8080端口，显示tomcat的页面，而83端口是没有开服务的。



### 重新加载配置

```
sbin/nginx -s reload
```



## 访问测试

先访问8080端口，http://192.168.1.20:8080/

![image-20200424211524141](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424211524141.png)

访问83端口，http://192.168.1.20:83/

![image-20200424211728660](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424211728660.png)