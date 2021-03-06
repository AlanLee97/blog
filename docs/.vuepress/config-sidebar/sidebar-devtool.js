
//基本路径
const docPath = '/devtool/';
const docPath_docker = docPath + 'docker/';
const docPath_elasticsearch = docPath + 'docker/elasticsearch/';
const docPath_git = docPath + 'git/';
const docPath_jenkins = docPath + 'jenkins/';
const docPath_kubernetes = docPath + 'kubernetes/';
const docPath_nginx = docPath + 'nginx/';


//==================== BEGIN docker
{
    const children_docker = [
        'CentOS安装docker',
        'docker-compose.yml',
        'Docker下安装MySQL',
        'Docker安装RabbitMQ',
        'docker常用命令',
        'Docker网络',
        'Docker镜像加速',
        '安装docker-compose（国内高速镜像）',
        '解决Docker容器应用中mvn command not found的问题',
    ];

    function getChildrenDocker(){
        return children_docker.map((item) => {
            return docPath_docker + item;
        });
    }
}

//-------------------- END docker


//==================== BEGIN Elastic Search
{
    const children_elasticsearch = [
        '01-安装Elastic Search',
        '02-快速入门',
        '03-Docker安装Elastic Search',
        '04-Spring Boot连接Elastic Search',
    ];

    function getChildrenElasticSearch(){
        return children_elasticsearch.map((item) => {
            return docPath_git + item;
        });
    }
}
//-------------------- END Elastic Search


//==================== BEGIN git
{
    const children_git = [
        'CentOS7安装git',
        'Git命令大全',
    ];

    function getChildrenGit(){
        return children_git.map((item) => {
            return docPath_git + item;
        });
    }
}

//-------------------- END git


//==================== BEGIN jenkins
{
    const children_jenkins = [

        'jenkins镜像加速',
        '安装jenkins'
    ];

    function getChildrenJenkins(){
        return children_jenkins.map((item) => {
            return docPath_jenkins + item;
        });
    }
}

//-------------------- END jenkins



//==================== BEGIN kubernetes
{
    const children_kubernetes = [
        'k8s-01-CentOS 安装kubernetes',
        'k8s-02-创建第一个容器',
        'k8s-03-通过资源配置运行容器',
        'k8s-04-修改默认的端口范围',
        'k8s-05-kubernetes常用命令',
        'k8s-06-Ingress 统一访问入口',
        'k8s-07-Kubernetes 集群卸载清理',
        'k8s-08-从私服中拉取镜像',
        'k8s-09-指定外部访问service的端口',
        'k8s-10-安装Kubernetes Dashboard',
    ];

    function getChildrenKubernetes(){
        return children_kubernetes.map((item) => {
            return docPath_kubernetes + item;
        });
    }

}
//-------------------- END kubernetes


//==================== BEGIN kubernetes
{
    const children_nginx = [
        'Docker中搭建nginx',
        'nginx实现反向代理',
        'nginx实现虚拟主机',
        'nginx实现负载均衡',
        'nginx搭建伪CDN服务器',
    ];

    function getChildrenNginx(){
        return children_nginx.map((item) => {
            return docPath_nginx + item;
        });
    }

}
//-------------------- END kubernetes
module.exports = [
    '',
    {
        title: 'Docker',
        path: docPath_docker,
        children: getChildrenDocker()
    },
    {
        title: 'Elastic Search',
        path: docPath_elasticsearch,
        children: getChildrenElasticSearch()
    },
    {
        title: 'Git',
        path: docPath_git,
        children: getChildrenGit()
    },
    {
        title: 'jenkins',
        path: docPath_jenkins,
        children: getChildrenJenkins()
    },
    {
        title: 'kubernetes',
        path: docPath_kubernetes,
        children: getChildrenKubernetes()
    },
    {
        title: 'nginx',
        path: docPath_nginx,
        children: getChildrenNginx()
    },
];
