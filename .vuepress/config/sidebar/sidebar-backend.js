const configObj = {
  java: {
    basePath: "/docs/back-end/java/note/",
    titles: [
      "深入浅出多线程教程.md",
      "图解Java线程安全.md",
      "ArrayList的扩容机制.md",
      "CAS、乐观锁、悲观锁.md",
      "Java线程生命周期.md",
      "Java中的IO模型.md",
      "JVM内存区域讲解.md",
      "Spring Boot自动配置原理.md",
      "TheadLocal.md",
    ],
    sub: {
      demo: {
        title: "Demo",
        basePath: "/docs/back-end/java/demo/",
        titles: [
          "集成Swagger2.md",
          "Spring 事务中@Transactional 的使用.md",
          "Spring Boot集成Shiro（前后端分离）.md",
          "SpringBoot+Vue前后端分离集成JWT.md",
          "SpringBoot中使用AOP.md",
        ],
      },
      readSource: {
        title: "阅读源码",
        basePath: "/docs/back-end/java/read-source/",
        titles: [
          "1.Object类.md",
          "2.String类.md",
          "3.StringBuffer类.md",
          "4.AbstractStringBuffer类.md",
          "5.Number类.md",
          "6.Byte类.md",
          "7.Short类.md",
          "8.Integer类.md",
          "9.Long类.md",
          "10.Float类.md",
          "11.Double类.md",
          "12.Boolean类.md",
          "13.System类.md",
          "阅读源码.md",
          "自己对HashMap的理解.md",
          "ConcurrentHashMap底层原理.md",
          "HashMap底层原理.md",
        ],
      },
      javaSE: {
        title: "Java SE",
        sub: {
          thread: {
            title: "多线程",
            basePath: "/docs/back-end/java/javase/thread/",
            titles: [
              "多线程01-基本知识.md",
              "多线程02-线程的操作.md",
              "多线程03-线程的同步.md",
              "多线程04-线程死锁.md",
              "多线程05-生产者与消费者模式.md",
              "多线程06-守护线程.md",
              "多线程07-volatile关键字.md",
            ],
          },
          stream: {
            title: "流",
            basePath: "/docs/back-end/java/javase/stream/",
            titles: [
              "Stream01 - 控制台输入.md",
              "Stream02 - 读写文件.md",
              "Stream03 - 目录操作.md",
            ],
          }
        }
      },
      javaEE: {
        sub: {
          ssm: {
            title: "SSM",
            basePath: "/docs/back-end/java/javaee/SSM/",
            titles: [
              "SSM-01-搭建Spring项目.md",
              "SSM-02-获取bean的方式.md",
              "SSM-03-依赖注入的3种方式.md",
              "SSM-04-装配Bean-XML方式.md",
              "SSM-05-装配Bean-注解方式.md",
  
            ],
          },
          springboot: {
            title: "Spring Boot",
            basePath: "/docs/back-end/java/javaee/springboot",
            titles: [
              "",
            ],
          }
        }
      },
    }
  },
  python: {
    basePath: "/docs/back-end/python/",
    titles: [
      "",
    ]
  },
  microservice: {
    basePath: "/docs/back-end/microservice/",
    titles: [
      "微服务优缺点.md",
    ]
  }
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  java: [
    {
      title: "Java",
      collapsable: true,
      children: getChildren(configObj.java.basePath, configObj.java.titles)
    },
    {
      title: configObj.java.sub.demo.title,
      collapsable: true,
      children: getChildren(configObj.java.sub.demo.basePath, configObj.java.sub.demo.titles)
    },
    {
      title: configObj.java.sub.readSource.title,
      collapsable: true,
      children: getChildren(configObj.java.sub.readSource.basePath, configObj.java.sub.readSource.titles)
    },
    {
      title: configObj.java.sub.javaEE.sub.springboot.title,
      collapsable: true,
      children: getChildren(configObj.java.sub.javaEE.sub.springboot.basePath, configObj.java.sub.javaEE.sub.springboot.titles)
    },
    {
      title: configObj.java.sub.javaEE.sub.ssm.title,
      collapsable: true,
      children: getChildren(configObj.java.sub.javaEE.sub.ssm.basePath, configObj.java.sub.javaEE.sub.ssm.titles)
    },
    {
      title: configObj.java.sub.javaSE.title,
      collapsable: true,
      children: [
        ...getChildren(configObj.java.sub.javaSE.sub.thread.basePath, configObj.java.sub.javaSE.sub.thread.titles), 
        ...getChildren(configObj.java.sub.javaSE.sub.stream.basePath, configObj.java.sub.javaSE.sub.stream.titles)
      ]
    },
  ],
  microservice: [
    {
      title: "微服务",
      collapsable: true,
      children: getChildren(configObj.microservice.basePath, configObj.microservice.titles)
    },
  ],
  python: [
    {
      title: "Python",
      collapsable: true,
      children: getChildren(configObj.python.basePath, configObj.python.titles)
    },
  ]
}