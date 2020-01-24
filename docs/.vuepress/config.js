module.exports = {
    base: "/blog/",
    author: 'AlanLee',
    theme: 'reco',
    title: 'AlanLee',
    description: '李步官的博客',
    themeConfig: {
        type: 'blog',
        authorAvatar: '/AlanLee.jpg',
        // 博客配置
        blogConfig: {
/*            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }*/
        },
        //导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '前端', link: '/frontend/'},
            {text: '移动端', link: '/mobileend/'},
            {text: '后端', link: '/backend/'},
            {text: '服务器', link: '/server/'},
            {text: '数据库', link: '/database/'},
            {text: '其他', link: '/other/'},
            {text: '开发工具', link: '/devtool/'},
            {text: '关于我', link: '/about/'},
        ],

        //侧边栏
        sidebar: require('./sidebar'),

        //显示所有标题链接
        displayAllHeaders: true, // 默认值：false,

        //腾讯公益
        noFoundPageByTencent: false
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'public/note_images'
            }
        }
    },

    //本地化
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            title: 'Blog | AlanLee',
            description: 'If the short cut to learning, it also must be diligent.'
        }
    },

    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
}
