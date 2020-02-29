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



**运行容器**

```sh
kubectl run nginx --image=nginx --replicas=2 --port=80
```

--image=nginx 指定镜像为nginx

--replicas=2 创建实例的数量为2

--port=80 指定容器端口为80

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

**删除服务**

```sh
kubectl delete service名字
```

