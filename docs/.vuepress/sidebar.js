module.exports = {
    '/interview/': require('./config-sidebar/sidebar-interview'),

    '/backend/': require('./config-sidebar/sidebar-backend'),

    '/frontend/': require('./config-sidebar/sidebar-frontend'),

    '/mobileend/': require('./config-sidebar/sidebar-mobileend'),

    //服务器
    '/server/': require('./config-sidebar/sidebar-server'),

    //数据库
    '/database/': require('./config-sidebar/sidebar-database'),

    //其他
    '/other/': require('./config-sidebar/sidebar-other'),

    //开发工具
    '/devtool/': require('./config-sidebar/sidebar-devtool'),

    // fallback
    '/': [
        '',
        'about'    /* about.html */
    ]
}
