(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{494:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"centos安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos安装docker"}},[t._v("#")]),t._v(" CentOS安装Docker")]),t._v(" "),e("ol",[e("li",[t._v("安装要求")])]),t._v(" "),e("p",[t._v("docker官方说Linux内核至少3.8以上，建议3.10以上")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("查看Linux版本")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("uname -a\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("更新yum版本")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum update\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("安装需要的软件包\nyum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖的")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install -y yum-utils device-mapper-persistent-data lvm2\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("设置yum源\n选择阿里云的仓库")])]),t._v(" "),e("p",[t._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("查看docker版本")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum list docker-ce --showduplicates | sort -r\n")])])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("选择docker版本安装\n我选的是docker-ce-18.03.1.ce")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("yum install docker-ce-版本号\nyum install docker-ce-18.03.1.ce\n")])])]),e("ol",{attrs:{start:"8"}},[e("li",[t._v("启动Docker")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl start docker\n")])])]),e("ol",{attrs:{start:"9"}},[e("li",[t._v("查看docker版本")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker version\n")])])]),e("ol",{attrs:{start:"10"}},[e("li",[t._v("运行hello-docker测试")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker run hello-world\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);