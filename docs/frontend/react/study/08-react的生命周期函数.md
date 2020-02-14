# react的生命周期函数

生命周期函数是某一时刻会自动执行的函数

![react生命周期](https://img2018.cnblogs.com/blog/1128201/201910/1128201-20191001232453114-1666226727.png)

1. componentWillMount：组件将要被挂载时执行
2. render
3. componentDidMount：组件已经被挂载时执行
4. shouldComponentUpdate：组件更新之前执行，需返回一个布尔值
5. componentWillUpdate：在shouldComponentUpdate返回true时执行
6. componentDidUpdate：组件更新完成后执行
7. componentWillReceiveProps：一个组件从父组件接收参数，只要父组件的render函数执行了，子组件的这个生命周期函数就会被执行。第一次不会执行
8. componentWillUnmount:组件将要被解除挂载的时候执行



实例

当父组件TodoList更新时，子组件TodoItem不更新，当父组件向子组件传递内容时才更新子组件

TodoItem.js

```js
shouldComponentUpdate(nextProps, nextState, nextContext) {
  console.log('TodoItem shouldComponentUpdate');
  // return false;
  return nextProps.content !== this.props.content;
}
```