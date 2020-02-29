(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{358:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_38-线程池源码面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_38-线程池源码面试题"}},[t._v("#")]),t._v(" 38 线程池源码面试题")]),t._v(" "),e("p",[e("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/5dd49d7c0001faba06400359.jpg",alt:"img"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/bg-l-1580742806566.png",alt:"img"}}),e("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/bg-r-1580742806580.png",alt:"img"}})]),t._v(" "),e("p",[t._v("与有肝胆人共事，从无字句处读书。")]),t._v(" "),e("p",[t._v("——周恩来")]),t._v(" "),e("h3",{attrs:{id:"引导语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引导语"}},[t._v("#")]),t._v(" 引导语")]),t._v(" "),e("p",[t._v("线程池在日常面试中占比很大，主要是因为线程池内容涉及的知识点较广，比如涉及到队列、线程、锁等等，所以很多面试官喜欢把线程池作为问题的起点，然后延伸到其它内容，由于我们专栏已经说过队列、线程、锁面试题了，所以本章面试题还是以线程池为主。")]),t._v(" "),e("h3",{attrs:{id:"_1：说说你对线程池的理解？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1：说说你对线程池的理解？"}},[t._v("#")]),t._v(" 1：说说你对线程池的理解？")]),t._v(" "),e("p",[t._v("答：答题思路从大到小，从全面到局部，总的可以这么说，线程池结合了锁、线程、队列等元素，在请求量较大的环境下，可以多线程的处理请求，充分的利用了系统的资源，提高了处理请求的速度，细节可以从以下几个方面阐述：")]),t._v(" "),e("ol",[e("li",[t._v("ThreadPoolExecutor 类结构；")]),t._v(" "),e("li",[t._v("ThreadPoolExecutor coreSize、maxSize 等重要属性；")]),t._v(" "),e("li",[t._v("Worker 的重要作用；")]),t._v(" "),e("li",[t._v("submit 的整个过程。")])]),t._v(" "),e("p",[t._v("通过以上总分的描述，应该可以说清楚对线程池的理解了，如果是面对面面试的话，可以边说边画出线程池的整体架构图（见《ThreadPoolExecutor 源码解析》）。")]),t._v(" "),e("h3",{attrs:{id:"_2：threadpoolexecutor、executor、executorservice、runnable、callable、futuretask-之间的关系？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2：threadpoolexecutor、executor、executorservice、runnable、callable、futuretask-之间的关系？"}},[t._v("#")]),t._v(" 2：ThreadPoolExecutor、Executor、ExecutorService、Runnable、Callable、FutureTask 之间的关系？")]),t._v(" "),e("p",[t._v("答：以上 6 个类可以分成两大类：一种是定义任务类，一种是执行任务类。")]),t._v(" "),e("ol",[e("li",[t._v("定义任务类：Runnable、Callable、FutureTask。Runnable 是定义无返回值的任务，Callable 是定义有返回值的任务，FutureTask 是对 Runnable 和 Callable 两种任务的统一，并增加了对任务的管理功能；")]),t._v(" "),e("li",[t._v("执行任务类：ThreadPoolExecutor、Executor、ExecutorService。Executor 定义最基本的运行接口，ExecutorService 是对其功能的补充，ThreadPoolExecutor 提供真正可运行的线程池类，三个类定义了任务的运行机制。")])]),t._v(" "),e("p",[t._v("日常的做法都是先根据定义任务类定义出任务来，然后丢给执行任务类去执行。")]),t._v(" "),e("h3",{attrs:{id:"_3：说一说队列在线程池中起的作用？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3：说一说队列在线程池中起的作用？"}},[t._v("#")]),t._v(" 3：说一说队列在线程池中起的作用？")]),t._v(" "),e("p",[t._v("答：作用如下：")]),t._v(" "),e("ol",[e("li",[t._v("当请求数大于 coreSize 时，可以让任务在队列中排队，让线程池中的线程慢慢的消费请求，实际工作中，实际线程数不可能等于请求数，队列提供了一种机制让任务可排队，起一个缓冲区的作用；")]),t._v(" "),e("li",[t._v("当线程消费完所有的线程后，会阻塞的从队列中拿数据，通过队列阻塞的功能，使线程不消亡，一旦队列中有数据产生后，可立马被消费。")])]),t._v(" "),e("h3",{attrs:{id:"_4：结合请求不断增加时，说一说线程池构造器参数的含义和表现？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4：结合请求不断增加时，说一说线程池构造器参数的含义和表现？"}},[t._v("#")]),t._v(" 4：结合请求不断增加时，说一说线程池构造器参数的含义和表现？")]),t._v(" "),e("p",[t._v("答：线程池构造器各个参数的含义如下：")]),t._v(" "),e("ol",[e("li",[t._v("coreSize 核心线程数；")]),t._v(" "),e("li",[t._v("maxSize 最大线程数；")]),t._v(" "),e("li",[t._v("keepAliveTime 线程空闲的最大时间；")]),t._v(" "),e("li",[t._v("queue 有多种队列可供选择，比如：1：SynchronousQueue，为了避免任务被拒绝，要求线程池的 maxSize 无界，缺点是当任务提交的速度超过消费的速度时，可能出现无限制的线程增长；2：LinkedBlockingQueue，无界队列，未消费的任务可以在队列中等待；3：ArrayBlockingQueue，有界队列，可以防止资源被耗尽；")]),t._v(" "),e("li",[t._v("线程新建的 ThreadFactory 可以自定义，也可以使用默认的 DefaultThreadFactory，DefaultThreadFactory 创建线程时，优先级会被限制成 NORM_PRIORITY，默认会被设置成非守护线程；")]),t._v(" "),e("li",[t._v("在 Executor 已经关闭或对最大线程和最大队列都使用饱和时，可以使用 RejectedExecutionHandler 类进行异常捕捉，有如下四种处理策略：ThreadPoolExecutor.AbortPolicy、ThreadPoolExecutor.DiscardPolicy、ThreadPoolExecutor.CallerRunsPolicy、ThreadPoolExecutor.DiscardOldestPolicy。")])]),t._v(" "),e("p",[t._v("当请求不断增加时，各个参数起的作用如下：")]),t._v(" "),e("ol",[e("li",[t._v("请求数 < coreSize：创建新的线程来处理任务；")]),t._v(" "),e("li",[t._v("coreSize <= 请求数 && 能够成功入队列：任务进入到队列中等待被消费；")]),t._v(" "),e("li",[t._v("队列已满 && 请求数 < maxSize：创建新的线程来处理任务；")]),t._v(" "),e("li",[t._v("队列已满 && 请求数 >= maxSize：使用 RejectedExecutionHandler 类拒绝请求。")])]),t._v(" "),e("h3",{attrs:{id:"_5：coresize-和-maxsize-可以动态设置么，有没有规则限制？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5：coresize-和-maxsize-可以动态设置么，有没有规则限制？"}},[t._v("#")]),t._v(" 5：coreSize 和 maxSize 可以动态设置么，有没有规则限制？")]),t._v(" "),e("p",[t._v("答：一般来说，coreSize 和 maxSize 在线程池初始化时就已经设定了，但我们也可以通过 setCorePoolSize、setMaximumPoolSize 方法动态的修改这两个值。")]),t._v(" "),e("p",[t._v("setCorePoolSize 的限制见如下源码：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果新设置的值小于 coreSize,多余的线程在空闲时会被回收（不保证一定可以回收成功）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果大于 coseSize，会新创建线程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCorePoolSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corePoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" delta "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" corePoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("corePoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 活动的线程大于新设置的核心线程数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("workerCountOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试将可以获得锁的 worker 中断，只会循环一次")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后并不能保证活动的线程数一定小于核心线程数")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("interruptIdleWorkers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置的核心线程数大于原来的核心线程数")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 并不清楚应该新增多少线程，取新增核心线程数和等待队列数据的最小值，够用就好")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workQueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新增线程直到k，如果期间等待队列空了也不会再新增")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addWorker")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("workQueue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmpty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("setMaximumPoolSize 的限制见如下源码：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 maxSize 大于原来的值，直接设置。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 maxSize 小于原来的值，尝试干掉一些 worker")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaximumPoolSize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maximumPoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" maximumPoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" corePoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maximumPoolSize "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("workerCountOf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maximumPoolSize"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("interruptIdleWorkers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_6：说一说对于线程空闲回收的理解，源码中如何体现的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6：说一说对于线程空闲回收的理解，源码中如何体现的？"}},[t._v("#")]),t._v(" 6：说一说对于线程空闲回收的理解，源码中如何体现的？")]),t._v(" "),e("p",[t._v("答：空闲线程回收的时机：如果线程超过 keepAliveTime 时间后，还从阻塞队列中拿不到任务（这种情况我们称为线程空闲），当前线程就会被回收，如果 allowCoreThreadTimeOut 设置成 true，core thread 也会被回收，直到还剩下一个线程为止，如果 allowCoreThreadTimeOut 设置成 false，只会回收非 core thread 的线程。")]),t._v(" "),e("p",[t._v("线程在任务执行完成之后，之所有没有消亡，是因为阻塞的从队列中拿任务，在 keepAliveTime 时间后都没有拿到任务的话，就会打断阻塞，线程直接返回，线程的生命周期就结束了，JVM 会回收掉该线程对象，所以我们说的线程回收源码体现就是让线程不在队列中阻塞，直接返回了，可以见 ThreadPoolExecutor 源码解析章节第三小节的源码解析。")]),t._v(" "),e("h3",{attrs:{id:"_7：如果我想在线程池任务执行之前和之后，做一些资源清理的工作，可以么，如何做？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7：如果我想在线程池任务执行之前和之后，做一些资源清理的工作，可以么，如何做？"}},[t._v("#")]),t._v(" 7：如果我想在线程池任务执行之前和之后，做一些资源清理的工作，可以么，如何做？")]),t._v(" "),e("p",[t._v("答：可以的，ThreadPoolExecutor 提供了一些钩子函数，我们只需要继承 ThreadPoolExecutor 并实现这些钩子函数即可。在线程池任务执行之前实现 beforeExecute 方法，执行之后实现 afterExecute 方法。")]),t._v(" "),e("h3",{attrs:{id:"_8：线程池中的线程创建，拒绝请求可以自定义实现么？如何自定义？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8：线程池中的线程创建，拒绝请求可以自定义实现么？如何自定义？"}},[t._v("#")]),t._v(" 8：线程池中的线程创建，拒绝请求可以自定义实现么？如何自定义？")]),t._v(" "),e("p",[t._v("答：可以自定义的，线程创建默认使用的是 DefaultThreadFactory，自定义话的只需要实现 ThreadFactory 接口即可；拒绝请求也是可以自定义的，实现 RejectedExecutionHandler 接口即可；在 ThreadPoolExecutor 初始化时，将两个自定义类作为构造器的入参传递给 ThreadPoolExecutor 即可。")]),t._v(" "),e("h3",{attrs:{id:"_9：说说你对-worker-的理解？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9：说说你对-worker-的理解？"}},[t._v("#")]),t._v(" 9：说说你对 Worker 的理解？")]),t._v(" "),e("p",[t._v("答：详见《ThreadPoolExecutor 源码解析》中 1.4 小节。")]),t._v(" "),e("h3",{attrs:{id:"_10：说一说-submit-方法执行的过程？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10：说一说-submit-方法执行的过程？"}},[t._v("#")]),t._v(" 10：说一说 submit 方法执行的过程？")]),t._v(" "),e("p",[t._v("答：详见《ThreadPoolExecutor 源码解析》中 2 小节。")]),t._v(" "),e("h3",{attrs:{id:"_11：说一说线程执行任务之后，都在干啥？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11：说一说线程执行任务之后，都在干啥？"}},[t._v("#")]),t._v(" 11：说一说线程执行任务之后，都在干啥？")]),t._v(" "),e("p",[t._v("答：线程执行任务完成之后，有两种结果：")]),t._v(" "),e("ol",[e("li",[t._v("线程会阻塞从队列中拿任务，没有任务的话无限阻塞；")]),t._v(" "),e("li",[t._v("线程会阻塞从队列中拿任务，没有任务的话阻塞一段时间后，线程返回，被 JVM 回收。")])]),t._v(" "),e("h3",{attrs:{id:"_12：keepalivetime-设置成负数或者是-0，表示无限阻塞？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12：keepalivetime-设置成负数或者是-0，表示无限阻塞？"}},[t._v("#")]),t._v(" 12：keepAliveTime 设置成负数或者是 0，表示无限阻塞？")]),t._v(" "),e("p",[t._v("答：这种是不对的，如果 keepAliveTime 设置成负数，在线程池初始化时，就会直接报 IllegalArgumentException 的异常，而设置成 0，队列如果是 LinkedBlockingQueue 的话，执行 workQueue.poll (keepAliveTime, TimeUnit.NANOSECONDS) 方法时，如果队列中没有任务，会直接返回 null，导致线程立马返回，不会无限阻塞。")]),t._v(" "),e("p",[t._v("如果想无限阻塞的话，可以把 keepAliveTime 设置的很大，把 TimeUnit 也设置的很大，接近于无限阻塞。")]),t._v(" "),e("h3",{attrs:{id:"_13：说一说-future-get-方法是如何拿到线程的执行结果的？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13：说一说-future-get-方法是如何拿到线程的执行结果的？"}},[t._v("#")]),t._v(" 13：说一说 Future.get 方法是如何拿到线程的执行结果的？")]),t._v(" "),e("p",[t._v("答：我们需要明确几点：")]),t._v(" "),e("ol",[e("li",[t._v("submit 方法的返回结果实际上是 FutureTask，我们平时都是针对接口编程，所以使用的是 Future.get 来拿到线程的执行结果，实际上是 FutureTask.get ，其方法底层是从 FutureTask 的 outcome 属性拿值的；")]),t._v(" "),e("li",[t._v("《ThreadPoolExecutor 源码解析》中 2 小节中详细说明了 submit 方法最终会把线程的执行结果赋值给 outcome。")])]),t._v(" "),e("p",[t._v("结合 1、2，当线程执行完成之后，自然就可以从 FutureTask 的 outcome 属性中拿到值。")]),t._v(" "),e("h3",{attrs:{id:"_14：总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14：总结"}},[t._v("#")]),t._v(" 14：总结")]),t._v(" "),e("p",[t._v("如果我们弄清楚 ThreadPoolExecutor 的原理之后，线程池的面试题都很简单，所以建议大家多看看 《ThreadPoolExecutor 源码解析》这小节。")])])}),[],!1,null,null,null);a.default=r.exports}}]);