---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex items的flex-grow属性

- flex-grow决定了flex items如何扩展
    - 可以设置任意非负数（正小数，正整数，0），默认值是0
    - 当flex container在main axis方向上右剩余的size时，flex-grow才会生效
- 如果所有flex items的flex-grow总和sum超过1，每个flex item扩展的size为flex container的剩余size * flex-grow/sum

![20200214090700-378358](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090710-279103.png)

- 如果所有flex items的flex-grow总和sum不超过1，每个flex item扩展的size为flex container的剩余size * flex-grow-sum

![20200214090701-716042](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090721-928144.png)

- flex items扩展后的最终size不能超过max-width/max-height



```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>flex items的flex-grow属性</title>
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
      /*flex-grow: 1;*/
      flex-grow: 0.5;
    }

    .item2{
      /*flex-grow: 1;*/
      flex-grow: 0.1;
    }

    .item3{
      /*flex-grow: 1;*/
      flex-grow: 0.1;
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

