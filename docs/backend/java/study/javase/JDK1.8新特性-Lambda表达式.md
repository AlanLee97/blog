# JDK1.8新特性 - Lambda表达式

## 知识点

### 简介

Lambda 表达式，也可称为闭包，它是推动 Java 8 发布的最重要新特性。

Lambda 允许把函数作为一个方法的参数（函数作为参数传递进方法中）。

使用 Lambda 表达式可以使代码变的更加简洁紧凑。



### 语法

```java
(参数) -> 表达式
或 
(参数) ->{ 语句 }
```



### 特征

- **可选类型声明：**不需要声明参数类型，编译器可以统一识别参数值。
- **可选的参数圆括号：**一个参数无需定义圆括号，但多个参数需要定义圆括号。
- **可选的大括号：**如果主体包含了一个语句，就不需要使用大括号。
- **可选的返回关键字：**如果主体只有一个表达式返回值则编译器会自动返回值，大括号需要指定明表达式返回了一个数值。



### 使用范围

Lambda表达式只能在 **函数式接口** 中使用

**函数式接口**

函数式接口(Functional Interface)就是一个有且仅有一个抽象方法，但是可以有多个非抽象方法的接口。

函数式接口可以被隐式转换为 lambda 表达式。



### 变量作用域

lambda 表达式只能引用标记了 final 的外层局部变量，这就是说不能在 lambda 内部修改定义在域外的局部变量，否则会编译错误。



## 实例

创建一个`MyMessage`接口类，定义一个`say()`方法，输出`Hello AlanLee`

### 未使用Lambda表达式的例子

**代码**

```java
interface MyMessage{
    void say();
}

public class LambdaDemo {
    public static void main(String[] args) {
        MyMessage msg = new MyMessage() {
            @Override
            public void say() {
                System.out.println("Hello AlanLee");
            }
        };
        msg.say();
    }
}
```

**结果**

```java
Hello AlanLee
```



### 使用Lambda表达式之后的例子

**代码**

```java
interface MyMessage{
    void say();
}

public class LambdaDemo {
    public static void main(String[] args) {
        MyMessage msg = () -> {
            System.out.println("Hello AlanLee");
        };
        
        //一行语句的时候可以不写{}
        //MyMessage msg = () -> System.out.println("Hello AlanLee");
        
        msg.say();
    }
}
```

**结果**

```java
Hello AlanLee
```



### 其他实例

```java
// 1. 不需要参数,返回值为 5  
() -> 5  
  
// 2. 接收一个参数(数字类型),返回其2倍的值  
x -> 2 * x  
  
// 3. 接受2个参数(数字),并返回他们的差值  
(x, y) -> x – y  
  
// 4. 接收2个int型整数,返回他们的和  
(int x, int y) -> x + y  
  
// 5. 接受一个 string 对象,并在控制台打印,不返回任何值(看起来像是返回void)  
(String s) -> System.out.print(s)
```



### 没有参数的方法

**代码**

```java
MyMessage msg = () -> System.out.println("Hello AlanLee");
msg.say();
```



**结果**

```java
Hello AlanLee
```



### 有参数的方法

**代码**

```java
interface MathUtil{
    int func(int x, int y);
}

public class LambdaDemo {
    public static void main(String[] args) {

        MathUtil add = (x, y) -> {
            return x + y;
        };
        //简化版：不要return,不要{}
        //MathUtil add = (x, y) -> x + y;
        //也可以加入类型声明
        //MathUtil add = (int x, int y) -> x + y;
        
        System.out.println(add.func(10, 20));
    }
}
```

**结果**

```java
30
```



### 函数式接口注解及添加多个方法

@FunctionalInterface注解声明这是一个函数式接口

在接口中使用关键字`default`可以编写一个完整的方法

**代码**

```java
package study.chapter03.jdk8.lambda;

@FunctionalInterface
interface MyMessage2{
    void say(String str);
    //使用关键字default
    default void print(){
        System.out.println("this is a print method");
    }
}

public class LambdaDemo3 {
    public static void main(String[] args) {
        MyMessage2 msg = (str) -> {
            System.out.println(str);
        };

        msg.say("hello lambda");
        msg.print();
    }
}

```

**结果**

```java
hello lambda
this is a print method
```

