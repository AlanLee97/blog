const configObj = {
  mysql: {
    basePath: "/docs/database/mysql/",
    titles: [
      "为什么不建议使用外键.md",
      "一千行MySQL命令.md",
      "一条SQL语句在MySQL中如何执行的.md",
      "一条SQL语句执行得很慢的原因有哪些.md",
      "explain关键字详解.md",
      "MySQL大表优化方案.md",
    ],
    sub: {
      mycat: {
        basePath: "/docs/database/mysql/mycat/",
        titles: [
          "Mycat的安装与简单使用.md",
          "MySQL主从配置与Mycat读写分离.md",
        ],
      }
    }
  },
  oracle: {
    basePath: "/docs/database/oracle/",
    titles: [
      "阿里云镜像加速.md",
    ],
  },
  redis: {
    basePath: "/docs/database/redis/",
    titles: [
      "IO多路复用.md",
    ],
  },
  mongodb: {
    basePath: "/docs/database/mongodb/",
    titles: [
      "",
    ],
  },
  memcached: {
    basePath: "/docs/database/memcached/",
    titles: [
      "安装memcached.md",
    ],
  },
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  mysql: [
    {
      title: "MySQL",
      collapsable: true,
      children: getChildren(configObj.mysql.basePath, configObj.mysql.titles)
    },
    {
      title: "MyCat",
      collapsable: true,
      children: getChildren(configObj.mysql.sub.mycat.basePath, configObj.mysql.sub.mycat.titles)
    },
  ],
  oracle: [
    {
      title: "Oracle",
      collapsable: true,
      children: getChildren(configObj.oracle.basePath, configObj.oracle.titles)
    },
  ],
  redis: [
    {
      title: "Redis",
      collapsable: true,
      children: getChildren(configObj.redis.basePath, configObj.redis.titles)
    },
  ],
  mongodb: [
    {
      title: "MongoDB",
      collapsable: true,
      children: getChildren(configObj.mongodb.basePath, configObj.mongodb.titles)
    },
  ],
  memcached: [
    {
      title: "Memcached",
      collapsable: true,
      children: getChildren(configObj.memcached.basePath, configObj.memcached.titles)
    },
  ]
}