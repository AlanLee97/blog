# Spring MVC 返回json数据

正常情况下是添加jackson的依赖，然后在controller中需要返回json的方法上加上@ResponseBody就可以返回json数据的。但是我这边测试始终不行。

## 尝试的解决方法1

在`dispatcher-servlet.xml`中添加如下代码

```xml
<mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
        <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"
              p:supportedMediaTypes="*/*" />
    </mvc:message-converters>
</mvc:annotation-driven>
```

结果出现如下错误

```java
[http-nio-8081-exec-6] org.springframework.context.support.AbstractApplicationContext.refresh Exception encountered during context initialization - cancelling refresh attempt: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'mappingJacksonHttpMessageConverter': Lookup method resolution failed; nested exception is java.lang.IllegalStateException: Failed to introspect Class [org.springframework.http.converter.json.MappingJackson2HttpMessageConverter] from ClassLoader [ParallelWebappClassLoader
  context: pam
  delegate: false
----------> Parent Classloader:
java.net.URLClassLoader@515f550a
]
```

出现`Error creating bean with name`的意思是无法创建该bean，我在网上查找了下出现这个问题的原因，都说是因为缺少了jackson的依赖，但是我的确在pom.xml文件中添加了jackson的依赖了。还是出现这个问题。

![image-20200413092722871](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200413092722871.png)

> 该问题待解决



## 找到的解决方法

在mvc的xml配置文件中添加如下配置

```xml
<!-- Start: 配置json消息转换器 & 参数解析-->
<bean id="objectMapper" class="com.fasterxml.jackson.databind.ObjectMapper">
    <property name="dateFormat">
        <bean class="java.text.SimpleDateFormat">
            <constructor-arg index="0" type="java.lang.String" value="yyyy-MM-dd HH:mm:ss"/>
        </bean>
    </property>
</bean>
<mvc:annotation-driven>
    <mvc:message-converters register-defaults="true">
        <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
            <property name="supportedMediaTypes">
                <list>
                    <value>application/json; charset=UTF-8</value>
                </list>
            </property>
            <property name="prettyPrint" value="true"/>
            <property name="objectMapper" ref="objectMapper"/>
        </bean>
    </mvc:message-converters>
</mvc:annotation-driven>
<!-- End: 配置json消息转换器 & 参数解析 -->
```

