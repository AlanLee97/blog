(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{515:function(s,a,e){"use strict";e.r(a);var t=e(0),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes-创建第一个容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-创建第一个容器"}},[s._v("#")]),s._v(" Kubernetes 创建第一个容器")]),s._v(" "),e("p",[s._v("以安装nginx为例")]),s._v(" "),e("h2",{attrs:{id:"创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[s._v("#")]),s._v(" 创建容器")]),s._v(" "),e("h3",{attrs:{id:"在master机器上操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在master机器上操作"}},[s._v("#")]),s._v(" 在master机器上操作")]),s._v(" "),e("p",[e("strong",[s._v("创建容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl run nginx --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --replicas"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])])]),e("p",[s._v("--image=nginx 指定镜像为nginx")]),s._v(" "),e("p",[s._v("--replicas=2 创建实例的数量为2")]),s._v(" "),e("p",[s._v("--port=80 指定容器端口为80")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229202958-354893.png",alt:"image-20200229105126482"}})]),s._v(" "),e("p",[e("strong",[s._v("查看创建的容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get pods\n")])])]),e("p",[s._v("刚刚创建就查看容器，READY为0/1，STATUS为ContainerCreating")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105321-235684.png",alt:"image-20200229105259402"}})]),s._v(" "),e("p",[s._v("等待容器创建玩就能启动起来")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203003-10452.png",alt:"image-20200229105555499"}})]),s._v(" "),e("p",[e("strong",[s._v("查看部署")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get deployment\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105624-365409.png",alt:"image-20200229105624150"}})]),s._v(" "),e("p",[e("strong",[s._v("暴露服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl expose deployment nginx --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LoadBalancer\n")])])]),e("p",[s._v("--port=80 容器的端口为80")]),s._v(" "),e("p",[s._v("--type=LoadBalancer 类型为负载均衡")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203005-862018.png",alt:"image-20200229110032228"}})]),s._v(" "),e("p",[e("strong",[s._v("查看服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229105800-470736.png",alt:"image-20200229105800297"}})]),s._v(" "),e("p",[e("strong",[s._v("查看服务详情")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl describe "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203008-498443.png",alt:"image-20200229110615410"}})]),s._v(" "),e("h3",{attrs:{id:"在node节点机器上操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在node节点机器上操作"}},[s._v("#")]),s._v(" 在node节点机器上操作")]),s._v(" "),e("p",[e("strong",[s._v("在node节点机器上查看运行中的容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229110804-950910.png",alt:"image-20200229110803809"}})]),s._v(" "),e("h2",{attrs:{id:"删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[s._v("#")]),s._v(" 删除容器")]),s._v(" "),e("h3",{attrs:{id:"在master节点上操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在master节点上操作"}},[s._v("#")]),s._v(" 在master节点上操作")]),s._v(" "),e("p",[e("strong",[s._v("删除部署")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl delete deployment nginx\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203013-83914.png",alt:"image-20200229111611631"}})]),s._v(" "),e("p",[e("strong",[s._v("删除服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl delete "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx\n")])])]),e("p",[e("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229111731-516235.png",alt:"image-20200229111730556"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);