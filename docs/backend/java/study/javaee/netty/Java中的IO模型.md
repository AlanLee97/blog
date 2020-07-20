# Java中的IO模型

Java的IO模型套用了Linux的IO模型。

> 因为Linux是操作系统，IO是操作系统完成的。Java属于高级层面，使用了操作系统的IO模型。

这里借用了群里小伙伴的解释，我觉得很有道理，如果小伙伴们有更好的解释的话，欢迎留言。





# BIO模型

BIO（Blocking I/O）同步阻塞I/O

> 在BIO模型下，一个线程在发起IO的请求后会阻塞，直到其他线程把该线程需要的资源准备好(这个过程中，线程一直是阻塞状态)，该线程才会执行剩余的操作。

## 模型

**BIO的服务端通信模型**：采用BIO通信模型的服务端，通常由一个独立的Acceptor线程负责监听客户端的连接，它接收到客户端连接请求之后为每个客户端创建一个新的线程进行处理。处理完成后，通过输出流返回应答给客户端，处理的线程销毁。即典型的一请求一应答通讯模型。



![img](https://user-gold-cdn.xitu.io/2020/3/20/170f81849e62849c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 代码

**BIO客户端代码**

```java
public class BIOClient {
    public static void main(String[] args) {
        new Thread(){
            @Override
            public void run() {
                try {
                    Socket socket = new Socket("127.0.0.1", 8090);
                    while (true) {
                        try {
                            socket.getOutputStream().write((new Date() + ": hello world").getBytes());
                            socket.getOutputStream().flush();
                            Thread.sleep(2000);
                        } catch (Exception e) {
                        }
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        }.start();
    }
}
```

**BIO服务器端代码**

```java
public class BIOServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8090);
        new Thread(() -> {
            while (true) {
                try {
                    //accept()阻塞,直到获取到连接
                    Socket socket = serverSocket.accept();
                    //创建新线程，执行相关逻辑
                    new Thread(() -> {
                        byte[] bytes = new byte[1024];
                        try {
                            InputStream inputStream = socket.getInputStream();
                            while (true) {
                                int len;
                                while ((len = inputStream.read(bytes)) != -1) {
                                    System.out.println(new String(bytes, 0, len));
                                }
                            }
                        } catch (IOException e) {
                            e.printStackTrace();
                        }

                    }).start();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
```

## 特点

服务器实现模式为**一个连接一个线程**，即客户端有连接请求时服务器端就需要启动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，当然可以通过线程池机制改善。

**使用场景**

BIO方式适用于**连接数目比较小且固定**的架构，这种方式对服务器资源要求比较高，并发局限于应用中，JDK1.4以前的唯一选择，但程序**直观简单易理解**。





# 伪异步IO模型

伪异步IO模型是对BIO模型的改进，针对客户端的每次连接，服务器端都需要创建一个线程执行相关逻辑，执行完毕后会，创建的线程会被销毁，而线程的创建占用系统资源比较大的问题。使用线程池，解决线程频繁创建的问题。

## 模型

伪异步IO模型是对BIO模型的改进，在Acceptor线程负责监听客户端的连接，会将该连接任务，放入**线程池**中执行。



![img](https://user-gold-cdn.xitu.io/2020/3/20/170f8184a0d68e2c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 代码

**客户端代码和BIO一致**

**服务器端代码**

BIOServer2.java

```java
public class BIOServer2 {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8090);
        ExecutorService executor = Executors.newFixedThreadPool(10);
        while (true) {
            try {
                //accept()阻塞,直到获取到连接
                Socket socket = serverSocket.accept();
                //将任务交给线程池，执行相关逻辑
                executor.submit(new ThreadHandler(socket));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```



ThreadHandler.java

```java
public class ThreadHandler implements Runnable {
    public Socket socket;

    public ThreadHandler(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        byte[] bytes = new byte[1024];
        try {
            InputStream inputStream = socket.getInputStream();
            while (true) {
                int len;
                while ((len = inputStream.read(bytes)) != -1) {
                    System.out.println(new String(bytes, 0, len));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```



## 特点

伪异步I/O实际上仅仅只是对之前I/O线程模型的一个简单优化，使用线程池解决了频繁创建线程的问题。它无法从根本上解决同步I/O导致的通信线程阻塞问题。







# NIO模型

NIO是一种多路复用的I/O模型，提供了 **Channel** ,  **Selector**，**Buffer**等抽象。

### **Channel**

Java NIO Channel类似于Stream，但有一些区别：

- Channel可以读取和写入。Stream通常是单向的（读或写）。
- Channel可以异步读写。
- Channel始终读取或写入缓冲区。



![img](https://user-gold-cdn.xitu.io/2020/3/20/170f8184a0f56e19?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



### **Buffer**

在NIO厍中，所有数据都是用缓冲区处理的。在读取数据时，它是直接读到缓冲区中的; 在写入数据时，写入到缓冲区中。任何时候访问NIO中的数据，都是通过缓冲区进行操作。

在面向流的I/O中。可以将数据直接写入或者将数据直接读到 Stream 对象中。

缓冲区本质上是一个内存块。

- capacity
- position
- limit

`position`和`limit`取决于是否`Buffer` 在读或写模式。不管缓冲模式如何，`capacity`始终不变。

**capacity**

作为一个内存块，Buffer有一个固定的大小值，也叫“capacity”。你只能往里写capacity个byte、long，char等类型。一旦Buffer满了，需要将其清空（通过读数据或者清除数据）才能继续写数据往里写数据。

**position**

当你写数据到Buffer中时，position表示当前的位置。初始的position值为0。当一个byte、long等数据写到Buffer后， position会向前移动到下一个可插入数据的Buffer单元。position最大可为capacity – 1.

当读取数据时，也是从某个特定位置读。当将Buffer从写模式切换到读模式，position会被重置为0。当从Buffer的position处读取数据时，position向前移动到下一个可读的位置。

**limit**

在写模式下，Buffer的limit表示你最多能往Buffer里写多少数据。 写模式下，limit等于Buffer的capacity。

当切换Buffer到读模式时， limit表示你最多能读到多少数据。因此，当切换Buffer到读模式时，limit会被设置成写模式下的position值。换句话说，你能读到之前写入的所有数据（limit被设置成已写数据的数量，这个值在写模式下就是position）



### **Selector**

使用单个线程来处理多个Channel的好处是，只需要更少的线程来处理通道。事实上，可以只用一个线程处理所有的通道。



![img](https://user-gold-cdn.xitu.io/2020/3/20/170f8184a0e79349?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 模型

NIO由原来的阻塞读写（占用线程）变成了单线程轮询事件，找到可以进行读写的网络描述符进行读写。除了事件的轮询是阻塞的（没有可干的事情必须要阻塞），剩余的I/O操作都是纯CPU操作，没有必要开启多线程。由于线程的节约，连接数大的时候因为线程切换带来的问题也随之解决，进而为处理海量连接提供了可能。

> BIO的每个客户端的连接都需要使用一个单独的线程执行逻辑；
>
> NIO对于客户端的连接中有`可以进行读写的网络连接符`的连接，即监听需要读、写、连接的事件，之后才会使用单独的线程执行逻辑。
>
> 举个例子，大家都有去餐馆吃饭的经历。
>
> 每进去一个人(客户端连接)，餐馆都会给进来的客人配备一个服务员(处理线程)等待客人点菜。其实客人进来不一定会马上点菜，有可能等朋友来之后才点菜，但是服务员在这期间都会一直在那里等待。这样会大大浪费餐厅的服务员资源。这可以认为是BIO模型。
>
> 每进去一个人(客户端连接)，餐厅专门配备一个员工(Selector)，询问客人现在点不点菜。有的客人进来不一定会马上点菜，有可能等朋友来之后才点菜。有的的客人会告诉员工，自己需要点菜。这时候才会有服务员到需要点菜的员工那里，等待客人点菜。这样服务员资源得到充分的使用。这可以认为是NIO模型。

单线程处理I/O的效率确实非常高，没有线程切换，只是拼命的读、写、选择事件。但现在的服务器，一般都是多核处理器，如果能够利用多核心进行I/O，无疑对效率会有更大的提高。



![img](https://user-gold-cdn.xitu.io/2020/3/20/170f8184a15a6832?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



## 代码

```java
public class NIOServer {
    public static void main(String[] args) throws IOException {
        Selector serverSelector = Selector.open();
        Selector clientSelector = Selector.open();

        new Thread(() -> {
            try {
                // 对应IO编程中服务端启动
                ServerSocketChannel listenerChannel = ServerSocketChannel.open();
                listenerChannel.socket().bind(new InetSocketAddress(8000));
                listenerChannel.configureBlocking(false);
                listenerChannel.register(serverSelector, SelectionKey.OP_ACCEPT);

                while (true) {
                    // 监测是否有新的连接，这里的1指的是阻塞的时间为1ms
                    if (serverSelector.select(1) > 0) {
                        Set<SelectionKey> set = serverSelector.selectedKeys();
                        Iterator<SelectionKey> keyIterator = set.iterator();

                        while (keyIterator.hasNext()) {
                            SelectionKey key = keyIterator.next();

                            if (key.isAcceptable()) {
                                try {
                                    // (1) 每来一个新连接，不需要创建一个线程，而是直接注册到clientSelector
                                    SocketChannel clientChannel = ((ServerSocketChannel) key.channel()).accept();
                                    clientChannel.configureBlocking(false);
                                    clientChannel.register(clientSelector, SelectionKey.OP_READ);
                                } finally {
                                    keyIterator.remove();
                                }
                            }

                        }
                    }
                }
            } catch (IOException ignored) {
            }

        }).start();


        new Thread(() -> {
            try {
                while (true) {
                    // (2) 批量轮询是否有哪些连接有数据可读，这里的1指的是阻塞的时间为1ms
                    if (clientSelector.select(1) > 0) {
                        Set<SelectionKey> set = clientSelector.selectedKeys();
                        Iterator<SelectionKey> keyIterator = set.iterator();

                        while (keyIterator.hasNext()) {
                            SelectionKey key = keyIterator.next();

                            if (key.isReadable()) {
                                try {
                                    SocketChannel clientChannel = (SocketChannel) key.channel();
                                    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
                                    // (3) 读取数据以块为单位批量读取
                                    clientChannel.read(byteBuffer);
                                    byteBuffer.flip();
                                    System.out.println(Charset.defaultCharset().newDecoder().decode(byteBuffer)
                                            .toString());
                                } finally {
                                    keyIterator.remove();
                                    key.interestOps(SelectionKey.OP_READ);
                                }
                            }

                        }
                    }
                }
            } catch (IOException ignored) {
            }
        }).start();

    }
}
```



## 特点

服务器实现模式为**一个请求一个线程**，即客户端发送的连接请求都会注册到**多路复用器**上，**多路复用器轮询**到连接有I/O请求时才启动一个线程进行处理。

**使用场景**

NIO方式适用于**连接数目多且连接比较短**（轻操作）的架构，比如聊天服务器，并发局限于应用中，编程比较复杂。





# AIO模型

关于AIO的模型、代码就不在这里表述了，因为我对于这一块也不太了解，基本上也没用过。有需要的同学可以自己去查找资料。代码可以参考[java aio 编程](https://colobu.com/2014/11/13/java-aio-introduction/)的内容。

据我了解Netty开发的新一代版本支持AIO模型，但是感觉效果不好，就又放弃了。

## 特点

**AIO**：异步非阻塞，服务器实现模式为**一个有效请求一个线程**，客户端的I/O请求都是由OS先完成了再通知服务器应用去启动线程进行处理。

**使用场景**

AIO方式使用于连接数目多且连接比较长（重操作）的架构，比如相册服务器，充分调用OS参与并发操作，编程比较复杂，JDK7开始支持。


作者：图解Java
链接：https://juejin.im/post/5e74c2a8f265da571043a7b1
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。