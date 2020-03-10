# 镜像加速

设置 docker 镜像

执行以下命令使用 docker 国内镜像，提高 docker 镜像下载速度和稳定性

```shell
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
```

重启docker

```sh
systemctl restart docker
```

