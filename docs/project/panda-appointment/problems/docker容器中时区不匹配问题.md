# Docker中时区不匹配问题

在Dockerfile中添加如下代码即可

```sh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
```

