const configObj = {
  git: {
    basePath: "/docs/devtool/git/",
    titles: [
      "CentOS7安装git.md",
      "Git命令大全.md",
    ],
  },
  docker: {
    basePath: "/docs/devtool/docker/",
    titles: [
      "安装docker-compose（国内高速镜像）.md",
      "解决Docker容器应用中mvn command not found的问题.md",
      "CentOS安装docker.md",
      "docker-compose.yml.md",
      "docker-compose安装nginx.md",
      "Docker安装RabbitMQ.md",
      "Docker安装Redis.md",
      "docker常用命令.md",
      "Docker镜像加速.md",
      "Docker网络.md",
      "Docker下安装MySQL.md",
    ]
  },
  kubernetes: {
    basePath: "/docs/devtool/kubernetes/",
    titles: [
      "k8s-01-CentOS 安装kubernetes.md",
      "k8s-02-创建第一个容器.md",
      "k8s-03-通过资源配置运行容器.md",
      "k8s-04-修改默认的端口范围.md",
      "k8s-05-kubernetes常用命令.md",
      "k8s-06-Ingress 统一访问入口.md",
      "k8s-07-Kubernetes 集群卸载清理.md",
      "k8s-08-从私服中拉取镜像.md",
      "k8s-09-指定外部访问service的端口.md",
      "k8s-10-安装Kubernetes Dashboard.md",
    ]
  },
  nginx: {
    basePath: "/docs/devtool/nginx/",
    titles: [
      "出现的问题.md",
      "Nginx01 - Docker中搭建Nginx.md",
      "Nginx02 - Nginx的默认配置.md",
      "Nginx03 - Nginx实现虚拟主机.md",
      "Nginx04 - Nginx实现反向代理.md",
      "Nginx05 - Nginx实现反向代理（2）.md",
      "Nginx06 - Nginx实现动静分离.md",
      "Nginx07 - Nginx搭建伪CDN服务器.md",
      "Nginx08 - Nginx实现负载均衡.md",
      "Nginx09 - Nginx实现负载均衡（2）.md",
      "Nginx10 - IP访问控制.md",
      "Nginx11 - Tengine健康检查.md",
      "Nginx12 - Tengine的会话保持.md",
      "Nginx13 - 利用Memcached解决session一致性问题.md",
      "Nginx14 - Nginx+Keepalived实现高可用.md",
    ]
  },
  elstaicsearch: {
    basePath: "/docs/devtool/elstaicsearch/",
    titles: [
      "01-安装Elastic Search.md",
      "02-快速入门.md",
      "03-Docker安装Elastic Search.md",
      "04-Spring Boot连接Elastic Search.md",
    ]
  },
  jenkins: {
    basePath: "/docs/devtool/jenkins/",
    titles: [
      "安装jenkins.md",
      "jenkins镜像加速.md",
    ]
  },
}


function getChildren(basePath, titles) {
  return titles.map(title => {
    return basePath + title
  });
}

module.exports = {
  git: [
    {
      title: "Git",
      collapsable: true,
      children: getChildren(configObj.git.basePath, configObj.git.titles)
    },
  ],
  docker: [
    {
      title: "Docker",
      collapsable: true,
      children: getChildren(configObj.docker.basePath, configObj.docker.titles)
    }
  ],
  kubernetes: [
    {
      title: "Kubernetes",
      collapsable: true,
      children: getChildren(configObj.kubernetes.basePath, configObj.kubernetes.titles)
    }
  ],
  nginx: [
    {
      title: "Nginx",
      collapsable: true,
      children: getChildren(configObj.nginx.basePath, configObj.nginx.titles)
    },
  ],
  elstaicsearch: [
    {
      title: "Elastic Search",
      collapsable: true,
      children: getChildren(configObj.elstaicsearch.basePath, configObj.elstaicsearch.titles)
    },
  ],
  jenkins: [
    {
      title: "Jekins",
      collapsable: true,
      children: getChildren(configObj.jenkins.basePath, configObj.jenkins.titles)
    },
  ],
}