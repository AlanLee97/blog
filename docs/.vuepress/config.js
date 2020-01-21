module.exports = {
    base : "/blog/",
    theme: 'reco',
    themeConfig: {
      type:'blog',
      authorAvatar: '/AlanLee.jpg',
      //导航栏
      nav: [
        { text: '主页', link: '/' },
        { text: '服务器', link: '/server/' },
        { text: '前端', link: '/frontend/' },
        { text: '后端', link: '/backend/' },
        { text: '移动端', link: '/mobileend/' },
      ],
      //侧边栏
      sidebar: 'auto',
      //显示所有标题链接
      displayAllHeaders: true, // 默认值：false
    }
  }