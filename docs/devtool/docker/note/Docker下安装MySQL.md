# Docker下安装MySQL

1. 搜索MySQL镜像

```bash
docker search mysql
```

或者阿里云仓库拉取方式

```bash
sudo docker pull registry.cn-shanghai.aliyuncs.com/qierkang/mysql:5.7
```

2. 拉取镜像

```bash
docker pull mysql:5.7
```

遇到错误：

```bash
Error response from daemon: pull access denied for mysql-57-centos7, repository does not exist or may require 'docker login': denied: requested access to the resource is denied
```

