# Spring Boot集成Shiro（前后端分离）



## 添加依赖

```xml
<!-- ======BEGIN shiro ====== -->
<dependency>
<groupId>org.apache.shiro</groupId>
<artifactId>shiro-spring</artifactId>
<version>1.5.3</version>
</dependency>

<!-- ======END shiro ====== -->
```



## 创建数据表

### 用户表 t_user

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `username` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码',
  `nickname` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '昵称',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机',
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `role_id` int(11) NULL DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES (1, 'admin', '123456', 'AlanLee', 'https://alanlee-panda-appointment.oss-cn-shenzhen.aliyuncs.com/images/2019-12-10/666a1a1f72c5eae973ca0f0977adca58b89a119f236a1-3vh1WC_fw658.jpg', '12345678901', '123456@qq.com', '2020-04-13 16:49:37', '2020-04-13 16:49:41', 1);
INSERT INTO `t_user` VALUES (2, 'test', '123456', '用户_test', 'http://b-ssl.duitang.com/uploads/item/201608/07/20160807214159_TxhRk.thumb.700_0.jpeg', '11122233345', 'test@qq.com', '2020-04-13 16:57:19', '2020-04-13 16:57:21', 2);
INSERT INTO `t_user` VALUES (3, 'vistor', '123456', 'Admin', NULL, NULL, NULL, '2020-05-10 23:08:35', NULL, 3);

SET FOREIGN_KEY_CHECKS = 1;
```



### 角色表 t_role

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_role
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `role_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES (1, 'admin');
INSERT INTO `t_role` VALUES (2, 'teacher');
INSERT INTO `t_role` VALUES (3, 'student');

SET FOREIGN_KEY_CHECKS = 1;
```



### 权限表

```sql
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for t_permission
-- ----------------------------
DROP TABLE IF EXISTS `t_permission`;
CREATE TABLE `t_permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `permission_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限名称',
  `role_id` int(11) NULL DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of t_permission
-- ----------------------------
INSERT INTO `t_permission` VALUES (1, 'admin:*', 1);
INSERT INTO `t_permission` VALUES (2, 'user:*', 2);

SET FOREIGN_KEY_CHECKS = 1;
```



## 创建实体类

User.java

```java
public class User implements Serializable {
    private int id;
    private String username;
    private String password;
    private String nickname;
    private String avatar;
    private String phone;
    private String email;
    private String create_time;
    private String update_time;
    private Set<Role> roleSet;

    public User() {
    }

    public User(int id, String username, String password, String nickname, String avatar, String phone, String email, String create_time, String update_time) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nickname = nickname;
        this.avatar = avatar;
        this.phone = phone;
        this.email = email;
        this.create_time = create_time;
        this.update_time = update_time;
    }

    //省略setter、getter
    //...
}

```



Role.java

```java
public class Role {
    private int id;
    private String user;
    private String admin;
    private Set<Permissions> permissionsSet;

    public Role() {
    }

    public Role(int id, String user, String admin, Set<Permissions> permissionsSet) {
        this.id = id;
        this.user = user;
        this.admin = admin;
        this.permissionsSet = permissionsSet;
    }
    
    //省略setter、getter
    //...
}
```



Permissions.java

```java
public class Permissions {
    private int id;
    private String user;
    private String admin;

    public Permissions() {
    }

    public Permissions(int id, String user, String admin) {
        this.id = id;
        this.user = user;
        this.admin = admin;
    }
    
    //省略setter、getter
    //...
}
```



## 自定义Realm

新建shiro.realm包，在该包下创建自定义的UserRealm.java

```java
public class UserRealm extends AuthorizingRealm {

    /**
     * 注入service
     */
    @Resource
    private UserServiceImpl userService;

    /**
     * 授权
     * @param principalCollection
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        String username = (String) principalCollection.getPrimaryPrincipal();
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        authorizationInfo.setRoles(userService.getRoles(username));
        authorizationInfo.setStringPermissions(userService.getPermissions(username));
        return authorizationInfo;
    }

    /**
     * 认证
     * @param authenticationToken
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        String username = (String) authenticationToken.getPrincipal();
        //从数据库中查询该用户
        User user = userService.getOneByUsernameAndPassword(userService.getUserByUsername(username));
        if (user != null){
            SecurityUtils.getSubject().getSession().setAttribute("user", user);
            AuthenticationInfo authenticationInfo = 
                    new SimpleAuthenticationInfo(user.getUsername(), user.getPassword(), "userRealm");
            return authenticationInfo;
        }
        return null;
    }
}
```

自定义的Realm需要实现AuthorizingRealm接口，并重写`doGetAuthorizationInfo` 和 `doGetAuthenticationInfo`方法



## 配置Shiro

创建config，在该包下创建ShiroConfig.java

```java
@Configuration
public class ShiroConfig {
    private Logger logger = LoggerFactory.getLogger(ShiroConfig.class);

    /**
     * 注册自定义Realm
     * @return
     */
    @Bean
    public UserRealm userRealm(){
        UserRealm userRealm = new UserRealm();
        logger.info("=====userRealm构建完成");
        return userRealm;
    }

    /**
     * 配置安全管理器
     * @return
     */
    @Bean
    public SecurityManager securityManager(){
        DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager(userRealm());
        logger.info("=====securityManager构建完成");
        return securityManager;
    }

    /**
     * Shiro过滤器
     * @param securityManager
     * @return
     */
    @Bean
    public ShiroFilterFactoryBean shiroFilterFactoryBean(SecurityManager securityManager){
        ShiroFilterFactoryBean filterFactoryBean = new ShiroFilterFactoryBean();
        filterFactoryBean.setSecurityManager(securityManager);
        filterFactoryBean.setLoginUrl("/user/unlogin");
        //todo
        filterFactoryBean.setSuccessUrl("/user/info");
        filterFactoryBean.setUnauthorizedUrl("/unauth");

        Map<String, String> filterChainMap = new LinkedHashMap();
        //放行
        filterChainMap.put("/login", "anon");
        filterChainMap.put("/index", "anon");

        //认证授权才放行
        //开启身份认证
        filterChainMap.put("/user/admin*", "authc");
        //开启角色认证
        filterChainMap.put("/user/student*/**", "roles[admin]");
        //开启权限认证
        filterChainMap.put("/user/teacher*/**", "perms[\"user:create\"]");

        //配置退出登录过滤器
        filterChainMap.put("/user/logout/*", "logout");

        filterFactoryBean.setFilterChainDefinitionMap(filterChainMap);

        logger.info("=====filterFactoryBean构建完成");

        return filterFactoryBean;
    }
}
```



## 配置Mybatis查询

UserMapper.java

```java
@Mapper
@Repository
public interface UserMapper{
    //通过用户名和密码查询用户
    User getOneByUsernameAndPassword(User user);

    //通过用户名查询用户
    User getUserByUsername(String username);

    //通过用户名查询角色
    Set<String> getRoles(String username);

    //通过用户名查询权限
    Set<String> getPermissions(String username);

}

```



UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.alanlee.miaosha.mapper.UserMapper">

    <!-- 通过用户名和密码查询用户 -->
    <select id="getOneByUsernameAndPassword"
            parameterType="top.alanlee.miaosha.entity.User"
            resultType="top.alanlee.miaosha.entity.User">
        SELECT *
        FROM t_user
        WHERE t_user.username = #{username} and t_user.password = #{password}
    </select>

    <!-- 通过用户名查询用户 -->
    <select id="getUserByUsername"
            parameterType="java.lang.String"
            resultType="top.alanlee.miaosha.entity.User">
        SELECT *
        FROM t_user
        WHERE t_user.username = #{username}
    </select>

    <!-- 通过用户名查询角色 -->
    <select id="getRoles"
            parameterType="java.lang.String"
            resultType="java.lang.String">
        SELECT t_role.role_name
        FROM t_user, t_role
        WHERE t_user.username = #{username} AND t_user.role_id = t_role.id
    </select>

    <!-- 通过用户名查询权限 -->
    <select id="getPermissions"
            parameterType="java.lang.String"
            resultType="java.lang.String">
        SELECT t_permission.permission_name
        FROM t_user, t_role, t_permission
        WHERE t_user.username = #{username} AND t_user.role_id = t_role.id AND t_permission.role_id = t_role.id
    </select>
</mapper>
```



## 配置Controller

service层的代码省略，请自行配置



UserController.java

```java
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;


    /**
     * 登录
     * @return
     */
    @PostMapping("/login")
    public ApiJson login(User user, HttpSession session){
        //根据用户名和密码创建Token
        UsernamePasswordToken token =
                new UsernamePasswordToken(user.getUsername(), user.getPassword());

        //获取主体
        Subject subject = SecurityUtils.getSubject();

        try {
            //开始认证，这里会跳转到自定义的Realm中
            subject.login(token);
            session.setAttribute(user.getUsername(), user);
            return ApiJson.ok(userService.getOneByUsernameAndPassword(user));
        } catch (AuthenticationException e) {
            e.printStackTrace();
            session.setAttribute(user.getUsername(), user);
            session.setAttribute("error", "用户名或密码错误");
            return ApiJson.error("用户名或密码错误");
        }
    }

    /**
     * 未登录
     */
    @GetMapping("/unlogin")
    public ApiJson unlogin(){
        return ApiJson.error("未登录，请先登录", "user/login");
    }

    /**
     * 退出登录
     * @param username
     * @param session
     * @return
     */
    @GetMapping("/logout/{username}")
    public ApiJson logout(@PathVariable String username, HttpSession session){
        session.removeAttribute(username);
        return ApiJson.ok("退出成功", null);
    }

    /**
     * 测试身份认证
     * @param request
     * @return
     */
    @RequestMapping("/admin")
    public ApiJson testAuthc(HttpServletRequest request){
        Object user = request.getSession().getAttribute("user");
        return user != null ? ApiJson.ok("认证成功") : ApiJson.error("认证失败");
    }

    /**
     * 测试角色认证
     * @param request
     * @return
     */
    @RequestMapping("/student")
    public ApiJson testRole(HttpServletRequest request){
        return ApiJson.ok("ok");
    }

    /**
     * 测试权限认证
     * @param request
     * @return
     */
    @RequestMapping("/teacher")
    public ApiJson testPermission(HttpServletRequest request){
        return ApiJson.ok("ok");
    }


}
```



TipController.java

```java
@RestController
public class IndexController {

    @GetMapping("/unauth")
    public ApiJson unauth(){
        return ApiJson.error("未认证授权，禁止访问");
    }
}
```





## 测试

| 帐号   | 角色    | 权限    |
| ------ | ------- | ------- |
| admin  | admin   | admin:* |
| test   | teacher | user:*  |
| vistor | student |         |



测试5个接口地址

- http://localhost:8080/user/admin
- http://localhost:8080/user/login
- http://localhost:8080/user/logout/username
- http://localhost:8080/user/student
- http://localhost:8080/user/teacher

先访问admin，此时未登录，自动跳转到/user/unlogin，输出提示信息和登录的接口地址，前端可根据输出的信息自行处理

![image-20200511123931178](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511123931178.png)

试试访问/user/student和再访问/user/teacher

结果与上图相同



使用admin的帐号，通过/user/login登录接口登录后，再次访问/user/admin

![image-20200511124117247](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511124117247.png)

访问/user/student

![image-20200511124553286](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511124553286.png)

访问/user/teacher，此时会跳转到unauth接口

![image-20200511124620645](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511124620645.png)

因为在ShiroConfig中的配置为

```java
//开启权限认证
filterChainMap.put("/user/teacher*/**", "perms[\"user:create\"]");
```

teacher接口下的权限设定为user:开头的才可以访问这个接口。而admin帐号的权限是admin:开头的





使用test帐号登录，再次访问/user/teacher，此时可以访问了

![image-20200511125731571](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511125731571.png)

再次访问/user/student，此时已无法访问，自动跳转到/unauth

![image-20200511124620645](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200511124620645.png)