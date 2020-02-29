(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{519:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes常用命令"}},[s._v("#")]),s._v(" kubernetes常用命令")]),s._v(" "),e("p",[e("strong",[s._v("查看组件状态")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get cs\n")])])]),e("p",[e("strong",[s._v("查看环境信息")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl cluster-info\n")])])]),e("p",[e("strong",[s._v("查看节点")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get nodes\n")])])]),e("p",[e("strong",[s._v("查看命名空间")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get namespace\n")])])]),e("p",[e("strong",[s._v("创建命名空间")])]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Namespace\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" development\n")])])]),e("p",[e("strong",[s._v("运行容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl run nginx --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx --replicas"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])])]),e("p",[s._v("--image=nginx 指定镜像为nginx")]),s._v(" "),e("p",[s._v("--replicas=2 创建实例的数量为2")]),s._v(" "),e("p",[s._v("--port=80 指定容器端口为80")]),s._v(" "),e("p",[e("strong",[s._v("配置方式运行容器")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl create -f xxx.yml\n")])])]),e("p",[s._v("或")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl apply -f xxx.yml\n")])])]),e("p",[e("strong",[s._v("暴露服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl expose deployment nginx --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LoadBalancer\n")])])]),e("p",[s._v("--port=80 容器的端口为80")]),s._v(" "),e("p",[s._v("--type=LoadBalancer 类型为负载均衡")]),s._v(" "),e("p",[e("strong",[s._v("查看容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get pods -o wide\n")])])]),e("p",[e("strong",[s._v("查看部署")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get deployment -o wide\n")])])]),e("p",[e("strong",[s._v("查看服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" -o wide\n")])])]),e("p",[e("strong",[s._v("查看ingress")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get ingress\n")])])]),e("p",[e("strong",[s._v("查看持久卷")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("pv")]),s._v("\n")])])]),e("p",[e("strong",[s._v("查看持久卷消费者")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get pvc\n")])])]),e("p",[e("strong",[s._v("查看 ConfigMap")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl get cm "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ConfigMap Name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("p",[e("strong",[s._v("修改 ConfigMap")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl edit cm "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ConfigMap Name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("p",[e("strong",[s._v("查看详情")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl describe pod pod名字\nkubectl describe deployment deployment名字\nkubectl describe "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" service名字\n")])])]),e("p",[e("strong",[s._v("查看日志")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl logs -f pod名字\n")])])]),e("p",[e("strong",[s._v("删除容器")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl delete deploy名字\n")])])]),e("p",[e("strong",[s._v("配置方式删除容器")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl delete -f xxx.yml\n")])])]),e("p",[e("strong",[s._v("删除服务")])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("kubectl delete service名字\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);