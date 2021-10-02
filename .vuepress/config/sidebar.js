
const frontend = require('./sidebar/sidebar-frontend');
const backend = require('./sidebar/sidebar-backend');
const mobileend = require('./sidebar/sidebar-mobileend');
const devtool = require('./sidebar/sidebar-devtool');
const server = require('./sidebar/sidebar-server');
const database = require('./sidebar/sidebar-database');
const common = require('./sidebar/sidebar-common');
const project = require('./sidebar/sidebar-project');

module.exports = {
  // 前端
  "/docs/front-end/js/": frontend.javascript,
  "/docs/front-end/ts/": frontend.typescript,
  "/docs/front-end/vue/": frontend.vue,
  "/docs/front-end/react/": frontend.react,
  "/docs/front-end/html/": frontend.html,
  "/docs/front-end/css/": frontend.css,
  "/docs/front-end/micro-front-end/": frontend.microFrontend,
  "/docs/front-end/webpack/": frontend.webpack,
  "/docs/front-end/vite/": frontend.vite,
  "/docs/front-end/browser/": frontend.browser,

  // 移动端
  "/docs/mobile-end/miniprogram/": mobileend.miniprogram,
  "/docs/mobile-end/android/": mobileend.android,
  "/docs/mobile-end/react-native/": mobileend.reactNative,
  "/docs/mobile-end/flutter/": mobileend.flutter,
  "/docs/mobile-end/taro/": mobileend.taro,
  "/docs/mobile-end/uni-app/": mobileend.uniApp,

  // 后端
  "/docs/back-end/java/": backend.java,
  "/docs/back-end/microservice/": backend.microservice,

  // 数据库
  "/docs/database/mysql/": database.mysql,
  "/docs/database/oracle/": database.oracle,
  "/docs/database/redis/": database.redis,
  "/docs/database/mongodb/": database.mongodb,
  "/docs/database/memcached/": database.memcached,

  // 开发工具
  "/docs/devtool/git/": devtool.git,
  "/docs/devtool/docker/": devtool.docker,
  "/docs/devtool/kubernetes/": devtool.kubernetes,
  "/docs/devtool/elstaicsearch/": devtool.elstaicsearch,
  "/docs/devtool/nginx/": devtool.nginx,
  "/docs/devtool/jenkins/": devtool.jenkins,

  // 服务器
  "/docs/server/linux/": server.linux,

  // 计算机通识
  "/docs/common/network/": common.network,
  "/docs/common/design-pattern/": common.designPattern,

  // 项目
  "/docs/project/graduation-project/": project.graduationProject,
  "/docs/project/panda-appointment/": project.pandaAppointment,
  "/docs/project/homework-reminder/": project.homeworkReminder,

}