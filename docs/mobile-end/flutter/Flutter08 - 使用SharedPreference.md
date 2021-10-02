# 使用SharedPreference

## 添加依赖

```yml
dependencies:
  shared_preferences: ^0.5.7
```

## 使用

保存数据到SharedPreferences

```dart
void saveLoginInfo(String userInfo) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    sp.setBool("isLogin", true);
    sp.setString("userInfo", userInfo);
}
```

从SharedPreferences取出数据

```dart
//从SharedPreferences取出数据
Future<String> getDataFromSharedPreferences(String key) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.getString(key);
}
```

![img](https://gitee.com/AlanLee97/assert/raw/master/note_images/img.png)