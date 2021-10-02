---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex items的flex-basis属性

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

- flex-basis用来设置flex items在main axis方向上的base size
    - auto（默认值）：item的自身宽度

![20200214090803-83446](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090815-124724.png)

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>flex items的flex-basis属性</title>
  <link rel="stylesheet" href="al-css.css">
  <style>
    .box{
      width: 500px;
      height: 300px;
      background-color: aqua;
      margin: 50px auto 0;

      /*块级元素弹性布局*/
      display: flex;
      align-items: center;

    }

    .item{
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }

    .item1{
      flex-basis: 200px;
    }

    .item2{

    }

    .item3{

    }
  </style>
</head>
<body>
<div class="box">
  <div class="item item1 al-bg-color-light-blue">item1</div>
  <div class="item item2 al-bg-color-light-purple">item2</div>
  <div class="item item3 al-bg-color-light-red">item3</div>

</div>

</body>
</html>
```
