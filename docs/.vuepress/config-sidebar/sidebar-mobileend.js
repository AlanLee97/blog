
docPath_flutter = "/mobileend/flutter/"

//==================== BEGIN 面试经历
{
    const children_flutter = [
        '去除debug字样',
        '状态栏透明',
        '解决依赖冲突',
        '调用相机和手机相册',
    ];

    function getChildrenFlutter(){
        return children_flutter.map((item) => {
            return docPath_flutter + item;
        });
    }
}
//-------------------- END 面试经历


module.exports = [
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

    //Flutter
    {
        title: 'Flutter',
        path: '/mobileend/flutter/',
        children: getChildrenFlutter()
    },

    //uni-app
    {
        title: 'uni-app',
        path: '/mobileend/uni-app/',
        children: [
            '/mobileend/uni-app/'
        ]
    },
]
