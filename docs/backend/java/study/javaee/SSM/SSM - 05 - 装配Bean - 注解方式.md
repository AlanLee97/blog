# SSM - 05 - 装配Bean - 注解方式

## 使用注解前的准备

### 编写实体类

User.java

```java
package top.alanlee.study.spring.ioc.bean;

public class User {
    private int id;
    private String username;
    private String password;

    public User(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

```



### 开启注解的方式

#### 在xml文件中启用注解方式

```xml
<!-- ====== 开启注解方式装配Bean ====== -->
<context:component-scan base-package="top.alanlee.study.spring.ioc" />
```

base-package指定扫描哪个包

> `top.alanlee.study.spring.ioc` 表示扫描本包
>
> `top.alanlee.study.spring.ioc.*` 表示扫描本包下的子包
>
> `top.alanlee.study.spring.ioc.**` 表示扫描本包以及本包下的子包



#### 使用java配置开启注解

在要扫描的包下创建一个java配置类，加上@ComponentScan注解即可，无需编写逻辑。此时Spring可以扫描到本包中的Bean。

ComponentScanConfig.java

```java
package top.alanlee.study.spring.ioc.bean;

import org.springframework.context.annotation.ComponentScan;

@ComponentScan
public class ComponentScanConfig {
}

```

![image-20200411131736396](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411131736396.png)



## 1. 使用@Component方式装配Bean

#### 装配Bean

- 在类名上面添加@Component注解，将该类注册到Spring容器中，默认bean的id为类名首字母小写

- 在属性上添加@Value注解，通过该注解给属性赋值

```java
@Component
public class User {
    @Value("1")
    private int id;
    @Value("AlanLee")
    private String username;
    @Value("123456")
    private String password;
 
    //省略getter setter
}
```

#### 测试

测试代码

```java
//基于注解的方式装配Bean
@Test
public void testIoC5(){
    Object user = applicationContext.getBean("user");
    System.out.println(user);
}
```

结果

```java
User{id=1, username='AlanLee', password='123456'}
```



#### 给bean指定名称

在@Component注解后面加上名称即可。

```java
@Component("alan")
public class User {
    @Value("1")
    private int id;
    @Value("AlanLee")
    private String username;
    @Value("123456")
    private String password;
 
    //省略getter setter
}
```

#### 测试

测试代码

```java
//基于注解的方式装配Bean
@Test
public void testIoC5(){
    Object user = applicationContext.getBean("alan");
    System.out.println(user);
}
```

结果

```java
User{id=1, username='AlanLee', password='123456'}
```



> #### 使用java配置类的方式
>
> 这里创建IoC容器时，使用AnnotationConfigApplicationContext方式，参数为java配置类的字节码文件
>
> 测试代码
>
> ```java
> //基于注解的方式装配Bean - java类配置
> @Test
> public void testIoC6(){
>     ApplicationContext applicationContext =
>         new AnnotationConfigApplicationContext(ComponentScanConfig.class);
>     Object user = applicationContext.getBean("user");
>     System.out.println(user);
> 
> }
> ```
>
> 结果
>
> ```java
> User{id=1, username='AlanLee', password='123456'}
> ```



### 其他注解

除了@Component注解，之外还有其他注解，如Web开发中的常用注解

- @Controller 表示这是控制器层
- @Service 表示这是业务层
- @Repository 表示这是数据访问层

这3个注解与@Component注解效果一样，只是在名字上区分，让程序员一眼就能看出来这是哪一层



## 2. 使用@Autowired自动装配Bean

@Autowired注解是用在属性上的，比如我要在Controller层中注入Service类，在Service类中注入Dao类，就可以使用@Autowired注解。@Autowired注解可以让Spring去扫描该类的每一个属性。

#### 创建3个java类

分别创建Controller、Service、Dao三层的类

UserController.java

```java
@Controller
public class UserController {
    @Autowired
    private UserService userService;

    public void save(){
        userService.save();
    }
}
```



UserService.java

```java
@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public void save(){
        userDao.save();
    }
}
```



UserDao.java

```java
@Repository
public class UserDao {
    public void save(){
        System.out.println("UserDao 保存数据到数据库");
    }
}
```

#### 测试

测试代码

```java
//使用Autowired注解自动装配Bean
@Test
public void testIoC7(){
    UserController userController = applicationContext.getBean(UserController.class);
    userController.save();
}
```



运行结果

```java
UserDao 保存数据到数据库
```





![image-20200411141344361](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200411141348-669694.png)

#### 其他

@Autowired注解也可以用在参数上，如

```java
void func(@Autowired UserService userService){

}
```



## 3. @Autowired注解引发的问题

在实际项目中，我们通常会把Service层的代码写成接口和实现类的方式，那么，如果一个接口有多个实现类的话，@Autowired就会出现问题，因为有多个实现类，它不知道该注入哪个实现类。为了解决该问题Spring提供了@Qulifier和@Primary注解来解决这个问题。

### 出现的问题

**创建1个UserService接口，2个UserService的实现类**

UserService2.java

```java
public interface UserService2 {
    void save();
}
```

UserServiceImpl1.java

```java
@Service
public class UserServiceImpl1 implements UserService2 {
    public void save() {
        System.out.println("UserServiceImpl ----- 1");
    }
}
```

UserServiceImpl2.java

```java
@Service
public class UserServiceImpl2 implements UserService2 {
    public void save() {
        System.out.println("UserServiceImpl ----- 2");
    }
}
```

**在UserController类中使用@Autowired注入UserService2接口**

出现问题

![image-20200411143522475](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411143522475.png)



### 解决方法

#### 方法1：使用@Primary注解

在其中一个实现类中添加@Primary注解，该注解表示在有多个实现类时，优先使用本类装配Bean。

例如，我在UserServiceImpl1中加入@Primary注解

```java
@Service
@Primary
public class UserServiceImpl1 implements UserService2 {
    public void save() {
        System.out.println("UserServiceImpl ----- 1");
    }
}
```

现在，UserController中的代码不会报错了

![image-20200411144305780](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200411144305780.png)

测试代码

```java
//解决多个bean时无法使用Autowired注解的问题
@Test
public void testIoC8(){
    UserController userController = applicationContext.getBean(UserController.class);
    userController.save();
}
```

结果

```java
UserServiceImpl ----- 1
```



#### 方法2：使用@Qualifier注解

@Qualifier注解表示选择一个合格的Bean进行装配

在UserController中的@Autowired注解下面追加一个@Qualifier注解，同时指定Bean的名称，表示需要装配这个名字的Bean

```java
@Controller
public class UserController {
    @Autowired
    @Qualifier("userServiceImpl1")
    private UserService2 userService2;

    public void save(){
        userService2.save();
    }
}
```

测试代码

```java
//解决多个bean时无法使用Autowired注解的问题
@Test
public void testIoC8(){
    UserController userController = applicationContext.getBean(UserController.class);
    userController.save();
}
```

结果

```java
UserServiceImpl ----- 1
```



## 4. 使用@Bean装配Bean

@Bean注解用在方法上，比如我们有时候要用到第三方包，但没有源码，不能使用直接使用@Component注解作用到类上，所以Spring提供了@Bean注解，可以给方法添加注解，该方法返回的对象作为Spring的Bean，保存到IoC容器中。