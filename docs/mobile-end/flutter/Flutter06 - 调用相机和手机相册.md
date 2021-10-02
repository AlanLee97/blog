# 调用相机和手机相册

## 添加插件依赖

在pubspec.yaml中添加image_picker的依赖

```yml
dependencies:
  flutter:
    sdk: flutter
  image_picker: any		# 添加image_picker的依赖
```

> any可以自动的调用pub的版本分析器来寻找最合适的能够避免冲突的依赖版本并下载



## 调用相机

```dart
//使用相机拍照获取照片
Future getImageFromCamera() async {
    var image = await ImagePicker.pickImage(source: ImageSource.camera);
    setState(() {
        _image = image;
    });
}
```



## 调用手机相册

```dart
//从图库中获取照片
Future getImageFromGallery() async {
    var image = await ImagePicker.pickImage(source:  ImageSource.gallery);
    setState(() {
        _image = image;
    });
}
```



## 代码示例

main.dart

```dart
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:image_picker/image_picker.dart';

void main() {
  runApp(new MyApp());
  if (Platform.isAndroid) {
    // 以下两行 设置android状态栏为透明的沉浸。写在组件渲染之后，是为了在渲染后进行set赋值，覆盖状态栏，写在渲染之前MaterialApp组件会覆盖掉这个值。
    SystemUiOverlayStyle systemUiOverlayStyle =
    SystemUiOverlayStyle(statusBarColor: Colors.transparent);
    SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '相机APP',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  File _image;

  //使用相机拍照获取照片
  Future getImageFromCamera() async {
    var image = await ImagePicker.pickImage(source: ImageSource.camera);
    setState(() {
      _image = image;
    });
  }

  //从图库中获取照片
  Future getImageFromGallery() async {
    var image = await ImagePicker.pickImage(source:  ImageSource.gallery);
    setState(() {
      _image = image;
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('相机APP 示例'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Center(
            child: _image == null
                ? Text('未选中图片')
                : Image.file(_image),
          ),
          
          RaisedButton(
            onPressed: getImageFromGallery,
            child: Text("从相册选取图片"),
          )
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: getImageFromCamera,
        tooltip: 'Pick Image',
        child: Icon(Icons.add_a_photo),
      ),
    );
  }
}

```



iOS需要再项目内配置Info.plist文件，添加如下代码，申请访问权。

```xml
<key>NSPhotoLibraryUsageDescription</key>
<string>测试访问手机相册</string>
<key>NSCameraUsageDescription</key>
<string>测试访问手机相机</string>
```

