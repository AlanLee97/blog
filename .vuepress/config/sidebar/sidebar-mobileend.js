const configObj = {
  miniprogram: {
    basePath: "/docs/front-end/miniprogram/",
    titles: [
      "",
    ],
  },
  android: {
    basePath: "/docs/front-end/android/",
    titles: [
      "",
    ]
  },
  flutter: {
    basePath: "/docs/front-end/flutter/",
    titles: [
      "Flutter00 - 问题.md",
      "Flutter01 - 去除debug字样.md",
      "Flutter02 - 状态栏透明.md",
      "Flutter03 - 解决依赖冲突.md",
      "Flutter04 - JSON序列化.md",
      "Flutter05 - 使用路由.md",
      "Flutter06 - 调用相机和手机相册.md",
      "Flutter07 - 使用Toast.md",
      "Flutter08 - 使用SharedPreference.md",
      "Flutter09 - 使用Tabbar.md",
    ]
  },
  reactNative: {
    basePath: "/docs/front-end/react-native/",
    titles: [
      "",
    ]
  },
  uniApp: {
    basePath: "/docs/front-end/uni-app/",
    titles: [
      "",
    ]
  },
  taro: {
    basePath: "/docs/front-end/taro/",
    titles: [
      "",
    ]
  },
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  miniprogram: [
    {
      title: "微信小程序",
      collapsable: true,
      children: getChildren(configObj.miniprogram.basePath, configObj.miniprogram.titles)
    },
  ],
  android: [
    {
      title: "Android",
      collapsable: true,
      children: getChildren(configObj.android.basePath, configObj.android.titles)
    }
  ],
  reactNative: [
    {
      title: "React Native",
      collapsable: true,
      children: getChildren(configObj.reactNative.basePath, configObj.reactNative.titles)
    },
  ],
  flutter: [
    {
      title: "Flutter",
      collapsable: true,
      children: getChildren(configObj.flutter.basePath, configObj.flutter.titles)
    },
  ],
  uniApp: [
    {
      title: "uni-app",
      collapsable: true,
      children: getChildren(configObj.uniApp.basePath, configObj.uniApp.titles)
    },
  ],
  taro: [
    {
      title: "Taro",
      collapsable: true,
      children: getChildren(configObj.taro.basePath, configObj.taro.titles)
    },
  ],
}