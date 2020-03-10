# 安装Kubernetes Dashboard

## 安装

下载yaml文件

```sh
wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-beta5/aio/deploy/recommended.yaml
```



> 如果访问不了该 yaml 文件，请使用下面的命令，效果是等价的
>
> ```sh
> wget https://kuboard.cn/install-script/k8s-dashboard/v2.0.0-beta5.yaml
> ```

修改文件内容，找到kind:Service节点下的spec节点，增加内容

![image-20200303164505363](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303170948-763126.png)

> 或者直接复制下面的代码，我改好了的，暴露的端口为30001
>
> 创建kubernetes-dashboard.yaml
>
> ```sh
> vim kubernetes-dashboard.yaml
> ```
>
> 粘贴下面的代码
>
> ```yml
> # Copyright 2017 The Kubernetes Authors.
> #
> # Licensed under the Apache License, Version 2.0 (the "License");
> # you may not use this file except in compliance with the License.
> # You may obtain a copy of the License at
> #
> #     http://www.apache.org/licenses/LICENSE-2.0
> #
> # Unless required by applicable law or agreed to in writing, software
> # distributed under the License is distributed on an "AS IS" BASIS,
> # WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> # See the License for the specific language governing permissions and
> # limitations under the License.
> 
> apiVersion: v1
> kind: Namespace
> metadata:
> name: kubernetes-dashboard
> 
> ---
> 
> apiVersion: v1
> kind: ServiceAccount
> metadata:
> labels:
>  k8s-app: kubernetes-dashboard
> name: kubernetes-dashboard
> namespace: kubernetes-dashboard
> 
> ---
> 
> kind: Service
> apiVersion: v1
> metadata:
> labels:
>  k8s-app: kubernetes-dashboard
> name: kubernetes-dashboard
> namespace: kubernetes-dashboard
> spec:
> type: NodePort
> ports:
>     - port: 443
>       targetPort: 8443
>       nodePort: 30001
>   selector:
>     k8s-app: kubernetes-dashboard
> 
> ---
> 
> apiVersion: v1
> kind: Secret
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard-certs
>   namespace: kubernetes-dashboard
> type: Opaque
> 
> ---
> 
> apiVersion: v1
> kind: Secret
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard-csrf
>   namespace: kubernetes-dashboard
> type: Opaque
> data:
>   csrf: ""
> 
> ---
> 
> apiVersion: v1
> kind: Secret
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard-key-holder
>   namespace: kubernetes-dashboard
> type: Opaque
> 
> ---
> 
> kind: ConfigMap
> apiVersion: v1
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard-settings
>   namespace: kubernetes-dashboard
> 
> ---
> 
> kind: Role
> apiVersion: rbac.authorization.k8s.io/v1
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard
>   namespace: kubernetes-dashboard
> rules:
>   # Allow Dashboard to get, update and delete Dashboard exclusive secrets.
>   - apiGroups: [""]
>     resources: ["secrets"]
>     resourceNames: ["kubernetes-dashboard-key-holder", "kubernetes-dashboard-certs", "kubernetes-dashboard-csrf"]
>     verbs: ["get", "update", "delete"]
>     # Allow Dashboard to get and update 'kubernetes-dashboard-settings' config map.
>   - apiGroups: [""]
>     resources: ["configmaps"]
>     resourceNames: ["kubernetes-dashboard-settings"]
>     verbs: ["get", "update"]
>     # Allow Dashboard to get metrics.
>   - apiGroups: [""]
>     resources: ["services"]
>     resourceNames: ["heapster", "dashboard-metrics-scraper"]
>     verbs: ["proxy"]
>   - apiGroups: [""]
>     resources: ["services/proxy"]
>     resourceNames: ["heapster", "http:heapster:", "https:heapster:", "dashboard-metrics-scraper", "http:dashboard-metrics-scraper"]
>     verbs: ["get"]
> 
> ---
> 
> kind: ClusterRole
> apiVersion: rbac.authorization.k8s.io/v1
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard
> rules:
>   # Allow Metrics Scraper to get metrics from the Metrics server
>   - apiGroups: ["metrics.k8s.io"]
>     resources: ["pods", "nodes"]
>     verbs: ["get", "list", "watch"]
> 
> ---
> 
> apiVersion: rbac.authorization.k8s.io/v1
> kind: RoleBinding
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard
>   namespace: kubernetes-dashboard
> roleRef:
>   apiGroup: rbac.authorization.k8s.io
>   kind: Role
>   name: kubernetes-dashboard
> subjects:
>   - kind: ServiceAccount
>     name: kubernetes-dashboard
>     namespace: kubernetes-dashboard
> 
> ---
> 
> apiVersion: rbac.authorization.k8s.io/v1
> kind: ClusterRoleBinding
> metadata:
>   name: kubernetes-dashboard
> roleRef:
>   apiGroup: rbac.authorization.k8s.io
>   kind: ClusterRole
>   name: kubernetes-dashboard
> subjects:
>   - kind: ServiceAccount
>     name: kubernetes-dashboard
>     namespace: kubernetes-dashboard
> 
> ---
> 
> kind: Deployment
> apiVersion: apps/v1
> metadata:
>   labels:
>     k8s-app: kubernetes-dashboard
>   name: kubernetes-dashboard
>   namespace: kubernetes-dashboard
> spec:
>   replicas: 1
>   revisionHistoryLimit: 10
>   selector:
>     matchLabels:
>       k8s-app: kubernetes-dashboard
>   template:
>     metadata:
>       labels:
>         k8s-app: kubernetes-dashboard
>     spec:
>       containers:
>         - name: kubernetes-dashboard
>           image: kubernetesui/dashboard:v2.0.0-beta5
>           imagePullPolicy: Always
>           ports:
>             - containerPort: 8443
>               protocol: TCP
>           args:
>             - --auto-generate-certificates
>             - --namespace=kubernetes-dashboard
>             # Uncomment the following line to manually specify Kubernetes API server Host
>             # If not specified, Dashboard will attempt to auto discover the API server and connect
>             # to it. Uncomment only if the default does not work.
>             # - --apiserver-host=http://my-address:port
>           volumeMounts:
>             - name: kubernetes-dashboard-certs
>               mountPath: /certs
>               # Create on-disk volume to store exec logs
>             - mountPath: /tmp
>               name: tmp-volume
>           livenessProbe:
>             httpGet:
>               scheme: HTTPS
>               path: /
>               port: 8443
>             initialDelaySeconds: 30
>             timeoutSeconds: 30
>           securityContext:
>             allowPrivilegeEscalation: false
>             readOnlyRootFilesystem: true
>             runAsUser: 1001
>             runAsGroup: 2001
>       volumes:
>         - name: kubernetes-dashboard-certs
>           secret:
>             secretName: kubernetes-dashboard-certs
>         - name: tmp-volume
>           emptyDir: {}
>       serviceAccountName: kubernetes-dashboard
>       nodeSelector:
>         "beta.kubernetes.io/os": linux
>       # Comment the following tolerations if Dashboard must not be deployed on master
>       tolerations:
>         - key: node-role.kubernetes.io/master
>           effect: NoSchedule
> 
> ---
> 
> kind: Service
> apiVersion: v1
> metadata:
>   labels:
>     k8s-app: dashboard-metrics-scraper
>   name: dashboard-metrics-scraper
>   namespace: kubernetes-dashboard
> spec:
>   ports:
>     - port: 8000
>       targetPort: 8000
>   selector:
>     k8s-app: dashboard-metrics-scraper
> 
> ---
> 
> kind: Deployment
> apiVersion: apps/v1
> metadata:
>   labels:
>     k8s-app: dashboard-metrics-scraper
>   name: dashboard-metrics-scraper
>   namespace: kubernetes-dashboard
> spec:
>   replicas: 1
>   revisionHistoryLimit: 10
>   selector:
>     matchLabels:
>       k8s-app: dashboard-metrics-scraper
>   template:
>     metadata:
>       labels:
>         k8s-app: dashboard-metrics-scraper
>       annotations:
>         seccomp.security.alpha.kubernetes.io/pod: 'runtime/default'
>     spec:
>       containers:
>         - name: dashboard-metrics-scraper
>           image: kubernetesui/metrics-scraper:v1.0.1
>           ports:
>             - containerPort: 8000
>               protocol: TCP
>           livenessProbe:
>             httpGet:
>               scheme: HTTP
>               path: /
>               port: 8000
>             initialDelaySeconds: 30
>             timeoutSeconds: 30
>           volumeMounts:
>           - mountPath: /tmp
>             name: tmp-volume
>           securityContext:
>             allowPrivilegeEscalation: false
>             readOnlyRootFilesystem: true
>             runAsUser: 1001
>             runAsGroup: 2001
>       serviceAccountName: kubernetes-dashboard
>       nodeSelector:
>         "beta.kubernetes.io/os": linux
>       # Comment the following tolerations if Dashboard must not be deployed on master
>       tolerations:
>         - key: node-role.kubernetes.io/master
>           effect: NoSchedule
>       volumes:
>         - name: tmp-volume
>           emptyDir: {}
> ```
>
> 

运行yml文件的配置

```sh
kubectl apply -f kubernetes-dashboard.yaml
```

**使用火狐浏览器访问**

一定要火狐浏览器，其他浏览器打不开

在火狐浏览器中打开https://主机ip:30001

> 注意是https协议，一定要是https，不然访问不了

![image-20200303165743444](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303170958-633114.png)

火狐浏览器 点击高级  `接受风险` 即可

![image-20200303165814253](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303171000-629747.png)

进入到认证页面

![image-20200303165901507](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200303165901507.png)

## 访问

Kubernetes Dashboard 当前，只支持使用 Bearer Token登录。 由于 Kubernetes Dashboard 默认部署时，只配置了最低权限的 RBAC。因此，我们要创建一个名为 `admin-user` 的 ServiceAccount，再创建一个 ClusterRolebinding，将其绑定到 Kubernetes 集群中默认初始化的 `cluster-admin` 这个 ClusterRole。



创建 Service Account 和 ClusterRoleBinding

使用 `kubeadm` 安装集群时，默认创建了 ClusterRole `cluster-admin`。此时我们可以直接为刚才的 ServiceAccount 创建 ClusterRoleBinding。

创建auth.yml

```sh
vim auth.yaml
```

粘贴如下内容

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard

---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
```

执行命令

```sh
kubectl apply -f auth.yml
```

获取Bearer Token

执行命令

```sh
kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep admin-user | awk '{print $1}')
```

复制token

![image-20200303170251809](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303171003-607434.png)

将上一个步骤中获得的 Token 输入到登录界面中，点击 **Sign in** 按钮，完成登录

![image-20200303170419004](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303170419-850121.png)



登录进来的页面

![image-20200303170451111](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200303171005-415412.png)