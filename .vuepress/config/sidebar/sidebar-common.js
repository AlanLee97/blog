const configObj = {
  network: {
    basePath: "/docs/common/network/",
    titles: [
      "计算机网络面试知识点总结.md",
      "计算机网络知识总结.md",
      "整合.md",
    ],
    sub: {
      http: {
        basePath: "/docs/common/network/http/",
        titles: [
          "",
        ],
      },
      tcp: {
        basePath: "/docs/common/network/tcp/",
        titles: [
          "",
        ],
      }
    }
  },
  designPattern: {
    basePath: "/docs/common/design-pattern/",
    titles: [
      "1.单例模式.md",
      "设计模式01-单例模式.md",
    ],
    sub: {
      designPrinciple: {
        basePath: "/docs/common/design-pattern/design-principle/",
        titles: [
          "1.单一职责原则.md",
          "2.接口隔离原则.md",
          "3.依赖倒置原则.md",
          "4.里氏替换原则.md",
          "5.开闭原则.md",
          "6.迪米特法则.md",
          "7.合成复用原则.md",
        ],
      }
    }
  },
}

function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  network: [
    {
      title: "计算机网络",
      collapsable: true,
      children: getChildren(configObj.network.basePath, configObj.network.titles)
    },
    {
      title: "HTTP",
      collapsable: true,
      children: getChildren(configObj.network.sub.http.basePath, configObj.network.sub.http.titles)
    },
    {
      title: "TCP",
      collapsable: true,
      children: getChildren(configObj.network.sub.tcp.basePath, configObj.network.sub.tcp.titles)
    },
  ],
  designPattern: [
    {
      title: "设计模式",
      collapsable: true,
      children: getChildren(configObj.designPattern.basePath, configObj.designPattern.titles)
    },
    {
      title: "设计原则",
      collapsable: true,
      children: getChildren(configObj.designPattern.sub.designPrinciple.basePath, configObj.designPattern.sub.designPrinciple.titles)
    },
  ]
}