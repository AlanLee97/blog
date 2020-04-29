# 去除debug字样

在MaterialApp中添加如下代码

```dart
debugShowCheckedModeBanner: false,
```



例如

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyApp',
      debugShowCheckedModeBanner: false,	//去除debug字样
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}
```

