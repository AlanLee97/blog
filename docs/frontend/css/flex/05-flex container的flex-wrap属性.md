---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex-wrap

默认情况下flex items全部放在一行，当flex items宽度和大于flex container时，每个items的宽度会被压缩，flex-wrap:wrap则是让items在一行中放不下的时候会自动换行

- nowrap（默认值）：

```css
flex-wrap: nowrap;
```

![20200214090207-735046](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090221-851269.png)

- wrap：让items在一行中放不下的时候会自动换行

```css
flex-wrap: wrap;
```

![20200214090227-491786](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090241-514730.png)

- wrap-reverse：多行、反转

```css
flex-wrap: wrap-reverse;
```

![20200214090242-358864](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/20200214090242-358864.png)
