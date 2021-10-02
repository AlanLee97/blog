---
date: 2020-01-24
categories: 
 - 后端
tags: 
 - java
---

# 控制台输入

Java.io 包几乎包含了所有操作输入、输出需要的类。所有这些流类代表了输入源和输出目标。

Java.io 包中的流支持很多种格式，比如：基本类型、对象、本地化字符集等等。

一个流可以理解为一个数据的序列。输入流表示从一个源读取数据，输出流表示向一个目标写数据。

Java 为 I/O 提供了强大的而灵活的支持，使其更广泛地应用到文件传输和网络编程中。

但本节讲述最基本的和流与 I/O 相关的功能。我们将通过一个个例子来学习这些功能。

## 读取控制台输入

Java 的控制台输入由 System.in 完成。

为了获得一个绑定到控制台的字符流，你可以把 System.in 包装在一个 BufferedReader 对象中来创建一个字符流。

下面是创建 BufferedReader 的基本语法：

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
```

BufferedReader 对象创建后，我们便可以使用 read() 方法从控制台读取一个字符，或者用 readLine() 方法读取一个字符串。



## BufferedReader 从控制台读取字符输入

### 知识点

从 BufferedReader 对象读取一个字符要使用 read() 方法，它的语法如下：

```
int read( ) throws IOException
```

每次调用 read() 方法，它从输入流读取一个字符并把该字符作为整数值返回。 当流结束的时候返回 -1。该方法抛出 IOException。

### 实例

下面的程序示范了用 read() 方法从控制台不断读取字符直到用户输入 "q"。

代码：

```java
package chapter03.stream;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//使用 BufferedReader 在控制台读取字符
public class TestBufferedReader {
    public static void main(String[] args) throws IOException {
        //读取字符
        read();
    }
    
    public static void read() throws IOException{
        char c;
        //在控制台输入字符存入到br
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("输入字符，按 'q' 键退出");
        //读取字符
        do {
            //一个字符地一个字符地读取
            c = (char)br.read();
            System.out.println(c);
        }while (c != 'q');
    }
}

```



运行结果：

```java
输入字符，按 'q' 键退出
alanlee
a
l
a
n
l
e
e


q
q
```



## BufferedReader 从控制台读取字符串

###  知识点

从标准输入读取一个字符串需要使用 BufferedReader 的 readLine() 方法。

它的一般格式是：

```
String readLine( ) throws IOException
```

### 实例

下面的程序读取和显示字符行直到你输入了单词"end"。

代码：

```java
package chapter03.stream;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

//使用 BufferedReader 在控制台读取字符
public class TestBufferedReader {
    public static void main(String[] args) throws IOException {
        //读取一行
        readString();
    }

    //读取字符串
    public static void readString() throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str;
        System.out.println("请输入一行字符，输入'end'退出");
        do {
            str = br.readLine();
            System.out.println(str);
        }while (!"end".equals(str));
    }
}

```



运行结果：

```java
请输入一行字符，输入'end'退出
i am alanlee
i am alanlee
end
end
```

*JDK 5 后的版本也可以使用* **Java Scanner** *类来获取控制台的输入。*
