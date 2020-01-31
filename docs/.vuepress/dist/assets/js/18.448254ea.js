(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{413:function(a,v,J){"use strict";J.r(v);var _=J(0),l=Object(_.a)({},(function(){var a=this,v=a.$createElement,J=a._self._c||v;return J("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[J("h1",{attrs:{id:"java-简介"}},[J("a",{staticClass:"header-anchor",attrs:{href:"#java-简介"}},[a._v("#")]),a._v(" Java 简介")]),a._v(" "),J("p",[a._v("Java是由Sun Microsystems公司于1995年5月推出的Java面向对象程序设计语言和Java平台的总称。由James Gosling和同事们共同研发，并在1995年正式推出。")]),a._v(" "),J("p",[a._v("Java分为三个体系：")]),a._v(" "),J("ul",[J("li",[a._v("JavaSE（J2SE）（Java2 Platform Standard Edition，java平台标准版）")]),a._v(" "),J("li",[a._v("JavaEE(J2EE)(Java 2 Platform,Enterprise Edition，java平台企业版)")]),a._v(" "),J("li",[a._v("JavaME(J2ME)(Java 2 Platform Micro Edition，java平台微型版)。")])]),a._v(" "),J("p",[a._v('2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名以取消其中的数字"2"：J2EE更名为Java EE, J2SE更名为Java SE，J2ME更名为Java ME。')]),a._v(" "),J("h2",{attrs:{id:"主要特性"}},[J("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[a._v("#")]),a._v(" 主要特性")]),a._v(" "),J("ul",[J("li",[J("p",[a._v("Java语言是简单的：")]),a._v(" "),J("p",[a._v("Java语言的语法与C语言和C++语言很接近，使得大多数程序员很容易学习和使用。另一方面，Java丢弃了C++中很少使用的、很难理解的、令人迷惑的那些特性，如操作符重载、多继承、自动的强制类型转换。特别地，Java语言不使用指针，而是引用。并提供了自动的废料收集，使得程序员不必为内存管理而担忧。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是面向对象的：")]),a._v(" "),J("p",[a._v("Java语言提供类、接口和继承等面向对象的特性，为了简单起见，只支持类之间的单继承，但支持接口之间的多继承，并支持类与接口之间的实现机制（关键字为implements）。Java语言全面支持动态绑定，而C++语言只对虚函数使用动态绑定。总之，Java语言是一个纯的面向对象程序设计语言。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是分布式的：")]),a._v(" "),J("p",[a._v("Java语言支持Internet应用的开发，在基本的Java应用编程接口中有一个网络应用编程接口（java net），它提供了用于网络应用编程的类库，包括URL、URLConnection、Socket、ServerSocket等。Java的RMI（远程方法激活）机制也是开发分布式应用的重要手段。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是健壮的：")]),a._v(" "),J("p",[a._v("Java的强类型机制、异常处理、垃圾的自动收集等是Java程序健壮性的重要保证。对指针的丢弃是Java的明智选择。Java的安全检查机制使得Java更具健壮性。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是安全的：")]),a._v(" "),J("p",[a._v("Java通常被用在网络环境中，为此，Java提供了一个安全机制以防恶意代码的攻击。除了Java语言具有的许多安全特性以外，Java对通过网络下载的类具有一个安全防范机制（类ClassLoader），如分配不同的名字空间以防替代本地的同名类、字节代码检查，并提供安全管理机制（类SecurityManager）让Java应用设置安全哨兵。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是体系结构中立的：")]),a._v(" "),J("p",[a._v("Java程序（后缀为java的文件）在Java平台上被编译为体系结构中立的字节码格式（后缀为class的文件），然后可以在实现这个Java平台的任何系统中运行。这种途径适合于异构的网络环境和软件的分发。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是可移植的：")]),a._v(" "),J("p",[a._v("这种可移植性来源于体系结构中立性，另外，Java还严格规定了各个基本数据类型的长度。Java系统本身也具有很强的可移植性，Java编译器是用Java实现的，Java的运行环境是用ANSI C实现的。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是解释型的：")]),a._v(" "),J("p",[a._v("如前所述，Java程序在Java平台上被编译为字节码格式，然后可以在实现这个Java平台的任何系统中运行。在运行时，Java平台中的Java解释器对这些字节码进行解释执行，执行过程中需要的类在联接阶段被载入到运行环境中。")])]),a._v(" "),J("li",[J("p",[a._v("Java是高性能的：")]),a._v(" "),J("p",[a._v("与那些解释型的高级脚本语言相比，Java的确是高性能的。事实上，Java的运行速度随着JIT(Just-In-Time）编译器技术的发展越来越接近于C++。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是多线程的：")]),a._v(" "),J("p",[a._v("在Java语言中，线程是一种特殊的对象，它必须由Thread类或其子（孙）类来创建。通常有两种方法来创建线程：其一，使用型构为Thread(Runnable)的构造子类将一个实现了Runnable接口的对象包装成一个线程，其二，从Thread类派生出子类并重写run方法，使用该子类创建的对象即为线程。值得注意的是Thread类已经实现了Runnable接口，因此，任何一个线程均有它的run方法，而run方法中包含了线程所要运行的代码。线程的活动由一组方法来控制。Java语言支持多个线程的同时执行，并提供多线程之间的同步机制（关键字为synchronized）。")])]),a._v(" "),J("li",[J("p",[a._v("Java语言是动态的：")]),a._v(" "),J("p",[a._v("Java语言的设计目标之一是适应于动态变化的环境。Java程序需要的类能够动态地被载入到运行环境，也可以通过网络来载入所需要的类。这也有利于软件的升级。另外，Java中的类有一个运行时刻的表示，能进行运行时刻的类型检查。")])])]),a._v(" "),J("h2",{attrs:{id:"发展历史"}},[J("a",{staticClass:"header-anchor",attrs:{href:"#发展历史"}},[a._v("#")]),a._v(" 发展历史")]),a._v(" "),J("ul",[J("li",[a._v("1995年5月23日，Java语言诞生")]),a._v(" "),J("li",[a._v("1996年1月，第一个JDK-JDK1.0诞生")]),a._v(" "),J("li",[a._v("1996年4月，10个最主要的操作系统供应商申明将在其产品中嵌入JAVA技术")]),a._v(" "),J("li",[a._v("1996年9月，约8.3万个网页应用了JAVA技术来制作")]),a._v(" "),J("li",[a._v("1997年2月18日，JDK1.1发布")]),a._v(" "),J("li",[a._v("1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议规模之纪录")]),a._v(" "),J("li",[a._v("1997年9月，JavaDeveloperConnection社区成员超过十万")]),a._v(" "),J("li",[a._v("1998年2月，JDK1.1被下载超过2,000,000次")]),a._v(" "),J("li",[a._v("1998年12月8日，JAVA2企业平台J2EE发布")]),a._v(" "),J("li",[a._v("1999年6月，SUN公司发布Java的三个版本：标准版（JavaSE,以前是J2SE）、企业版（JavaEE以前是J2EE）和微型版（JavaME，以前是J2ME）")]),a._v(" "),J("li",[a._v("2000年5月8日，JDK1.3发布")]),a._v(" "),J("li",[a._v("2000年5月29日，JDK1.4发布")]),a._v(" "),J("li",[a._v("2001年6月5日，NOKIA宣布，到2003年将出售1亿部支持Java的手机")]),a._v(" "),J("li",[a._v("2001年9月24日，J2EE1.3发布")]),a._v(" "),J("li",[a._v("2002年2月26日，J2SE1.4发布，自此Java的计算能力有了大幅提升")]),a._v(" "),J("li",[a._v("2004年9月30日18:00PM，J2SE1.5发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，J2SE1.5更名为Java SE 5.0")]),a._v(" "),J("li",[a._v('2005年6月，JavaOne大会召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名，以取消其中的数字"2"：J2EE更名为Java EE，J2SE更名为Java SE，J2ME更名为Java ME')]),a._v(" "),J("li",[a._v("2006年12月，SUN公司发布JRE6.0")]),a._v(" "),J("li",[a._v("2009年04月20日，甲骨文74亿美元收购Sun。取得java的版权。")]),a._v(" "),J("li",[a._v("2010年11月，由于甲骨文对于Java社区的不友善，因此Apache扬言将退出JCP[4]。")]),a._v(" "),J("li",[a._v("2011年7月28日，甲骨文发布 Java7.0 的正式版。")]),a._v(" "),J("li",[a._v("2014年3月18日，Oracle公司发表 Java SE 8。")]),a._v(" "),J("li",[a._v("2017年9月21日，Oracle公司发表 Java SE 9")]),a._v(" "),J("li",[a._v("2018年3月21日，Oracle公司发表 Java SE 10")]),a._v(" "),J("li",[a._v("2018年9月25日，Java SE 11 发布")]),a._v(" "),J("li",[a._v("2019年3月20日，Java SE 12 发布")])])])}),[],!1,null,null,null);v.default=l.exports}}]);