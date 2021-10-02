---
date: 2020-01-22
categories: 
 - 前端
tags: 
 - vue
---
# Vuepress 在md文件中引入图片资源



## 问题

我想在md文件中引入图片，结果使用了相对路径，编译后找不到图片

## 解决

1. 在.vuepress文件夹下放置图片foo.png

2. 在md文件中直接加入下面的代码

```html
<img :src="$withBase('/foo.png')" alt="foo">
```



## 原因

无
