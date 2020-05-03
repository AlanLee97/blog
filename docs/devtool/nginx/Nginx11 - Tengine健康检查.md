# Tengine健康检查



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
	
	# =============BEGIN 健康检查 =============
	# 配置负载均衡要使用 upstream
	upstream myServers-hc{
		server 192.168.1.20:9090
		server 192.168.1.20:9091
		
		# 加入健康检查
		check interval=3000 rise=2 fall=5 timeout=1000 type=http;
        check_keepalive_requests 100;
        check_http_send "HEAD / HTTP/1.1\r\nConnection: keep-alive\r\n\r\n";
        check_http_expect_alive http_2xx http_3xx;
	}
		
	server {
		listen 86;
		server_name localhost;
		
		location / {
			proxy_pass myServers-hc;
		}
		
		location /status {
            check_status;

        }

    }
	
	# =============END 健康检查 =============

}

```



> 这段代码就是在负载均衡的基础上加入健康检查的代码
>
> ```
> check interval=3000 rise=2 fall=5 timeout=1000 type=http;
> check_keepalive_requests 100;
> check_http_send "HEAD / HTTP/1.1\r\nConnection: keep-alive\r\n\r\n";
> check_http_expect_alive http_2xx http_3xx;
> ```





## 重新加载配置

```sh
sbin/nginx -s reload
```





## 访问测试

输入http://192.168.1.20:86/status，进入监控检查页面

![image-20200424225356444](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424225356444.png)