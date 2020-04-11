---
date: 2020-01-24
categories: 
 - 服务器
tags: 
 - linux
---
# Linux 编辑器

## vim

### 运行模式

编辑模式：等待编辑命令输入

插入模式：编辑模式下，输入 `i` 进入插入模式，插入文本信息

命令模式：在编辑模式下，输入 `:` 进行命令模式

### 命令

`:q` 直接退出vi

`:wq` 保存后退出vi ，并可以新建文件

`:q!` 强制退出

`:w file` 将当前内容保存成某个文件

`:set number` 在编辑文件显示行号

`:set nonumber` 在编辑文件不显示行号

## nano

nano 是一个字符终端的文本编辑器，有点像 DOS 下的 editor 程序。它比 vi/vim 要简单得多，比较适合 Linux 初学者使用。某些 Linux 发行版的默认编辑器就是 nano。

### 命令

- 保存：ctrl + o
- 搜索：ctrl + w
- 上一页：ctrl + y
- 下一页：ctrl + v
- 退出：ctrl + x

## 快捷键

1. 拷贝当前行：（正常模式下） `yy`，拷贝当前向下5行：`5yy`
2. 删除当前行： （正常模式下）`dd`，删除当前向下5行：`5dd`
3. 搜索单词：（正常模式下）输入`/关键字`，如`/hello`。按下回车查找，按n下一个
4. 显示行号：（命令模式下）`:set nu`
5. 取消显示行号：（命令模式下）`:set nonu`
6. 转到文档顶部：（正常模式下）`G`
7. 转到文档底部：（正常模式下）`gg`

![vi和vim快捷键一览图](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200326085518-483348.jpeg)