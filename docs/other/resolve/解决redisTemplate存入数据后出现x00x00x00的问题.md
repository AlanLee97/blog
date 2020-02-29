# 解决redisTemplate存入数据后值变成x00x00x00的问题

## 问题

redisTemplate存入数据后值变成x00x00x00

![image-20200227125753969](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200227125753969.png)

## 原因

查看源码

```java
default void set(K key, V value, Duration timeout) {
    Assert.notNull(timeout, "Timeout must not be null!");
    if (TimeoutUtils.hasMillis(timeout)) {
        this.set(key, value, timeout.toMillis(), TimeUnit.MILLISECONDS);
    } else {
        this.set(key, value, timeout.getSeconds(), TimeUnit.SECONDS);
    }

}
```

调用了这个方法this.set(key, value, timeout.getSeconds(), TimeUnit.SECONDS);所以要加入第4个参数

## 解决

set方法中加入第四个参数TimeUnit.SECONDS

```
redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);
```

![image-20200227130126967](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200227130126967.png)