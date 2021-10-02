# 使用Tabbar



- with TickerProviderStateMixin
- TabController _tabController;
- //初始化TabController
   _tabController = TabController(length: tabs.length, vsync: this);
- List tabs = ["tab1", "tab2", "tab3"];
- controller: _tabController,
- tabs: tabs.map((e) => Tab(text: e)).toList(),



## 实例

```dart

import 'package:flutter/material.dart';

class TestTabbarPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return TestTabbarState();
  }

}

class TestTabbarState extends State<TestTabbarPage> with TickerProviderStateMixin{

  TabController _tabController;
  List tabs = ["tab1", "tab2", "tab3"];

  @override
  void initState() {
    super.initState();

    //初始化TabController
    _tabController = TabController(length: tabs.length, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        bottom: TabBar(
          controller: _tabController,
          tabs: tabs.map((e) => Tab(text: e)).toList(),
        ),
      ),
    );
  }

}
```



### 效果

![image-20200505105146707](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200505105146707.png)



## 添加TabbarView

通过`TabBar`我们只能生成一个静态的菜单，真正的Tab页还没有实现。由于`Tab`菜单和Tab页的切换需要同步，我们需要通过`TabController`去监听Tab菜单的切换去切换Tab页。

如果我们Tab页可以滑动切换的话，还需要在滑动过程中更新TabBar指示器的偏移！显然，要手动处理这些是很麻烦的，为此，Material库提供了一个`TabBarView`组件，通过它不仅可以轻松的实现Tab页，而且可以非常容易的配合TabBar来实现同步切换和滑动状态同步

```dart
body: TabBarView(
    controller: _tabController,
    children: tabs.map((e) {
        return Container(
            alignment: Alignment.center,
            child: Text(e),
        );
    }).toList(),
),
```

现在，无论是点击导航栏Tab菜单还是在页面上左右滑动，Tab页面都会切换，并且Tab菜单的状态和Tab页面始终保持同步！那它们是如何实现同步的呢？细心的读者可能已经发现，上例中`TabBar`和`TabBarView`的`controller`是同一个！正是如此，`TabBar`和`TabBarView`正是通过同一个`controller`来实现菜单切换和滑动状态同步的，有关`TabController`的详细信息

### 效果

![image-20200505110909905](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200505110909905.png)



## 完整代码

```dart

import 'package:flutter/material.dart';

class TestTabbarPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return TestTabbarState();
  }

}

class TestTabbarState extends State<TestTabbarPage> with TickerProviderStateMixin{

  TabController _tabController;
  List tabs = ["tab1", "tab2", "tab3"];

  @override
  void initState() {
    super.initState();

    //初始化TabController
    _tabController = TabController(length: tabs.length, vsync: this);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        bottom: TabBar(
          controller: _tabController,
          tabs: tabs.map((e) => Tab(text: e)).toList(),
        ),
      ),
      
      body: TabBarView(
        controller: _tabController,
        children: tabs.map((e) {
          return Container(
            alignment: Alignment.center,
            child: Text(e),
          );
        }).toList(),
      ),
    );
  }

}
```

