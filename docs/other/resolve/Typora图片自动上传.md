# Typora图片自动上传



## 创建码云的私人访问令牌

![image-20200430140142817](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430140142817.png)

先保存着私人令牌，后面会用到



## 配置PicGo

![image-20200430133800210](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430133800210.png)

1. 选择PicGo-Core(command line)

2. 点击下载或更新

3. 打开配置文件

   编辑内容

   ```json
   {
     "picBed": {
       "current": "gitee",
       "uploader": "gitee",
       "gitee": {
         "branch": "master",
         "customPath": "yearMonth",
         "customUrl": "",
         "path": "填写仓库中的文件夹/",
         "repo": "用户名/仓库",
         "token": "自己仓库的私人Access Token"
       },
       "transformer": "path"
     },
     "picgoPlugins": {
       "picgo-plugin-gitee-uploader": true,
       "picgo-plugin-github-plus": true
     },
     "picgo-plugin-gitee-uploader": {
       "lastSync": "2020-04-30 01:41:13"
     },
     "picgo-plugin-github-plus": {
       "lastSync": "2020-04-07 11:09:08"
     }
   }
   ```

   ![image-20200430140530780](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430140530780.png)

4. 验证上传

   > 先安装gitee-uploader上传插件（需安装node.js）
   >
   > 进入到C:\Users\AlanLee\AppData\Roaming\Typora\picgo\win64
   >
   > 执行
   >
   > ```
   > .\picgo.exe install gitee-uploader
   > ```
   >
   > ![image-20200430135713400](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430135713400.png)

   最后点击验证图片上传

   ![](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430130926823.png)



## 使用

![image-20200430140754570](https://gitee.com/AlanLee97/assert/raw/master/images/image-20200430140754570.png)

