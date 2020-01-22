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
        { text: '关于我', link: '/about/' },
      ],
      //侧边栏
/*       sidebar:[
        {
          title:'后端',
          collapsable:true,
          path:'/backend/',
          children:[
            {
              title:'Java',
              collapsable:true,
              path:'/backend/java/',
              children:[
                {
                  title:'学习',
                  collapsable:true,
                  path:'/backend/java/study/',
                  children:[
                    {
                      title:'JavaSE',
                      collapsable:true,
                      path:'/backend/java/study/javase/',
                      children:[
                        '/backend/java/study/javase/1.1 Java简介'
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        }, 

        {
          title:'前端',
          collapsable:true,
          path:'/frontend/',
          children:[
            {
              title:'vue',
              collapsable:true,
              path:'/frontend/vue/',
              children:[
                '/frontend/vue/'
              ]
            }, 
            {
              title:'html',
              collapsable:true,
              path:'/frontend/html/',
              children:[
                '/frontend/html/'
              ]
            }, 
          ]
        }, 
      ],
 */
      
      sidebar: {
        '/backend/': [
          '',      
          {
            title:'后端',
            collapsable:true,
            path:'/backend/',
            children:[
              {
                title:'Java',
                collapsable:true,
                path:'/backend/java/',
                children:[
                  {
                    title:'学习',
                    collapsable:true,
                    path:'/backend/java/study/',
                    children:[
                      {
                        title:'JavaSE',
                        collapsable:true,
                        path:'/backend/java/study/javase/',
                        children:[
                          '/backend/java/study/javase/1.1 Java简介'
                        ]
                      },
                    ]
                  },
                ]
              },
            ]
          },
        ],

        '/frontend/': [
          '',      
          {
            title:'前端',
            collapsable:true,
            path:'/frontend/',
            children:[
              {
                title:'vue',
                collapsable:true,
                path:'/frontend/vue/',
                children:[
                  {
                    title:'学习',
                    collapsable:true,
                    path:'/frontend/vue/study/',
                    children:[
                      '/frontend/vue/study/父子组件通信'
                    ]
                  }, 
                  {
                    title:'笔记',
                    collapsable:true,
                    path:'/frontend/vue/note/',
                    children:[
                      '/frontend/vue/note/Vuepress 在md文件中引入图片资源'
                    ]
                  }, 
                ]
              }, 
              {
                title:'html',
                collapsable:true,
                path:'/frontend/html/',
                children:[
                  '/frontend/html/'
                ]
              }, 
            ]
          },
        ],

        '/mobileend/': [
          '',       
        ],

        '/server/': [
          '', 
        ],

        // fallback
        '/': [
          '',
          'about'    /* about.html */
        ]
      },

      //显示所有标题链接
      displayAllHeaders: true, // 默认值：false
    },

    configureWebpack: {
      resolve: {
        alias: {
          '@img': 'public/note_images'
        }
      }
    }
  }