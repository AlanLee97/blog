---
date: 2020-02-27
categories: 
 - 问题解决
tags: 
 - 问题解决
---
# UnicodeEncodeError: 'gbk' codec can't encode character '\xa0' in position ... 问题解决办法

## 问题

写入文件遇到

```python
UnicodeEncodeError: 'gbk' codec can't encode character '\xa0' in position ...
```



## 原因

在windows下面，新文件的默认编码是gbk，这样的话，python解释器会用gbk编码去解析我们的网络数据流txt，然而txt此时已经是decode过的unicode编码，这样的话就会导致解析不了，出现上述问题。

## 解决

 解决的办法就是，改变目标文件的编码：

```python
f = open("out.html","w",encoding='utf-8')
```

