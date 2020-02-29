---
date: 2020-02-27
categories: 
 - 问题解决
tags: 
 - 问题解决
---
# mvn deploy出现401错误



## 问题

```
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-deploy-plugin:2.8.2:deploy (default-deploy) on p
roject panda-config: Failed to deploy artifacts: Could not transfer artifact top.alanlee:panda-config:jar:1.0.
0-20200223.035607-1 from/to nexus-snapshots (http://xxx.xxx.245.65:8081/repository/maven-snapshots/): Failed t
o transfer file http://xxx.xxx.245.65:8081/repository/maven-snapshots/top/alanlee/panda-config/1.0.0-SNAPSHOT/
panda-config-1.0.0-20200223.035607-1.jar with status code 401 -> [Help 1]
```



![image-20200223121859483](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200223121859483.png)



## 原因

一般报401这个错，是因为没有权限，没权限的话，大部分都是因为密码错了导致，或者这个账号本身就没有传jar的权限，一般是maven目录conf的setting.xml里没有配置认证，查看maven的config路径下的settings.xml，查看是否设置了用户名和密码。



## 解决

在.m2/settings.xml中的server节点下设置用户名和密码。

```xml
<server>
  <id>nexus-releases</id>
  <username>admin</username>
  <password>密码</password>
</server>

<server>
  <id>nexus-snapshots</id>
  <username>admin</username>
  <password>密码</password>
</server>
```
在pom.xml文件中添加

```xml
<distributionManagement>
    <repository>
        <id>nexus-releases</id>
        <name>Nexus Release Repository</name>
        <url>http://ip:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>nexus-snapshots</id>
        <name>Nexus Snapshot Repository</name>
        <url>http://ip:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

重新执行`mvn deploy`

