---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex-items的order属性

order决定了flex items的排布顺序

- 可以设置任意整数（正整数、负整数、0），值越小排越前面
- 默认值是0

```html
<style>
  .box{
    width: 500px;
    height: 300px;
    background-color: aqua;
    margin: 50px auto 0;

    /*块级元素弹性布局*/
    display: flex;

  }

  .item{
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .item1{
    order: 3;
  }

  .item2{
    order: 1;
  }

  .item3{
    order: 2;
  }
</style>
```

```html
<div class="box">
  <div class="item item1 al-bg-color-light-blue">item1</div>
  <div class="item item2 al-bg-color-light-purple">item2</div>
  <div class="item item3 al-bg-color-light-red">item3</div>
</div>
```

![20200214090624-827844](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090634-408722.png)
