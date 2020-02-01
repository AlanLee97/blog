module.exports = {
    base: "/",
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
        nav: require('./navbar'),

        //侧边栏
        sidebar: require('./sidebar'),

        //显示所有标题链接
        displayAllHeaders: true, // 默认值：false,

        //腾讯公益
        noFoundPageByTencent: false,

        lastUpdated: "上次更新",

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'AlanLee97',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '我的GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'AlanLee97/blog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑',

        // 备案
        record: '粤ICP备19015903号',
        recordLink: 'http://www.beian.miit.gov.cn/',


    },

    configureWebpack: {
        resolve: {
            alias: {
                '@img': '/docs/public/note_images'
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
        ['link', {rel: 'icon', href: '/favicon.png'}]
    ],

    plugins: require('./plugins'),


}
