
//基本路径
const docPath = '/frontend/';
const docPath_vue = docPath + 'vue/';
const docPath_html = docPath + 'html/';
const docPath_css = docPath + 'css/';
const docPath_js = docPath + 'js/';
const docPath_react = docPath + 'react/';


//==================== BEGIN Vue-学习
{
    const children_vue_study = [
        '父子组件通信'
    ];

    function getChildrenVueStudy(){
        return children_vue_study.map((item) => {
            return docPath_vue + 'study/' + item;
        });
    }
}
//-------------------- END Vue-学习



//==================== BEGIN Vue-笔记
{
    const children_vue_note = [
        'Vuepress 在md文件中引入图片资源'
    ];

    function getChildrenVueNote(){
        return children_vue_note.map((item) => {
            return docPath_vue + 'note/' + item;
        });
    }
}
//-------------------- END Vue-笔记



//==================== BEGIN HTML-学习
{
    const children_html_study = [
        'HTML01-简介',
        'HTML02-基础',
        'HTML03-元素',
    ];

    function getChildrenHTMLStudy(){
        return children_html_study.map((item) => {
            return docPath_html + 'study/' + item;
        });
    }
}
//-------------------- END HTML-学习



//==================== BEGIN CSS-flex弹性布局
{
    const children_css_flex = [
        '01-flex的使用',
        '02-flex container的flex-direction属性',
        '03-flex container的justify-content属性',
        '04-flex container的align-items属性',
        '05-flex container的flex-wrap属性',
        '06-flex container的flex-flow属性',
        '07-flex container的align-content属性',
        '08-flex-items的order属性',
        '09-flex items的align self属性',
        '10-flex items的flex-grow属性',
        '11-flex items的flex-shrink属性',
        '12-flex items的flex-basis属性',
        '13-flex items的flex属性',
    ];

    function getChildrenCSSFlex(){
        return children_css_flex.map((item) => {
            return docPath_css + 'flex/' + item;
        });
    }
}
//-------------------- END CSS-flex弹性布局



//==================== BEGIN js-ES6
{
    const children_js_es6 = [
        '01-let关键字和const关键字',
        '02-函数的参数',
        '03-解构赋值',
        '04-数组',
        '05-字符串',
        '06-面向对象',
        '07-JSON',

    ];

    function getChildrenJsES6(){
        return children_js_es6.map((item) => {
            return docPath_js + 'es6/' + item;
        });
    }
}
//-------------------- END js-ES6



//==================== BEGIN React-study
{
    const children_react = [
        '01-安装React',
        '02-JSX的使用',
        '03-React组件',
        '04-组件拆分与组件传值',
        '05-PropTypes与DefaultTypes',
        '06-虚拟DOM',
        '07-ref属性',
        '08-react的生命周期函数',
        '09-使用axios发送网络请求',
        '10-使用redux',

    ];

    function getChildrenReactStudy(){
        return children_react.map((item) => {
            return docPath_react + 'study/' + item;
        });
    }
}
//-------------------- END React-study


module.exports = [
    '',
    {
        title: 'Vue',
        collapsable: true,
        path: docPath_vue,
        children: [
            {
                title: '学习',
                collapsable: true,
                path: docPath_vue + 'study/',
                children: getChildrenVueStudy()
            },
            {
                title: '笔记',
                collapsable: true,
                path: docPath_vue + 'note/',
                children: getChildrenVueNote()
            },
        ]
    },

    //html
    {
        title: 'HTML',
        collapsable: true,
        path: docPath_html,
        children: [
            {
                title: '学习',
                collapsable: true,
                path: docPath_html + 'study/',
                children: getChildrenHTMLStudy()
            },
        ]
    },

    //css
    {
        title: 'CSS',
        collapsable: true,
        path: docPath_css,
        children: [
            {
                title: 'flex弹性布局',
                collapsable: true,
                path: docPath_css + 'flex/',
                children: getChildrenCSSFlex()
            },
        ]
    },

    //javascript
    {
        title: 'Javascript',
        collapsable: true,
        path: docPath_js,
        children: [
            {
                title: 'ES6',
                collapsable: true,
                path: docPath_js + 'es6/',
                children: getChildrenJsES6()
            },
        ]
    },

    //jquery
    {
        title: 'jQuery',
        collapsable: true,
        path: '/frontend/jquery/',
        children: [
            '/frontend/jquery/'
        ]
    },

    //react
    {
        title: 'React',
        collapsable: true,
        path: docPath_react,
        children: [
            {
                title: 'Study',
                collapsable: true,
                path: docPath_react + 'study/',
                children: getChildrenReactStudy()
            },
        ]
    },
];
