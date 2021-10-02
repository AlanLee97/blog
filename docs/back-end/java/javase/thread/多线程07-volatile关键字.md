---
date: 2020-01-30
categories: 
 - 后端
tags: 
 - java
---
# volatile关键字

## 知识点

volatile关键字在属性定义上使用，表示此属性为直接数据操作，而不进行副本的拷贝处理。节约了拷贝副本数据的时间。

![image-20200130145803037](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200130145803037.png)

## 实例

**代码**

```java
package study.chapter03.thread.keywords;

//关键字volatile的使用
public class TestThread {
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        new Thread(myThread, "售票员A").start();
        new Thread(myThread, "售票员B").start();
        new Thread(myThread, "售票员C").start();

    }
}

class MyThread implements Runnable{
    //在属性上使用关键字volatile
    public volatile int ticket = 5;

    @Override
    public void run() {
        synchronized (this){
            while (ticket > 0) {
                System.out.println(Thread.currentThread().getName() + "卖票：ticket=" + ticket--);
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

```



**结果**

```java
售票员A卖票：ticket=5
售票员A卖票：ticket=4
售票员A卖票：ticket=3
售票员A卖票：ticket=2
售票员A卖票：ticket=1
```

