# Spring Boot集成Swagger2

## 添加依赖

```xml
<!-- API文档 springfox-swagger -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>

<!-- API文档 springfox-swagger-ui -->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
```



## 配置Swagger

1. 新建一个类SwaggerConfig.java文件

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(getApiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("top.alanlee.template.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo getApiInfo(){
        return new ApiInfoBuilder()
                .title("大标题")
                .description("小标题")
                .version("1.0")
                .license("Apache 2.0")
                .licenseUrl("http://www.apache.org/licenses/LICENSE-2.0")
                .build();
    }
}
```



2. 在Controller类中配置接口信息

- 在Controller类上添加@Api注解

- 在方法上添加@ApiOperation注解

    ![image-20200518172339513](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200518172339513.png)



## 测试

浏览器输入地址http://localhost:8080/swagger-ui.html

![image-20200518172715646](https://gitee.com/AlanLee97/assert/raw/master/note_images/image-20200518172715646.png)



## 一些注解的使用
@Api：用在类上，说明该类的作用

@ApiOperation：用在方法上，说明方法的作用，标注在具体请求上，value和notes的作用差不多，都是对请求进行说明；tags则是对请求进行分类的，比如你有好几个controller，分别属于不同的功能模块，那这里我们就可以使用tags来区分了，看上去很有条理

@ApiImplicitParams：用在方法上包含一组参数说明

@ApiImplicitParam：用在@ApiImplicitParams注解中，指定一个请求参数的各个方面

　　paramType：参数放在哪个地方

　　header 请求参数的获取：@RequestHeader

　　query 请求参数的获取：@RequestParam

　　path（用于restful接口） 请求参数的获取：@PathVariable

　　body（不常用）

　　form（不常用）

　　name：参数名

　　dataType：参数类型

　　required：参数是否必须传

　　value：参数的意思

　　defaultValue：参数的默认值

@ApiResponses：用于表示一组响应

@ApiResponse：用在@ApiResponses中，一般用于表达一个错误的响应信息

　　code：数字，例如400

　　message：信息，例如”请求参数没填好”

　　response：抛出异常的类

@ApiModel：描述一个Model的信息（这种一般用在post创建的时候，使用@RequestBody这样的场景，请求参数无法使用@ApiImplicitParam注解进行描述的时候）表明这是一个被swagger框架管理的model，用于class上
@ApiModel：使用在实体类上，描述实体类。
@ApiModelProperty ：使用在实体类上的成员变量上，描述成员变量的含义。
