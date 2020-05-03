# 利用Memcached解决session一致性问题



## 安装memcached

```sh
yum -y install memcached
```



## 启动memcached

```sh
service memcached start
```





## 将memcached所需jar文件上传到后端服务器tomcat的lib目录



## 配置tomcat的server.xml文件和context.xml



编辑context.xml

![image-20200424231646984](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424231646984.png)



## 编辑Tomcat的index.jsp

添加如下语句，打印出sessionId

```jsp
<h1>
    SessionID: 
    <%= session.getId() %>
</h1>
```

![image-20200424232543499](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424232543499.png)



未启动memcahced之前，看一下sessionId

![image-20200424232716815](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200424232716815.png)

![image-20200424232738662](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200424232738-222426.png)

很明显，两个sessionId不同。



开启memcached，需重启Tomcat，再次访问

![image-20200430084226671](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200430084227-579223.png)



![image-20200430084250282](https://gitee.com/AlanLee97/assert/raw/master/note_images/20200430084250-37687.png)