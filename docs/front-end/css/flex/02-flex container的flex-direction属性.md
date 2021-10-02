---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex container的flex-direction属性

flex items 默认都是沿着main axis（主轴方向）从main start 开始往main end方向排布

flex direction 决定了main axis的方向，有4个取值

- row 从左到右（默认）

- row-reverse 从右到左
- column 从上到下
- column-reverse 从下到上



**决定主轴的方向**

flex-direction

可选值：

row 主轴水平方向从左到右（默认）

```css
flex-direction: row;
```

![20200214085416-160476](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085503-225346.png)

row-reverse 主轴水平方向从右到左

```css
flex-direction: row-reverse;
```

![20200214085520-498000](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085547-823110.png)

column 主轴垂直方向从上到下

```
flex-direction: column;
```

![20200214085552-523345](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085613-997016.png)

column 主轴垂直方向从下到上

```
flex-direction: column-reverse;
```

![20200214085553-935580](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085632-935439.png)

