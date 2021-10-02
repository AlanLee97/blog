# 状态栏透明

在main函数中添加如下代码

```dart
if (Platform.isAndroid) {
    // 以下两行 设置android状态栏为透明的沉浸。写在组件渲染之后，是为了在渲染后进行set赋值，覆盖状态栏，写在渲染之前MaterialApp组件会覆盖掉这个值。
    SystemUiOverlayStyle systemUiOverlayStyle =
        SystemUiOverlayStyle(statusBarColor: Colors.transparent);
    SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
}
```



> 示例
>
> ```dart
> void main() {
>   runApp(new MyApp());
>   if (Platform.isAndroid) {
>     // 以下两行 设置android状态栏为透明的沉浸。写在组件渲染之后，是为了在渲染后进行set赋值，覆盖状态栏，写在渲染之前MaterialApp组件会覆盖掉这个值。
>     SystemUiOverlayStyle systemUiOverlayStyle =
>     SystemUiOverlayStyle(statusBarColor: Colors.transparent);
>     SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
>   }
> }
> ```
>
> 

