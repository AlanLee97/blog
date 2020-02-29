# 解决centos的yum命令不能使用的问题

## 问题

  File "/usr/bin/yum", line 30
    except KeyboardInterrupt, e:
                            ^

![image-20200224235340957](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200224235340957.png)

## 原因

这是因为yum采用python作为命令解释器，原来系统自带的python解释器为python2.7，然后我之前为了方便将python默认的解释器设为了python3.7，导致按python3.7解析2.7的语法出错了

## 解决

修改 /usr/bin/yum和/usr/libexec/urlgrabber-ext-down文件，指定使用python2.7作为yum的解释器。

```shell
vim /usr/bin/yum
```

将`#!/usr/bin/python`改成`#!/usr/bin/python2.7`

下面这个也是

```shell
vim /usr/libexec/urlgrabber-ext-down
```

将`#!/usr/bin/python`改成`#!/usr/bin/python2.7`

