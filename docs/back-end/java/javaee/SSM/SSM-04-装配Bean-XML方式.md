# SSM - 04 - 装配Bean - XML方式



## 1. 装配普通值

```xml
<bean id="person" class="top.alanlee.study.spring.ioc.bean.Person">
    <property name="name" value="Alan" />
    <property name="age" value="18" />
    <property name="gender" value="男" />
</bean>
```



## 2. 装配集合

编写一个java类

ComplexAssembly.java

```java
/**
 * 装配集合等复杂的属性
 */
public class ComplexAssembly {
    private List<String> list;
    private Map<String, String> map;
    private Properties properties;
    private Set<String> set;
    private String[] array;

	//省略getter setter
}
```



xml配置

```xml
<!-- ====== 装配集合 ====== -->
<bean id="complexAssembly" class="top.alanlee.study.spring.ioc.bean.ComplexAssembly">
    <!-- 装配List -->
    <property name="list">
        <list>
            <value>list-1</value>
            <value>list-2</value>
        </list>
    </property>

    <!-- 装配Map -->
    <property name="map">
        <map>
            <entry key="key1" value="map-1" />
            <entry key="key2" value="map-2" />
        </map>
    </property>

    <!-- 装配Set -->
    <property name="set">
        <set>
            <value>set-1</value>
            <value>set-2</value>
        </set>
    </property>

    <!-- 装配Properties -->
    <property name="properties">
        <props>
            <prop key="prop1">prop-1</prop>
            <prop key="prop2">prop-2</prop>
        </props>
    </property>

    <!-- 装配Array -->
    <property name="array">
        <array>
            <value>array-1</value>
            <value>array-2</value>
        </array>
    </property>

</bean>

```



测试

```java
//装配集合类
@Test
public void testIoC3(){
    Object complexAssembly = applicationContext.getBean("complexAssembly");
    System.out.println(complexAssembly);
}
```



输出结果

```java
ComplexAssembly{list=[list-1, list-2], map={key1=map-1, key2=map-2}, properties={prop2=prop-2, prop1=prop-1}, set=[set-1, set-2], array=[array-1, array-2]}
```





## 3. 通过命名空间装配


### 引入命名空间
xmlns:c="http://www.springframework.org/schema/c"
xmlns:p="http://www.springframework.org/schema/p"

![image-20200411122610456](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411122610456.png)



### 命名空间装配：构造方法

c_n:代表构造方法，n为数字，0为第一个参数，以此类推

```xml
<!-- ====== 命名空间装配：构造方法 ====== -->
<!-- c_n:代表构造方法，n为数字，0为第一个参数，以此类推-->
<bean id="person3" class="top.alanlee.study.spring.ioc.bean.Person"
      c:_0="AlanLee-3" c:_1="23" c:_2="男" />
```





### 命名空间装配：装配属性

p:代表属性

```xml
<!-- ====== 命名空间装配：装配属性 ====== -->
<!-- p:代表属性-->
<bean id="person4" class="top.alanlee.study.spring.ioc.bean.Person"
      p:name="AlanLee-4" p:age="23" p:gender="男" />
```



### 测试

测试方法

```java
//命令空间装配
@Test
public void testIoC4(){
    //命令空间装配：构造方法
    Object person3 = applicationContext.getBean("person3");
    System.out.println("命令空间装配：构造方法" + person3);

    System.out.println("---------------------");

    //命令空间装配：属性
    Object person4 = applicationContext.getBean("person4");
    System.out.println("命令空间装配：属性" + person4);
}
```





结果

```java
命令空间装配：构造方法Person{name='AlanLee-3', age=23, gender='男'}
---------------------
命令空间装配：属性Person{name='AlanLee-4', age=23, gender='男'}
```

