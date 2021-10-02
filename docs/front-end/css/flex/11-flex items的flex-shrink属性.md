---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex items的flex-shrink属性

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。



**例子：**

现有一个box的宽度为550px，里面包裹着3个宽度为250px的item

**假设收缩比例都为1，收缩计算**

所以250px+250px+250px = 750px  > 550px

750px - 550px = 200px

200px / 3 = 66.6666px

每个item将收缩66.6666px，即宽度变为250px - 66.6666px = 183.3333px

![20200214090731-81638](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090751-894209.png)

**假设收缩比例为3:1:1，收缩计算**

container宽度：550px

item宽度和：250px + 250px + 250px = 750px > 550px

多出的宽度：750px - 250px = 200px

item1收缩后的宽度: 250px - 200px * (3/5) = 130px

item2收缩后的宽度: 250px - 200px * (1/5) = 210px

item3收缩后的宽度: 250px - 200px * (1/5) = 210px

![image-20200212003614034](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200212003911-301067.png)

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>flex items的flex-shrink属性</title>
  <link rel="stylesheet" href="al-css.css">
  <style>
    .box{
      width: 550px;
      height: 300px;
      background-color: aqua;
      margin: 50px auto 0;

      /*块级元素弹性布局*/
      display: flex;
      align-items: center;
      /*flex-wrap: wrap;*/

    }

    .item{
      width: 250px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }

    .item1{
      flex-shrink: 3;
    }

    .item2{
      flex-shrink: 1;
    }

    .item3{
      flex-shrink: 1;
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
