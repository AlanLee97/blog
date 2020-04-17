(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{396:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux下安装jdk（rpm方式安装）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux下安装jdk（rpm方式安装）"}},[a._v("#")]),a._v(" Linux下安装JDK（rpm方式安装）")]),a._v(" "),t("h3",{attrs:{id:"_1-上传jdk压缩包到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传jdk压缩包到服务器"}},[a._v("#")]),a._v(" 1. 上传JDK压缩包到服务器")]),a._v(" "),t("p",[a._v("创建文件夹opt/package")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /opt/package\n")])])]),t("p",[a._v("切换到文件夹opt/package")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /opt/package\n")])])]),t("p",[a._v("用ftp工具将文件上传至服务器的/opt/package目录下")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408153342-377241.png",alt:"image-20200408153223542"}})]),a._v(" "),t("h3",{attrs:{id:"_2-安装jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装jdk"}},[a._v("#")]),a._v(" 2. 安装JDK")]),a._v(" "),t("p",[a._v("执行命令")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh jdk-7u79-linux-x64.rpm\n")])])]),t("p",[t("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408153601922.png",alt:"image-20200408153601922"}})]),a._v(" "),t("h3",{attrs:{id:"_3-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置环境变量"}},[a._v("#")]),a._v(" 3. 配置环境变量")]),a._v(" "),t("p",[a._v("编辑/etc/profile文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n")])])]),t("p",[a._v("添加以下代码")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/java/jdk1.7.0_79\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("$:CLASSPATH:"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n")])])]),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154802-968410.png",alt:"image-20200408154759206"}})]),a._v(" "),t("p",[a._v("更新配置文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/peofile\n")])])]),t("p",[t("img",{attrs:{src:"E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200408154909213.png",alt:"image-20200408154909213"}})]),a._v(" "),t("h3",{attrs:{id:"_4-验证是否安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-验证是否安装成功"}},[a._v("#")]),a._v(" 4. 验证是否安装成功")]),a._v(" "),t("p",[a._v("查看JDK版本")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("java -version\n")])])]),t("p",[t("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200408154945-653797.png",alt:"image-20200408154945590"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);