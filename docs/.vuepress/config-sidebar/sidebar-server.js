
//基本路径
const docPath = '/server/';
const docPath_linux = docPath + 'linux/';


//==================== BEGIN React-study
{
    const children_linux_study = [
        'Linux01 - 简介',
        'Linux02 - 目录结构',
        'Linux03 - 操作文件目录',
        'Linux04 - 系统管理命令',
        'Linux05 - 开关机命令',
        'Linux06 - 压缩命令',
        'Linux07 - Linux 编辑器',
        'Linux08 - 用户和组管理',
        'Linux09 -  文件权限管理',
        'Linux10 - 安装Java',
        'Linux11 - 安装Tomcat',
        'Linux下安装JDK',
        'Linux下安装Tengine',
        'Linux下安装Tomcat（详细教程）',

    ];

    function getChildrenLinuxStudy(){
        return children_linux_study.map((item) => {
            return docPath_linux + 'study/' + item;
        });
    }
}
//-------------------- END React-study




module.exports = [
    '',
    {
        title: 'Linux',
        path: docPath_linux,
        children: [
            {
                title: '学习',
                path: docPath_linux + 'study/',
                children: getChildrenLinuxStudy()
            },
        ]
    },
]
