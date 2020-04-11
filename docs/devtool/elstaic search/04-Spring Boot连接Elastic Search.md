# Spring Boot连接Elastic Search

## 版本要求

**Spring Data Elasticsearch**与**Elasticsearch**与**Spring Boot**版版本要求如下，必须一一对应，否则启动不了

![image-20200315211754961](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200315211754961.png)

## 搭建工程

我这里使用的是

|                               | 版本              |
| ----------------------------- | ----------------- |
| **Spring Data Elasticsearch** | **3.1.6.RELEASE** |
| **Elasticsearch**             | **6.2.2**         |
| **Spring Boot**               | **2.1.9.RELEASE** |

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.9.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>top.alanlee.hello</groupId>
    <artifactId>test-elasticsearch</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>test-elasticsearch</name>
    <description>Demo project for Spring Boot</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-elasticsearch -->
        <dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-elasticsearch</artifactId>
            <version>3.1.6.RELEASE</version>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```



配置文件：application.yml

```yml
server:
  port: 8080
spring:
  data:
    elasticsearch:
      cluster-nodes: 192.168.12.113:9300	# java连接es的端口是9300,9200是http连接的端口
      cluster-name: docker-cluster
```



启动类：ElasticSearchApplication.java

```java
package top.alanlee.test.elasticsearch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ElasticSearchApplication {
    public static void main(String[] args) {
        SpringApplication.run(ElasticSearchApplication.class, args);
    }
}

```



dao层：UserDao.java

```java
package top.alanlee.test.elasticsearch.dao;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import top.alanlee.test.elasticsearch.entity.User;

public interface UserDao extends ElasticsearchRepository<User, Integer> {

}

```



因为这里只是学习、测试，所以省略service层

```java
// service层 略
```



controller层：UserController.java

```java
package top.alanlee.test.elasticsearch.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.alanlee.test.elasticsearch.dao.UserDao;
import top.alanlee.test.elasticsearch.entity.User;

@RestController
public class UserController {
    @Autowired
    UserDao userDao;

    //增
    @PostMapping("/addUser")
    public String addUser(String username, String password, Integer age) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        user.setAge(age);
        return String.valueOf(userDao.save(user).getId());// 返回id做验证
    }

    //删
    @DeleteMapping("/deleteUser")
    public String deleteUser(Integer id) {
        userDao.deleteById(id);
        return "Success!";
    }

    //改
    @PutMapping("/updateUser")
    public String updateUser(Integer id, String username, String password, Integer age) {
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setPassword(password);
        user.setAge(age);
        return String.valueOf(userDao.save(user).getId());// 返回id做验证
    }

    //查
    @GetMapping("/getUser")
    public User getUser(Integer id) {
        return userDao.findById(id).get();
    }

    //查 所有
    @GetMapping("/getAllUsers")
    public Iterable<User> getAllUsers() {
        return userDao.findAll();
    }
}

```



