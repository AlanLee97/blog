---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex的使用

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

![20200214085257-237480](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085345-14998.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

默认情况下flex items全部放在一行，当flex items宽度和大于flex container时，每个items的宽度会被压缩



```
块级元素弹性布局
display: flex;
行内元素弹性布局
display: inline-flex;
```

