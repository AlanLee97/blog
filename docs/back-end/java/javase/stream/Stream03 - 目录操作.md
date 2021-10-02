---
date: 2020-01-24
categories: 
 - 后端
tags: 
 - java
---
# Java中的目录操作

## 创建目录

### 知识点

File类中有两个方法可以用来创建文件夹：

- **mkdir( )**方法创建一个文件夹，成功则返回true，失败则返回false。失败表明File对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。
- **mkdirs()**方法创建一个文件夹和它的所有父文件夹。

### 实例

在F盘中的0temp文件夹下创建一个叫`hello`的文件夹

```java
public class TestDir{
    public static void main(String[] args) {
        File file = new File("F:/0temp/hello");
        boolean b = file.mkdir();
        if (b){
            System.out.println("目录创建成功");
        }else {
            System.out.println("目录创建失败");
        }
    }
}
```



在F盘中的0temp\hello文件夹下递归创建`hello/hello1/hello2`文件夹

```java
public class TestDir{
    public static void main(String[] args) {
        File file = new File("F:/0temp/hello/hello1/hello2");
        boolean b = file.mkdirs();
        if (b){
            System.out.println("目录创建成功");
        }else {
            System.out.println("目录创建失败");
        }
    }
}
```



## 读取目录

### 知识点

一个目录其实就是一个 File 对象，它包含其他文件和文件夹。

如果创建一个 File 对象并且它是一个目录，那么调用 isDirectory() 方法会返回 true。

可以通过调用该对象上的 list() 方法，来提取它包含的文件和文件夹的列表。

### 实例

下面展示的例子说明如何使用 list() 方法来检查一个文件夹中包含的内容：

读取F盘下0temp文件夹下的内容

```java
public class TestDir{
    public static void main(String[] args) {
        String dirName = "F:/0temp";
        File file = new File(dirName);
        String[] list = file.list();
        for (String s : list) {
            File f = new File(dirName + "/" + s);
            if (f.isDirectory()){
                System.out.println(s + "是一个目录");
            }else if (f.isFile()){
                System.out.println(s + "是一个文件");
            }else {
                System.out.println("未知类型" + s);
            }
        }
    }
}
```





## 删除目录或文件

### 知识点

删除文件可以使用 **java.io.File.delete()** 方法。

### 实例

以下代码会删除目录**F盘下的0temp/hello文件夹**，需要注意的是当删除某一目录时，必须保证该目录下没有其他文件才能正确删除，否则将删除失败。

```java
public class TestDir{
    public static void main(String[] args) {
        File dirName = new File("F:/0temp/hello");
        testDeleteDir(dirName);
    }
    
    public static void testDeleteDir(File folder) {
        File[] files = folder.listFiles();
        Boolean b;
        if (files != null){
            for (File f : files){
                if (f.isDirectory()){
                    testDeleteDir(f);
                }else {
                    b = f.delete();
                    if (b){
                        System.out.println(f.getName() + "删除成功");
                    }else {
                        System.out.println(f.getName() + "删除失败");
                    }
                }
            }
        }
        b = folder.delete();
        if (b){
            System.out.println(folder.getName() + "删除成功");
        }else {
            System.out.println(folder.getName() + "删除失败");
        }
    }
}
```

