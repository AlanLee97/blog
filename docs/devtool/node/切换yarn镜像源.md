# yarn (npm) 切换设置镜像源

## 设置镜像源

1、查看一下当前源

```
yarn config get registry
```

2、切换为淘宝源

```
yarn config set registry https://registry.npm.taobao.org
```

3、或者切换为自带的

```
yarn config set registry https://registry.yarnpkg.com
```