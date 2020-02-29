---
date: 2020-02-29
categories: 
 - 运维
tags: 
 - kubernetes
---
# Ingress 统一访问入口

## 什么是 Ingress

通常情况下，Service 和 Pod 的 IP 仅可在集群内部访问。集群外部的请求需要通过负载均衡转发到 Service 在 Node 上暴露的 NodePort 上，然后再由 kube-proxy 通过边缘路由器 (edge router) 将其转发给相关的 Pod 或者丢弃。而 Ingress 就是为进入集群的请求提供路由规则的集合

Ingress 可以给 Service 提供集群外部访问的 URL、负载均衡、SSL 终止、HTTP 路由等。为了配置这些 Ingress 规则，集群管理员需要部署一个 Ingress Controller，它监听 Ingress 和 Service 的变化，并根据规则配置负载均衡并提供访问入口。



## 使用 Nginx Ingress Controller

本次实践的主要目的就是将入口统一，不再通过 LoadBalancer 等方式将端口暴露出来，而是使用 Ingress 提供的反向代理负载均衡功能作为我们的唯一入口。通过以下步骤操作仔细体会。

> **注意：** 下面包含资源配置的步骤都是自行创建 YAML 配置文件通过 `kubectl create -f ` 和 `kubectl delete -f ` 部署和删除

### 部署 Tomcat

部署 Tomcat 但仅允许在内网访问，我们要通过 Ingress 提供的反向代理功能路由到 Tomcat 之上

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: tomcat-app
spec:
  replicas: 1
  template:
    metadata:
      labels:
        name: tomcat
    spec:
      containers:
      - name: tomcat
        image: tomcat
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: tomcat-http
spec:
  ports:
    - port: 8080
      targetPort: 8080
  # ClusterIP, NodePort, LoadBalancer
  type: ClusterIP
  selector:
    name: tomcat
```

**部署**

```sh
kubectl apply -f tomcat.yml
```

![image-20200229125828043](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200229125828043.png)



### 安装 Nginx Ingress Controller

Ingress Controller 有许多种，我们选择最熟悉的 Nginx 来处理请求，其它可以参考 [官方文档](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)

**创建一个ingress文件夹**

```sh
mkdir -p /usr/local/k8s/ingress && cd /usr/local/k8s/ingress
```



**下载 Nginx Ingress Controller 配置文件**

```bash
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml
```

![image-20200229123213081](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229204445-983627.png)



**修改配置文件，找到配置如下位置 在下面增加一句 `hostNetwork: true`**

```sh
vim mandatory.yaml
```

![image-20200229124628506](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229204439-413345.png)



**安装**

```sh
kubectl apply -f mandatory.yaml
```

![image-20200229124707856](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229124838-452996.png)



**部署 Ingress**

新建一个ingress-deployment.yml

```sh
vim ingress-deployment.yml
```

内容如下

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: nginx-web
  annotations:
    # 指定 Ingress Controller 的类型
    kubernetes.io/ingress.class: "nginx"
    # 指定我们的 rules 的 path 可以使用正则表达式
    nginx.ingress.kubernetes.io/use-regex: "true"
    # 连接超时时间，默认为 5s
    nginx.ingress.kubernetes.io/proxy-connect-timeout: "600"
    # 后端服务器回转数据超时时间，默认为 60s
    nginx.ingress.kubernetes.io/proxy-send-timeout: "600"
    # 后端服务器响应超时时间，默认为 60s
    nginx.ingress.kubernetes.io/proxy-read-timeout: "600"
    # 客户端上传文件，最大大小，默认为 20m
    nginx.ingress.kubernetes.io/proxy-body-size: "10m"
    # URL 重写
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  # 路由规则
  rules:
  # 主机名，只能是域名，修改为你自己的
  - host: k8s.test.com
    http:
      paths:
      - path:
        backend:
          # 后台部署的 Service Name，与上面部署的 Tomcat 对应
          serviceName: tomcat-http
          # 后台部署的 Service Port，与上面部署的 Tomcat 对应
          servicePort: 8080
```



**部署**

```sh
kubectl apply -f ingress-deployment.yml
```

![image-20200229130255313](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229204452-955347.png)



**查看 Nginx Ingress Controller**

```sh
kubectl get pods -n ingress-nginx -o wide
```

![image-20200229130715233](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229130715-301394.png)



**查看 Ingress**

```sh
kubectl get ingress
```

![image-20200229130756480](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200229130757-707833.png)
