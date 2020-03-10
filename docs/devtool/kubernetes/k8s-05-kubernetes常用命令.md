---
date: 2020-02-29
categories: 
 - 运维
tags: 
 - kubernetes
---
# kubernetes常用命令

**查看组件状态**

```sh
kubectl get cs
```

**查看环境信息**

```sh
kubectl cluster-info
```

**查看节点**

```sh
kubectl get nodes
```

**查看命名空间**

```sh
kubectl get namespace
```

**创建命名空间**

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: development
```

**运行容器**

```sh
kubectl run nginx --image=nginx --replicas=2 --port=80
```

--image=nginx 指定镜像为nginx

--replicas=2 创建实例的数量为2

--port=80 指定容器端口为80



**配置方式运行容器**

```bash
kubectl create -f xxx.yml
```

或

```sh
kubectl apply -f xxx.yml
```



**暴露服务**

```sh
kubectl expose deployment nginx --port=80 --type=LoadBalancer
```

--port=80 容器的端口为80

--type=LoadBalancer 类型为负载均衡

**查看容器**

```sh
kubectl get pods -o wide
```

**查看部署**

```sh
kubectl get deployment -o wide
```

**查看服务**

```sh
kubectl get service -o wide
```

**查看ingress**

```bash
kubectl get ingress
```

**查看持久卷**

```bash
kubectl get pv
```

**查看持久卷消费者**

```bash
kubectl get pvc
```

**查看 ConfigMap**

```bash
kubectl get cm <ConfigMap Name>
```

**修改 ConfigMap**

```bash
kubectl edit cm <ConfigMap Name>
```

**查看详情**

```sh
kubectl describe pod pod名字
kubectl describe deployment deployment名字
kubectl describe service service名字
```

**查看日志**

```sh
kubectl logs -f pod名字
```

**删除容器**

```sh
kubectl delete deploy名字
```

**配置方式删除容器**

```bash
kubectl delete -f xxx.yml
```

**删除服务**

```sh
kubectl delete service名字
```



**查看kube system信息**

```sh
kubectl get pods -n kube-system -o wide
```

