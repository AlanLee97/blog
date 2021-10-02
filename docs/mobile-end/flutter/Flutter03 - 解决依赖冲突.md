# 解决依赖冲突



以image_picker插件为例

```yml
dependencies:
  flutter:
    sdk: flutter
  image_picker: '0.6.5'		# 添加image_picker的依赖
```

上面指定了版本，如果出现如下错误，

```
depends on image_picker >=0.6.2+3 which requires Flutter SDK version >=1.10.0 <2.0.0, version solving failed.
```

解决

将版本号改为any

```yml
dependencies:
  flutter:
    sdk: flutter
  image_picker: any		# 添加image_picker的依赖
```

