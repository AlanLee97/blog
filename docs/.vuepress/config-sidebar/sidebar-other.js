
//基本路径
const docPath_datastruct = '/other/datastruct/';
const docPath_resolve = '/other/resolve/';
const docPath_know = '/other/know/';


//==================== BEGIN 数据结构-数组
{
    const children_array = [
        'array/数组01 - 稀疏数组'
    ];

    function getChildrenArray(){
        return children_array.map((item) => {
            return docPath_datastruct + item;
        });
    }
}
//-------------------- END 数据结构-数组





//==================== BEGIN 数据结构-链表
{
    const children_linkedlist = [
        'linkedlist/链表01-单链表',
        'linkedlist/链表02-双向链表',
        'linkedlist/单链表-面试题'
    ];

    function getChildrenLinkedlist(){
        return children_linkedlist.map((item) => {
            return docPath_datastruct + item;
        });
    }
}
//-------------------- END 数据结构-链表




//==================== BEGIN 问题解决
{
    const children_resolve = [
        'python读取文件编码问题',
        '解决谷歌浏览器安装插件提示INVALID_ID的问题',
    ];

    function getChildrenResolve(){
        return children_resolve.map((item) => {
            return docPath_resolve + item;
        });
    }
}
//-------------------- END 问题解决




//==================== BEGIN 问题解决
{
    const children_know = [
        'tar.gz与zip的区别'
    ];

    function getChildrenKnow(){
        return children_know.map((item) => {
            return docPath_know + item;
        });
    }
}
//-------------------- END 问题解决



//导出配置
module.exports = [
    '',
    {
        title: '数据结构',
        path: docPath_datastruct,
        children: [
            {
                title: '数组',
                path: docPath_datastruct + 'array/',
                children: getChildrenArray()
            },
            {
                title: '链表',
                path: docPath_datastruct + 'linkedlist/',
                children: getChildrenLinkedlist()
            },
        ]
    },

    {
        title: '问题解决',
        path: docPath_resolve,
        children: getChildrenResolve()
    },

    {
        title: '了解',
        path: docPath_know,
        children: getChildrenKnow()
    },
];
