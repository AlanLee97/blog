(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{554:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx实现负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx实现负载均衡"}},[t._v("#")]),t._v(" Nginx实现负载均衡")]),t._v(" "),s("h2",{attrs:{id:"什么是负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是负载均衡"}},[t._v("#")]),t._v(" 什么是负载均衡")]),t._v(" "),s("p",[t._v("负载均衡建立在现有网络结构之上，它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力、提高网络的灵活性和可用性。")]),t._v(" "),s("p",[t._v("负载均衡，英文名称为 Load Balance，其意思就是分摊到多个操作单元上进行执行，例如 Web 服务器、FTP 服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。")]),t._v(" "),s("h2",{attrs:{id:"nginx-实现负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-实现负载均衡"}},[t._v("#")]),t._v(" Nginx 实现负载均衡")]),t._v(" "),s("ul",[s("li",[t._v("nginx 作为负载均衡服务器，用户请求先到达 nginx，再由 nginx 根据负载配置将请求转发至 tomcat 服务器")]),t._v(" "),s("li",[t._v("nginx 负载均衡服务器：192.168.75.145:80")]),t._v(" "),s("li",[t._v("tomcat1 服务器：192.168.75.145:9090")]),t._v(" "),s("li",[t._v("tomcat2 服务器：192.168.75.145:9091")])]),t._v(" "),s("h2",{attrs:{id:"nginx-配置负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置负载均衡"}},[t._v("#")]),t._v(" Nginx 配置负载均衡")]),t._v(" "),s("p",[t._v("修改 "),s("code",[t._v("/usr/local/docker/nginx/conf")]),t._v(" 目录下的 nginx.conf 配置文件：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("worker_processes "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    worker_connections "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include mime.types"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    default_type application/octet-stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    sendfile on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    keepalive_timeout "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    upstream myapp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.145:9090 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.145:9091 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n\n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.145"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \troot /usr/share/nginx/wwwroot/html80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \tindex index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".75.145"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \tproxy_pass http://myapp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \tindex index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("定义负载均衡设备的 Ip及设备状态")]),t._v(" "),s("p",[t._v("upstream myServer {\nserver 127.0.0.1:9090 down;\nserver 127.0.0.1:8080 weight=2;\nserver 127.0.0.1:6060;\nserver 127.0.0.1:7070 backup;\n}")]),t._v(" "),s("p",[t._v("在需要使用负载的 Server 节点下添加")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proxy_pass http://myServer;\n")])])]),s("ul",[s("li",[s("code",[t._v("upstream")]),t._v("：每个设备的状态:")]),t._v(" "),s("li",[s("code",[t._v("down")]),t._v("：表示当前的 "),s("code",[t._v("server")]),t._v(" 暂时不参与负载")]),t._v(" "),s("li",[s("code",[t._v("weight")]),t._v("：默认为 1 "),s("code",[t._v("weight")]),t._v(" 越大，负载的权重就越大。")]),t._v(" "),s("li",[s("code",[t._v("max_fails")]),t._v("：允许请求失败的次数默认为 1 当超过最大次数时，返回 "),s("code",[t._v("proxy_next_upstream")]),t._v(" 模块定义的错误")]),t._v(" "),s("li",[s("code",[t._v("fail_timeout")]),t._v(":"),s("code",[t._v("max_fails")]),t._v(" 次失败后，暂停的时间。")]),t._v(" "),s("li",[s("code",[t._v("backup")]),t._v("：其它所有的非 "),s("code",[t._v("backup")]),t._v(" 机器 "),s("code",[t._v("down")]),t._v(" 或者忙的时候，请求 "),s("code",[t._v("backup")]),t._v(" 机器。所以这台机器压力会最轻")])])])}),[],!1,null,null,null);n.default=e.exports}}]);