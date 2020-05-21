# 遇到的问题



## 问题1

添加完image_picker插件后热更新，出现该错误

```xml
E/flutter ( 6251): [ERROR:flutter/lib/ui/ui_dart_state.cc(157)] Unhandled Exception: MissingPluginException(No implementation found for method pickImage on channel plugins.flutter.io/image_picker)
```



## 问题2

添加完image_picker插件后重新运行，出现该错误

```
Launching lib\main.dart on MI 8 in debug mode...
[!] Your app isn't using AndroidX.
    To avoid potential build failures, you can quickly migrate your app by following the steps on https://goo.gl/CP92wY.
Running Gradle task 'assembleDebug'...
F:\Code\MyCode\Flutter\learn\my_flutter_app\practice09_test\android\app\src\debug\AndroidManifest.xml:22:18-91 Error:
	Attribute application@appComponentFactory value=(android.support.v4.app.CoreComponentFactory) from [com.android.support:support-compat:28.0.0] AndroidManifest.xml:22:18-91
	is also present at [androidx.core:core:1.0.2] AndroidManifest.xml:22:18-86 value=(androidx.core.app.CoreComponentFactory).
	Suggestion: add 'tools:replace="android:appComponentFactory"' to <application> element at AndroidManifest.xml:8:5-29:19 to override.

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processDebugManifest'.
> Manifest merger failed : Attribute application@appComponentFactory value=(android.support.v4.app.CoreComponentFactory) from [com.android.support:support-compat:28.0.0] AndroidManifest.xml:22:18-91
  	is also present at [androidx.core:core:1.0.2] AndroidManifest.xml:22:18-86 value=(androidx.core.app.CoreComponentFactory).
  	Suggestion: add 'tools:replace="android:appComponentFactory"' to <application> element at AndroidManifest.xml:8:5-29:19 to override.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 16s
AndroidX incompatibilities may have caused this build to fail. Please migrate your app to AndroidX. See https://goo.gl/CP92wY.
Finished with error: Gradle task assembleDebug failed with exit code 1

```



## 问题3

```
FAILURE: Build failed with an exception.

* What went wrong:
A problem occurred configuring root project 'android'.
> Could not resolve all artifacts for configuration ':classpath'.
   > Could not download kotlin-compiler-embeddable.jar (org.jetbrains.kotlin:kotlin-compiler-embeddable:1.2.71)
      > Could not get resource 'https://jcenter.bintray.com/org/jetbrains/kotlin/kotlin-compiler-embeddable/1.2.71/kotlin-compiler-embeddable-1.2.71.jar'.
         > Read timed out
```

### 解决方法

在project下的build.gradle文件中找到buildscript和allprojects节点下的repositories

将

```groovy
google()
jcenter()
```

换成下面的内容

```yml
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
```

![image-20200421151645216](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200421151647-789815.png)

![image-20200421151707050](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200421151707-842748.png)



## 问题3

控制台出现 Waiting for another flutter command to release the startup lock...

### 解决

先在任务管理器中把所有的dart.exe的进程杀掉，

然后进入到flutter的sdk的flutter\bin\cache目录下，把lockfile文件给删除掉即可



## 问题4

Another exception was thrown: NoSuchMethodError: The method 'pushNamed' was called on null.

### 原因

原因是我建了一个全局类，定义了navigatorKey，而没有在MaterialApp里添加navigatorKey，导致这个错误

### 解决

在MaterialApp里添加navigatorKey

```dart
navigatorKey: GlobalUtils.navigatorKey,
```



## 问题5

E/flutter (20769): [ERROR:flutter/lib/ui/ui_dart_state.cc(157)] Unhandled Exception: NoSuchMethodError: The method 'add' was called on null.
E/flutter (20769): Receiver: null

### 原因

method 'add' 是List的add方法，出现这个问题是因为add了null值，但是我这边的数据不是null值，最后找到原因是定义List的时候没有给它初始化一下。

### 解决

之前没有初始化的定义为

```dart
List<AppointmentEntity> _appointmentList = [];
```



给它加上` = [];` 就解决问题了

```dart
List<AppointmentEntity> _appointmentList = [];
```



## 问题6

No connected devices found; please connect a device, or see flutter.io/setup for getting started instructions.



![image-20200430121140839](C:\Users\AlanLee\AppData\Roaming\Typora\typora-user-images\image-20200430121140839.png)



### 解决

在flutter的sdk，目录下找到flutter_console.bat 文件，双击运行

输入

```
flutter config --android-sdk "D:\SDK\Android"
```

"D:\SDK\Android"为Android的SDK目录

重启IDE即可



## 问题7

### 问题

Unhandled Exception: MissingPluginException(No implementation found for method launch on channel)

### 解决

先停止APP，再重新启动即可



## 问题8

Vertical viewport was given unbounded height.
The relevant error-causing widget was: ListView file:///G:/MyCode/Android/Project/flutter-panda-appointment/lib/pages/user/user_page.dart:97:35

这个问题主要是`ListView.builder`出现的问题，如果是简单用的话，会出现这个问题的话，这时候，我们只需要在ListView.builder加入`shrinkWrap: true,`

```dart
child: ListView.builder(
    itemCount: _appointmentList.length,
    shrinkWrap: true,
    itemBuilder: (context, int index){
        return AppointmentInfoItem(_appointmentList[index]);
    }),
```





## 问题9

Flutter ListView嵌套在children中不能滚动

### 解决

使用Flex包裹Expanded，Expanded再包裹ListView

![image-20200505132808858](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200505132808858.png)



## 问题10

TabbarView在Container中不显示

### 解决

Container指定高度即可

```dart
height: double.maxFinite,
```



## 问题11

Swiper不能嵌套在有children属性的组件中

### 解决

用Container包裹，并且一定要指定Container的高度



## 问题12

在有输入框的情况下，呼出键盘，导致屏幕溢出错误

### 解决

在Scaffold中添加`resizeToAvoidBottomPadding: false,`

```dart
return Scaffold(
  resizeToAvoidBottomPadding: false,
  appBar: ...
  body: ...
)
```