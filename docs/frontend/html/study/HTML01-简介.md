---
date: 2020-01-27
categories: 
 - 前端
tags: 
 - html
---
# HTML简介

## 什么是HTML?

HTML 是用来描述网页的一种语言。

- HTML 指的是超文本标记语言: **H**yper**T**ext **M**arkup **L**anguage
- HTML 不是一种编程语言，而是一种**标记**语言
- 标记语言是一套**标记标签** (markup tag)
- HTML 使用标记标签来**描述**网页
- HTML 文档包含了HTML **标签**及**文本**内容
- HTML文档也叫做 **web 页面**

## HTML 标签

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

- HTML 标签是由*尖括号*包围的关键词，比如 `<html>`
- HTML 标签通常是**成对出现**的，比如 `<b>`和 `</b>`
- 标签对中的第一个标签是**开始标签**，第二个标签是**结束标签**
- 开始和结束标签也被称为**开放标签**和**闭合标签**

```
<标签>内容</标签>
```

## HTML 元素

"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.

但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:

HTML 元素:

```
<p>这是一个段落<p>
```



## HTML 网页结构

下面是一个可视化的HTML页面结构：

<img :src="$withBase('/note_images/image-20200126155054458.png')" />

**注：** 只有 `<body>` 区域 (白色部分) 才会在浏览器中显示。



## HTML版本

从初期的网络诞生后，已经出现了许多HTML版本:

|   版本    | 发布时间 |
| :-------: | :------: |
|   HTML    |   1991   |
|   HTML+   |   1993   |
| HTML 2.0  |   1995   |
| HTML 3.2  |   1997   |
| HTML 4.01 |   1999   |
| XHTML 1.0 |   2000   |
|   HTML5   |   2012   |
|  XHTML5   |   2013   |

## <!DOCTYPE> 声明

声明有助于浏览器中正确显示网页。

网络上有很多不同的文件，如果能够正确声明HTML的版本，浏览器就能正确显示网页内容。

doctype 声明是不区分大小写的，以下方式均可：

```
<!DOCTYPE html>
 
<!DOCTYPE HTML>
 
<!doctype html>
 
<!Doctype Html> 
```

## 通用声明

### HTML5

```html
<!DOCTYPE html>
```



### HTML 4.01

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

### XHTML 1.0

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```



## 中文编码

目前在大部分浏览器中，直接输出中文会出现中文乱码的情况，这时候我们就需要在头部将字符声明为 UTF-8 或 GBK。

**HTML 实例**

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>页面标题</title>
</head>
<body>
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
</body>
</html>
```
