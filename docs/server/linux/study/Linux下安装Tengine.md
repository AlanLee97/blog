# Linux下安装Tengine

### 1. 将安装包上传至服务器

![image-20200408155952762](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408155952762.png)



### 2. 解压安装包

```sh
tar -zxvf tengine-2.1.0.tar.gz
```

![image-20200408160123626](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408160123626.png)

切换到目录

```sh
cd tengine-2.1.0
```

### 3. 安装依赖软件

#### 3.1 安装gcc

```sh
yum install gcc
```

![image-20200408160955757](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408160955757.png)

#### 3.2 预编译tengine

```sh
./configure --prefix=/usr/tengine-2.1.0
```

![image-20200408161205058](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408161205058.png)

报错，需安装pcre

![image-20200408161306719](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408161306719.png)

#### 3.3 安装pcre

```sh
yum install pcre pcre-devel
```

![image-20200408161356831](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161357-390850.png)

#### 3.4 重新预编译

```sh
./configure --prefix=/usr/tengine-2.1.0
```

![image-20200408161512089](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161512-657368.png)

报错，需安装OpenSSL

#### 3.5 安装OpenSSL

```sh
yum install openssl-devel
```

![image-20200408161703017](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161703-599793.png)

#### 3.6 重新预编译

```sh
./configure --prefix=/usr/tengine-2.1.0
```

![image-20200408161816294](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408161816-850521.png)

出现上图情况说明安装成功。

### 4. 编译

```
make
```

![image-20200408162026322](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408162026322.png)

### 5. 编译安装

```sh
make install
```

![image-20200408162146763](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162148-752025.png)

### 6. 进入tengine的安装目录

```sh
cd /usr/tengine-2.1.0/
```

### 7. 启动nginx

```sh
./sbin/nginx
```

### 8. 关闭防火墙

查看防火墙状态

```sh
systemctl status firewalld.service
```

![image-20200408162634944](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162635-962131.png)

如果是active(running)状态，表示开启状态，需关闭

关闭防火墙

```
systemctl stop firewalld.service
```

再次查看防火墙状态

![image-20200408162810389](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408162810-444741.png)

上图表示已关闭防火墙

### 9. 浏览器访问服务器的Tengine

浏览器输入服务器地址即可

![image-20200408163100400](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408163100-332967.png)