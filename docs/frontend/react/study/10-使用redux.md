# 使用Redux

redux是一个管理数据的框架

redux工作流

![image-20200213211158088](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200213211158088.png)

## 使用store

**1. 安装**

```shell
yarn add redux
```

**2. 创建文件**

- 在src目录下创建`store`文件夹
- 在store文件夹下创建index.js文件和reducer.js文件

index.js内容如下

```js
import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
```

reducer.js内容如下

```js
const defaultState = {
  //存放我们要管理的数据
  inputValue:'hello',	
  list:['122222', 'hhhh']
};

export default (state = defaultState, action) => {
  return state;
}

```

**3. 使用**

- 先在组件中导入store

```js
import store from "../../store";
```

- 在组件的构造函数中使用

```js
this.state = store.getState();
```



## 使用Redux DevTools

1.在chrome浏览器中安装Redux DevTools插件

2.在store目录下的index.js文件中加入下面的代码

```js
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```

index.js

```js
import {createStore} from "redux";
import reducer from "./reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

3.在浏览器的开发者工具中，找到redux选项卡

![image-20200213210326833](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200213210327-960629.png)

## 使用action

先监听改变事件

![image-20200213211553739](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200213211554-767706.png)

```js
handleChange(e){
    //创建Action
    const action = {
        type: 'change_target_value',	//描述这个action，也可以理解为做个标记
        value: e.target.value
    };
    // 转发Action
    store.dispatch(action);
    console.log(e.target.value)
}
```

然后在reducer.js中接收action

```js
const defaultState = {
  inputValue:'hello',
  list:['122222', 'hhhh']
};

export default (state = defaultState, action) => {
  console.log(state, action);	//先打印state和action
  return state;
}
```

![image-20200213211953650](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200213211953-663104.png)

reducer返回一个state数据副本，再传递给store，store接收到state数据副本后，更新自己的state

*reducer只能接收state，但不能去修改state*

reducer.js

```js
const defaultState = {
  inputValue:'hello',
  list:['122222', 'hhhh']
};

//reducer只能接收state，但不能去修改state
export default (state = defaultState, action) => {
  console.log(state, action);

  if (action.type === 'change_target_value'){
    //先拷贝一份state
    const newState = JSON.parse(JSON.stringify(state));
    //把action的值给新的state
    newState.inputValue = action.value;
    //返回新的state，这个state会传给store，store会更新它的state
    return newState;
  }

  return state;
}
```

在组件的构造函数中监听和处理store的改变

```js
//在组件的构造函数中加入这段代码
//监听和处理store改变
this.handleStoreChange = this.handleStoreChange.bind(this);
store.subscribe(this.handleStoreChange);
```

handleStoreChange()

```js
handleStoreChange(){
  console.log('store changed');
  //监听到store数据改变时，就可以修改state了
  this.setState(store.getState())
}
```