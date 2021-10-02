# docker-compose安装nginx

docker-compose.yml

```yaml
version: '3.1'
services:
  nginx:
    image: nginx
    restart: always
    container_name: nginx
    environment:
      - TZ=Asia/Shanghai
    ports:
      - 80:80
      - 443:443
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./log:/var/log/nginx
      - ./html:/html
      - /etc/letsencrypt:/etc/letsencrypt

```

nginx.conf

```
user  nginx;
#nginx 进程数，建议按照cpu 数目来指定，一般为它的倍数。
worker_processes  2;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

events {
	#单个后台worker process进程的最大并发链接数  
    worker_connections  1024;
}

http {
	#设定mime类型,类型由mime.type文件定义
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    #设定日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    #开启gzip压缩
    gzip  on;
    gzip_disable "MSIE [1-6].";

    #设定请求缓冲
    client_header_buffer_size    128k;
    large_client_header_buffers  4 128k;
	
	#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
	#对于普通应用，必须设为 on,
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile on;
	
	#用于设置客户端连接保持活动的超时时间，在超过这个时间之后服务器会关闭该链接。
    #keepalive_timeout  0;
    keepalive_timeout  120; 
	
	#允许客户端请求的最大单文件字节数
	client_max_body_size 50m;
	
	#服务器名字的hash表大小
	server_names_hash_bucket_size 128;
	#header中自定义变量时支持下划线
	underscores_in_headers on; 
	
	#down 表示当前的server暂时不参与负载
	#weight 加权轮询权重,默认为1。weight越大，负载的权重就越大。
	#backup 备用服务器, 当其他所有的非backup机器出现故障或者忙的时候，才会请求backup机器，因此这台机器的压力最轻。
	#max_fails 允许请求失败的次数默认为1。当超过最大次数时，返回proxy_next_upstream 模块定义的错误
	#fail_timeout max_fails次失败后，暂停的时间。
	#apiServer不能用下划线,否则访问不到
	#upstream apiServer {
    #  server 172.17.0.1:18081 weight=10;
    #  server 172.17.0.1:28081 weight=10;
    #}


	server{
		listen 81;
		# server_name www.xxxx.com;
		location / {
			root /html/uuid-react-frontend;
			index index.html index.htm;
		}
	}
	
}
```



```markdown
# 检查配置文件
docker exec -it nginx service nginx check-reload
# 重新加载配置文件
docker exec -it nginx service nginx reload
```