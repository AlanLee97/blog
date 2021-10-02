const configObj = {
  // 作业共享提醒
  homeworkReminder: {
    basePath: "/docs/project/homework-reminder/",
    titles: [
      "作业提醒APP.md",
    ],
  },

  // 熊猫约拍
  pandaAppointment: {
    basePath: "/docs/project/panda-appointment/",
    titles: [
      "部署配置.md",
      "说明文档.md",
      "项目中遇到的问题.md",
    ],
    sub: {
      createProject: {
        sub: {
          pandaAdmin: {
            basePath: "/docs/project/panda-appointment/panda-admin/",
            titles: [
              "项目搭建 - 服务监控.md",
            ],
          },
          pandaConfig: {
            basePath: "/docs/project/panda-appointment/panda-config/",
            titles: [
              "项目搭建 - 分布式配置中心.md",
              "流水线配置.md",
            ],
          },
          pandaDependencies: {
            basePath: "/docs/project/panda-appointment/panda-dependencies/",
            titles: [
              "项目搭建 - 统一的项目依赖.md",
            ],
          },
          pandaEureka: {
            basePath: "/docs/project/panda-appointment/panda-eureka/",
            titles: [
              "项目搭建 - 服务注册与发现.md",
              "流水线配置.md",
            ],
          },
          pandaServiceProviderUser: {
            basePath: "/docs/project/panda-appointment/panda-service-provider-user/",
            titles: [
              "项目搭建 - 用户服务提供者.md",
            ],
          },
          pandaServiceRedis: {
            basePath: "/docs/project/panda-appointment/panda-service-redis/",
            titles: [
              "Redis Sentinel 集群部署.md",
            ],
          },
          pandaSpringSecurityOauth2: {
            basePath: "/docs/project/panda-appointment/panda-spring-security-oauth2/",
            titles: [
              "搭建OAuth2.md",
            ],
          },
        }
      },
      problems: {
        title: "遇到的问题",
        basePath: "/docs/project/panda-appointment/problems/",
        titles: [
          "docker容器中时区不匹配问题.md",
          "vue前端Element-ui多图片上传.md",
        ],
      }
    }
  },

  // UUID
  graduationProject: {
    basePath: "/docs/project/graduation-project/",
    titles: [
      "调查问题.md",
      "选题.md",
      "招聘平台.md",
      "UI设计与软件开发结合的平台.md",
    ],
    sub: {
      problems: {
        basePath: "/docs/project/graduation-project/problems/",
        titles: [
          "1、pagehelper遇到分页不正常的问题.md",
          "2、ReactNative ScrollView嵌套的问题.md",
          "3、js在移动端时间转换显示Invalid Date.md",
          "4、openfeign调用post服务并且传递对象参数是null.md",
          "React Native App问题.md",
        ],
      },
      moduleDesign: {
        basePath: "/docs/project/graduation-project/module-design/",
        titles: [
          "秒杀模块设计.md",
        ],
      },
    }
  },
}


const $createProject = configObj.pandaAppointment.sub.createProject.sub;

function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  // UUID
  graduationProject: [
    {
      title: "UUID——UI设计师与开发者合作平台",
      collapsable: true,
      children: getChildren(configObj.graduationProject.basePath, configObj.graduationProject.titles)
    },
    {
      title: "遇到的问题",
      collapsable: true,
      children: getChildren(configObj.graduationProject.sub.problems.basePath, configObj.graduationProject.sub.problems.titles)
    },
  ],

  // 熊猫约拍
  pandaAppointment: [
    {
      title: "熊猫约拍",
      collapsable: true,
      children: getChildren(configObj.pandaAppointment.basePath, configObj.pandaAppointment.titles)
    },
    {
      title: "项目搭建",
      collapsable: true,
      children: [
        ...getChildren($createProject.pandaAdmin.basePath, $createProject.pandaAdmin.titles),
        ...getChildren($createProject.pandaConfig.basePath, $createProject.pandaConfig.titles),
        ...getChildren($createProject.pandaDependencies.basePath, $createProject.pandaDependencies.titles),
        ...getChildren($createProject.pandaEureka.basePath, $createProject.pandaEureka.titles),
        ...getChildren($createProject.pandaServiceProviderUser.basePath, $createProject.pandaServiceProviderUser.titles),
        ...getChildren($createProject.pandaServiceRedis.basePath, $createProject.pandaServiceRedis.titles),
        ...getChildren($createProject.pandaSpringSecurityOauth2.basePath, $createProject.pandaSpringSecurityOauth2.titles),
      ]
    },
    {
      title: "遇到的问题",
      collapsable: true,
      children: getChildren(configObj.pandaAppointment.sub.problems.basePath, configObj.pandaAppointment.sub.problems.titles)
    },
  ],

  // 作业共享提醒APP
  homeworkReminder: [
    {
      title: "作业共享提醒APP",
      collapsable: true,
      children: getChildren(configObj.homeworkReminder.basePath, configObj.homeworkReminder.titles)
    },
  ],

}