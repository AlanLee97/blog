module.exports = {
    '/backend/': [
        '',
        {
            title: '后端',
            collapsable: false,
            path: '/backend/',
            children: [
                //java
                {
                    title: 'Java',
                    collapsable: true,
                    path: '/backend/java/',
                    children: [
                        {
                            title: '学习',
                            collapsable: true,
                            path: '/backend/java/study/',
                            children: [
                                {
                                    title: 'JavaSE',
                                    collapsable: true,
                                    path: '/backend/java/study/javase/',
                                    children: [
                                        '/backend/java/study/javase/1.1 Java简介',
                                        '/backend/java/study/javase/Stream01 - 控制台输入',
                                        '/backend/java/study/javase/Stream02 - 读写文件',
                                        '/backend/java/study/javase/Stream03 - 目录操作',
                                    ]
                                },

                                {
                                    title: 'JavaEE',
                                    collapsable: true,
                                    path: '/backend/java/study/javaee/',
                                    children: [
                                        '/backend/java/study/javaee/'
                                    ]
                                },
                            ]
                        },
                    ]
                },

                //php
                {
                    title: 'php',
                    collapsable: true,
                    path: '/backend/php/',
                    children: [
                        '/backend/php/'
                    ]
                },

                //python
                {
                    title: 'python',
                    collapsable: true,
                    path: '/backend/python/',
                    children: [
                        '/backend/python/'

                    ]
                },
            ]
        },
    ],

    '/frontend/': [
        '',
        {
            title: '前端',
            collapsable: false,
            path: '/frontend/',
            children: [
                {
                    title: 'vue',
                    collapsable: true,
                    path: '/frontend/vue/',
                    children: [
                        {
                            title: '学习',
                            collapsable: true,
                            path: '/frontend/vue/study/',
                            children: [
                                '/frontend/vue/study/父子组件通信'
                            ]
                        },
                        {
                            title: '笔记',
                            collapsable: true,
                            path: '/frontend/vue/note/',
                            children: [
                                '/frontend/vue/note/Vuepress 在md文件中引入图片资源'
                            ]
                        },
                    ]
                },

                //html
                {
                    title: 'html',
                    collapsable: true,
                    path: '/frontend/html/',
                    children: [
                        '/frontend/html/'
                    ]
                },

                //html
                {
                    title: 'css',
                    collapsable: true,
                    path: '/frontend/css/',
                    children: [
                        '/frontend/css/'
                    ]
                },

                //javascript
                {
                    title: 'javascript',
                    collapsable: true,
                    path: '/frontend/js/',
                    children: [
                        '/frontend/js/'
                    ]
                },

                //jquery
                {
                    title: 'jquery',
                    collapsable: true,
                    path: '/frontend/jquery/',
                    children: [
                        '/frontend/jquery/'
                    ]
                },
            ]
        },
    ],

    '/mobileend/': [
        '',
        //微信小程序
        {
            title: '微信小程序',
            path: '/mobileend/miniprogram/',
            children: [
                '/mobileend/miniprogram/'
            ]
        },

        //Android
        {
            title: 'Android',
            path: '/mobileend/android/',
            children: [
                '/mobileend/android/'
            ]
        },

        //uni-app
        {
            title: 'uni-app',
            path: '/mobileend/uni-app/',
            children: [
                '/mobileend/uni-app/'
            ]
        },
    ],

    //服务器
    '/server/': [
        '',
        {
            title: '服务器',
            path: '/server/',
            children: [
                {
                    title: 'Linux',
                    path: '/server/linux/',
                    children: [
                        {
                            title: '学习',
                            path: '/server/linux/study/',
                            children: [
                                '/server/linux/study/Linux01 - 简介',
                                '/server/linux/study/Linux02 - 目录结构',
                                '/server/linux/study/Linux03 - 操作文件目录',
                                '/server/linux/study/Linux04 - 系统管理命令',
                                '/server/linux/study/Linux05 - 开关机命令',
                                '/server/linux/study/Linux06 - 压缩命令',
                                '/server/linux/study/Linux07 - Linux 编辑器',
                                '/server/linux/study/Linux08 - 用户和组管理',
                                '/server/linux/study/Linux09 -  文件权限管理',
                                '/server/linux/study/Linux10 - 安装Java',
                                '/server/linux/study/Linux11 - 安装Tomcat',
                            ]
                        },
                    ]
                },
            ]
        },
    ],

    //数据库
    '/database/': [
        '',
        {
            title: '数据库',
            path: '/database/',
            children: [
                {
                    title: 'MySQL',
                    path: '/database/mysql/',
                    children: [
                        '/database/mysql/'
                    ]
                },
            ]
        },
    ],

    //其他
    '/other/': [
        '',
        {
            title: '其他',
            path: '/other/',
            children: [
                {
                    title: '数据结构',
                    path: '/other/datastruct/',
                    children: [
                        {
                            title: '数组',
                            path: '/other/datastruct/array',
                            children: [
                                '/other/datastruct/array/数组01 - 稀疏数组'
                            ]
                        },
                    ]
                },

                {
                    title: '了解',
                    path: '/other/know/',
                    children: [
                        '/other/know/tar.gz与zip的区别'
                    ]
                },
            ]
        },
    ],

    //开发工具
    '/devtool/': [
        '',
        {
            title: '开发工具',
            path: '/devtool/',
            children: [
                {
                    title: 'Docker',
                    path: '/devtool/docker/',
                    children: [
                        '/devtool/docker/'
                    ]
                },
                {
                    title: 'Git',
                    path: '/devtool/git/',
                    children: [
                        '/devtool/git/'
                    ]
                },
            ]
        },
    ],

    // fallback
    '/': [
        '',
        'about'    /* about.html */
    ]
}
