# Kubernetes 指定外部访问service的端口

## 集群外部方式访问：NodePort

NodePort在kubenretes里是一个早期广泛应用的服务暴露方式。Kubernetes中的service默认情况下都是使用的ClusterIP这种类型，这样的service会产生一个ClusterIP，这个IP只能在集群内部访问，要想让外部能够直接访问service，需要将service type修改为 nodePort。将service监听端口映射到node节点。

**配置**

在Service的spec节点中

指定类型：type NodePort

指定端口：nodePort: 30001

指定协议：protocol: TCP

![：](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303105547-576040.png)



完整Service的配置如下：

```yml
apiVersion: v1
kind: Service
metadata:
  name: panda-config-http
spec:
  ports:
    - port: 8888
      targetPort: 8888
      nodePort: 30001
      protocol: TCP
  type: NodePort
  selector:
    name: panda-config
```



**运行**

```sh
kubectl apply -f k8s-panda-config.yml
```

查看service

```sh
kubectl get service
```

![image-20200303110206020](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303110206-20539.png)

**结果**

浏览器访问

![image-20200303110250136](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303110250-294715.png)