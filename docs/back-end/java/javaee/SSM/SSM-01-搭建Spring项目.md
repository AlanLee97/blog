# SSM - 01 - 搭建Spring项目

## 创建Maven项目

**1. 添加Spring依赖**

在pom.xml文件中添加如下依赖

```xml
<!-- ====== Spring 依赖 ====== -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.1.5.RELEASE</version>
</dependency>

<!-- ====== Junit 依赖 ====== -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>compile</scope>
</dependency>
```

spring-context包含了spring的核心依赖包，如图

![image-20200411110808536](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411110808536.png)

**2. 创建目录结构**

![image-20200411111206603](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411111206603.png)

**3. 编写java类**

Person.java

```java
package top.alanlee.study.spring.ioc.bean;

public class Person {
    String name;
    int age;
    String gender;

    public void say(){
        System.out.println("Hello, 我是" + name);
    }

    public void say(String name){
        System.out.println("Hello, 我是" + name);
    }

    public Person(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public Person() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                '}';
    }
}

```



Main.java

```java
package top.alanlee.study.spring.ioc.bean;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        //加载配置文件
        ApplicationContext applicationContext =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        //获取bean
        Person person = applicationContext.getBean(Person.class);
        person.say();
        person.say("AlanLee");
    }
}

```



**4. 编写spring配置文件**

applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="person" class="top.alanlee.study.spring.ioc.bean.Person">
        <property name="name" value="Alan" />
        <property name="age" value="18" />
        <property name="gender" value="男" />
    </bean>

</beans>
```

applicationContext.xml的文件名可随意取，但是一般是这个名字。



**5. 运行Main类的main方法**

输出结果

```java
Hello, 我是Alan
Hello, 我是AlanLee
```

