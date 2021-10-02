# SpringBoot中使用AOP

> 参考文章：https://snailclimb.gitee.io/javaguide/#/docs/system-design/framework/spring/SpringInterviewQuestions?id=_41-谈谈自己对于-spring-ioc-和-aop-的理解
>
> 参考文章：https://blog.csdn.net/Luck_ZZ/article/details/79504900



## 一、概述

AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，**却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来**，便于**减少系统的重复代码**，**降低模块间的耦合度**，并**有利于未来的可拓展性和可维护性**。

**Spring AOP是基于动态代理的**，如果要代理的对象，实现了某个接口，那么Spring AOP会使用**JDK Proxy**，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候Spring AOP会使用**Cglib** ，这时候Spring AOP会使用 **Cglib** 生成一个被代理对象的子类来作为代理，如下图所示：

![SpringAOPProcess](https://gitee.com/AlanLee97/assert/raw/master/note_images/SpringAOPProcess.jpg)

当然也可以使用 AspectJ ,Spring AOP 已经集成了AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。

使用 AOP 之后我们可以把一些通用功能抽象出来，在需要用到的地方直接使用即可，这样大大简化了代码量。我们需要增加新功能时也方便，这样也提高了系统扩展性。日志功能、事务管理等等场景都用到了 AOP 。



AOP是Spring框架的重要特性。

通知类型有：前置通知、后置最终通知、后置返回通知、后置异常通知、环绕通知



## 二、添加maven依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
    <version>2.2.6.RELEASE</version>
</dependency>
```





## 三、创建Aspect切面类
在top.alanlee.template.aop包下创建切面类WebAspect

```java
package top.alanlee.template.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Aspect
@Component
public class WebAspect {

    /**
     * 切入点
     * 匹配top.alanlee.template.controller包及其子包下的所有类的所有方法
     */
    @Pointcut("execution(* top.alanlee.template.controller.*.*(..))")
    public void pointCut(){

    }

    /**
     * 前置通知，目标方法调用前被调用
     */
    @Before("pointCut()")
    public void beforeAdvice(JoinPoint joinPoint){
        System.out.println("----------- 前置通知 -----------");
        Signature signature = joinPoint.getSignature();
        System.out.println("返回目标方法的签名：" + signature);
        System.out.println("代理的是哪一个方法：" + signature.getName());
        Object[] args = joinPoint.getArgs();
        System.out.println("获取目标方法的参数信息：" + Arrays.asList(args));

    }

    /**
     * 最终通知，目标方法执行完之后执行
     */
    @After("pointCut()")
    public void afterAdvice(){
        System.out.println("----------- 最终通知 -----------");

    }

    /**
     * 后置返回通知
     * 如果参数中的第一个参数为JoinPoint，则第二个参数为返回值的信息
     * 如果参数中的第一个参数不为JoinPoint，则第一个参数为returning中对应的参数
     * returning 只有目标方法返回值与通知方法相应参数类型时才能执行后置返回通知，否则不执行
     * @param joinPoint
     * @param keys
     */
    @AfterReturning(value = "execution(* top.alanlee.template.controller..*.*(..))", returning = "keys")
    public void afterReturningAdvice(JoinPoint joinPoint, String keys){
        System.out.println("----------- 后置返回通知 -----------");
        System.out.println("后置返回通知的返回值：" + keys);
    }

    /**
     * 后置异常通知
     * 定义一个名字，该名字用于匹配通知实现方法的一个参数名，当目标方法抛出异常返回后，将把目标方法抛出的异常传给通知方法；
     * throwing 只有目标方法抛出的异常与通知方法相应参数异常类型时才能执行后置异常通知，否则不执行，
     * @param joinPoint
     * @param e
     */
    @AfterThrowing(value = "pointCut()", throwing = "e")
    public void afterThrowingAdvice(JoinPoint joinPoint, NullPointerException e){
        System.out.println("----------- 后置异常通知 -----------");
    }

    /**
     * 环绕通知
     * 环绕通知非常强大，可以决定目标方法是否执行，什么时候执行，执行时是否需要替换方法参数，执行完毕是否需要替换返回值。
     * 环绕通知第一个参数必须是org.aspectj.lang.ProceedingJoinPoint类型
     * @param proceedingJoinPoint
     */
    @Around("execution(* top.alanlee.template.controller.AopController.testAround(..))")
    public Object aroundAdvice(ProceedingJoinPoint proceedingJoinPoint){
        System.out.println("----------- 环绕通知 -----------");
        System.out.println("环绕通知的目标方法名：" + proceedingJoinPoint.getSignature().getName());

        try {
            Object proceed = proceedingJoinPoint.proceed();
            return proceed;
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }finally {
            System.out.println("---------- 环绕通知结束 -------------");
        }
        return null;
    }

}

```







### 1.@Pointcut是创建切入点
切入点方法不用写代码，返回类型为void

 **execution:用于匹配表达式**

`execution(modifiers-pattern? ret-type-pattern declaring-type-pattern? name-pattern(param-pattern)throws-pattern?) `

- 修饰符匹配（modifier-pattern?）

- 返回值匹配（ret-type-pattern）可以为*表示任何返回值,全路径的类名等

- 类路径匹配（declaring-type-pattern?）

- 方法名匹配（name-pattern）可以指定方法名 或者 *代表所有, set* 代表以set开头的所有方法

- 参数匹配（(param-pattern)）可以指定具体的参数类型，多个参数间用“`,`”隔开，各个参数也可以用“`*`”来表示匹配任意类型的参数，如(String)表示匹配一个String参数的方法；`(*,String) `表示匹配有两个参数的方法，第一个参数可以是任意类型，而第二个参数是String类型；可以用`(..)`表示零个或多个任意参数

- 异常类型匹配 `（throws-pattern?）` 其中后面跟  着“`?`”的是可选项

  - `execution(* *(..)) `  表示匹配所有方法 

  - `execution(public * com. example.controller.*(..))` 表示匹配com. example.controller中所有的public方法 
  - `execution(* com. example.controller..*.*(..))`  表示匹配com. example.controller包及其子包下的所有方法



### 2.JoinPoint
除@Around外，每个方法里都可以加或者不加参数JoinPoint。

JoinPoint包含了类名、被切面的方法名、参数等属性。

@Around参数必须为ProceedingJoinPoint。





## 四、创建Controller类
在top.alanlee.template.controller包下创建Controller类AopController。

```java
package top.alanlee.template.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/aop")
public class AopController {

    @RequestMapping("/test")
    public String testAop(String key){
        return "testAop: key = " + key;
    }

    @RequestMapping("testAfterThrowing")
    public String testAfterThrowing(String key){
        throw new NullPointerException(key);
    }


    @RequestMapping("/testAround")
    public String testAround(String key){
        return "环绕通知：key = " + key;
    }
}

```





## 五、测试

以浏览器来测试



### 测试testAop()

![image-20200601073521813](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601073521813.png)

![image-20200601073439533](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601073439533.png)



### 测试testAfterThrowing()

![image-20200601073831666](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601073831666.png)

![image-20200601073922609](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601073922609.png)



### 测试testAround()

![image-20200601074008647](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601074008647.png)

![image-20200601074027851](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200601074027851.png)





## 六、一些面试问题

### Spring AOP 和 AspectJ AOP 有什么区别？

**Spring AOP 属于运行时增强，而 AspectJ 是编译时增强。**

 Spring AOP 基于代理(Proxying)，而 AspectJ 基于字节码操作(Bytecode Manipulation)。

Spring AOP 已经集成了 AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。

AspectJ 相比于 Spring AOP 功能更加强大，但是 Spring AOP 相对来说更简单，

如果我们的切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好选择 AspectJ ，它比Spring AOP 快很多。