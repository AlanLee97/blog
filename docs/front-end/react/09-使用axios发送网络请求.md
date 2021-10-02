# 使用axios发送网络请求

1. 安装axios

```shell
yarn add axios
```

2. 在componentDidMount函数中使用axios

```js
componentDidMount() {
  axios.get('http://47.103.204.62:8083/test/get-user').then(res => {
    console.log(res);
    let data = res.data.data;
    console.log(data);

    let newData = [];
    data.forEach(function (currentValue, index) {
      newData.push(currentValue.username);
    });
    console.log(newData);

    this.setState(() => {
      return{
        list:newData
      }
    })
  }).catch(err => {
    console.log(err);
  });
}
```