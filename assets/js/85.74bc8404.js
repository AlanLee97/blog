(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{537:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-通过资源配置运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-通过资源配置运行容器"}},[t._v("#")]),t._v(" Kubernetes 通过资源配置运行容器")]),t._v(" "),a("p",[t._v("我们知道通过 "),a("code",[t._v("run")]),t._v(" 命令启动容器非常麻烦，Docker 提供了 Compose 为我们解决了这个问题。那 Kubernetes 是如何解决这个问题的呢？其实很简单，使用 "),a("code",[t._v("kubectl create")]),t._v(" 命令就可以做到和 Compose 一样的效果了，该命令可以通过配置文件快速创建一个集群资源对象。")]),t._v(" "),a("h2",{attrs:{id:"创建容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建容器"}},[t._v("#")]),t._v(" 创建容器")]),t._v(" "),a("p",[t._v("以部署nginx为例")]),t._v(" "),a("h3",{attrs:{id:"在master机器上操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在master机器上操作"}},[t._v("#")]),t._v(" 在master机器上操作")]),t._v(" "),a("p",[a("strong",[t._v("创建一个文件夹，存放yml配置")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/k8s/nginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/k8s/nginx\n")])])]),a("p",[a("strong",[t._v("创建nginx-deployment.yml配置")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" nginx-deployment.yml\n")])])]),a("p",[t._v("内容如下")]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" "),a("code",[t._v("extensions/v1beta1")]),t._v(" 不再支持部署 "),a("code",[t._v("Deployment")]),t._v("，并且修改了少量命令")]),t._v(" "),a("p",[a("em",[t._v("k8s v1.16.0 之前的版本")])]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Api版本号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" extensions/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型，如：Pod/ReplicationController/Deployment/Service/Ingress")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 元数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kind的名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署实例数量")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器标签的名字")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置容器")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器名称")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器镜像，必须指定镜像版本，不能省略，不能为lastest")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.17")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像拉取策略：只有镜像不存在时才拉取")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IfNotPresent\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暴露端口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pod 端口")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n\n")])])]),a("p",[a("em",[t._v("k8s v1.16之后的版本")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API 版本号：由 extensions/v1beta1 修改为 apps/v1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加了选择器配置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置标签由 name 修改为 app")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("p",[a("strong",[t._v("部署")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl create -f nginx-deployment.yml\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203359-740611.png",alt:"image-20200229115621381"}})]),t._v(" "),a("p",[a("strong",[t._v("查看容器")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get pods\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229115737-467172.png",alt:"image-20200229115736891"}})]),t._v(" "),a("p",[a("strong",[t._v("查看部署")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get deployments\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229115825-952502.png",alt:"image-20200229115824642"}})]),t._v(" "),a("p",[a("strong",[t._v("删除部署")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl delete -f nginx-deployment.yml\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229120359-704061.png",alt:"image-20200229120359266"}})]),t._v(" "),a("h2",{attrs:{id:"发布service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布service"}},[t._v("#")]),t._v(" 发布service")]),t._v(" "),a("p",[t._v("创建nginx-service.yml")]),t._v(" "),a("p",[t._v("(也可以在nginx-deployment.yml文件后面追加配置)")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" nginx-service.yml\n")])])]),a("p",[t._v("添加内容")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# k8s v1.16.0 之前")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# API 版本号")]),t._v("\napiVersion: v1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型，如：Pod/ReplicationController/Deployment/Service/Ingress")]),t._v("\nkind: Service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 元数据")]),t._v("\nmetadata:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Kind 的名称")]),t._v("\n  name: nginx-http\nspec:\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暴露端口")]),t._v("\n  ports:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Service 暴露的端口")]),t._v("\n    - port: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Pod 上的端口，这里是将 Service 暴露的端口转发到 Pod 端口上")]),t._v("\n      targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 类型")]),t._v("\n  type: LoadBalancer\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签选择器")]),t._v("\n  selector:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要和上面部署的 Deployment 标签名对应")]),t._v("\n    name: nginx\n")])])]),a("p",[t._v("*k8s v1.16.0 之前后")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# k8s v1.16.0 之后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("http\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" LoadBalancer\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签选择器由 name 修改为 app")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n")])])]),a("p",[a("strong",[t._v("部署")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl create -f nginx-deployment.yml\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl create -f nginx-service.yml\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229203407-929884.png",alt:"image-20200229121107682"}})]),t._v(" "),a("p",[a("strong",[t._v("查看服务")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229121153-682260.png",alt:"image-20200229121152885"}})]),t._v(" "),a("p",[a("strong",[t._v("浏览器中访问")])]),t._v(" "),a("p",[t._v("主机ip:30878")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229121356-855491.png",alt:"image-20200229121355995"}})]),t._v(" "),a("p",[a("strong",[t._v("删除service")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl delete -f nginx-service.yml\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);