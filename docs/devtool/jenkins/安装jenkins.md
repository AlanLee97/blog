---
date: 2020-02-24
categories: 
 - 运维
tags: 
 - jenkins
---
# 安装jenkins

在docker中安装jenkins

输入以下代码

```shell
docker run \
  -u root \
  -d -p 8001:8080 \
  -v /var/jenkins_home:/var/jenkins_home \
  -v /usr/bin/docker:/usr/bin/docker \
  -v /usr/lib64/libltdl.so.7:/usr/lib64/libltdl.so.7 \
  -v /etc/profile:/etc/profile \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /usr/local/maven/maven3:/usr/local/maven/maven3 \
  -v /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.242.b08-0.el7_7.x86_64:/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.242.b08-0.el7_7.x86_64 \
  -v "$HOME":/home \
  --name jenkins2 \
  jenkinsci/blueocean
```

复制密码

docker logs jenkinsci/blueocean容器id

![image-20200221131256001](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221131256001.png)

```
790bf04c1383422c9da78397bcb7cbef

c6f6cba51094442b8d966b9aec592435
```

访问localhost:8000

![image-20200221142825104](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221142825104.png)

输入刚刚的一串密码

进入插件安装页面

![image-20200221131921028](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221131921-120772.png)

安装完之后创建账户

![image-20200221143943321](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221143943321.png)

实例配置

![image-20200221144023800](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144024-647535.png)

![image-20200221144041189](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144041-516818.png)

进入主界面

![image-20200221144319625](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144320-539671.png)



创建项目

![image-20200221144336311](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144337-897131.png)

输入任务名称-->点击流水线-->点确定

![image-20200221144428604](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221144428604.png)

在 **Description** 字段中填写流水线的简要描述 （例如 `一个演示如何使用Jenkins构建Maven管理的简单Java应用程序的入门级流水线。`）

![image-20200221144606880](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144607-603556.png)

在 **Definition** 域中，选择 **Pipeline script from SCM** 选项。此选项指示Jenkins从源代码管理（SCM）仓库获取你的流水线， 这里的仓库就是你clone到本地的Git仓库。

![image-20200221144926604](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221144927-676464.png)

在 **SCM** 域中，选择 **Git**。

![image-20200221145055435](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200221145055-950423.png)

在 **Repository URL** 域中，填写你本地仓库的 [目录路径](https://jenkins.io/zh/doc/tutorials/build-a-java-app-with-maven/#fork-sample-repository)， 这是从你主机上的用户账户home目录映射到Jenkins容器的 `/home` 目录：

- MacOS系统 - `/home/Documents/GitHub/simple-java-maven-app`
- Linux系统 - `/home/GitHub/simple-java-maven-app`
- Windows系统 - `/home/Documents/GitHub/simple-java-maven-app`

![image-20200221145610600](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221145610600.png)

在克隆下来的java maven项目中创建Jenkinsfile文件

内容如下

```
pipeline {
    agent {
        docker {
            image 'maven:3-alpine' 
            args '-v /root/.m2:/root/.m2' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'mvn -B -DskipTests clean package' 
            }
        }
    }
}
```

