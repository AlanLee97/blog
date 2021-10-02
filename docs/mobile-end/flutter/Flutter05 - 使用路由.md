# 使用路由

页面跳转时需要使用到路由



## 普通页面跳转

![image-20200422160807936](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422160807936.png)

代码

```dart
FlatButton(
    child: Text("跳转到page 1"),
    textColor: Colors.blue,
    onPressed: () {
        //导航到新路由
        Navigator.push( context,
                      MaterialPageRoute(builder: (context) {
                           return Page1();
                       }));
    },
),
```



## 带参数跳转

![image-20200422161234728](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422161234728.png)



main.dart

```dart
//跳转时带参数
FlatButton(
    child: Text("跳转到page 2"),
    textColor: Colors.deepOrange,
    onPressed: () async {
        // 打开`Page2`，并等待返回结果
        var result = await Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) {
                    return Page2(
                        // 路由参数
                        text: "我是 路由参数 内容",
                    );
                },
            ),
        );
        //输出`TipRoute`路由返回结果
        print("路由返回值: $result");
    },
```

page2.dart

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Page2 extends StatelessWidget {
  Page2({
    Key key,
    @required this.text,  // 接收一个text参数
  }) : super(key: key);
  final String text;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("提示"),
      ),
      body: Padding(
        padding: EdgeInsets.all(18),
        child: Center(
          child: Column(
            children: <Widget>[
              Text(text),
              RaisedButton(
                onPressed: () => Navigator.pop(context, "我是返回值"),
                child: Text("返回"),
              )
            ],
          ),
        ),
      ),
    );
  }
}
```



## 命名路由

所谓“命名路由”（Named Route）即有名字的路由，我们可以先给路由起一个名字，然后就可以通过路由名字直接打开新的路由了，这为路由管理带来了一种直观、简单的方式。

### 路由表

要想使用命名路由，我们必须先提供并注册一个路由表（routing table），这样应用程序才知道哪个名字与哪个路由组件相对应。其实注册路由表就是给路由起名字，路由表的定义如下：

```dart
Map<String, WidgetBuilder> routes;
```

它是一个`Map`，key为路由的名字，是个字符串；value是个`builder`回调函数，用于生成相应的路由widget。我们在通过路由名字打开新路由时，应用会根据路由名字在路由表中查找到对应的`WidgetBuilder`回调函数，然后调用该回调函数生成路由widget并返回。

### 注册路由表

![image-20200422163142787](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422163142787.png)

路由表的注册方式很简单，在`MyApp`类的`build`方法中找到`MaterialApp`，添加`routes`属性，代码如下：

```dart
MaterialApp(
    title: '练习路由',
    theme: ThemeData(
        primarySwatch: Colors.blue,
    ),
    home: MyHomePage(title: '练习路由'),
    //注册路由
    routes: {
        "/index": (context) => MyHomePage(title: "主页"),
        "page1": (context) => Page1(),
        "page2": (context) => Page2(),
    },
    //初始化路由首页
    initialRoute: "/",
);
```

现在我们就完成了路由表的注册。上面的代码中`home`路由并没有使用命名路由，如果我们也想将`home`注册为命名路由应该怎么做呢？其实很简单，直接看代码：

```dart
MaterialApp(
  title: 'Flutter Demo',
  initialRoute:"/", //名为"/"的路由作为应用的home(首页)
  theme: ThemeData(
    primarySwatch: Colors.blue,
  ),
  //注册路由表
  routes:{
   "new_page":(context) => NewRoute(),
   "/":(context) => MyHomePage(title: 'Flutter Demo Home Page'), //注册首页路由
  } 
);
```

可以看到，我们只需在路由表中注册一下`MyHomePage`路由，然后将其名字作为`MaterialApp`的`initialRoute`属性值即可，该属性决定应用的初始路由页是哪一个命名路由。

### 通过路由名打开新路由页

要通过路由名称来打开新路由，可以使用`Navigator` 的`pushNamed`方法：

```dart
Future pushNamed(BuildContext context, String routeName,{Object arguments})
```

`Navigator` 除了`pushNamed`方法，还有`pushReplacementNamed`等其他管理命名路由的方法，读者可以自行查看API文档。接下来我们通过路由名来打开新的路由页，修改`FlatButton`的`onPressed`回调代码，改为：

```dart
//使用命名路由跳转页面
FlatButton(
    child: Text("使用命名路由 跳转到page 1"),
    textColor: Colors.blue,
    onPressed: () {
        //导航到 page1
        Navigator.pushNamed(context, "page1");
    },
),
```

![image-20200422162916287](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422162916287.png)

### 命名路由参数传递

在Flutter最初的版本中，命名路由是不能传递参数的，后来才支持了参数；下面展示命名路由如何传递并获取路由参数：

我们先注册一个路由：

```dart
 routes:{
   "page3": (context) => Page3(),
  } ,
```

![image-20200422164626870](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422164626870.png)

在路由页通过`RouteSetting`对象获取路由参数：

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Page3 extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    var arguments = ModalRoute.of(context).settings.arguments;
    print(arguments);

    return Scaffold(
      appBar: AppBar(
        title: Text("Page 3"),
      ),
      body: Padding(
        padding: EdgeInsets.all(18),
        child: Center(
          child: Column(
            children: <Widget>[
              Text(arguments),
            ],
          ),
        ),
      ),
    );
  }
}
```

![image-20200422164500407](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422164500407.png)

![image-20200422164536734](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422164536734.png)

在打开路由时传递参数

```dart
//使用命名路由跳转页面，带参数
FlatButton(
    child: Text("使用命名路由 跳转到page 3"),
    textColor: Colors.blue,
    onPressed: () {
        //导航到 page1
        Navigator.pushNamed(context, "page3", arguments: "我是携带的参数内容");
    },
),
```

### 适配

假设我们也想将上面路由传参示例中的`TipRoute`路由页注册到路由表中，以便也可以通过路由名来打开它。但是，由于`TipRoute`接受一个`text` 参数，我们如何在不改变`TipRoute`源码的前提下适配这种情况？其实很简单：

```dart
MaterialApp(
  ... //省略无关代码
  routes: {
   "tip2": (context){
     return TipRoute(text: ModalRoute.of(context).settings.arguments);
   },
 }, 
);
```



## 路由生成钩子

假设我们要开发一个电商APP，当用户没有登录时可以看店铺、商品等信息，但交易记录、购物车、用户个人信息等页面需要登录后才能看。为了实现上述功能，我们需要在打开每一个路由页前判断用户登录状态！如果每次打开路由前我们都需要去判断一下将会非常麻烦，那有什么更好的办法吗？答案是有！

`MaterialApp`有一个`onGenerateRoute`属性，它在打开命名路由时可能会被调用，之所以说可能，是因为当调用`Navigator.pushNamed(...)`打开命名路由时，如果指定的路由名在路由表中已注册，则会调用路由表中的`builder`函数来生成路由组件；如果路由表中没有注册，才会调用`onGenerateRoute`来生成路由。`onGenerateRoute`回调签名如下：

```dart
Route<dynamic> Function(RouteSettings settings)
```

有了`onGenerateRoute`回调，要实现上面控制页面权限的功能就非常容易：我们放弃使用路由表，取而代之的是提供一个`onGenerateRoute`回调，然后在该回调中进行统一的权限控制，如：

```dart
MaterialApp(
  ... //省略无关代码
  onGenerateRoute:(RouteSettings settings){
      return MaterialPageRoute(builder: (context){
           String routeName = settings.name;
       // 如果访问的路由页需要登录，但当前未登录，则直接返回登录页路由，
       // 引导用户登录；其它情况则正常打开路由。
     }
   );
  }
);
```

> 注意，`onGenerateRoute`只会对命名路由生效。



## 封装路由

如果页面太多的话，路由表就会写得很多，那么多路由表放在main.dart文件里很不舒服，也不好维护，所以新建一个专门的Router类来管理路由表。

在lib目录下创建一个router文件夹、在该文件夹下创建index.dart文件，代码如下

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:practice08_router/pages/page_1.dart';
import 'package:practice08_router/pages/page_2.dart';
import 'package:practice08_router/pages/page_3.dart';

import '../main.dart';

class Router{
  static final routes = {
    "/index": (context) => MyHomePage(title: "主页"),
    "page1": (context) => Page1(),
    "page2": (context) => Page2(),
    "page3": (context) => Page3(),
  };

  static Router _singleton;

  Router._internal();

  factory Router(){
    if(_singleton == null){
      _singleton = Router._internal();
    }

    return _singleton;
  }

  //监听路由
  Route getRouter(RouteSettings settings){
    String routeName = settings.name;
    final Function builder = Router.routes[routeName];

    if(builder == null){
      return null;
    }else{
      return MaterialPageRoute(
        settings: settings,
        builder: (context) => builder(context)
      );
    }
  }
}
```

现在可以把main.dart下的routes属性给去掉了

![image-20200422181759037](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422181759037.png)

![image-20200422175701297](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422175701297.png)

> routes和onGenerateRoute只能选择其中一个

![image-20200422180516577](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200422180516577.png)