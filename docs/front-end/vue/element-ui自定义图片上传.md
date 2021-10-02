# element-ui自定义图片上传



html

```html
<el-upload
    ref="upload2"
    :action="uploadImg.url"
    :data="uploadImg.params"
    list-type="picture-card"
    multiple
    name="file"
    :http-request="customUpload"
    :on-success="uploadSuccess"
    :auto-upload="false">
  <i slot="default" class="el-icon-plus"></i>
  <div slot="file" slot-scope="{file}">
    <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
    <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
    </span>
  </div>
</el-upload>
```



methods

```js
customUpload(params){
  console.log(params);

  let formData = new FormData();
  formData.append("file", params.file);
  formData.append("uid", this.$store.state.storeUserInfo.id);
  formData.append("isAlbum", 1);

  request({
      url: GATEWAY_BASE_URL + IMAGE_UPLOAD_RETURN_URL,
      method:'post',
      data: formData,
      headers:{
        "content-type" : "multipart/form-data"
      }
  }).then(res => {
      console.log(res);
  }).catch(err => {
      console.log(err)
  })
}
```