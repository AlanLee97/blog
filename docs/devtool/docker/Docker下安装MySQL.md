---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# Docker下安装MySQL，普通安装方式和docker-compose方式安装

## 方式一

1. 搜索MySQL镜像

```bash
docker search mysql
```

2. 拉取镜像

```bash
docker pull mysql:5.7
```

3. 运行

```shell
docker run -d -p 3306:3306 mysql:5.7
```

上面这种方式简单，但是没有对mysql做配置，虽然也可以在命令后面加参数，但是写起来比较麻烦。推荐下面的dcoker-compose.yml方式（需安装docker-compose）。



## 方式二

1. 创建目录

```shell
mkdir /usr/local/mysql
```

2. 进入mysql目录

```shell
cd /usr/local/mysql
```

3. 在mysql目录下创建docker-compose.yml文件，内容如下

```yml
version: '3.1'
services:
  mysql:
    image: mysql:5.7
    container_name: mysql57
    ports: 
     - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: "123456"
      MYSQL_USER: 'root'
      MYSQL_PASS: '123456'
    volumes: 
     - ./data:/var/lib/mysql
     - ./conf/my.cnf:/etc/my.cnf
    restart: always
    network_mode: "bridge"
```

其中
 `network_mode`:为容器的网络模式。
 `MYSQL_ROOT_PASSWORD`:为数据库的密码，也就是root用户的密。
 `MYSQL_USER`和`MYSQL_PASS`:代表用户名和密码。
 `image`:为你拉取镜像的地址和版本，当然也可以换成自己的镜像仓库，这里使用官方的。
 `volumes`:里面的参数为映射本地和docker容器里面的文件夹和目录。
 `ports`:为映射端口。



4. 创建存放数据的文件夹data

```shell
mkdir /usr/local/mysql/data
```

5. 创建存放配置的的文件夹conf

```shell
mkdir /usr/local/mysql/conf
```

6. 创建配置文件

```shell
cd /usr/local/mysql/conf
vi my.cnf
```

内容如下：

```shell
[mysqld]
user=mysql
default-storage-engine=INNODB
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```

7. 启动

```shell
docker-compose up -d
```

8. navicat测试连接

![image-20200225084653576](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200225084653576.png)

![image-20200225084510744](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200225084510744.png)

9. 如果需要停掉mysql

```shell
docker-compose down
```

