# 虚拟DOM



1. state数据
2. jsx模板
3. 数据 + 模板结合，生成真实的DOM，来显示
4. 生成虚拟DOM（虚拟DOM就是一个js对象，用它来描述真实的DOM）

```html
真实DOM：<div id='hello'><span>hello react</span></div>
虚拟DOM：['div',{id: 'hello'},['span', {}, 'hello react']]
```

5. state发生变化
6. 数据+模板 生成新的虚拟DOM

```html
假设将数据hello react该为hello world，则会生成新的虚拟DOM
原虚拟DOM：['div',{id: 'hello'},['span', {}, 'hello react']]
新虚拟DOM：['div',{id: 'hello'},['span', {}, 'hello world']]
```

7. 比较两个虚拟DOM，找出改变的内容
8. 直接操作DOM，改变span中的内容



深入了解虚拟DOM

render函数返回的内容实际上是调用React.createElement('标签',{属性},'内容');来完成

jsx -> createElement() -> js对象（虚拟DOM） -> 真实DOM