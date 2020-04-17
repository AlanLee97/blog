(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{433:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_45-socket-源码及面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_45-socket-源码及面试题"}},[t._v("#")]),t._v(" 45 Socket 源码及面试题")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/5ddf360d00015b5906400359.jpg",alt:"img"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/bg-l-1580743237160.png",alt:"img"}}),a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/bg-r-1580743237161.png",alt:"img"}})]),t._v(" "),a("p",[t._v("没有智慧的头脑，就象没有腊烛的灯笼。")]),t._v(" "),a("p",[t._v("——列夫·托尔斯泰")]),t._v(" "),a("h2",{attrs:{id:"引导语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引导语"}},[t._v("#")]),t._v(" 引导语")]),t._v(" "),a("p",[t._v("Socket 中文翻译叫套接字，可能很多工作四五年的同学都没有用过这个 API，但只要用到这个 API 时，必然是在重要的工程的核心代码处。")]),t._v(" "),a("p",[t._v("大家平时基本都在用开源的各种 rpc 框架，比如说 Dubbo、gRPC、Spring Cloud 等等，很少需要手写网络调用，以下三小节可以帮助大家补充这块的内容，当你真正需要的时候，可以作为手册示例。")]),t._v(" "),a("p",[t._v("本文和《ServerSocket 源码及面试题》一文主要说 Socket 和 ServerSocket 的源码，《工作实战：Socket 结合线程池的使用》这章主要说两个 API 在实际工作中如何落地。")]),t._v(" "),a("h2",{attrs:{id:"_1-socket-整体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-socket-整体结构"}},[t._v("#")]),t._v(" 1 Socket 整体结构")]),t._v(" "),a("p",[t._v("Socket 的结构非常简单，Socket 就像一个壳一样，将套接字初始化、创建连接等各种操作包装了一下，其底层实现都是 SocketImpl 实现的，Socket 本身的业务逻辑非常简单。")]),t._v(" "),a("p",[t._v("Socket 的属性不多，有套接字的状态，SocketImpl，读写的状态等等，源码如下图：\n"),a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/5dd60470000164ca04960264.png",alt:"图片描述"}})]),t._v(" "),a("p",[t._v("套接字的状态变更都是有对应操作方法的，比如套接字新建（createImpl 方法）后，状态就会更改成 created = true，连接（connect）之后，状态更改成 connected = true 等等。")]),t._v(" "),a("h2",{attrs:{id:"_2-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化"}},[t._v("#")]),t._v(" 2 初始化")]),t._v(" "),a("p",[t._v("Socket 的构造器比较多，可以分成两大类：")]),t._v(" "),a("ol",[a("li",[t._v("指定代理类型（Proxy）创建套节点，一共有三种类型为：DIRECT（直连）、HTTP（HTTP、FTP 高级协议的代理）、SOCKS（SOCKS 代理），三种不同的代码方式对应的 SocketImpl 不同，分别是：PlainSocketImpl、HttpConnectSocketImpl、SocksSocketImpl，除了类型之外 Proxy 还指定了地址和端口；")]),t._v(" "),a("li",[t._v("默认 SocksSocketImpl 创建，并且需要在构造器中传入地址和端口，源码如下：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// address 代表IP地址，port 表示套接字的端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// address 我们一般使用 InetSocketAddress，InetSocketAddress 有 ip+port、域名+port、InetAddress 等初始化方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetAddress")]),t._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里的 address 可以是 ip 地址或者域名，比如说 127.0.0.1 或者 www.wenhe.com。")]),t._v(" "),a("p",[t._v("我们一起看一下这个构造器调用的 this 底层构造器的源码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stream 为 true 时，表示为stream socket 流套接字，使用 TCP 协议，比较稳定可靠，但占用资源多")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stream 为 false 时，表示为datagram socket 数据报套接字，使用 UDP 协议，不稳定，但占用资源少")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Socket")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketAddress")]),t._v(" address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketAddress")]),t._v(" localAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// backward compatibility")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NullPointerException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 socket")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 ip 地址不为空，绑定地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localAddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// create、bind、connect 也是 native 方法")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localAddr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecurityException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" ce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSuppressed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ce"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从源码中可以看出：")]),t._v(" "),a("ol",[a("li",[t._v("在构造 Socket 的时候，你可以选择 TCP 或 UDP，默认是 TCP；")]),t._v(" "),a("li",[t._v("如果构造 Socket 时，传入地址和端口，那么在构造的时候，就会尝试在此地址和端口上创建套接字；")]),t._v(" "),a("li",[t._v("Socket 的无参构造器只会初始化 SocksSocketImpl，并不会和当前地址端口绑定，需要我们手动的调用 connect 方法，才能使用当前地址和端口；")]),t._v(" "),a("li",[t._v("Socket 我们可以理解成网络沟通的语言层次的抽象，底层网络创建、连接和关闭，仍然是 TCP 或 UDP 本身网络协议指定的标准，Socket 只是使用 Java 语言做了一层封装，从而让我们更方便地使用。")])]),t._v(" "),a("h2",{attrs:{id:"_3-connect-连接服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-connect-连接服务端"}},[t._v("#")]),t._v(" 3 connect 连接服务端")]),t._v(" "),a("p",[t._v("connect 方法主要用于 Socket 客户端连接上服务端，如果底层是 TCP 层协议的话，就是通过三次握手和服务端建立连接，为客户端和服务端之间的通信做好准备，底层源码如下：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketAddress")]),t._v(" endpoint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("connect 方法要求有两个入参，第一个入参是 SocketAddress，表示服务端的地址，我们可以使用 InetSocketAddress 进行初始化，比如：new InetSocketAddress(“www.wenhe.com”, 2000)。")]),t._v(" "),a("p",[t._v("第二入参是超时时间的意思（单位毫秒），表示客户端连接服务端的最大等待时间，如果超过当前等待时间，仍然没有成功建立连接，抛 SocketTimeoutException 异常，如果是 0 的话，表示无限等待。")]),t._v(" "),a("h2",{attrs:{id:"_4-socket-常用设置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-socket-常用设置参数"}},[t._v("#")]),t._v(" 4 Socket 常用设置参数")]),t._v(" "),a("p",[t._v("Socket 的常用设置参数在 SocketOptions 类中都可以找到，接下来我们来一一分析下，以下理解大多来自类注释和网络。")]),t._v(" "),a("h3",{attrs:{id:"_4-1-settcpnodelay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-settcpnodelay"}},[t._v("#")]),t._v(" 4.1 setTcpNoDelay")]),t._v(" "),a("p",[t._v("此方法是用来设置 TCP_NODELAY 属性的，属性的注释是这样的：此设置仅仅对 TCP 生效，主要为了禁止使用 Nagle 算法，true 表示禁止使用，false 表示使用，默认是 false。")]),t._v(" "),a("p",[t._v("对于 Nagle 算法，我们引用维基百科上的解释：")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("纳格算法")]),t._v("是以减少数据包发送量来增进 [TCP/IP] 网络的性能，它由约翰·纳格任职于"),a("a",{attrs:{href:"https://zh.wikipedia.org/w/index.php?title=Ford_Aerospace&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ford Aerospace"),a("OutboundLink")],1),t._v("时命名。")]),t._v(" "),a("p",[t._v("纳格的文件["),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%B4%8D%E6%A0%BC%E7%AE%97%E6%B3%95#cite_note-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("注 1]"),a("OutboundLink")],1),t._v("描述了他所谓的“小数据包问题”－某个应用程序不断地提交小单位的数据，且某些常只占1"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节"),a("OutboundLink")],1),t._v("大小。因为"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%82%B3%E8%BC%B8%E6%8E%A7%E5%88%B6%E5%8D%94%E8%AD%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP"),a("OutboundLink")],1),t._v("数据包具有40"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节"),a("OutboundLink")],1),t._v("的标头信息（TCP与IPv4各占20字节），这导致了41字节大小的数据包只有1字节的可用信息，造成庞大的浪费。这种状况常常发生于"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Telnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telnet"),a("OutboundLink")],1),t._v("工作阶段－大部分的键盘操作会产生1字节的数据并马上提交。更糟的是，在慢速的网络连线下，这类的数据包会大量地在同一时点传输，造成"),a("a",{attrs:{href:"https://zh.wikipedia.org/w/index.php?title=%E5%A3%85%E5%A1%9E%E7%A2%B0%E6%92%9E&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("壅塞碰撞"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("纳格算法的工作方式是合并（"),a("a",{attrs:{href:"https://zh.wiktionary.org/wiki/en:Coalesce",target:"_blank",rel:"noopener noreferrer"}},[t._v("coalescing"),a("OutboundLink")],1),t._v("）一定数量的输出数据后一次提交。特别的是，只要有已提交的数据包尚未确认，发送者会持续缓冲数据包，直到累积一定数量的数据才提交。")])]),t._v(" "),a("p",[t._v("总结算法开启关闭的场景：")]),t._v(" "),a("ol",[a("li",[t._v("如果 Nagle 算法关闭，对于小数据包，比如一次鼠标移动，点击，客户端都会立马和服务端交互，实时响应度非常高，但频繁的通信却很占用不少网络资源；")]),t._v(" "),a("li",[t._v("如果 Nagle 算法开启，算法会自动合并小数据包，等到达到一定大小（MSS）后，才会和服务端交互，优点是减少了通信次数，缺点是实时响应度会低一些。")])]),t._v(" "),a("p",[t._v("Socket 创建时，默认是开启 Nagle 算法的，可以根据实时性要求来选择是否关闭 Nagle 算法。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-setsolinger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-setsolinger"}},[t._v("#")]),t._v(" 4.2 setSoLinger")]),t._v(" "),a("p",[t._v("setSoLinger 方法主要用来设置 SO_LINGER 属性值的。")]),t._v(" "),a("p",[t._v("注释上大概是这个意思：在我们调用 close 方法时，默认是直接返回的，但如果给 SO_LINGER 赋值，就会阻塞 close 方法，在 SO_LINGER 时间内，等待通信双方发送数据，如果时间过了，还未结束，将发送 TCP RST 强制关闭 TCP 。")]),t._v(" "),a("p",[t._v("我们看一下 setSoLinger 源码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// on 为 false，表示不启用延时关闭，true 的话表示启用延时关闭")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// linger 为延时的时间，单位秒")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSoLinger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" linger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查是否已经关闭")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isClosed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Socket is closed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不启用延时关闭")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SO_LINGER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启用延时关闭，如果 linger 为 0，那么会立即关闭")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// linger 最大为 65535 秒，约 18 小时")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("linger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid value for SO_LINGER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("linger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            linger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65535")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setOption")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SO_LINGER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("linger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-3-setoobinline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-setoobinline"}},[t._v("#")]),t._v(" 4.3 setOOBInline")]),t._v(" "),a("p",[t._v("setOOBInline 方法主要使用设置 SO_OOBINLINE 属性。")]),t._v(" "),a("p",[t._v("注释上说：如果希望接受 TCP urgent data（TCP 紧急数据）的话，可以开启该选项，默认该选项是关闭的，我们可以通过 Socket#sendUrgentData 方法来发送紧急数据。")]),t._v(" "),a("p",[t._v("查询了很多资料，都建议尽可能的去避免设置该值，禁止使用 TCP 紧急数据。")]),t._v(" "),a("h3",{attrs:{id:"_4-4-setsotimeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-setsotimeout"}},[t._v("#")]),t._v(" 4.4 setSoTimeout")]),t._v(" "),a("p",[t._v("setSoTimeout 方法主要是用来设置 SO_TIMEOUT 属性的。")]),t._v(" "),a("p",[t._v("注释上说：用来设置阻塞操作的超时时间，阻塞操作主要有：")]),t._v(" "),a("ol",[a("li",[t._v("ServerSocket.accept() 服务器等待客户端的连接；")]),t._v(" "),a("li",[t._v("SocketInputStream.read() 客户端或服务端读取输入超时；")]),t._v(" "),a("li",[t._v("DatagramSocket.receive()。")])]),t._v(" "),a("p",[t._v("我们必须在必须在阻塞操作之前设置该选项， 如果时间到了，操作仍然在阻塞，会抛出 InterruptedIOException 异常（Socket 会抛出 SocketTimeoutException 异常，不同的套接字抛出的异常可能不同）。")]),t._v(" "),a("p",[t._v("对于 Socket 来说，超时时间如果设置成 0，表示没有超时时间，阻塞时会无限等待。")]),t._v(" "),a("h3",{attrs:{id:"_4-5-setsendbuffersize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-setsendbuffersize"}},[t._v("#")]),t._v(" 4.5 setSendBufferSize")]),t._v(" "),a("p",[t._v("setSendBufferSize 方法主要用于设置 SO_SNDBUF 属性的，入参是 int 类型，表示设置发送端（输出端）的缓冲区的大小，单位是字节。")]),t._v(" "),a("p",[t._v("入参 size 必须大于 0，否则会抛出 IllegalArgumentException 异常。")]),t._v(" "),a("p",[t._v("一般我们都是采取默认的，如果值设置太小，很有可能导致网络交互过于频繁，如果值设置太大，那么交互变少，实时性就会变低。")]),t._v(" "),a("h3",{attrs:{id:"_4-6-setreceivebuffersize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-setreceivebuffersize"}},[t._v("#")]),t._v(" 4.6 setReceiveBufferSize")]),t._v(" "),a("p",[t._v("setReceiveBufferSize 方法主要用来设置 SO_RCVBUF 属性的，入参是 int 类型，表示设置接收端的缓冲区的大小，单位是字节。")]),t._v(" "),a("p",[t._v("入参 size 必须大于 0，否则会抛出 IllegalArgumentException 异常。")]),t._v(" "),a("p",[t._v("一般来说，在套接字建立连接之后，我们可以随意修改窗口大小，但是当窗口大小大于 64k 时，需要注意：")]),t._v(" "),a("ol",[a("li",[t._v("必须在 Socket 连接客户端之前设置缓冲值；")]),t._v(" "),a("li",[t._v("必须在 ServerSocket 绑定本地地址之前设置缓冲值。")])]),t._v(" "),a("h3",{attrs:{id:"_4-7-setkeepalive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-setkeepalive"}},[t._v("#")]),t._v(" 4.7 setKeepAlive")]),t._v(" "),a("p",[t._v("setKeepAlive 方法主要用来设置 SO_KEEPALIVE 属性，主要是用来探测服务端的套接字是否还是存活状态，默认设置是 false，不会触发这个功能。")]),t._v(" "),a("p",[t._v("如果 SO_KEEPALIVE 开启的话，TCP 自动触发功能：如果两小时内，客户端和服务端的套接字之间没有任何通信，TCP 会自动发送 keepalive 探测给对方，对方必须响应这个探测（假设是客户端发送给服务端），预测有三种情况：")]),t._v(" "),a("ol",[a("li",[t._v("服务端使用预期的 ACK 回复，说明一切正常；")]),t._v(" "),a("li",[t._v("服务端回复 RST，表示服务端处于死机或者重启状态，终止连接；")]),t._v(" "),a("li",[t._v("没有得到服务端的响应（会尝试多次），表示套接字已经关闭了。")])]),t._v(" "),a("h3",{attrs:{id:"_4-8-setreuseaddress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-setreuseaddress"}},[t._v("#")]),t._v(" 4.8 setReuseAddress")]),t._v(" "),a("p",[t._v("setReuseAddress 方法主要用来设置 SO_REUSEADDR 属性，入参是布尔值，默认是 false。")]),t._v(" "),a("p",[t._v("套接字在关闭之后，会等待一段时间之后才会真正的关闭，如果此时有新的套接字前来绑定同样的地址和端口时，如果 setReuseAddress 为 true 的话，就可以绑定成功，否则绑定失败。")]),t._v(" "),a("h2",{attrs:{id:"_5-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[t._v("#")]),t._v(" 5 总结")]),t._v(" "),a("p",[t._v("如果平时一直在做业务代码，Socket 可能用到的很少，但面试问到网络协议时，或者以后有机会做做中间件的时候，就会有大概率会接触到 Socket，所以多学学，作为知识储备也蛮好的。")])])}),[],!1,null,null,null);s.default=n.exports}}]);