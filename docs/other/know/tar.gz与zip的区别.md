---
date: 2020-01-22
categories: 
- 随笔
  
tags:
- 了解
---
# tar.gz与.zip的区别

tar.gz压缩格式用于unix的操作系统,而zip用于windows的操作系统,但在windows系统中用WinRar工具同样可以解压缩tar.gz格式的，不慌！

多知道一点：

zip是压缩格式的一种。
.tar.gz其实上是2个工具。tar是打包工具，把很多文件打包成一个文件，gz是压缩格式。因为太常用，所以unix下tar命令是直接支持gz压缩和解压缩的。

多知道两点：

zip流行于windows系统上的压缩文件（其他系统也可以打开），zip格式开放而且免费。zip支持分卷压缩，128/256-bit AES加密算法等功能。zip的含义是速度，其目标就是为顶替ARC而诞生的“职业”压缩软件。

 

tar是“tape archive”(磁带存档)的简称，它出现在还没有软盘驱动器、硬盘和光盘驱动器的计算机早期阶段，随着时间的推移， tar命令逐渐变为一个将很多文件进行存档的工具，目前许多用于Linux操作系统的程序就是打包为tar档案文件的形式。 在Linux里面，tar一般和其他没有文件管理的压缩算法文件结合使用，用tar打包整个文件目录结构成一个文件，再用gz，bzip等压缩算法压缩成一次，也是Linux常见的压缩归档的处理方法。
