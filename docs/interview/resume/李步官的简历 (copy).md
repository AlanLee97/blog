<center><h1 style="border-bottom: none">个人简历</h1></center>
## 个人信息

姓名  李步官  														学校  中山大学新华学院 <img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/assert/ziliao/zhengjianzhao-libuguan.jpg" alt="libuguan" style="width: 80px; float: right" />

性别  男																学历  本科 

生日  1997.04     										 		专业  软件工程 

联系方式  手机 / 微信 15622282904 		 		证书  软件设计师、英语四级 

电子邮箱  1445654576@qq.com 



## 自我描述

<p style="line-height: 2.0rem;">本人2021届本科在校生，热爱编程，对各种新鲜的技术感兴趣，对前后端，移动端流行的技术都有所涉猎。后端语言擅长Java，了解PHP、Python。后端熟悉SpringMVC、Spring、MyBatis、Spring Boot、Spring Cloud等框架、了解 SSH框架；前端熟悉HTML、CSS、Javascript、Vue框架+ElementUI和uni-app、了解React。移动端熟悉uni-app、了解Android、微信小程序和Flutter。目前有独立完成过 Android APP和前后端分离的Web网站开发的经验。平时学习经常会做Markdown笔记，记录学习过程与编程中遇到的问题，并将笔记发布到CSDN博客和个人博客；平时做的项目也会推送到 GitHub和码云。</p>

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/assert/images/icon/csdn.png" style="width: 25px;">  CSDN 博客  https://blog.csdn.net/qq1445654576

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/assert/images/icon/pencil-ruler.png" style="width: 25px;">  个人博客  http://blog.alanlee.top/

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/assert/images/icon/github.png" style="width: 25px;">  GitHub  https://github.com/AlanLee97

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/assert/images/icon/gitee-fill-round.png" style="width: 25px;">  Gitee  https://gitee.com/AlanLee97





## 技术桟

**后端**  熟悉Spring、SpringMVC、MyBatis、Spring Boot、Spring Cloud 微服务；了解SSH；了解JVM和多线程

**前端**  熟悉HTML、CSS、Javascript、Vue.js、Bootstrap、ElementUI、AJAX；了解React

**移动端**  熟悉uni-app、了解Android、Flutter和微信小程序

**数据库** 熟悉MySQL、Redis

**操作系统**  熟悉Linux(CentOS 7)常用命令

**其他**  熟悉Docker、Git基本操作；了解常见的数据结构；了解RabbitMQ；了解Nginx；了解TCP/IP协议

 



## 项目经历

#### 熊猫约拍

**简介：**熊猫约拍，一个模特、摄影师预约拍照的摄影约拍平台，让顾客和模特、摄影师可以直接发布需求或接单，让模特和摄影师可以有更加优质的预约拍照体验。同时，用户还可以在熊猫约拍网站分享自己的作品、寻找拍照打卡地点、寻找摄影师或模特；网站还有个人预约时间排期和邮件提醒等功能。

熊猫约拍的后台采用微服务架构，使用SpringBoot + Spring Cloud各微服务组件的技术，以Eureka作为服务注册中心，使用Spring Cloud Config作为配置中心，使用Hystrix做服务容错处理，使用Feign做声明式服务调用，使用Zuul做API网关等等。关于中间件，项目中也使用到了RabbitMQ和Redis，Redis是用来做单点登录的认证中心和做缓存数据，RabbitMQ是用在用户预约其他用户的约拍时，发送一个消息到消息队列服务器，消费者监听到这个消息，就执行使用Quartz框架实现的定时任务，在约拍时间前2个小时发送邮件和短信提醒用户。在服务器部署上，采用应用容器引擎Kubernetes和Docker部署项目。为提高开发效率，使用了阿里云云效流水线技术实现持续集成、持续部署，只要提交代码就可以触发流水线，实现自动部署项目。对于客户端的实现，网站使用 Vue.js + ElementUI + Axios来开发，移动端使用跨平台框架uni-app来开发，一次开发，可以打包成小程序和APP。

熊猫约拍搭建了多个客户端、分别有网站、安卓APP、微信公众号、微信小程序，多客户端为用户带来更多的选择，用户根据自己喜好选择一个客户端即可体验预约拍照。

**成就：**获2019年 第七届“发现杯”全国大学生“互联网+”软件设计大奖赛 华南赛区 二等奖

**负责内容：**前端、后端、uni-app移动端的开发

**项目地址：**https://gitee.com/Panda_Appointment



#### 作业题共享提醒 APP

**简介：**参加 2019 东莞市移动互联网应用程序设计大赛的作品。作业题共享提醒 APP是一个作业提醒的Android APP。功能包括记录作业、作业共享、定时提醒完成作业、番茄时钟、短信验证、获取当前天气信息等功能。后端采用ThinkPHP框架，数据库使用MySQL，短信验证的是使用Bmob后端云的SDK来实现。

**成就：**获2019 东莞市移动互联网应用程序设计大赛 三等奖

**负责内容：**前端、后端、Android移动端的开发

**项目地址：**https://github.com/AlanLee97/HomeworkReminder



## 获奖经历

**2019.11 获**																			**2019.10 获**

工业互联网机理模型微服务大赛										东莞市移动互联网应用程序设计比赛

一等奖																				三等奖



**2019.9 获**																			 **2018.9 获**

2018-2019学年 国家励志奖学金										2017-2018学年 学校三等奖学金

2018-2019学年 学校一等奖学金

2018-2019学年 三好学生