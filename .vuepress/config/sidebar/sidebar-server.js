const configObj = {
  linux: {
    basePath: "/docs/server/linux/",
    titles: [
      "阿里云镜像加速.md",
      "出现的问题.md",
      "Linux00 - VMware下安装CentOS7.md",
      "Linux01 - 简介.md",
      "Linux02 - 目录结构.md",
      "Linux03 - 操作文件目录.md",
      "Linux04 - 系统管理命令.md",
      "Linux05 - 开关机命令.md",
      "Linux06 - 压缩命令.md",
      "Linux07 - Linux 编辑器.md",
      "Linux08 - 用户和组管理.md",
      "Linux09 -  文件权限管理.md",
      "Linux10 - 安装Java.md",
      "Linux11 - 安装Tomcat.md",
      "Linux12 - Linux下安装JDK.md",
      "Linux13 - Linux下安装Tomcat（详细教程）.md",
      "Linux14 - Linux下安装Tengine.md",
      "Linux15 - Centos7 卸载rpm安装包.md",
      "Linux16 - CentOS下安装Maven.md",
      "Linux17 - 同步时间.md",
      "Linux18 - 修改主机名.md",
      "LVS + keepalived实现高可用.md",
      "LVS.md",
      "LVS的DR模式 (copy).md",
      "LVS的DR模式.md",
    ],
    sub: {
      kvm: {
        basePath: "/docs/server/linux/kvm/",
        titles: [
          "安装KVM.md",
          "配置桥接网络.md",
          "虚拟机快照.md",
          "远程控制KVM.md",
        ],
      }
    }
  },
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  linux: [
    {
      title: "Linux",
      collapsable: true,
      children: getChildren(configObj.linux.basePath, configObj.linux.titles)
    },
    {
      title: "KVM",
      collapsable: true,
      children: getChildren(configObj.linux.sub.kvm.basePath, configObj.linux.sub.kvm.titles)
    },
  ],
}