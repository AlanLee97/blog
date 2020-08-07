# 基于微服务架构的UI设计师与开发者合作平台

——UI设计师与软件开发者合作平台，让UI作品落地的地方

> 17软件工程 李步官
>
> 毕业设计选题（初选）



## 项目背景

UI中国网站（ui.cn）和站酷网站（zcool.cn）上有许多UI设计者们发布精美的作品，我作为软件开发方向的学生，我从我自己的角度出发，首先的我精力不是花在UI的设计上，更多的精力是花在业务的实现和软件UI的实现上。而我平时在逛UI中国的时候，我想的是，我能不能直接直接使用这些UI作品去实现一个软件呢？在不侵权的情况下，可以用来学习和练习自己的技术，这样UI设计者可以知道自己的作品受欢迎的程度，软件开发者也可以获得练习技术的机会。如果设计者与开发者的合作的作品有商业价值，或许还可以相互合作创业。



## 功能点

- UI设计师发布UI作品
- 软件开发者寻找UI作品
- 作品模块
    - 点赞、收藏、评论、分享
    - 详情
    - 版权申明
    - 作品实现：征集开发者实现、开发者主动申请实现
    - 实现量统计
- 用户模块

    - 身份：UI设计师 / 软件开发者 / 游客
- 实名认证
    - 点赞、收藏、关注、粉丝、作品、积分
    - 个人资料
    - 个人作品采用量（设计师）、个人软件完成量（开发者）
- 推荐：作品推荐、设计师推荐、开发者推荐
- 聊天（消息）
- 短信通知、邮件通知
- 积分商城
    - 兑换专区
    - 秒杀专区
- 发布
    - UI作品
    - icon
    - 海报
    - 插画
    - 壁纸
- 简历展示

![APP](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/APP-1596264388332.png)



## 技术选型

### 后端

|               技术               |         名称          |
| :------------------------------: | :-------------------: |
|           Spring Boot            |  微服务应用基础框架   |
|   Spring Cloud 或 Apache Dubbo   |    微服务集成框架     |
|       Spring Cloud Config        |    分布式配置中心     |
| Spring Cloud Eureka 或 Zookeeper |    服务注册与发现     |
|              Zipkin              |       链路追踪        |
|               Zuul               |        API网关        |
|        Spring Boot Admin         |       服务监控        |
|              Maven               |     项目构建管理      |
|              Nexus3              |       Maven私服       |
|      阿里云云效 或 Jenkins       | 持续集成CI/持续部署CD |
|         Github 或 Gitee          |       代码仓库        |
|    阿里云云数据库RDS MySQL5.7    |        数据库         |
|              Druid               |     数据库连接池      |
|             MyBatis              |        ORM框架        |
|            PageHelper            |       分页插件        |
|          Redis Sentinel          |       哨兵集群        |
|            阿里云OSS             |      云对象存储       |
|             Swagger2             |    API文档生成工具    |
|           RESTful API            |    RESTful风格API     |
|              Nginx               |      代理服务器       |
|              Docker              |       应用容器        |
|            Kubernetes            |       应用容器        |
|          阿里云镜像仓库          |    阿里云镜像仓库     |
|         OAuth2 或 Shiro          |     身份/权限认证     |
|              Quartz              |    分布式任务调度     |
|          Elastic Search          |    分布式全文搜索     |
|  RabbitMQ 或 RocketMQ 或 Kafka   |       消息队列        |
|             短信通知             |                       |
|             邮件发送             |                       |

### 前端

|                技术                |           名称            |
| :--------------------------------: | :-----------------------: |
|                HTML                |      超文本标记语言       |
|                CSS                 |        层叠样式表         |
|             JavaScript             |       网页脚本语言        |
|          Vue.js 或 React           |         前端框架          |
|             VueRouter              |         前端路由          |
|                Vuex                |   状态管理（数据存储）    |
|             Element-UI             |       前端样式框架        |
|               Axios                |         网络请求          |
|         vue-waterfall-easy         |        瀑布流组件         |
|             vue2-admin             | 基于vue的后台管理前端框架 |
|              echarts               |         图表框架          |
| Flutter 或 React Native 或 uni-app |     移动端跨平台框架      |



## 备选名称

- UUID（有UI，有Designer，有Devloper）
- DND（Designer and Devloper）
- DVD（Designer with Devloper）
- 橙色星球（程序、设计星球）