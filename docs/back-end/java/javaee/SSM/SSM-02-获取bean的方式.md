# SSM - 02 - 获取bean的方式

### 1. 通过id获取bean

```java
//通过id获取bean
@Test
public void testIoC1(){
    Object person = applicationContext.getBean("person");
    System.out.println(person);
}
```

![image-20200411114608501](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411114608501.png)



### 2. 通过类型获取bean

```java
//通过类型获取bean
@Test
public void testIoC2(){
    Person person = applicationContext.getBean(Person.class);
    person.say();
}
```

> 通过类型获取bean，在xml文件中**只能配置一个该类型的bean**，否则会报错

```java
No qualifying bean of type 'top.alanlee.study.spring.ioc.bean.Person' available: expected single matching bean but found 2: person,person1
```

![image-20200411115140923](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411115140923.png)