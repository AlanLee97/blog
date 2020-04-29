# CentOS7下安装Maven

1. 创建存放maven的目录

    ```shell
    mkdir /usr/local/maven
    ```

2.  切换到maven目录，下载maven

    ```shell
    cd /usr/local/maven
    
    wget https://zysd-shanghai.oss-cn-shanghai.aliyuncs.com/software/linux/maven/apache-maven-3.6.1-bin.tar.gz
    ```

    

3. 解压压缩包

    ```shell
    tar -zxvf apache-maven-3.6.1-bin.tar.gz
    ```

    得到一个`apache-maven-3.6.1`的文件夹

    如果觉得名字长，可以用mv命令重命名一下将名字改为maven3

    ```shell
    mv apache-maven-3.6.1 maven3
    ```

    

4.  配置环境变量

    编辑profile文件进行配置环境变量

    ```shell
    vim  /etc/profile 
    ```

    配置的内容，在profile 文件最下面添加如下内容

    ```shell
    # set mvn 
    export M2_HOME=/usr/local/maven3
    export PATH=$PATH:$JAVA_HOME/bin:$M2_HOME/bin
    ```

    重启加载profile让系统文件生效

    ```shell
    source  /etc/profile 
    ```

    验证是否安装成功

    ```shell
    mvn -version
    ```

    输出如下内容，则表明安装成功

    ![image-20200221152609597](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200221152609597.png)

