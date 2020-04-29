# 整合Mybatis时出现的错误

## 问题1

```
Property 'dataSource' threw exception; nested exception is java.lang.NoClassDefFoundError
```

引入spring-jdbc的依赖即可



## 问题2

```
org.springframework.web.context.ContextLoader.initWebApplicationContext Context initialization failed
 org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'sqlSessionFactory' defined in class path resource [applicationContext.xml]: Invocation of init method failed; nested exception is java.io.FileNotFoundException: Could not open ServletContext resource [/mybatis-config.xml]
```

在pom.xml的build节点下添加

```xml
<resources>
    <resource>
        <directory>
            src/main/java
        </directory>
        <includes>
            <include>**/*.xml</include>
        </includes>
    </resource>

    <resource>
        <directory>src/main/resources</directory>
    </resource>
</resources>
```



## 问题3

```
Failed to parse config resource: class path resource [mybatis-config.xml]
```

