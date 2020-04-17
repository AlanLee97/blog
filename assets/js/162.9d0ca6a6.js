(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{385:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"第8次题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第8次题"}},[a._v("#")]),a._v(" 第8次题")]),a._v(" "),s("p",[s("strong",[a._v("1. 下面关于垃圾收集的描述哪个是错误的？")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("使用垃圾收集的程序不需要明确释放对象\n现代垃圾收集能够处理循环引用问题\n垃圾收集能提高程序员效率\n使用垃圾收集的语言没有内在泄漏问题\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("p",[a._v("使用垃圾收集的语言没有内在泄漏问题")]),a._v(" "),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("内存泄露(Memory Leak)是指一个不再被使用的对象或者变量还在内存中占有存储空间。在C/C++语言中，内存泄露出现在开发人员忘记释放已分配的内存就会造成内存泄露。在java语言中引入垃圾回收机制，有GC负责进行回收不再使用的对象，释放内存。但是还是会存在内存泄露的问题。\n内存泄露主要有两种情况：1.在堆中申请的空间没有释放。2.对象已不再被使用(注意：这里的不在被使用是指对程序来说没有用处，如数据库连接使用后没有关。但是还是存在着引用)，但是仍然在内存中保留着。GC机制的引入只能解决第一种情况，对于第2种情况无法保证不再使用的对象会被释放。java语言中的内存泄露主要指第2种情况。\n内存泄露的原因：1.静态集合类。如HashMap和Vector。这些容器是静态的，生命周期和程序的生命周期一致，那么在容器中对象的生命周期也和其一样，对象在程序结束之前将不能被释放，从而会造成内存泄露。2.各种连接，如数据库连接，网络连接，IO连接，不再使用时如果连接不释放容易造成内存泄露。3.释放对象时往往没有相应的删除可能会导致内存泄露。\n内存溢出（OOM）是指程序在申请内存时没有足够的内存供使用，进而导致程序崩溃这是结果描述。内存泄露（Memory Leak）最终会导致内存溢出。\n")])])]),s("p",[s("strong",[a._v("2. 关于抽象类与最终类，下列说法错误的是？")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("抽象类能被继承，最终类只能被实例化。\n抽象类和最终类都可以被声明使用\n抽象类中可以没有抽象方法，最终类中可以没有最终方法\n抽象类和最终类被继承时，方法可以被子类覆盖\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("p",[a._v("抽象类和最终类被继承时，方法可以被子类覆盖")]),a._v(" "),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("p",[a._v("1，抽象类中可以有抽象方法，也可以没有抽象方法。")]),a._v(" "),s("p",[a._v("2，抽象类当然可以被继承，因为它就是用来继承的，")]),a._v(" "),s("p",[a._v("3，继承抽象类，若有抽象方法，则子类必须将其抽象方法实现，")]),a._v(" "),s("p",[a._v("4，抽象类中的非抽象方法可以被重写。")]),a._v(" "),s("p",[a._v("最终类和抽象类正好相反")]),a._v(" "),s("p",[a._v("5，加上final的类就叫最终类，加上final的方法就叫最终方法，")]),a._v(" "),s("p",[a._v("6，最终类中可以有最终方法也可以没有")]),a._v(" "),s("p",[a._v("7，最终类不能有子类，最终方法不能被重写")]),a._v(" "),s("p",[s("strong",[a._v("3. 下面有关jdbc statement的说法错误的是？")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("A、JDBC提供了Statement、PreparedStatement 和 CallableStatement三种方式来执行查询语句，其中 Statement 用于通用查询， PreparedStatement 用于执行参数化查询，而 CallableStatement则是用于存储过程\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("B、对于PreparedStatement来说，数据库可以使用已经编译过及定义好的执行计划，由于 PreparedStatement 对象已预编译过，所以其执行速度要快于 Statement 对象”\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C、PreparedStatement中，“?” 叫做占位符，一个占位符可以有一个或者多个值\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("D、PreparedStatement可以阻止常见的SQL注入式攻击\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("p",[a._v("C")]),a._v(" "),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("p",[a._v("1.Statement、PreparedStatement和CallableStatement都是接口(interface)。\n2.Statement继承自Wrapper、PreparedStatement继承自Statement、CallableStatement继承自PreparedStatement。\n\\3.\nStatement接口提供了执行语句和获取结果的基本方法；\nPreparedStatement接口添加了处理 IN 参数的方法；\nCallableStatement接口添加了处理 OUT 参数的方法。\n\\4.\na.Statement:\n普通的不带参的查询SQL；支持批量更新,批量删除;\nb.PreparedStatement:\n可变参数的SQL,编译一次,执行多次,效率高;\n安全性好，有效防止Sql注入等问题;\n支持批量更新,批量删除;\nc.CallableStatement:\n继承自PreparedStatement,支持带参数的SQL操作;\n支持调用存储过程,提供了对输出和输入/输出参数(INOUT)的支持;")]),a._v(" "),s("p",[a._v("Statement每次执行sql语句，数据库都要执行sql语句的编译 ，\n最好用于仅执行一次查询并返回结果的情形，效率高于PreparedStatement。")]),a._v(" "),s("p",[a._v("PreparedStatement是预编译的，使用PreparedStatement有几个好处\n\\1. 在执行可变参数的一条SQL时，PreparedStatement比Statement的效率高，因为DBMS预编译一条SQL当然会比多次编译一条SQL的效率要高。\n\\2. 安全性好，有效防止Sql注入等问题。\n\\3. 对于多次重复执行的语句，使用PreparedStament效率会更高一点，并且在这种情况下也比较适合使用batch；\n\\4. 代码的可读性和可维护性。")]),a._v(" "),s("p",[s("strong",[a._v("4. 关于下面的程序Test.java说法正确的是(  )。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Test")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" z"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("程序有编译错误\n")])])]),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("p",[a._v("被static修饰的变量称为静态变量，静态变量属于整个类，而局部变量属于方法，只在该方法内有效，所以static不能修饰局部变量")]),a._v(" "),s("p",[s("strong",[a._v("5. 对Collection和Collections描述正确的是")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("A、Collection是java.util下的类，它包含有各种有关集合操作的静态方法\nB、Collection是java.util下的接口，它是各种集合结构的父接口\nC、Collections是java.util下的接口，它是各种集合结构的父接口\nD、Collections是java.util下的类，它包含有各种有关集合操作的静态方法\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("p",[a._v("java.util.Collection  是一个集合接口。它提供了对集合对象进行基本操作的通用接口方法。Collection接口在Java  类库中有很多具体的实现。Collection接口的意义是为各种具体的集合提供了最大化的统一操作方式。")]),a._v(" "),s("p",[a._v("java.util.Collections 是一个包装类。它包含有各种有关集合操作的静态多态方法。此类不能实例化，就像一个工具类，服务于Java的Collection框架。")]),a._v(" "),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("p",[s("strong",[a._v("6. 关于ThreadLocal类 以下说法正确的是")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("A、ThreadLocal继承自Thread\nB、ThreadLocal实现了Runnable接口\nC、ThreadLocal重要作用在于多线程间的数据共享\nD、ThreadLocal是采用哈希表的方式来为每个线程都提供一个变量的副本\nE、ThreadLocal保证各个线程间数据安全，每个线程的数据不会被另外线程访问和破坏\n")])])]),s("p",[s("strong",[a._v("答案")])]),a._v(" "),s("p",[s("strong",[a._v("解释")])]),a._v(" "),s("p",[a._v("链接：https://www.nowcoder.com/questionTerminal/b82e4a85a66e4dc488a5ab49094976e9\n来源：牛客网")]),a._v(" "),s("p",[a._v("选DE.")]),a._v(" "),s("p",[a._v("1、ThreadLocal的类声明：")]),a._v(" "),s("p",[a._v("public class ThreadLocal"),s("T")],1),a._v(" "),s("p",[a._v("可以看出ThreadLocal并没有继承自Thread，也没有实现Runnable接口。所以AB都不对。")]),a._v(" "),s("p",[a._v("2、ThreadLocal类为每一个线程都维护了自己独有的变量拷贝。每个线程都拥有了自己独立的一个变量。")]),a._v(" "),s("p",[a._v("所以ThreadLocal重要作用并不在于多线程间的数据共享，而是数据的独立，C选项错。")]),a._v(" "),s("p",[a._v("由于每个线程在访问该变量时，读取和修改的，都是自己独有的那一份变量拷贝，不会被其他线程访问，")]),a._v(" "),s("p",[a._v("变量被彻底封闭在每个访问的线程中。所以E对。")]),a._v(" "),s("p",[a._v("3、ThreadLocal中定义了一个哈希表用于为每个线程都提供一个变量的副本：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalMap")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("WeakReference")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** The value associated with this ThreadLocal. */")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocal")]),a._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n            value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** \n    * The table, resized as necessary. \n    * table.length MUST always be a power of two. \n    */")]),a._v(" \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),s("p",[a._v("所以D对。")])])}),[],!1,null,null,null);t.default=n.exports}}]);