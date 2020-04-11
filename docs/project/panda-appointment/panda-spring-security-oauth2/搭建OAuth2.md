# 搭建OAuth2

## 创建项目，添加依赖



## 编写配置类





## 浏览器访问

**访问地址**

```
http://localhost:8079/oauth/authorize?client_id=client&response_type=code
```



**登录页面**

![img](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/Lusifer_20190401195014.png)

登录进去后跳转到授权页面

**授权页面**

![img](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/Lusifer_20190401195129.png)

授权成功后自动跳转到之前设置的回调地址，并且会带上授权码

**回调地址和授权码**

![image-20200305105509668](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200305105509668.png)



## 通过授权码向服务器申请令牌

**postman测试**

![image-20200305105709003](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200305105709003.png)



