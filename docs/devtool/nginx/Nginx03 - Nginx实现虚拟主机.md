# Nginx实现虚拟主机

通过nginx可以实现虚拟主机的配置，nginx支持三种类型的虚拟主机配置

- 基于ip的虚拟主机， （一块主机绑定多个ip地址）

- 基于域名的虚拟主机（servername）

- 基于端口的虚拟主机（listen如果不写ip端口模式）



## 基于ip的虚拟主机

### 编辑配置文件

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
	
	# 基于ip的虚拟主机 - ip1
	server {
		listen 182.61.200.6:80;
		server_name www.vhost-ip1.com;
		
		location / {
		    root html;
			index vhost-ip1/index.html;
		}

    }
	
	# 基于ip的虚拟主机 - ip2
	server {
		listen 192.168.1.9:80;
		server_name www.vhost-ip2.com;
		
		location / {
		    root html;
			index vhost-ip2/index.html;
		}

    }

}

```

### 创建网站目录及文件

在nginx的目录下创建2个网站目录

创建目录

```sh
mkdir vhost-ip1
```

编写一个html文件

```sh
vim index.html
```

内容如下

```html
测试搭建虚拟主机  ip1
```

复制该文件夹

```sh
cp -rf vhost-ip1 vhost-ip2
```

将vhost-ip2目录下的index.html的内容改为下面的内容

```html
测试搭建虚拟主机  ip2
```





## 基于域名的虚拟主机

### 编辑配置文件

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
	
	# 基于域名的虚拟主机 - ip1
	server {
		listen 80;
		server_name v1.vhost.com;
		
		location / {
		    root html;
			index vhost-ip1/index.html;
		}

    }
	
	# 基于域名的虚拟主机 - ip2
	server {
		listen 80;
		server_name v2.vhost.com;
		
		location / {
		    root html;
			index vhost-ip2/index.html;
		}

    }

}

```

### 重新加载配置

```sh
sbin/nginx -s reload
```

### 配置hosts

配置hosts

```
vim /etc/hosts
```

添加内容

```
127.0.0.1 v1.vhost.com
127.0.0.1 v2.vhost.com
```

![image-20200424133724032](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424133724032.png)



### 访问测试

```sh
curl v1.vhost.com

curl v2.vhost.com
```





## 基于端口的虚拟主机

### 编辑配置文件

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
	
	# 基于端口的虚拟主机 - port1
	server {
		listen 81;
		server_name localhost;
		
		location / {
		    root html;
			index vhost-ip1/index.html;
		}

    }
	
	# 基于端口的虚拟主机 - port2
	server {
		listen 82;
		server_name localhost;
		
		location / {
		    root html;
			index vhost-ip2/index.html;
		}

    }

}

```





### 重新加载配置

```
sbin/nginx -s reload
```





### 访问测试

#### 访问81端口

浏览器访问http://192.168.1.7:81

![image-20200424135033003](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200424135035-175355.png)

#### 访问82端口

浏览器访问http://192.168.1.7:82

![image-20200424134908205](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424134908205.png)