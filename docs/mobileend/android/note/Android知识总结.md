# Android知识总结

## Android系统架构

Android系统架构分为4层

1. Linux内核层
2. 系统运行库层
3. 应用框架层
4. 应用层

![img](https://bkimg.cdn.bcebos.com/pic/2fdda3cc7cd98d10ac7dfab52b3fb80e7aec908d?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2U4MA==,xp_5,yp_5)

## Android四大组件（一） - 活动

1. Activity（活动）
2. Service（服务）
3. Broadcast Receiver（广播接收器）
4. Content Provider（内容提供者）



### Activity（活动）

一个Activity活动就是一个页面

#### 创建活动

创建好活动需要在AndroidManifest.xml文件中注册Activity。加上`<intent-filter>`标签可以使该活动作为第一个显示的页面。

#### 销毁活动

有2种方式

1. 按返回按键
2. 使用Activity类提供的finish方法

#### 使用Intent跳转页面（活动）

Intent又分为显式Intent和隐式Intent

- 显式Intent：只能启动本应用的Activity
- 隐式Intetn：可以启动本应用的Activity和其他应用的Activity

##### 显式Intent

```java
Intent intent = new Intent(this, XxxActivity.class);
startActivity(intent);
```

##### 隐式Intent

在AndroidManifest.xml的Activity的intent-filter标签中添加category标签

```java
Intent intent = new Intent("com.xxx.xxx.XxxAction");
intent.addCategory("com.xxx.xxx.XxxCategory");
startActivity(intent);
```

##### 使用Intent跳转页面时传递数据

使用Intent的putExtra()方法可以传递数据

使用Activity类的getIntent()方法接收传递过来的数据，可以接收多种类型的数据，有不同的实现方法。

##### 跳转页面后，返回上一个页面时需要带上数据

使用startActivityForResult()方法，该方法有2个参数，第一个为Intent对象，第二个为请求码，用于标识数据的来源，判断是否是这个Activity来接收。还需要处理用户按下返回键的行为，因为不做处理的情况下，按下返回键并不能带着数据返回给上一个Activity，所以要重写返回按钮的监听事件onBackPressed方法，加入处理代码即可。

#### 活动的生命周期

Android是使用任务来保存Activity的，该任务是一个桟，打开一个活动就往桟里添加一个数据，退出一个页面就弹出一个数据，显示栈顶数据给用户。

##### 活动的状态

1. 运行状态
2. 暂停状态
3. 停止状态
4. 销毁状态

生命周期图

![img](https://upload-images.jianshu.io/upload_images/19899316-00e4bd10008c4788.PNG?imageMogr2/auto-orient/strip|imageView2/2/w/485/format/webp)



#### 活动的启动模式

1. standard
2. singleTop
3. singleTask
4. singleInstance



## 常用控件

1. TextView
2. Button
3. EditView
4. ImageView
5. ProgressBar
6. AlertDialog
7. ProgressDialog
8. ListView
9. RecycleView

ListView和RecycleView需要准备适配器来准备数据



## 常用布局

1. 线性布局LinearLayout
2. 相对布局RelativeLayout
3. 帧布局FrameLayout
4. 百分比布局PercentFrameLayout



## Fragment（碎片）

Fragment的生命周期

![image-20200427113936651](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200427113936651.png)



## Android四大组件（二） - 广播接收器

广播接收器分类2种，一种是标准广播，另一种是有序广播。

### 动态注册广播





### 静态注册广播

