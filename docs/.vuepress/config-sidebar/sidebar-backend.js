
//基本路径
const docPath = '/backend/';
const docPath_java = docPath + 'java/';
const docPath_python = docPath + 'python/';

const docPath_java_study_javase = docPath + 'java/study/javase/';
const docPath_java_study_javaee = docPath + 'java/study/javaee/';

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


//==================== BEGIN java-JavaEE
{
    {   //study / ssm
        const children_java_study_javaee_ssm = [
            'SSM - 01 - 搭建Spring项目',
            'SSM - 02 - 获取bean的方式',
            'SSM - 03 - 依赖注入的3种方式',
            'SSM - 04 - 装配Bean - XML方式',
            'SSM - 05 - 装配Bean - 注解方式',
            '整合SSM',

        ];

        function getChildrenJavaStudyJavaEESSM(){
            return children_java_study_javaee_ssm.map((item) => {
                return docPath_java_study_javaee + 'SSM/' + item;
            });
        }
    }

    {   //note
        const children_java_note = [
            'ArrayList的扩容机制',
            'JVM内存区域讲解',

        ];

        function getChildrenJavaNote(){
            return children_java_note.map((item) => {
                return docPath_java + 'note/' + item;
            });
        }
    }
}
//-------------------- END java-JavaEE



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
                title: '笔记',
                collapsable: true,
                path: docPath_java + "note/",
                children: getChildrenJavaNote()
            },
            {
                title: '学习',
                collapsable: true,
                path: docPath_java + 'study/',
                children: [
                    {
                        title: 'JavaSE',
                        collapsable: true,
                        path: docPath_java_study_javase,
                        children: getChildrenJavaStudyJavaSE()
                    },

                    {
                        title: 'JavaEE',
                        collapsable: true,
                        path: docPath_java_study_javaee,
                        children: [
                            {
                                title: 'SSM',
                                collapsable: true,
                                path: docPath_java_study_javaee + "SSM/",
                                children: getChildrenJavaStudyJavaEESSM()
                            },
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
