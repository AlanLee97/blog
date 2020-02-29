
//基本路径
const docPath = '/backend/';
const docPath_java = '/backend/' + 'java/';
const docPath_python = '/backend/' + 'python/';


//==================== BEGIN java-JavaSE
{
    const children_java_study_javase = [
        'Stream01 - 控制台输入',
        'Stream02 - 读写文件',
        'Stream03 - 目录操作',
        '多线程01-基本知识',
        '多线程02-线程的操作',
        '多线程03-线程的同步',
        '多线程04-线程死锁',
        '多线程05-生产者与消费者模式',
        '多线程06-守护线程',
        '多线程07-volatile关键字',
        '设计模式01-单例模式',

    ];

    function getChildrenJavaStudyJavaSE(){
        return children_java_study_javase.map((item) => {
            return docPath_java + 'study/javase/' + item;
        });
    }
}
//-------------------- END java-JavaSE


//==================== BEGIN python-crawl
{
    const children_python_crawl = [
        '06-selenium使用',
        '07-使用selenium+phantomjs爬取B站关于小米10的视频',
        '10-爬取ajax数据-马蜂窝旅游网',

    ];

    function getChildrenPythonCrawl(){
        return children_python_crawl.map((item) => {
            return docPath_python + 'crawl/' + item;
        });
    }
}
//-------------------- END python

module.exports = [
    '',
    //java
    {
        title: 'Java',
        collapsable: true,
        path: docPath_java,
        children: [
            {
                title: '学习',
                collapsable: true,
                path: docPath_java + 'study/',
                children: [
                    {
                        title: 'JavaSE',
                        collapsable: true,
                        path: '/backend/java/study/javase/',
                        children: getChildrenJavaStudyJavaSE()
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
        title: 'Python',
        collapsable: true,
        path: docPath_python,
        children: [
            {
                title: '爬虫',
                collapsable: true,
                path: docPath_python + "crawl/",
                children: getChildrenPythonCrawl()
            },

        ]
    },
]
