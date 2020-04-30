//基本路径
const docPath_shuati_java = '/interview/shuati/java/';
const docPath_shuati_summary = '/interview/shuati/summary/';
const docPath_zhuanlan_java = '/interview/zhuanlan/java/';
const docPath_experience = '/interview/experience/';
const docPath_resume = '/interview/resume/';


//==================== BEGIN 个人简历
{
    const children_resume = [
        '李步官的简历',
    ];

    function getChildrenResume(){
        return children_resume.map((item) => {
            return docPath_resume + item;
        });
    }
}
//-------------------- END 个人简历


//==================== BEGIN 刷题-java
{
    const children_shuati_java = [
        'no001',
        'no002',
        'no003',
        'no004',
        'no005',
        'no006',
        'no007',
        'no008',
        'no009',
        'no010',
        'no011',
        'no013',
        'no014',
        'no015',
        'no016',
        'no017',
    ];

    function getChildrenShuatiJava(){
        return children_shuati_java.map((item) => {
            return docPath_shuati_java + item;
        });
    }
}
//-------------------- END 刷题-java



//==================== BEGIN 刷题-总结
{
    const children_shuati_summary = [
        '&&与&，|与||的区别',
        '++i和i++的区别',
        '== 和 equals()的区别',
        'hashCode()方法和equals()方法的区别',
        'JSP的九大内置对象',
        'Linux中常用的tar解压命令总结',
        'Vector 与 ArrayList 的主要区别',
        '内部类总结',
    ];

    function getChildrenShuatiSummary(){
        return children_shuati_summary.map((item) => {
            return docPath_shuati_summary + item;
        });
    }
}
//-------------------- END 刷题-总结



//==================== BEGIN 专栏-java
{
    const children_zhuanlan_java = [
        '02 String、Long 源码解析和面试题',
        '03 Java 常用关键字理解',
        '04 Arrays、Collections、Objects 常用方法源码解析',
        '05 ArrayList 源码解析和设计思路',
        '06 LinkedList 源码解析',
        '07 List 源码会问哪些面试题',
        '08 HashMap 源码解析',
        '09 TreeMap 和 LinkedHashMap 核心源码解析',
        '10 Map源码会问哪些面试题',
        '11 HashSet、TreeSet 源码解析',
        '12 彰显细节：看集合源码对我们实际工作的帮助和应用',
        '13 差异对比：集合在 Java 7 和 8 有何不同和改进',
        '14 简化工作：Guava Lists Maps 实际工作运用和源码',
        '15 CopyOnWriteArrayList 源码解析和设计思路',
        '16 ConcurrentHashMap 源码解析和设计思路',
        '17 并发 List、Map源码面试题',
        '18 场景集合：并发 List、Map的应用场景',
        '19 LinkedBlockingQueue 源码解析',
        '20 SynchronousQueue 源码解析',
        '21 DelayQueue 源码解析',
        '22 ArrayBlockingQueue 源码解析',
        '23 队列在源码方面的面试题',
        '24 举一反三：队列在 Java 其它源码中的应用',
        '25 整体设计：队列设计思想、工作中使用场景',
        '26 惊叹面试官：由浅入深手写队列',
        '27 Thread 源码解析',
        '28 Future、ExecutorService 源码解析',
        '29 押宝线程源码面试题',
        '30 AbstractQueuedSynchronizer 源码解析（上）',
        '31 AbstractQueuedSynchronizer 源码解析（下）',
        '32 ReentrantLock 源码解析',
        '33 CountDownLatch、Atomic 等其它源码解析',
        '34 只求问倒：连环相扣系列锁面试题',
        '35 经验总结：各种锁在工作中使用场景和细节',
        '36 从容不迫：重写锁的设计结构和细节',
        '37 ThreadPoolExecutor 源码解析',
        '38 线程池源码面试题',
        '39 经验总结：不同场景，如何使用线程池',
        '40 打动面试官：线程池流程编排中的运用实战',
        '41 突破难点：如何看 Lambda 源码',
        '42 常用的 Lambda 表达式使用场景解析和应用',
        '43 ThreadLocal 源码解析',
        '44 场景实战：ThreadLocal 在上下文传值场景下的实践',
        '45 Socket 源码及面试题',
        '46 ServerSocket 源码及面试题',
        '47 工作实战：Socket 结合线程池的使用',
    ];

    function getChildrenZhuanlanJava(){
        return children_zhuanlan_java.map((item) => {
            return docPath_zhuanlan_java + item;
        });
    }
}
//-------------------- END 专栏-java



//==================== BEGIN 面试经历
{
    const children_experience = [
        '第1次面试经历-腾讯看点前端实习生'
    ];

    function getChildrenExperience(){
        return children_experience.map((item) => {
            return docPath_experience + item;
        });
    }
}
//-------------------- END 面试经历

//导出配置
module.exports = [
    '',
    {
        title: '个人简历',
        path: docPath_resume,
        children: [
            {
                title: '我的简历',
                path: docPath_resume,
                children: getChildrenResume()
            },

        ]
    },
    {
        title: '刷题',
        path: '/interview/shuati/',
        children: [
            {
                title: 'java',
                path: docPath_shuati_java,
                children: getChildrenShuatiJava()
            },

            {
                title: '总结',
                path: docPath_shuati_summary,
                children: getChildrenShuatiSummary()
            },
        ]
    },

    {
        title: '专栏',
        path: '/interview/zhuanlan/',
        children: [
            {
                title: 'java',
                path: docPath_zhuanlan_java,
                children: getChildrenZhuanlanJava()
            },
        ]
    },

    {
        title: '面试经历',
        path: docPath_experience,
        children: getChildrenExperience()
    },
];
