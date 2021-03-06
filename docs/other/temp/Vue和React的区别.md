vue和react的几大区别是什么？下面本篇文章就来给大家介绍一下。有一定的参考价值，有需要的朋友可以参考一下，希望对大家有所帮助。



![img](https://img.php.cn/upload/article/000/000/006/5e3ccdd0a7d2e755.jpg)

**vue和react的区别**

- **Vue最大的优势，就是实现了数据的双向绑定，而React的数据流动是单向的。**

- **React中是把html和css全都写进js中。而Vue采用的是模板，就是在html中写css和js，最后再用webpack和vue-loader进行打包，这种编码方式对于初学者而言是很舒服的**

- **在React中要想更新状态，必须调用setState方法，而在Vue中只需要通过this的某种方式去更新state中的数据，这种方式更加方便**

- **Vue会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树**

- **React严格上只针对MVC的view层，Vue是MVVM模式**

- **监听数据变化的实现原理不同**

  Vue通过 getter/setter以及一些函数的劫持，能精确知道数据变化。

  React默认是通过比较引用的方式（diff）进行的，如果不优化可能导致大量不必要的VDOM的重新渲染。为什么React不精确监听数据变化呢？这是因为Vue和React设计理念上的区别，Vue使用的是可变数据，而React更强调数据的不可变，两者没有好坏之分，Vue更加简单，而React构建大型应用的时候更加鲁棒。

- **组件通信的区别**

  ![1.png](https://img.php.cn/upload/image/856/410/102/1581042901909612.png)

  Vue中有三种方式可以实现组件通信：父组件通过props向子组件传递数据或者回调，虽然可以传递回调，但是我们一般只传数据；子组件通过事件向父组件发送消息；通过V2.2.0中新增的provide/inject来实现父组件向子组件注入数据，可以跨越多个层级。

  React中也有对应的三种方式：父组件通过props可以向子组件传递数据或者回调；可以通过 context 进行跨层级的通信，这其实和 provide/inject 起到的作用差不多。React 本身并不支持自定义事件，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数，但Vue更倾向于使用事件。在React中我们都是使用回调函数的，这可能是他们二者最大的区别。

**相同点：**

- Vue和其他框架一样，都有组件开发和虚拟dom
- 都支持props进行父子组件之间的数据通信
- 都支持数据驱动视图，不直接操作真实dom
- 都支持服务器端的 渲染
- 都支持native方案，React的react native_，Vue的WEEX