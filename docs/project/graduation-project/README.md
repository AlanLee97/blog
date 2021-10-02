#  UUID —— 基于微服务架构的UI设计师与开发者合作平台

> 中山大学新华学院 17级软件工程 李步官
>
> 毕业设计选题
>
> 项目地址1：https://github.com/U-UI-D
>
> 项目地址2：https://gitee.com/U-UI-D
>
> 项目正在开发中



## 开源项目地址

web前端（React）：https://gitee.com/U-UI-D/react-uuid-frontend

移动端（React Native）：https://gitee.com/U-UI-D/uuid_react_native_app



## 项目背景

UI中国网站（ui.cn）和站酷网站（zcool.cn）上有许多UI设计者们发布精美的作品，我作为软件开发方向的学生，我从我自己的角度出发，首先的我精力不是花在UI的设计上，更多的精力是花在业务的实现和软件UI的实现上。而我平时在逛UI中国的时候，我想的是，我能不能直接直接使用这些UI作品去实现一个软件呢？在不侵权的情况下，可以用来学习和练习自己的技术，这样UI设计者可以知道自己的作品受欢迎的程度，软件开发者也可以获得练习技术的机会。如果设计者与开发者的合作的作品有商业价值，或许还可以相互合作创业。

取这个项目的标题我也想了很长一段时间，最终选定为**UUID**。UUID本来是Java中一个通用字符串（UUID）类的类名，我把本项目的名称取名为UUID，一是因为包含单词**`UI`**和字母**`D`**，单词UI即我们熟悉的用户界面的意思，字母D则表示Designer和Developer，即设计师和开发者，比较符合本项目的开发目的。

——这里有（**U**）

——**UI**，

——**D**esigner，**D**eveloper

——UI设计师与软件开发者合作平台，让UI作品落地的地方

## 功能点

![UUID](https://gitee.com/AlanLee97/assert/raw/master/note_images/UUID.png)

## 技术选型

### 后端

> 预选这些技术，实际开发可能会有所变动

| 技术                          | 名称                  |
| ----------------------------- | --------------------- |
| Spring Boot                   | 微服务应用基础框架    |
| Spring Cloud                  | 微服务集成框架        |
| Spring Cloud Config           | 分布式配置中心        |
| Spring Cloud Eureka           | 服务注册与发现        |
| Zipkin                        | 链路追踪              |
| Zuul                          | API网关               |
| Spring Boot Admin             | 服务监控              |
| Maven                         | 项目构建管理          |
| Nexus3                        | Maven私服             |
| 阿里云云效 或 Jenkins         | 持续集成CI/持续部署CD |
| Github、Gitee                 | 代码仓库              |
| 阿里云云数据库RDS MySQL5.7    | 数据库                |
| Druid                         | 数据库连接池          |
| MyBatis                       | ORM框架               |
| PageHelper                    | 分页插件              |
| Redis Sentinel                | 哨兵集群              |
| 阿里云OSS                     | 云对象存储            |
| Swagger2                      | API文档生成工具       |
| RESTful API                   | RESTful风格API        |
| Nginx                         | 代理服务器            |
| Docker                        | 应用容器              |
| Kubernetes                    | 应用容器              |
| 阿里云镜像仓库                | 阿里云镜像仓库        |
| OAuth2 或 Shiro               | 身份/权限认证         |
| Quartz                        | 分布式任务调度        |
| Elastic Search                | 分布式全文搜索        |
| RabbitMQ 或 RocketMQ 或 Kafka | 消息队列              |
| 短信通知                      |                       |
| 邮件发送                      |                       |

### 前端

> 预选这些技术，实际开发可能会有所变动

| 技术         | 名称                 |
| ------------ | -------------------- |
| HTML         | 超文本标记语言       |
| CSS          | 层叠样式表           |
| JavaScript   | 网页脚本语言         |
| React        | 前端框架             |
| ReactRouter  | 前端路由             |
| Redux        | 状态管理（数据存储） |
| Ant Design   | 前端样式框架         |
| Axios        | 网络请求             |
| echarts      | 图表框架             |
| React Native | 移动端跨平台框架     |

## 项目仓库

> 服务端的项目正在开发中，暂不开源
>
> React前端项目也在开发中，可以先开放



| 名称                                     | 描述                              | 链接                                                         | 公开                                                         |
| ---------------------------------------- | --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| react-uuid-frontend                      | React前端项目                     | https://github.com/U-UI-D/react-uuid-frontend                | ![:o:](https://gitee.com/assets/emoji/o-ceeb7cc805471138507c063327e35636.png) |
| uuid-public-files                        | 公开文件                          | https://github.com/U-UI-D/uuid-public-files                  | ![:o:](https://gitee.com/assets/emoji/o-ceeb7cc805471138507c063327e35636.png) |
| uuid-config-repo                         | 分布式配置中心-存放配置文件的仓库 | https://github.com/U-UI-D/uuid-config-repo                   | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-dependencies                        | 统一的依赖管理                    | https://github.com/U-UI-D/uuid-dependencies                  | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-domain                              | 统一的领域模型（实体类）          | https://github.com/U-UI-D/uuid-domain                        | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-config                              | 分布式配置中心                    | https://github.com/U-UI-D/uuid-config                        | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-eureka                              | 分布式服务注册与发现              | https://github.com/U-UI-D/uuid-eureka                        | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-zipkin                              | 分布式链路追踪                    | https://github.com/U-UI-D/uuid-zipkin                        | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-gateway                             | 分布式网关                        | https://github.com/U-UI-D/uuid-gateway                       | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-common                              | 通用项目模块                      | https://github.com/U-UI-D/uuid-common                        | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-dependencies-spring-cloud-component | 微服务通用组件依赖                | https://github.com/U-UI-D/uuid-dependencies-spring-cloud-component | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-service-common                      | 通用的服务提供者                  | https://github.com/U-UI-D/uuid-service-common                | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-service-user                        | 服务提供者-用户                   | https://github.com/U-UI-D/uuid-service-user                  | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| uuid-service-work                        | 作品服务提供者                    | https://github.com/U-UI-D/uuid-service-work                  | ![:x:](https://gitee.com/assets/emoji/x-c7f8694f70e339c194324671e39080c2.png) |
| 待添加。。。                             |                                   |                                                              |                                                              |



## 开发进度

| 序号 | 模块         | 进度 | 备注 |
| ---- | ------------ | ---- | ---- |
| 1    | 用户模块     | 60%  |      |
| 2    | 作品模块     | 60%  |      |
| 3    | 轮播图模块   | 80%  |      |
| 4    | 评论模块     | 98%  |      |
| 5    | 素材模块     | 20%  |      |
| 6    | 排行榜模块   | 10%  |      |
| 7    | 积分商城模块 | 10%  |      |
| 8    | 消息模块     | 10%  |      |
| 9    | 上传模块     | 100% |      |
| 10   | 搜索模块     | 0%   |      |

