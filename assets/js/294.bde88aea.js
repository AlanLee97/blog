(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{399:function(t,e,a){"use strict";a.r(e);var v=a(0),l=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linux-文件权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件权限管理"}},[t._v("#")]),t._v(" Linux 文件权限管理")]),t._v(" "),a("h2",{attrs:{id:"查看文件和目录的权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看文件和目录的权限"}},[t._v("#")]),t._v(" 查看文件和目录的权限")]),t._v(" "),a("p",[t._v("ls –al"),a("code",[t._v("使用 ls 不带参数只显示文件名称，通过")]),t._v("ls –al` 可以显示文件或者目录的权限信息。")]),t._v(" "),a("p",[a("code",[t._v("ls -l 文件名")]),t._v(" 显示信息包括：文件类型 ("),a("code",[t._v("d")]),t._v(" 目录，"),a("code",[t._v("-")]),t._v(" 普通文件，"),a("code",[t._v("l")]),t._v(" 链接文件)，文件权限，文件的用户，文件的所属组，文件的大小，文件的创建时间，文件的名称")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-rw-r--r-- 1 lusifer lusifer 675 Oct 26 17:20 .profile\n")])])]),a("ul",[a("li",[a("code",[t._v("-")]),t._v("：普通文件")]),t._v(" "),a("li",[a("code",[t._v("rw-")]),t._v("：说明用户 lusifer 有读写权限，没有运行权限")]),t._v(" "),a("li",[a("code",[t._v("r--")]),t._v("：表示用户组 lusifer 只有读权限，没有写和运行的权限")]),t._v(" "),a("li",[a("code",[t._v("r--")]),t._v("：其他用户只有读权限，没有写权限和运行的权限")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("-rw-r--r--")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("lusifer")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("lusifer")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("675")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Oct 26 17:20")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v(".profile")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("文档类型及权限")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("连接数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档所属用户")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档所属组")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档最后被修改日期")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档名称")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("rw-")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("r--")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("r--")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("文档类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档所有者权限（user）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文档所属用户组权限（group）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("其他用户权限（other）")])])])]),t._v(" "),a("h3",{attrs:{id:"文档类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档类型"}},[t._v("#")]),t._v(" 文档类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("d")]),t._v(" 表示目录")]),t._v(" "),a("li",[a("code",[t._v("l")]),t._v(" 表示软连接")]),t._v(" "),a("li",[a("code",[t._v("–")]),t._v(" 表示文件")]),t._v(" "),a("li",[a("code",[t._v("c")]),t._v(" 表示串行端口字符设备文件")]),t._v(" "),a("li",[a("code",[t._v("b")]),t._v(" 表示可供存储的块设备文件")]),t._v(" "),a("li",[t._v("余下的字符 3 个字符为一组。"),a("code",[t._v("r")]),t._v(" 只读，"),a("code",[t._v("w")]),t._v(" 可写，"),a("code",[t._v("x")]),t._v(" 可执行，"),a("code",[t._v("-")]),t._v(" 表示无此权限")])]),t._v(" "),a("h3",{attrs:{id:"连接数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接数"}},[t._v("#")]),t._v(" 连接数")]),t._v(" "),a("p",[t._v("指有多少个文件指向同一个索引节点。")]),t._v(" "),a("h3",{attrs:{id:"文档所属用户和所属组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档所属用户和所属组"}},[t._v("#")]),t._v(" 文档所属用户和所属组")]),t._v(" "),a("p",[t._v("就是文档属于哪个用户和用户组。文件所属用户和组是可以更改的")]),t._v(" "),a("h3",{attrs:{id:"文档大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档大小"}},[t._v("#")]),t._v(" 文档大小")]),t._v(" "),a("p",[t._v("默认是 bytes")]),t._v(" "),a("h2",{attrs:{id:"更改操作权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改操作权限"}},[t._v("#")]),t._v(" 更改操作权限")]),t._v(" "),a("h3",{attrs:{id:"chown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chown"}},[t._v("#")]),t._v(" chown")]),t._v(" "),a("p",[t._v("是 change owner 的意思，主要作用就是改变文件或者目录所有者，所有者包含用户和用户组")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chown [-R] 用户名称 文件或者目录\nchown [-R] 用户名称 用户组名称 文件或目录\n")])])]),a("p",[t._v("-R：进行递归式的权限更改，将目录下的所有文件、子目录更新为指定用户组权限")]),t._v(" "),a("h3",{attrs:{id:"chmod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chmod"}},[t._v("#")]),t._v(" chmod")]),t._v(" "),a("p",[t._v("改变访问权限")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("chmod [who] [+ | - | =] [mode] 文件名\n")])])]),a("h4",{attrs:{id:"who"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[t._v("#")]),t._v(" who")]),t._v(" "),a("p",[t._v("表示操作对象可以是以下字母的一个或者组合")]),t._v(" "),a("ul",[a("li",[t._v("u：用户 user")]),t._v(" "),a("li",[t._v("g：用户组 group")]),t._v(" "),a("li",[t._v("o：表示其他用户")]),t._v(" "),a("li",[t._v("a：表示所有用户是系统默认的")])]),t._v(" "),a("h4",{attrs:{id:"操作符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作符号"}},[t._v("#")]),t._v(" 操作符号")]),t._v(" "),a("ul",[a("li",[t._v("+：表示添加某个权限")]),t._v(" "),a("li",[t._v("-：表示取消某个权限")]),t._v(" "),a("li",[t._v("=：赋予给定的权限，取消文档以前的所有权限")])]),t._v(" "),a("h4",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[t._v("#")]),t._v(" mode")]),t._v(" "),a("p",[t._v("表示可执行的权限，可以是 r、w、x")]),t._v(" "),a("h4",{attrs:{id:"文件名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件名"}},[t._v("#")]),t._v(" 文件名")]),t._v(" "),a("p",[t._v("文件名可以使空格分开的文件列表")]),t._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("lusifer@UbuntuBase:~$ ls -al test.txt \n-rw-rw-r-- 1 lusifer lusifer 6 Nov  2 21:47 test.txt\nlusifer@UbuntuBase:~$ chmod u=rwx,g+r,o+r test.txt \nlusifer@UbuntuBase:~$ ls -al test.txt \n-rwxrw-r-- 1 lusifer lusifer 6 Nov  2 21:47 test.txt\nlusifer@UbuntuBase:~$\n")])])]),a("h2",{attrs:{id:"数字设定法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字设定法"}},[t._v("#")]),t._v(" 数字设定法")]),t._v(" "),a("p",[t._v("数字设定法中数字表示的含义")]),t._v(" "),a("ul",[a("li",[t._v("0 表示没有任何权限")]),t._v(" "),a("li",[t._v("1 表示有可执行权限 = "),a("code",[t._v("x")])]),t._v(" "),a("li",[t._v("2 表示有可写权限 = "),a("code",[t._v("w")])]),t._v(" "),a("li",[t._v("4 表示有可读权限 = "),a("code",[t._v("r")])])]),t._v(" "),a("p",[t._v("也可以用数字来表示权限如 chmod 755 file_name")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("r w x")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("r – x")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("r - x")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("4 2 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4 - 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4 - 1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("user")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("group")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("others")])])])]),t._v(" "),a("p",[t._v("若要 rwx 属性则 4+2+1=7")]),t._v(" "),a("p",[t._v("若要 rw- 属性则 4+2=6")]),t._v(" "),a("p",[t._v("若要 r-x 属性则 4+1=5")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("lusifer@UbuntuBase:~$ chmod 777 test.txt \nlusifer@UbuntuBase:~$ ls -al test.txt \n-rwxrwxrwx 1 lusifer lusifer 6 Nov  2 21:47 test.txt\n\nlusifer@UbuntuBase:~$ chmod 770 test.txt \nlusifer@UbuntuBase:~$ ls -al test.txt \n-rwxrwx--- 1 lusifer lusifer 6 Nov  2 21:47 test.txt\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);