# == 和 equals()的区别

#### 1.== 和 equals():

(1)“==” 用于比较基本数据类型时比较的是值，用于比较引用类型时比较的是引用指向的地址。

(2)Object 中的equals() 与 “==” 的作用相同，但String类重写了equals()方法，比较的是对象中的内容。

```java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```



#### 2.String对象的两种创建方式:

(1)第一种方式: String str1 = "aaa"; 是在常量池中获取对象("aaa" 属于字符串字面量，因此编译时期会在常量池中创建一个字符串对象，如果常量池中已经存在该字符串对象则直接引用)

(2)第二种方式: String str2 = new String("aaa") ; 一共会创建两个字符串对象一个在堆中，一个在常量池中（前提是常量池中还没有 "aaa" 象）。

   ```java
System.out.println(str1==str2);//false
   ```



#### 3.String类型的常量池比较特殊。它的主要使用方法有两种：

(1)直接使用双引号声明出来的String对象会直接存储在常量池中。
(2)如果不是用双引号声明的String对象,可以使用 String 提供的 intern 方法。 String.intern() 是一个 Native 方法，它的作用是： 如果运行时常量池中已经包含一个等于此 String 对象内容的字符串，则返回常量池中该字符串的引用； 如果没有，则在常量池中创建与此 String 内容相同的字符串，并返回常量池中创建的字符串的引用。

```java
String s1 = new String("AAA");
String s2 = s1.intern();
String s3 = "AAA";
System.out.println(s2);//AAA
System.out.println(s1 == s2);//false，
```

因为一个是堆内存中的String对象一个是常量池中的String对象，

 ```java
System.out.println(s2 == s3);//true， s1,s2指向常量池中的”AAA“
 ```



#### 4字符串拼接：

```java
String a = "a";
String b = "b";

String str1 = "a" + "b";//常量池中的对象
String str2 = a + b; //在堆上创建的新的对象  
String str3 = "ab";//常量池中的对象
System.out.println(str1 == str2);//false
System.out.println(str1 == str3);//true 
System.out.println(str2 == str3);//false
```

