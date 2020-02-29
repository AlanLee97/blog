(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{381:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"第9次题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第9次题"}},[s._v("#")]),s._v(" 第9次题")]),s._v(" "),a("p",[a("strong",[s._v("1.有以下代码片段：")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" str2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"he"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"llo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("str2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("strong",[s._v("请问输出的结果是：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("true\n都不对\nnull\nfalse\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("p",[s._v("false")]),s._v(" "),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("1）String类是final类，也即意味着String类不能被继承，并且它的成员方法都默认为final方法。在Java中，被final修饰的类是不允许被继承的，并且该类中的成员方法都默认为final方法。")]),s._v(" "),a("p",[s._v("2）String类底层是char数组来保存字符串的。")]),s._v(" "),a("p",[s._v("对String对象的任何改变都不影响到原对象，相关的任何change操作都会生成新的对象")]),s._v(" "),a("p",[a("em",[s._v("字符串常量池")])]),s._v(" "),a("p",[s._v("在class文件中有一部分来存储编译期间生成的字面常量以及符号引用，这部分叫做class文件常量池，在运行期间对应着方法区的运行时常量池。")]),s._v(" "),a("p",[s._v("JVM为了减少字符串对象的重复创建，其维护了一个特殊的内存，这段内存被成为字符串常量池或者字符串字面量池")]),s._v(" "),a("p",[a("em",[s._v("工作原理")])]),s._v(" "),a("p",[s._v("当代码中出现字面量形式创建字符串对象时，JVM首先会对这个字面量进行检查，如果字符串常量池中存在相同内容的字符串对象的引用，则将这个引用返回，否则新的字符串对象被创建，然后将这个引用放入字符串常量池，并返回该引用。")]),s._v(" "),a("p",[a("em",[s._v("实现前提")])]),s._v(" "),a("p",[s._v("字符串常量池实现的前提条件就是Java中String对象是不可变的，这样可以安全保证多个变量共享同一个对象。如果Java中的String对象可变的话，一个引用操作改变了对象的值，那么其他的变量也会受到影响，显然这样是不合理的。")]),s._v(" "),a("p",[s._v('String str1 = "hello";')]),s._v(" "),a("p",[s._v("这里的str1指的是方法区中的字符串常量池中的“hello”，编译时期就知道的；")]),s._v(" "),a("p",[s._v('String str2 = "he" + new String("llo");')]),s._v(" "),a("p",[s._v("这里的str2必须在运行时才知道str2是什么，所以它是指向的是堆里定义的字符串“hello”，所以这两个引用是不一样的。")]),s._v(" "),a("p",[s._v("如果用str1.equal(str2)，那么返回的是true；因为String类重写了equals()方法。")]),s._v(" "),a("p",[s._v('编译器没那么智能,它不知道"he" + new String("llo")的内容是什么,所以才不敢贸然把"hello"这个对象的引用赋给str2.')]),s._v(" "),a("p",[s._v('如果语句改为:"he"+"llo"这样就是true了。')]),s._v(" "),a("p",[s._v('new String("zz")实际上创建了2个String对象，就是使用“zz”通过双引号创建的（在字符串常量池），另一个是通过new创建的（在堆里）。只不过他们的创建的时期不同，一个是编译期，一个是运行期。')]),s._v(" "),a("p",[s._v('String s = "a"+"b"+"c";')]),s._v(" "),a("p",[s._v('语句中，“a”,"b", "c"都是常量，编译时就直接存储他们的字面值，而不是他们的引用，在编译时就直接将它们连接的结果提取出来变成"abc"了。')]),s._v(" "),a("p",[a("strong",[s._v("2. 以下不是修饰符final的作用的是( )。")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("修饰常量\n修饰不可被继承的类\n修饰不可变类\n修饰不可覆盖的方法\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("修饰不可变类\n")])])]),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("final的作用：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("修饰变量，变量的引用地址不可变，但是地址中的内容可以变。")])]),s._v(" "),a("li",[a("p",[s._v("修饰方法，方法不可被重写，但是还是可以重载")])]),s._v(" "),a("li",[a("p",[s._v("修饰类，类不可继承。")])])]),s._v(" "),a("p",[s._v("不可变类，说的是一个类一旦被实例化，就不可改变自身的状态。常见的比如String和基本数据类型的包装类，对于这种不可变类，一旦在进行引用传递的时候，形参一开始就和实际参数指向的不是一个地址，所以在方法中对形参的改变，并不会影响实际参数。")]),s._v(" "),a("p",[s._v("不可变类的主要用途是在多线程环境下确保对象的线程安全。")]),s._v(" "),a("p",[s._v("不可变类一般建议使用final来修饰（比如String就是final类），否则子类可以通过继承不可变类的方式，增加setter方法，从而改变对象的状态，破坏了不可变的约束。")]),s._v(" "),a("p",[a("strong",[s._v("3. 建立Statement对象的作用是？")])]),s._v(" "),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("执行SQL语句\n")])])]),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("1、Statement对象用于执行不带参数的简单SQL语句。")]),s._v(" "),a("p",[s._v("2、Prepared Statement 对象用于执行预编译SQL语句。")]),s._v(" "),a("p",[s._v("3、Callable Statement对象用于执行对存储过程的调用。")]),s._v(" "),a("p",[a("strong",[s._v("4. 下面关于hibernate核心接口说明错误的是？")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("A、Configuration 接口：配置Hibernate，根据其启动hibernate，创建SessionFactory 对象\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("B、SessionFactory 接口：负责保存、更新、删除、加载和查询对象，是线程不安全的，避免多个线程共享同一个session，是轻量级、一级缓存\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("C、Query 和Criteria 接口：执行数据库的查询\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("D、Transaction 接口：管理事务\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("p",[s._v("B")]),s._v(" "),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("1、Configuration接口：配置Hibernate，根据其启动Hibernate，创建SessionFactory对象；\n2、SessionFactory接口：初始化Hibernate，充当数据存储源的***，创建session对象、SessionFactory是线程安全的，意味着它的同一个实例可以被应用的多个线程共享，是重量级二级缓存；")]),s._v(" "),a("p",[s._v("3、session接口：负责保存、更新、删除、加载和查询对象，是一个非线程安全的，避免多个线程共享一个session，是轻量级，一级缓存。")]),s._v(" "),a("p",[s._v("4、Transaction接口：管理事务。可以对事务进行提交和回滚；")]),s._v(" "),a("p",[s._v("5、Query和Criteria接口：执行数据库的查询。")]),s._v(" "),a("p",[a("strong",[s._v("Hibernate知识点")])]),s._v(" "),a("p",[s._v("Hibernate的API一共有6个，分别为:Session、SessionFactory、Transaction、Query、Criteria和Configuration。通过这些接口，可以对持久化对象进行存取、事务控制。")]),s._v(" "),a("p",[a("strong",[s._v("Session")]),s._v("\nSession接口负责执行被持久化对象的CRUD操作(CRUD的任务是完成与数据库的交流，包含了很多常见的SQL语句)。但需要注意的是Session对象是非线程安全的。同时，Hibernate的session不同于JSP应用中的HttpSession。这里当使用session这个术语时，其实指的是Hibernate中的session，而以后会将HttpSession对象称为用户session。")]),s._v(" "),a("p",[a("strong",[s._v("SessionFactory")]),s._v("\nSessionFactory接口负责初始化Hibernate。它充当数据存储源的***，并负责创建Session对象。这里用到了工厂模式。需要注意的是SessionFactory并不是轻量级的，因为一般情况下，一个项目通常只需要一个SessionFactory就够，当需要操作多个数据库时，可以为每个数据库指定一个SessionFactory。")]),s._v(" "),a("p",[a("strong",[s._v("Transaction")]),s._v("\nTransaction 接口是一个可选的API，可以选择不使用这个接口，取而代之的是Hibernate 的设计者自己写的底层事务处理代码。 Transaction 接口是对实际事务实现的一个抽象，这些实现包括JDBC的事务、JTA 中的UserTransaction、甚至可以是CORBA 事务。之所以这样设计是能让开发者能够使用一个统一事务的操作界面，使得自己的项目可以在不同的环境和容器之间方便地移植。")]),s._v(" "),a("p",[a("strong",[s._v("Query")]),s._v("\nQuery接口让你方便地对数据库及持久对象进行查询，它可以有两种表达方式：HQL语言或本地数据库的SQL语句。Query经常被用来绑定查询参数、限制查询记录数量，并最终执行查询操作。")]),s._v(" "),a("p",[a("strong",[s._v("Criteria")]),s._v("\nCriteria接口与Query接口非常类似，允许创建并执行面向对象的标准化查询。值得注意的是Criteria接口也是轻量级的，它不能在Session之外使用。")]),s._v(" "),a("p",[a("strong",[s._v("Configuration")]),s._v("\nConfiguration 类的作用是对Hibernate 进行配置，以及对它进行启动。在Hibernate 的启动过程中，Configuration 类的实例首先定位映射文档的位置，读取这些配置，然后创建一个SessionFactory对象。虽然Configuration 类在整个Hibernate 项目中只扮演着一个很小的角色，但它是启动hibernate 时所遇到的第一个对象。")]),s._v(" "),a("p",[a("strong",[s._v("5. JAVA中，下列语句哪一个正确（）")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("A、class中的constructor不可省略\n")])])]),a("div",{staticClass:"language-JAVA extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("B")]),s._v("、constructor必须与"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("同名，但方法不能与"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("同名\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("C、constructor在一个对象被new时执行\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("D、一个class只能定义一个constructor\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("p",[s._v("C、constructor在一个对象被new时执行")]),s._v(" "),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("A 省略构造函数,编译器会自动生成。")]),s._v(" "),a("p",[s._v("D 构造函数可以重载")]),s._v(" "),a("p",[s._v("B 方法是可以和类名同名的，和构造方法唯一的区别就是，构造方法没有返回值。如下代码：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),s._v(" testConStructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    testConStructor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TestConStructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("6. 关于equals和hashCode描述正确的是  ()")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("A、两个obj，如果equals()相等，hashCode()一定相等（符合代码规范的情况下）\nB、两个obj，如果hashCode()相等，equals()不一定相等\nC、两个不同的obj， hashCode()可能相等\nD、其他都不对\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("p",[s._v("A、两个obj，如果equals()相等，hashCode()一定相等（符合代码规范的情况下）\nB、两个obj，如果hashCode()相等，equals()不一定相等\nC、两个不同的obj， hashCode()可能相等")]),s._v(" "),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("“==”：作用是判断两个对象的地址是否相等，即，判断两个对象是不是同一个对象，如果是基本数据类型，则比较的是值是否相等。")]),s._v(" "),a("p",[s._v('"equal"：作用是判断两个对象是否相等，但一般有两种使用情况')]),s._v(" "),a("p",[s._v("​       1.类没有覆盖equals()方法,则相当于通过“==”比较")]),s._v(" "),a("p",[s._v("​       2.类覆盖equals()方法，一般，我们都通过equals()方法来比较两个对象的内容是否相等，相等则返回true,如String")]),s._v(" "),a("p",[s._v("地址比较是通过计算对象的哈希值来比较的，hashcode属于Object的本地方法，")]),s._v(" "),a("p",[s._v("对象相等（地址相等），hashcode相等；")]),s._v(" "),a("p",[s._v("对象不相等，hashcode()可能相等，哈希冲突。")]),s._v(" "),a("p",[a("strong",[s._v("7. 关于身份证号，以下正确的正则表达式为（   ）")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("A、isIDCard=/^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/;\n\nB、isIDCard=/^[1-9]\\d{7}((9\\d)|(1[0-2]))(([0|1|2]\\d)|3[9-1])\\d{3}$/;\n\nC、isIDCard=/^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{4}$/;\n\nD、isIDCard=/^[1-9]\\d{5}[1-9]\\d{3}((9\\d)|(1[9-2]))(([0|1|2]\\d)|3[9-1])\\d{4}$/;\n")])])]),a("p",[a("strong",[s._v("答案")])]),s._v(" "),a("p",[s._v("AC")]),s._v(" "),a("p",[a("strong",[s._v("解释")])]),s._v(" "),a("p",[s._v("正确选项")]),s._v(" "),a("p",[s._v("A选项：isIDCard=/^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$/")]),s._v(" "),a("p",[s._v("C选项：isIDCard=/^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{4}$/\n^：起始符号，^x表示以x开头\n$：结束符号，x$表示以x结尾\n[n-m]：表示从n到m的数字\n\\d：表示数字，等同于[0-9]\nX{m}：表示由m个X字符构成，\\d{4}表示4位数字")]),s._v(" "),a("p",[s._v("15位身份证的构成：六位出生地区码+六位出身日期码+三位顺序码\n18位身份证的构成：六位出生地区码+八位出生日期码+三位顺序码+一位校验码")]),s._v(" "),a("p",[s._v("C选项的构成：\n[1-9]\\d{5}：六位出生地区码，出生地区码没有以0开头，因此第一位为[1-9]。\n[1-9]\\d{3}：八位出生日期码的四位年份，同样年份没有以0开头。\n((0\\d)|(1[0-2]))：八位出生日期码的两位月份，| 表示或者，月份的形式为0\\d或者是10、11、12。\n(([0|1|2]\\d)|3[0-1])：八位出生日期码的两位日期，日期由01至31。\n\\d{4}：三位顺序码+一位校验码，共四位。\nA选项的构成：\n[1-9]\\d{7}：六位出生地区码+两位出生日期码的年份，这里的年份指后两位，因此没有第一位不能为0的限制，所以合并了。\n后面的与C选项类似了。")])])}),[],!1,null,null,null);t.default=e.exports}}]);