# 使用SharedPreference

## 添加依赖

```yml
dependencies:
  shared_preferences: ^0.5.7
```

## 使用

```dart
void saveLoginInfo(String userInfo) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    sp.setBool("isLogin", true);
    sp.setString("userInfo", userInfo);
}
```

