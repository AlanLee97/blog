# 访问控制



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
	
	# =============BEGIN IP访问控制 =============	
	server {
		listen 85;
		server_name localhost;
		
		location / {
			# 禁止外网访问
			deny  192.168.1.1;
			# 允许内部局域网访问
			allow 192.168.1.0/24;
			deny  all;
			root html;
			index index.html index.htm;
		}

    }
	
	# =============END IP访问控制 =============

}

```



## 重新加载配置

```sh
sbin/nginx -s reload
```



## 访问测试

浏览器输入http://192.168.1.20:85/，出现禁止访问

![image-20200424224214370](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200424224222-227178.png)

服务器内访问

```
curl 192.168.1.20:85
```

![image-20200424224409857](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200424224410-308849.png)