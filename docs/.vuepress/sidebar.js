module.exports = {
    '/backend/': [
        '',      
        {
          title:'后端',
          collapsable:true,
          path:'/backend/',
          children:[
            //java
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

            //php
            {
              title:'php',
              collapsable:true,
              path:'/backend/php/',
              children:[
                '/backend/php/'
              ]
            },

            //python
            {
              title:'php',
              collapsable:true,
              path:'/backend/python/',
              children:[
                '/backend/python/'

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

            //html
            {
              title:'html',
              collapsable:true,
              path:'/frontend/html/',
              children:[
                '/frontend/html/'
              ]
            }, 

            //html
            {
              title:'css',
              collapsable:true,
              path:'/frontend/css/',
              children:[
                '/frontend/css/'
              ]
            }, 

            //javascript
            {
              title:'javascript',
              collapsable:true,
              path:'/frontend/js/',
              children:[
                '/frontend/js/'
              ]
            },

            //jquery
            {
              title:'jquery',
              collapsable:true,
              path:'/frontend/jquery/',
              children:[
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
          path:'/mobileend/miniprogram/',
          children:[
            '/mobileend/miniprogram/'
          ]
        }, 

        //Android
        {
          title: 'Android',
          path:'/mobileend/',
          children:[
            '/mobileend/android/'
          ]
        },  

        //uni-app  
        {
          title: 'uni-app',
          path:'/mobileend/',
          children:[
            '/mobileend/uni-app/'
          ]
        },   
      ],

      //服务器
      '/server/': [
        '', 
        {
          title: '服务器',
          path:'/server/',
          children:[
            {
              title: 'Linux',
              path:'/server/linux/',
              children:[
                '/server/linux/'
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
          path:'/devtool/',
          children:[
            {
              title: 'Docker',
              path:'/devtool/docker/',
              children:[
                '/devtool/docker/'
              ]
            }, 
            {
              title: 'Git',
              path:'/devtool/git/',
              children:[
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