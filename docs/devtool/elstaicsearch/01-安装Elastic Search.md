# 安装Elastic Search

## Windows下安装

[官网](https://www.elastic.co/downloads/elasticsearch)最新版本 Elasticsearch （7.6.1）

![img](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315110946-410556.png)

> 顺带一提：在下载之前你应该确保你的 Java 版本保持在 1.8 及以上（就 1.8 吧..），这是 Elasticsearch 的硬性要求，可以自行打开命令行输入 `java -version` 来查看 Java 的版本

下载完成后，可以看到是一个压缩包，我们直接解压在 D 盘上，然后打开 `bin` 目录下的 elasticsearch.bat 文件

![image-20200315100915603](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200315100915603.png)

![image-20200315101245456](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/20200315110933-346052.png)

浏览器访问

http://localhost:9200/

返回如下json数据表示成功

![image-20200315101336879](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/20200315110934-998224.png)



## 安装Kibana

这是一个官方推出的把 Elasticsearch 数据可视化的工具，官网在这里：[【传送门】](https://www.elastic.co/cn/products/kibana)，不过我们现在暂时还用不到那些数据分析的东西，不过里面有一个 Dev Tools 的工具可以方便的和 Elasticsearch 服务进行交互，去官网下载了最新版本的 Kibana（7.6.1）

下载后解压，执行bin目录的kibana.bat

![image-20200315111236290](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200315111236290.png)

运行

出现超时错误

![image-20200315111837446](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315111842-200901.png)

解决

修改kibana\config目录下的kibana.yml文件

![image-20200315112844231](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112845-376308.png)

改成如下图

![image-20200315112912595](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315112912-103026.png)

重新运行

出现如下图表示成功

![image-20200315112656263](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200315112656263.png)

浏览器访问http://localhost:5601/app/kibana#/home

![image-20200315113028103](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113032-241900.png)

![image-20200315113151512](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200315113227-779083.png)

找到左边侧栏的扳手图标，点击进入dev tools

![image-20200315113415126](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200315113415126.png)

点击 【Get to work】，然后在控制台输入 `GET /_cat/health?v` 查看服务器状态，可以在右侧返回的结果中看到 `green` 即表示服务器状态目前是健康的：

![img](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/7896890-b095afd1454e9071.png)