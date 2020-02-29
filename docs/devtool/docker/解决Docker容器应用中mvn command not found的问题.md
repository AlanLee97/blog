---
date: 2020-02-20
categories: 
 - 运维
tags: 
 - docker
---
# 解决Docker容器应用中mvn: command not found的问题

## 问题

我在搞jenkins时使用shell脚本执行mvn命令，提示mvn: command not found。因为我的jenkins是在docker中安装的，所以没有mvn环境

## 原因

在docker中安装的jenkins，没有maven，虽然可以通过挂载宿主机目录来提供maven，但是容器内的环境变量却不会知道设置，因此需要我们手动设置环境变量。

## 解决

1. 运行容器的时候将宿主机的java和maven目录挂载进去

```shell
docker run 
-d -p 8080:8080 \
-v /usr/lib/jvm/java-1.8-openjdk:/usr/lib/jvm/java-1.8-openjdk \
-v /usr/local/maven/maven3:/usr/local/maven/maven3 \
容器id
```

`-v` 是将宿主机的目录挂载到容器内

`:`冒号前面的是宿主机目录，冒号后面的是容器应用的目录



2. 运行容器成功后，进入容器

```shell
docker exec -it 容器id /bin/bash
```



3. 设置容器应用的环境变量

```shell
vi /etc/profile
```

在文件最后面添加如下内容

```shell
# java环境变量
export JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk
export JRE_HOME=$JAVA_HOME/jre
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=./:JAVA_HOME/lib:$JRE_HOME/lib


# maven环境变量
export M2_HOME=/usr/local/maven/maven3
export PATH=$PATH:$JAVA_HOME/bin:$M2_HOME/bin
```



4. 更新profile

```shell
source /etc/profile
```



5. 验证是否设置成功

```shell
mvn -v
```

![image-20200222192045954](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200222192045954.png)

出现上面的内容则表明成功
