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

![image-20200424231646984](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200424231646984.png)



## 编辑Tomcat的index.jsp

添加如下语句，打印出sessionId

```jsp
<h1>
    SessionID: 
    <%= session.getId() %>
</h1>
```

![image-20200424232543499](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200424232543499.png)



未启动memcahced之前，看一下sessionId

![image-20200424232716815](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200424232716815.png)

![image-20200424232738662](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200424232738-222426.png)

很明显，两个sessionId不同。



开启memcached，需重启Tomcat，再次访问





