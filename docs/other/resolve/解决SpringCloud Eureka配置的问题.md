---
date: 2020-02-27
categories: 
 - 问题解决
tags: 
 - 问题解决
---
# 解决Spring Cloud Eureka配置的问题

## 问题

控制台出现错误

Request execution error. endpoint=DefaultEndpoint{ serviceUrl='http://localhost:8761/eureka/}

## 原因

未知



## 解决

将yml配置文件中的default-zone改成defaultZone

```yml
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```
