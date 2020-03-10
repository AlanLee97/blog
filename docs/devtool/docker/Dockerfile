```sh
# 指定基础镜像

FROM openjdk:8-jdk-alpine



# 重命名

ADD *.jar app.jar

# 对外暴露端口号

EXPOSE 8080

# 运行

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
```

