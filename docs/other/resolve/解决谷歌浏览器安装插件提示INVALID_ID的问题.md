# 解决谷歌浏览器安装插件提示INVALID_ID的问题

**问题**

chrome浏览器安装插件，提示程序包无效 CRX_HEADER_INVALID 

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214081304-913560.png"/>

**原因**

原因是Chrome更新时，改变了头部信息打包方式
导致的老版本Chrome打包的crx插件，无法直接安装在新版本Chrome中

**解决**

1.先将.crx文件的后缀名改为`.rar`

2.将文件解压开来

3.在chrome浏览器中，进入扩展程序，选择`加载已解压的扩展程序`

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214081313-631945.png"/>

4.选择刚刚解压开来的文件夹即可

<img src="https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214081313-890086.png" />

![image-20200213205530217](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200213205530-507472.png)