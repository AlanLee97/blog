# Docker安装RabbitMQ



**创建文件夹**

```sh
mkdir /usr/local/docker/rabbitmq && cd /usr/local/docker/rabbitmq
```

**创建存放数据的文件夹**

```sh
mkdir data
```

**创建docker-compose.yml**

```sh
vim docker-compose.yml
```

内容如下：

```yml
version: '3.1'
services:
  rabbitmq:
    restart: always
    image: rabbitmq:management
    container_name: rabbitmq
    ports:
      - 5672:5672
      - 15672:15672
    environment:
      TZ: Asia/Shanghai
      RABBITMQ_DEFAULT_USER: rabbit
      RABBITMQ_DEFAULT_PASS: 123456
    volumes:
      - ./data:/var/lib/rabbitmq
```

**启动**

```sh
docker-compose up -d
```

**浏览器访问**

ip:15672

帐号：rabbit

密码：123456