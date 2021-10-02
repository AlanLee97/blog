# vue前端Element-ui多图片上传

## 问题

使用普通的图片上传方式，如果选择多张图片上传的话，上传的图片始终是最后一张图片。

## 原因

按照普通的图片上传，如果多张图片上传一般是循环单次上传的接口，或者后端使用Multipart数组的方式，但是，经debug过程发现，在使用Element-ui的el-upload组件上传时，循环调用单文件上传接口时，会出现前一次的函数还没执行完，下一次循环又开始调用该接口了，导致文件上传的是最后一个文件。

## 解决

先获取el-upload组件获取的文件列表，保存到data中，然后使用递归调用上传图片的函数，只有当上一次上传成功时再次调用本函数，形成递归调用，实现多图片上传。

代码如下

```js
//发起上传的请求
uploadRequest(formDataList, index){
    request({
        url: IMAGE_UPLOAD_RETURN_ID,
        // url: this.localUploadUrl,
        method: 'post',
        data: formDataList[index],
        headers:{
            "content-type" : "multipart/form-data"
        }
    }).then(res => {
        console.log(res.data);
        this.result.push(res.data);
        console.log(this.result.join(";").toString());
        this.sendData.imgIds = this.result.join(";").toString();

        //递归上传下一张图片
        index++;
        if (index < formDataList.length){
            console.log("index: " + index);
            this.uploadRequest(formDataList, index);
        }

        //上传完最后一张之后的操作
        if (index == formDataList.length){
            this.$message.success("上传完成");

            //图片上传完成，开始发布作品
            this.startRequest();
        }
    }).catch(err => {
        console.log(err)
    })
},
```

