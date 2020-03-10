---
date: 2020-02-29
categories: 
 - 运维
tags: 
 - kubernetes
---
# CentOS 安装kubernetes

机器配置要求：

- 3台 机器

    - 第1台：my-master 这台机必须配置2个cpu以上， 2G内存以上
    - 第2台：my-node-1（1核2G）
    - 第2台：my-node-2（1核2G）

- 系统Cent OS 7.6 或ubuntu

    

## 安装docker

（安装过docker的可以跳过此步骤）

设置 yum repository

```shell
# 在 master 节点和 node 节点都要执行

yum update

sudo yum install -y yum-utils device-mapper-persistent-data lvm2

sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装并启动 docker

```shell
# 在 master 节点和 node 节点都要执行
sudo yum install -y docker-ce-18.09.7 docker-ce-cli-18.09.7 containerd.io
sudo systemctl enable docker
sudo systemctl start docker
```

检查 docker 版本

```shell
# 在 master 节点和 node 节点都要执行
docker version
```



## 安装 nfs-utils

```shell
# 在 master 节点和 node 节点都要执行
sudo yum install -y nfs-utils
```

必须先安装 nfs-utils 才能挂载 nfs 网络存储



## K8S基本配置

配置K8S的yum源

```shell
# 在 master 节点和 node 节点都要执行
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```

关闭 防火墙、SeLinux、swap

```shell
# 在 master 节点和 node 节点都要执行
systemctl stop firewalld
systemctl disable firewalld

setenforce 0
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config

swapoff -a
yes | cp /etc/fstab /etc/fstab_bak
cat /etc/fstab_bak |grep -v swap > /etc/fstab
```

修改 /etc/sysctl.conf

```shell
# 在 master 节点和 node 节点都要执行
vim /etc/sysctl.conf
```

在文件最后面添加

```shell
# 在 master 节点和 node 节点都要执行
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
```

![image-20190715085036593](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229091826-112446.png)

执行命令以应用

```shell
# 在 master 节点和 node 节点都要执行
sysctl -p
```

安装kubelet、kubeadm、kubectl

```shell
# 在 master 节点和 node 节点都要执行
yum install -y kubelet-1.15.1 kubeadm-1.15.1 kubectl-1.15.1
```

修改docker Cgroup Driver为systemd

```shell
# 在 master 节点和 node 节点都要执行
vim /usr/lib/systemd/system/docker.service
```

向其中添加

```shell
--exec-opt native.cgroupdriver=systemd
```

![屏幕快照 2019-07-15 09.01.21](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image2019-07-15_09.01.21.0e0d34f2.png)

设置 docker 镜像

执行以下命令使用 docker 国内镜像，提高 docker 镜像下载速度和稳定性

```shell
# 在 master 节点和 node 节点都要执行
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
```

重启 docker，并启动 kubelet

```shell
# 在 master 节点和 node 节点都要执行
systemctl daemon-reload
systemctl restart docker
systemctl enable kubelet && systemctl start kubelet
```





## 初始化 master 节点

以 root 身份在 my-master 机器上执行

配置 apiserver.demo 的域名

```shell
# 只在 master 节点执行
echo "x.x.x.x  apiserver.demo" >> /etc/hosts
```

请替换其中的 x.x.x.x 为您的 my-master 的实际 ip 地址

创建 ./kubeadm-config.yaml

```shell
# 只在 master 节点执行
cat <<EOF > ./kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta1
kind: ClusterConfiguration
kubernetesVersion: v1.15.1
imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers
controlPlaneEndpoint: "apiserver.demo:6443"
networking:
  podSubnet: "10.100.0.1/20"
EOF
```

podSubnet 所使用的网段不能与节点所在的网段重叠

初始化 apiserver

```shell
# 只在 master 节点执行
kubeadm init --config=kubeadm-config.yaml --upload-certs
```

根据您服务器网速的情况，您需要等候 1 – 10 分钟

执行结果如下图所示：

![image-20190715101542756](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20190715101542756.5934c00e.png)

初始化 root 用户的 kubectl 配置

```shell
# 只在 master 节点执行
rm -rf /root/.kube/
mkdir /root/.kube/
cp -i /etc/kubernetes/admin.conf /root/.kube/config
```

安装 calico

```shell
# 只在 master 节点执行
kubectl apply -f https://docs.projectcalico.org/v3.6/getting-started/kubernetes/installation/hosted/kubernetes-datastore/calico-networking/1.7/calico.yaml
```

等待calico安装就绪：

执行如下命令，等待 3-10 分钟，直到所有的容器组处于 Running 状态

```shell
# 只在 master 节点执行
watch kubectl get pod -n kube-system
```

检查 master 初始化结果

在 master 节点 my-master 上执行

```shell
# 只在 master 节点执行
kubectl get nodes
```

## 初始化 node节点

### 获得 join命令参数

在 master 节点 my-master 节点执行

```shell
# 只在 master 节点执行
kubeadm token create --print-join-command
```

可获取kubeadm join 命令及参数，如下所示

```shell
# kubeadm token create 命令的输出
kubeadm join apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303
```

### 初始化node

针对所有的 node 节点执行

```shell
# 只在 node 节点执行
echo "x.x.x.x  apiserver.demo" >> /etc/hosts
kubeadm join apiserver.demo:6443 --token mpfjma.4vjjg8flqihor4vt     --discovery-token-ca-cert-hash sha256:6f7a8e40a810323672de5eee6f4d19aa2dbdb38411845a1bf5dd63485c43d303
```

- 将 x.x.x.x 替换为 my-master 的实际 ip
- 将 kubeadm join 命令后的参数替换为上一个步骤中实际从 my-master 节点获得的参数

### 检查初始化结果

在 master 节点 my-master 上执行

```shell
# 只在 master 节点执行
kubectl get nodes
```

![image-20190715193838012](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20190715193838012.eca23618.png)

## 移除 node 节点

正常情况下，无需移除 node 节点，如果添加到集群出错，可以移除 node 节点，再重新尝试添加

在准备移除的 node 节点上执行

```shell
# 只在 node 节点执行
kubeadm reset
```

在 master 节点 my-master 上执行

```shell
# 只在 master 节点执行
kubectl delete node demo-node-x-x
```

- 将 demo-node-x-x 替换为要移除的 node 节点的名字
- node 节点的名字可以通过在节点 my-master 上执行 kubectl get nodes 命令获得


