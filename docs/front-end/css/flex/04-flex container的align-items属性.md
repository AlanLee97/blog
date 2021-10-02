---
date: 2020-02-24
categories: 
 - 前端
tags: 
 - css弹性布局
---
# flex container的align-items属性

align-items决定了flex items在cross axis上的对齐方式

- normal：在弹性布局中，效果和stretch一样

```css
align-items: normal;
```

![image-20200211212156148](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200211212159-423616.png)

- stretch：当flex items在cross axis方向的size为auto时，会自动拉伸值填充flex container



![image-20200211212156148](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200211212159-423616.png)

- flex-start：与cross start对齐

```css
align-items: flex-start;
```

![20200214085950-195395](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090007-859253.png)

- flex-end：与cross end对齐

```css
align-items: flex-end;
```

![20200214085942-7818](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090057-585615.png)

- center：居中对齐

```css
align-items: center;
```

![20200214090009-803998](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090125-151807.png)

- baseline：与基准线对齐

```css
align-items: baseline;
```

![20200214090107-722490](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090156-577811.png)
