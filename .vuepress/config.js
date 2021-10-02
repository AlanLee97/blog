module.exports = {
  "title": "Blog | AlanLee",
  "description": "李步官的博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": require('./config/nav.js'),
    "sidebar": require('./config/sidebar.js'),
    "type": "blog",
    "noFoundPageByTencent": false,
    "blogConfig": {
      "分类": {
        "location": 1,
        "text": "Category"
      },
      // "tag": {
      //   "location": 0,
      //   "text": "标签"
      // }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "AlanLee",
    "authorAvatar": "/AlanLee.jpg",
    "startYear": "2019",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    "docsRepo": "AlanLee97/blog",
    // 假如文档不是放在仓库的根目录下：
    "docsDir": "docs",
    // 假如文档放在一个特定的分支下：
    "docsBranch": "master",
    // 默认是 false, 设置为 true 来启用
    "editLinks": true,
    // 默认为 "Edit this page"
    "editLinkText": "编辑",

    // 备案
    "record": "粤ICP备19015903号",
    "recordLink": "http://www.beian.miit.gov.cn/",
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    // 支持中文文件名
    [
      "permalink-pinyin",
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
  ],
  configureWebpack: {
    resolve: {
        alias: {
            '@img': '/docs/public/note_images'
        }
    }
},
}