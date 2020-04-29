# 搭建Spring Boot Admin时依赖冲突问题

## 问题

依赖冲突

```
***************************
APPLICATION FAILED TO START
***************************

Description:

An attempt was made to call a method that does not exist. The attempt was made from the following location:

    de.codecentric.boot.admin.server.web.servlet.AdminControllerHandlerMapping.registerHandlerMethod(AdminControllerHandlerMapping.java:46)

The following method did not exist:

    org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping.registerHandlerMethod(Ljava/lang/Object;Ljava/lang/reflect/Method;Lorg/springframework/web/servlet/mvc/method/RequestMappingInfo;)V

The method's class, org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping, is available from the following locations:

    jar:file:/F:/software/dev/maven_repo/org/springframework/spring-webmvc/5.1.10.RELEASE/spring-webmvc-5.1.10.RELEASE.jar!/org/springframework/web/servlet/mvc/method/annotation/RequestMappingHandlerMapping.class

It was loaded from the following location:

    file:/F:/software/dev/maven_repo/org/springframework/spring-webmvc/5.1.10.RELEASE/spring-webmvc-5.1.10.RELEASE.jar


Action:

Correct the classpath of your application so that it contains a single, compatible version of org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping
```



## 原因

jar包重复





## 解决

单独加入依赖