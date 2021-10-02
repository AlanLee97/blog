---
date: 2020-02-27
categories: 
 - 问题解决
tags: 
 - 问题解决
---
# Centos7 卸载rpm安装包

查看rpm安装包列表：

    rpm -qa|grep mysql
正常卸载：

    rpm -e mysql-community-client-5.6.44-2.el7.x86_64
强制卸载：

    rpm -e mysql-community-client-5.6.44-2.el7.x86_64 --nodeps
