---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# docker-compose.yml模板

```yml
version: '3.1'
services:
  panda-config:
    image: registry.cn-shenzhen.aliyuncs.com/alanlee_java/docker-demo:1.0.0
    container_name: panda-config
    ports:
     - 8888:8888
    
```

