(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{418:function(e,s,n){"use strict";n.r(s);var t=n(0),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"redis-sentinel-集群部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel-集群部署"}},[e._v("#")]),e._v(" Redis Sentinel 集群部署")]),e._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),n("p",[e._v("Redis 集群可以在一组 redis 节点之间实现高可用性和 sharding。在集群中会有 1 个 master 和多个 slave 节点。当 master 节点失效时，应选举出一个 slave 节点作为新的 master。然而 Redis 本身(包括它的很多客户端)没有实现自动故障发现并进行主备切换的能力，需要外部的监控方案来实现自动故障恢复。")]),e._v(" "),n("p",[e._v("Redis Sentinel 是官方推荐的高可用性解决方案。它是 Redis 集群的监控管理工具，可以提供节点监控、通知、自动故障恢复和客户端配置发现服务。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200225222357-735290.jpeg",alt:"img"}})]),e._v(" "),n("h2",{attrs:{id:"搭建-redis-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建-redis-集群"}},[e._v("#")]),e._v(" 搭建 Redis 集群")]),e._v(" "),n("p",[e._v("搭建一主两从环境，docker-compose.yml 配置如下：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.1'")]),e._v("\nservices:\n  master:\n    image: redis:4.0.11\n    container_name: redis-master\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(":6379\n    command: redis-server --requirepass 密码\n\n  slave1:\n    image: redis:4.0.11\n    container_name: redis-slave-1\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6380")]),e._v(":6379\n    command: redis-server --slaveof redis-master "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" --requirepass 密码 --masterauth 密码\n\n  slave2:\n    image: redis:4.0.11\n    container_name: redis-slave-2\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6381")]),e._v(":6379\n    command: redis-server --slaveof redis-master "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" --requirepass 密码 --masterauth 密码\n\n")])])]),n("h2",{attrs:{id:"搭建-sentinel-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搭建-sentinel-集群"}},[e._v("#")]),e._v(" 搭建 Sentinel 集群")]),e._v(" "),n("p",[e._v("我们至少需要创建三个 Sentinel 服务，docker-compose.yml 配置如下：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("version: "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'3.1'")]),e._v("\nservices:\n  sentinel1:\n    image: redis\n    container_name: redis-sentinel-1\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("26379")]),e._v(":26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel1.conf:/usr/local/etc/redis/sentinel.conf\n\n  sentinel2:\n    image: redis\n    container_name: redis-sentinel-2\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("26380")]),e._v(":26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel2.conf:/usr/local/etc/redis/sentinel.conf\n\n  sentinel3:\n    image: redis\n    container_name: redis-sentinel-3\n    ports:\n      - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("26381")]),e._v(":26379\n    command: redis-sentinel /usr/local/etc/redis/sentinel.conf\n    volumes:\n      - ./sentinel3.conf:/usr/local/etc/redis/sentinel.conf\n")])])]),n("h3",{attrs:{id:"修改-sentinel-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-sentinel-配置文件"}},[e._v("#")]),e._v(" 修改 Sentinel 配置文件")]),e._v(" "),n("p",[e._v("需要三份 sentinel.conf 配置文件，分别为 "),n("code",[e._v("sentinel1.conf")]),e._v("，"),n("code",[e._v("sentinel2.conf")]),e._v("，"),n("code",[e._v("sentinel3.conf")]),e._v("，配置文件内容相同")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("port "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("26379")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v(" /tmp\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 自定义集群名，其中 127.0.0.1 为 redis-master 的 ip，6379 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）")]),e._v("\nsentinel monitor mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nsentinel down-after-milliseconds mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("30000")]),e._v("\nsentinel parallel-syncs mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsentinel failover-timeout mymaster "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("180000")]),e._v("\nsentinel deny-scripts-reconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("yes")]),e._v("\nsentinel auth-pass mymaster 密码\n")])])]),n("h3",{attrs:{id:"查看集群是否生效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看集群是否生效"}},[e._v("#")]),e._v(" 查看集群是否生效")]),e._v(" "),n("p",[e._v("进入 Sentinel 容器，使用 Sentinel API 查看监控情况：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis-sentinel-1 /bin/bash\nredis-cli -p "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("26379")]),e._v("\nsentinel master mymaster\nsentinel slaves mymaster\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);