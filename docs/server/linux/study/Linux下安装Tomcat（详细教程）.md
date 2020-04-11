# Linux下安装tomcat（详细教程）

### 1. 将tomcat.tar.gz文件上传到服务器

### 2. 切换到tomcat压缩包的目录

```
cd 你放tomcat的目录
```

> 示例
>
> 我的tomcat放在/opt/package目录下
>
> cd /opt/package

![image-20200403153826292](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200403153826292.png)

### 3. 查看是否有tomcat压缩包

```
ls
```

![image-20200403153926608](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200403153926608.png)

### 4. 解压tomcat

```
tar -zxvf apache-tomcat-7.0.61.tar.gz 
```

![image-20200403154027746](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200403154027746.png)

### 5. 启动tomcat

进入tomcat的bin目录下

```
cd apache-tomcat-7.0.61/bin
```

![image-20200403154137778](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200403154137778.png)

启动tomcat

```
sh startup.sh
```

![image-20200403154238915](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403154239-482110.png)

### 6. 查看防火墙状态

命令

```
systemctl status firewalld.service
```

![image-20200403151456181](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403151925-577176.png)

绿色的active(running)表示正在防火墙正在运行，需要关闭防火墙

### 7. 关闭防火墙

```
systemctl stop firewalld.service
```

![image-20200403151532102](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200403151532-768536.png)

### 8. 浏览器访问tomcat

浏览器输入http://192.168.1.5:8080/

> 把192.168.1.5换成你自己的ip

![image-20200403154902441](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200403154902441.png)

