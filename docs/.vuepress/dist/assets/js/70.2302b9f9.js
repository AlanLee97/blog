(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{408:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第7次题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第7次题"}},[t._v("#")]),t._v(" 第7次题")]),t._v(" "),a("p",[a("strong",[t._v("1. 要使某个类能被同一个包中的其他类访问，但不能被这个包以外的类访问，可以( )")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("让该类不使用任何关键字\n使用private关键字\n使用protected关键字\n使用void关键字\n")])])]),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("p",[t._v("让该类不使用任何关键字")]),t._v(" "),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("default和protected的区别是：")]),t._v(" "),a("p",[t._v("前者只要是外部包，就不允许访问。")]),t._v(" "),a("p",[t._v("后者只要是子类就允许访问，即使子类位于外部包。")]),t._v(" "),a("p",[t._v("总结：default拒绝一切包外访问；protected接受包外的子类访问")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200202210740-900424.png",alt:"img"}})]),t._v(" "),a("p",[a("strong",[t._v("2. 在 main() 方法中给出的字节数组，如果将其显示到控制台上，需要（ ）")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("标准输出流System.out.println()。\n建立字节输出流。\n建立字节输入流。\n标准输入流System.in.read()。\n")])])]),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("p",[t._v("标准输出流System.out.println()。")]),t._v(" "),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("out是java.lang.System类中的一个字段，out是“标准“”输出流，public static final "),a("a",{attrs:{href:"http://tool.oschina.net/uploads/apidocs/jdk-zh/java/io/PrintStream.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PrintStream"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("out是PrintStream类型，PrintStream是包装流，你传入什么，他就输出什么")]),t._v(" "),a("p",[a("strong",[t._v("3. 选项中哪一行代码可以替换 //add code here 而不产生编译错误")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" constInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//add code here")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("选项")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public abstract void method(int a);\nconsInt=constInt+5;\npublic int method();\npublic abstract void anotherMethod(){}\n")])])]),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("p",[t._v("public abstract void method(int a);")]),t._v(" "),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("A：抽象类可以包含抽象方法")]),t._v(" "),a("p",[t._v("B：类中定义成员和方法，不能直接进行运算，可以写在代码块{}或者静态代码块中static{}中")]),t._v(" "),a("p",[t._v("C: 与第四行想要构成重载，二者区别是返回类型，但是返回类型不能作为重载的依据")]),t._v(" "),a("p",[t._v("D: 该方法使用abstract修饰，是抽象方法，但是他有方法体(带有{}的就是方法体，即使里面是空的)，就不能作为抽象方法")]),t._v(" "),a("p",[a("strong",[t._v("4. Test.main()函数执行后的输出是（ ）")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("选项")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  6 7 7\n")])])])]),t._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  22 34 17\n")])])])]),t._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  22 74 74\n")])])])]),t._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  11 17 34\n")])])])])]),t._v(" "),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("p",[t._v("22 34 17")]),t._v(" "),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("p",[t._v("思考和解决这个题的主要核心在于对java多态的理解。个人理解时，执行对象实例化过程中遵循多态特性 ==> 调用的方法都是***将要实例化的子类中***的重写方法，只有明确调用了super.xxx关键词或者是子类中没有该方法时，才会去调用父类相同的同名方法。")]),t._v(" "),a("p",[a("strong",[t._v("Step 1: new B()构造一个B类的实例")])]),t._v(" "),a("p",[t._v("此时super(5)语句调用显示调用父类A带参的构造函数，该构造函数调用setValue(v)，这里有两个注意点一是虽然构造函数是A类的构造函数，但此刻正在初始化的对象是B的一个实例，"),a("strong",[t._v("因此这里调用的实际是B类的setValue方法")]),t._v("，于是调用B类中的setValue方法 ==> 而B类中setValue方法显示调用父类的setValue方法，将B实例的value值设置为2 x 5 = "),a("strong",[t._v("10")]),t._v("。\n紧接着，B类的构造函数还没执行完成，继续执行setValue(getValue()- 3)   // 备注1语句。")]),t._v(" "),a("p",[t._v("先执行getValue方法，B类中没有重写getValue方法，因此调用父类A的getValue方法。这个方法比较复杂，需要分步说清楚：")]),t._v(" "),a("ol",[a("li",[t._v("调用getValue方法之前，B的成员变量value值为10。")]),t._v(" "),a("li",[t._v("value++ 执行后， B的成员变量value值为11，此时开始执行到return语句，将11这个值作为getValue方法的返回值返回出去")]),t._v(" "),a("li",[t._v("但是由于getValue块被try finally块包围，因此finally中的语句无论如何都将被执行，所以步骤2中"),a("strong",[t._v("11这个返回值会先暂存起来")]),t._v("，到finally语句块执行完毕后再真正返回出去。")]),t._v(" "),a("li",[t._v("这里有很重要的一点：finally语句块中 this.setValue(value)方法调用的是"),a("strong",[t._v("B类的setValue方法")]),t._v("。为什么？因为此刻正在初始化的是B类的一个对象（运行时多态），就像最开始第一步提到的一样(而且这里用了使用了this关键词显式指明了调用当前对象的方法)。因此，此处会再次调用B类的setValue方法，同上，super.关键词显式调用A的setValue方法，"),a("strong",[t._v("将B的value值设置成为了2 * 11 = 22")]),t._v("。")]),t._v(" "),a("li",[t._v("因此第一个打印项为22。")]),t._v(" "),a("li",[t._v("finally语句执行完毕 会把刚刚暂存起来的11 返回出去，也就是说这么经历了这么一长串的处理，getValue方法最终的返回值是11。")])]),t._v(" "),a("p",[t._v("回到前面标注了 "),a("strong",[t._v("//备注1")]),t._v(" 的代码语句，其最终结果为setValue(11-3)=>setValue(8)\n而大家肯定也知道，这里执行的setValue方法，将会是B的setValue方法。 之后B的value值再次变成了2*8 = 16;")]),t._v(" "),a("p",[a("strong",[t._v("Step2: new B().getValue()")])]),t._v(" "),a("p",[t._v("B类中没有独有的getValue方法，此处调用A的getValue方法。同Step 1，")]),t._v(" "),a("ol",[a("li",[t._v("调用getValue方法之前，B的成员变量value值为"),a("strong",[t._v("16")]),t._v("。")]),t._v(" "),a("li",[t._v("value++ 执行后， B的成员变量value值为17，此时执行到return语句，会将17这个值作为getValue方法的返回值返回出去")]),t._v(" "),a("li",[t._v("但是由于getValue块被try finally块包围而finally中的语句无论如何都一定会被执行，所以步骤2中"),a("strong",[t._v("17这个返回值会先暂存起来")]),t._v("，到finally语句块执行完毕后再真正返回出去。")]),t._v(" "),a("li",[t._v("finally语句块中继续和上面说的一样: this.setValue(value)方法调用的是"),a("strong",[t._v("B类的setValue()方法将B的value值设置成为了2 * 17 = 34")]),t._v("。")]),t._v(" "),a("li",[t._v("因此第二个打印项为34。")]),t._v(" "),a("li",[t._v("finally语句执行完毕 会把刚刚暂存起来的17返回出去。")]),t._v(" "),a("li",[t._v("因此new B().getValue()最终的返回值是17.")])]),t._v(" "),a("p",[a("strong",[t._v("Step3: main函数中的System.out.println")])]),t._v(" "),a("p",[t._v("将刚刚返回的值打印出来，也就是第三个打印项：17")]),t._v(" "),a("p",[t._v("最终结果为 "),a("strong",[t._v("22 34 17")]),t._v("。 如果朋友们在看的过程中仍然有疑问，可以亲自把代码复制进去ide，在关键语句打下断点，查看调用方法的对象以及运行时的对象值，可以有更深刻的理解。")]),t._v(" "),a("p",[t._v("本地运行结果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/1219423_1538109725974_491B23B3BE1FD36FD4F99ABFAFBE5C55.png",alt:"代码"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/1219423_1538109741806_4D884FEDA46E8E9FFD79AF64C1DCAC69.png",alt:"输出结果"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li")]),t._v(" "),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("p",[a("strong",[t._v("解释")])])])}),[],!1,null,null,null);s.default=e.exports}}]);