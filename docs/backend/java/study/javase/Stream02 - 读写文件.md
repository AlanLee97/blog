---
date: 2020-01-24
categories: 
 - 后端
tags: 
 - java
---
# 读写文件

一个流被定义为一个数据序列。输入流用于从源读取数据，输出流用于向目标写数据。
<img :src="$withBase('note_images/IO流.png')" />

## FileInputStream - 读取文件

### 知识点

FileInputStream类流用于从文件读取数据，它的对象可以用关键字 new 来创建。类

有多种构造方法可用来创建对象。

可以使用字符串类型的文件名来创建一个输入流对象来读取文件

```java
//方式1
InputStream is = new FileInputStream("F:/0temp/hello.txt");
```

也可以使用一个文件对象来创建一个输入流对象来读取文件。我们首先得使用 File() 方法来创建一个文件对象：

```java
//方式2
File file = new File("F:/0temp/hello.txt");
InputStream is = new FileInputStream(file);
```



### 实例

从磁盘中读取一个文件hello.txt

代码：

```java
package chapter03.stream;

import java.io.*;

public class TestInputStream {
    public static void main(String[] args) throws IOException {
        input();
    }

    public static void input() throws IOException {
        File file;
        InputStream is = null;
        try {
            //方式1
            //InputStream is = new FileInputStream("F:/0temp/hello.txt");

            //方式2
            file = new File("F:/0temp/hello.txt");
            is = new FileInputStream(file);

            int size = is.available();
            for (int i = 0; i < size; i++) {
                char read = (char) is.read();
                System.out.print(read);
            }
            is.close();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            is.close();
        }
    }
}
```



| **序号** | **方法及描述**                                               |
| :------: | :----------------------------------------------------------- |
|    1     | **public void close() throws IOException{}** 关闭此文件输入流并释放与此流有关的所有系统资源。抛出IOException异常。 |
|    2     | **protected void finalize()throws IOException {}** 这个方法清除与该文件的连接。确保在不再引用文件输入流时调用其 close 方法。抛出IOException异常。 |
|    3     | **public int read(int r)throws IOException{}** 这个方法从 InputStream 对象读取指定字节的数据。返回为整数值。返回下一字节数据，如果已经到结尾则返回-1。 |
|    4     | **public int read(byte[] r) throws IOException{}** 这个方法从输入流读取r.length长度的字节。返回读取的字节数。如果是文件结尾则返回-1。 |
|    5     | **public int available() throws IOException{}** 返回下一次对此输入流调用的方法可以不受阻塞地从此输入流读取的字节数。返回一个整数值。 |





## FileOutputStream - 写入文件

### 知识点

FileOutputStream类用来创建一个文件并向文件中写数据。

如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。

有两个构造方法可以用来创建 FileOutputStream 对象。

- 使用字符串类型的文件名来创建一个输出流对象：

```
OutputStream os = new FileOutputStream("F:/0temp/hello2.txt");
```

- 使用一个文件对象来创建一个输出流来写文件。我们首先得使用File()方法来创建一个文件对象：

```java
File file = new File("F:/0temp/hello2.txt");
OutputStream os = new FileOutputStream(file);
```

### 实例

**向磁盘写入一个文件hello2.txt**

代码：

```java
package chapter03.stream;

import java.io.*;

public class TestOutStream {
    public static void main(String[] args) throws IOException {
        output();
    }

    public static void output() throws IOException {
        OutputStream os = null;
        try {
            String str = "Test OutputStream";
            byte[] content = str.getBytes();
            os = new FileOutputStream("F:/0temp/hello2.txt");
            os.write(content);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            os.close();
        }

    }
}

```





创建OutputStream 对象完成后，就可以使用下面的方法来写入流或者进行其他的流操作。

| **序号** | **方法及描述**                                               |
| :------: | :----------------------------------------------------------- |
|    1     | **public void close() throws IOException{}** 关闭此文件输入流并释放与此流有关的所有系统资源。抛出IOException异常。 |
|    2     | **protected void finalize()throws IOException {}** 这个方法清除与该文件的连接。确保在不再引用文件输入流时调用其 close 方法。抛出IOException异常。 |
|    3     | **public void write(int w)throws IOException{}** 这个方法把指定的字节写到输出流中。 |
|    4     | **public void write(byte[] w)** 把指定数组中w.length长度的字节写到OutputStream中。 |



## 解决读写文件中有中文内容时乱码的问题

### 知识点

使用InputStreamReader写入文件时指定编码UTF-8

```java
reader = new InputStreamReader(is, "UTF-8");
```

使用OutputStreamWriter写入文件时指定编码UTF-8

```java
writer = new OutputStreamWriter(fos, "UTF-8");
```



### 实例

向磁盘写入一个文件，并读取文件内容在控制台输出，文件内容为：

```java
我爱java
java牛逼！
```



代码：

```java
package chapter03.stream;

import java.io.*;

public class TestIOStream {
    private static String fileName = "F:/0temp/hello3.txt";
    public static void main(String[] args) throws IOException {
        //向磁盘写入文件
        output();
        //从磁盘读取文件
        input();
    }

    //向磁盘写入文件
    public static void output() throws IOException {
        File file = new File(fileName);
        FileOutputStream fos = null;
        OutputStreamWriter writer = null;
        try {
            fos = new FileOutputStream(file);
            writer = new OutputStreamWriter(fos, "UTF-8");
            //写第一句
            writer.append("我爱java");
            //换行
            writer.append("\r\n");
            //写第二句
            writer.append("java牛逼！");
            writer.close();
            fos.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            writer.close();
            fos.close();
        }
    }

    //从磁盘读取文件
    public static void input() throws IOException{
        InputStream is = null;
        InputStreamReader reader = null;
        try {
            is = new FileInputStream(fileName);
            reader = new InputStreamReader(is, "UTF-8");
            StringBuffer buffer = new StringBuffer();
            while (reader.ready()){
                buffer.append((char)reader.read());
            }
            System.out.println(buffer.toString());
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } finally {
            reader.close();
            is.close();
        }

    }
}

```

