# 解决Spring Boot + Vue 前后端分离Session不一致问题

## 问题



## 原因



## 解决

### 前端配置

main.js添加一下代码

```js
import axios from "axios";

axios.defaults.withCredentials = true;
```





### 后端配置

创建java配置文件WebConfig.java

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .allowedHeaders("*")
                .allowedMethods("*");
    }
}
```

作用主要是`.allowCredentials(true)`这一句