---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex items的align self属性

flex items可以通过align-self覆盖flex container设置的align-items

- auto（默认值）：遵从flex container的align-items的设置
- stretch、flex-start、flex-end、baseline，效果跟align-items一致

以flex-end为例

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>flex items的align self属性</title>
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
      order: 3;
      align-self: flex-end;
    }

    .item2{
      order: 1;
    }

    .item3{
      order: 2;
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

![20200214090642-131906](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090654-986105.png)
