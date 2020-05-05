# 实现单点登录SSO

## 创建maven项目

1. auth-server
2. client1
3. client2



### auth-server、client1、client2

3个项目都添加一下依赖

```xml
<!-- ===========BEGIN Spring Cloud ==========-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-security</artifactId>
    <version>2.1.5.RELEASE</version>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-oauth2</artifactId>
    <version>2.1.5.RELEASE</version>
</dependency>

<dependency>
    <groupId>org.springframework.security.oauth</groupId>
    <artifactId>spring-security-oauth2</artifactId>
    <version>2.3.4.RELEASE</version>
</dependency>
<!-- ===========END Spring Cloud ==========-->
```



## auth-server配置

启动类AuthServerApplication.java

```java
@SpringBootApplication
@EnableResourceServer
public class AuthServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(AuthServerApplication.class, args);
    }
}
```

这里添加了以下注解

> @SpringBootApplication
> @EnableResourceServer

@EnableResourceServer 注解，表示这是一个资源服务器



### 配置 Spring Security

创建config包，创建SecurityConfig.java和AuthServerConfig.java

SecurityConfig.java

```java
package top.alanlee.test.sso.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Order(1)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/login.html", "/css/**", "/js/**", "/imgs/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.requestMatchers()
                .antMatchers("/login")
                .antMatchers("/oauth/authorize")
                .and()
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login.html")
                .loginProcessingUrl("/login")
                .permitAll()
                .and()
                .csrf().disable();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("alan")
                .password(passwordEncoder().encode("123"))
                .roles("admin");
    }
}

```



AuthServerConfig.java

```java
package top.alanlee.test.sso.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;

@Configuration
@EnableAuthorizationServer
public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.checkTokenAccess("permitAll()");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient("alanlee")
                .secret(passwordEncoder.encode("123"))
                .autoApprove(true)
                .redirectUris("http://localhost:8081/login", "http://localhost:8082/login")
                .scopes("user")
                .accessTokenValiditySeconds(7200)
                .authorizedGrantTypes("authorization_code");
    }
}

```

1. 首先提供一个 BCryptPasswordEncoder 的实例，用来做密码加解密用。
2. 由于我自定义了登录页面，所以在 WebSecurity 中对这些静态资源方形。
3. HttpSecurity 中，我们对认证相关的端点放行，同时配置一下登录页面和登录接口。
4. AuthenticationManagerBuilder 中提供一个基于内存的用户（小伙伴们可以根据 Spring Security 系列第 7 篇文章自行调整为从数据库加载）。
5. 另外还有一个比较关键的地方，因为资源服务器和授权服务器在一起，所以我们需要一个 @Order 注解来提升 Spring Security 配置的优先级。

SecurityConfig 和 AuthServerConfig 都是授权服务器需要提供的东西（如果小伙伴们想将授权服务器和资源服务器拆分，请留意这句话），接下来，我们还需要提供一个暴露用户信息的接口（如果将授权服务器和资源服务器分开，这个接口将由资源服务器提供）：



创建controller包，创建UserController.java

UserController.java

```java
package top.alanlee.test.sso.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {
    @GetMapping("/user")
    public Principal getCurrentUser(Principal principal){
        return principal;
    }
}

```



在static目录下创建登录页面login.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>统一登录认证中心</title>
</head>
<body>
<form action="/login" method="post">
    <h1>统一登录认证中心</h1>
    <span>user: </span><input type="text" name="username">
    <span>pass: </span><input type="password" name="password">
    <input type="submit" value="登录">
</form>
</body>
</html>
```



配置文件application.yml

```yml
server: 
  port: 8080
```



## client1配置

启动类Client1Application.java

Client1Application.java

```java
package top.alanlee.test.sso;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Client1Application {
    public static void main(String[] args) {
        SpringApplication.run(Client1Application.class, args);
    }
}

```



创建config包，创建java配置类SecurityConfig.java

SecurityConfig.java

```java
package top.alanlee.test.sso.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableOAuth2Sso
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .csrf().disable();
    }
}

```

@EnableOAuth2Sso 注解来开启单点登录功能



创建controller包，创建HelloController.java

HelloController.java

```java
package top.alanlee.test.sso.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName() + Arrays.toString(authentication.getAuthorities().toArray());
    }
}

```



配置文件application.yml

application.yml

```yml
security:
  oauth2:
    client:
      client-secret: 123
      client-id: alanlee
      user-authorization-uri: http://localhost:8080/oauth/authorize
      access-token-uri: http://localhost:8080/oauth/token
    resource:
      user-info-uri: http://localhost:8080/user
server:
  port: 8081
  servlet:
    session:
      cookie:
        name: s1

```

1. client-secret 是客户端密码。
2. client-id 是客户端 id。
3. user-authorization-uri 是用户授权的端点。
4. access-token-uri 是获取令牌的端点。
5. user-info-uri 是获取用户信息的接口（从资源服务器上获取）。
6. 最后再配置一下端口，然后给 cookie 取一个名字。



## client2配置

配置与client几乎一样，需要修改的是cookie name，把s1改为s2



## 访问测试

访问http://localhost:8081/hello，网页会自动跳转到http://localhost:8080/login.html进行登录，输入帐号alan和密码123进行登录，登录成功后即可跳转到8081端口的hello的页面。此时再访问8082的hello页面，此时已经不需要登录了。

![image-20200504140212508](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200504140212508.png)

![image-20200504140235405](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200504140235405.png)