# SpringBoot自动配置原理

>  备注：该SpringBoot自动配置原理不适合java刚入门学者以及不熟悉Spring4+Springmvc+maven的同学





**1、当SpringBoot应用启动的时候，就从主方法里面进行启动的。**

```java
@SpringBootApplication
public class SpringBoot02ConfigAutoconfigApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBoot02ConfigAutoconfigApplication.class, args);
    }
}
```

 

它主要加载了@SpringBootApplication注解主配置类，这个@SpringBootApplication注解主配置类里边最主要的功能就是SpringBoot开启了一个@EnableAutoConfiguration注解的自动配置功能。

 

**2、@EnableAutoConfiguration作用：**

它主要利用了一个

EnableAutoConfigurationImportSelector选择器给Spring容器中来导入一些组件。

```java
@Import(EnableAutoConfigurationImportSelector.class)
public @interface EnableAutoConfiguration 
```

 

**3、那么导入了哪些组件呢？**

我们来看

EnableAutoConfigurationImportSelector这个类的父类selectImports

```java
@Override
    public String[] selectImports(AnnotationMetadata annotationMetadata) {
        if (!isEnabled(annotationMetadata)) {
            return NO_IMPORTS;
        }
```

父类里面规定了一个方法叫selectImports这个方法，查看了selectImports这个方法里面的代码内容就能知道导入了哪些组件了。

 

在selectImports这个方法里面主要有个configurations，并且这个configurations最终会被返回。

```java
@Override
    public String[] selectImports(AnnotationMetadata annotationMetadata) {
        if (!isEnabled(annotationMetadata)) {
            return NO_IMPORTS;
        }
        try {
            AutoConfigurationMetadata autoConfigurationMetadata = AutoConfigurationMetadataLoader
                    .loadMetadata(this.beanClassLoader);
            AnnotationAttributes attributes = getAttributes(annotationMetadata);
            List<String> configurations = getCandidateConfigurations(annotationMetadata,
                    attributes);
            configurations = removeDuplicates(configurations);
            configurations = sort(configurations, autoConfigurationMetadata);
            Set<String> exclusions = getExclusions(annotationMetadata, attributes);
            checkExcludedClasses(configurations, exclusions);
            configurations.removeAll(exclusions);
            configurations = filter(configurations, autoConfigurationMetadata);
            fireAutoConfigurationImportEvents(configurations, exclusions);
            return configurations.toArray(new String[configurations.size()]);
        }
```

 

这个configurations它是获取候选的配置。

```java
List<String> configurations = 
       getCandidateConfigurations(annotationMetadata,attributes);
```

 

这个configurations方法的作用就是利用SpringFactoriesLoader.loadFactoryNames从类路径下得到一个资源

```java
public static List<String> loadFactoryNames(Class<?> factoryClass, ClassLoader classLoader) {
        String factoryClassName = factoryClass.getName();
        try {
            Enumeration<URL> urls = (classLoader != null ? classLoader.getResources(FACTORIES_RESOURCE_LOCATION) :
                    ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
```

 

**4、那么得到哪些资源呢？**

它是扫描javajar包类路径下的“META-INF/spring.factories”这个文件

```java
/**
 * The location to look for factories.
 * <p>Can be present in multiple JAR files.
 */
public static final String FACTORIES_RESOURCE_LOCATION = "META-INF/spring.factories";
```

 

**那么扫描到的这些文件作用：**是把这个文件的urls拿到之后并把这些urls每一个遍历，最终把这些文件整成一个properties对象

```java
public static List<String> loadFactoryNames(Class<?> factoryClass, ClassLoader classLoader) {
        String factoryClassName = factoryClass.getName();
        try {
            Enumeration<URL> urls = (classLoader != null ? classLoader.getResources(FACTORIES_RESOURCE_LOCATION) :
                    ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
            List<String> result = new ArrayList<String>();
            while (urls.hasMoreElements()) {
                URL url = urls.nextElement();
                Properties properties = PropertiesLoaderUtils.loadProperties(new UrlResource(url));
                String factoryClassNames = properties.getProperty(factoryClassName);
                result.addAll(Arrays.asList(StringUtils.commaDelimitedListToStringArray(factoryClassNames)));
            }
            return result;
```

 

然后它从properties对象里边获取一些值，把这些获取到的值来加载我们最终要返回的这个结果，这个结果就是我们要交给Spring容器中的所有组件，这相当于这factoryClassName就是我们传过来的Class的这个类名。

 

而传过来的Class是调用这个

getSpringFactoriesLoaderFactoryClass()这个方法得到从properties中获取到EnableAutoConfiguration.class类名对应的值

```java
protected Class<?> getSpringFactoriesLoaderFactoryClass() {
        return EnableAutoConfiguration.class;
    }
```

 

然后把它们添加在容器中

 

**5、按照它的这个意思，来到第二个Springjar包的META-INF下的spring.factories这个文件找到配置所有EnableAutoConfiguration的值加入到Spring容器中**

 

所以说我们容器中最终会添加很多的类

比如：

 

![img](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbueZOvCI11A1NrtE7PmyyToTe5dpt1QfLAqiciaib6k1x9AqMhhIu89O2S06WaD3mZaemHUdDc5bzjrgA/640?wx_fmt=png)

![img](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbueZOvCI11A1NrtE7PmyyToT25FEuzoFAfepsE9eIEmDPyHvictrXMkApjFWgqdYb3XXYoDSCYNYn3A/640?wx_fmt=png)

![img](https://mmbiz.qpic.cn/mmbiz_png/eQPyBffYbueZOvCI11A1NrtE7PmyyToT67LrQhxCLbw3G5RBAnljrOwk4vlZvxsdCkANfZzrnI5My6oeRc9N3g/640?wx_fmt=png)

 

每一个xxxAutoConfiguration类都是容器中的一个组件，并都加入到容器中。

 

加入到容器中之后的作用就是用它们来做自动配置，这就是Springboot自动配置之源，也就是自动配置的开始，只有这些自动配置类进入到容器中以后，接下来这个自动配置类才开始进行启动

 

**6、每一个自动配置类进行自动配置功能**

以一个自动配置类

HttpEncodingAutoConfiguration（HTTP的编码自动配置）为例子来解释SpringBoot的自动配置之原理：

 

1). 这个HttpEncodingAutoConfiguration类上面标注了一大堆的注解：

```java
@Configuration    
//表示这是一个配置类，类似于以前编写的配置文件一样，也可以给容器中添加组件
@EnableConfigurationProperties(HttpEncodingProperties.class) 
//启用ConfigurationProperties功能：
//这个ConfigurationProperties里面引入了一个类，这个类就是启用指定类的ConfigurationProperties功能
//有了这个@EnableConfigurationPropertie注解以后相当于把配置文件中对应值就和这个HttpEncodingProperties.class类绑定起来了。

@ConditionalOnWebApplication 
//这个注解的意思就是判断当前是不是web应用，@Conditional是spring底层，意思就是根据不同的条件，来进行自己不同的条件判断，如果满足指定的条件，那么整个配置类里边的配置才会生效。

@ConditionalOnClass(CharacterEncodingFilter.class)
//看这个类里边有没有这个过滤器，就是判断当前项目里边有没有CharacterEncodingFilter这个类，这个CharacterEncodingFilter类是Springmvc中乱码解决的过滤器。

@ConditionalOnProperty(prefix = "spring.http.encoding", value = "enabled", matchIfMissing = true)//@ConditionalOnProperty注解是来判断配置文件中是否存在某个配置，就是是否存在spring.http.encoding.enabled这个配置，matchIfMissing的意思就是如果不存在也认为这个判断是正确的
//即使配置文件中不配置spring.http.encoding.enabled=true这个属性，也是默认生效的
public class HttpEncodingAutoConfiguration {
```

 

点进去HttpEncodingProperties这个类，发现这个HttpEncodingProperties类上面标注了@ConfigurationProperties注解

```java
@ConfigurationProperties(prefix = "spring.http.encoding") 
//从配置文件中获取指定的值和bean的属性进行绑定
public class HttpEncodingProperties {
    public static final Charset DEFAULT_CHARSET = Charset.forName("UTF-8");
```

 

所以说配置文件中该配置什么，我们就按照它的这个旨意，它要配spring.http.encoding这个属性，这个属性里边能配置什么值，就对应HttpEncodingProperties这个类来配置，所有的配置文件中能配置的属性都是在xxx.Properties类中封装着

```java
@ConfigurationProperties(prefix = "spring.http.encoding")
public class HttpEncodingProperties {

    public static final Charset DEFAULT_CHARSET = Charset.forName("UTF-8");

    /**
     * Charset of HTTP requests and responses. Added to the "Content-Type" header if not
     * set explicitly.
     */
    private Charset charset = DEFAULT_CHARSET;

    /**
     * Force the encoding to the configured charset on HTTP requests and responses.
     */
    private Boolean force;

    /**
     * Force the encoding to the configured charset on HTTP requests. Defaults to true
     * when "force" has not been specified.
     */
    private Boolean forceRequest;

    /**
     * Force the encoding to the configured charset on HTTP responses.
     */
    private Boolean forceResponse;

    /**
     * Locale to Encoding mapping.
     */
    private Map<Locale, Charset> mapping;

    public Charset getCharset() {
        return this.charset;
    }

    public void setCharset(Charset charset) {
        this.charset = charset;
    }

    public boolean isForce() {
        return Boolean.TRUE.equals(this.force);
    }

    public void setForce(boolean force) {
        this.force = force;
    }

    public boolean isForceRequest() {
        return Boolean.TRUE.equals(this.forceRequest);
    }

    public void setForceRequest(boolean forceRequest) {
        this.forceRequest = forceRequest;
    }

    public boolean isForceResponse() {
        return Boolean.TRUE.equals(this.forceResponse);
    }

    public void setForceResponse(boolean forceResponse) {
        this.forceResponse = forceResponse;
    }

    public Map<Locale, Charset> getMapping() {
        return this.mapping;
    }

    public void setMapping(Map<Locale, Charset> mapping) {
        this.mapping = mapping;
    }
```

 

**所以说配置文件能配置什么就可以参照某一个功能对应的这个属性类**

 

**7、这个HttpEncodingProperties类就是根据当前不同的条件判断，决定这个配置类是否生效。**

如果一旦生效了，所有的配置类都成功了，就给容器中添加各种组件，这些组件的属性是从对应的properties类中获取的，而这properties类里边的每一个属性又是和配置文件绑定的

```java
    @Bean  
    //给容器中添加一个组件。
    @ConditionalOnMissingBean(CharacterEncodingFilter.class) 
    //添加一个我们自己来new这个CharacterEncodingFilter，把这个filter添加过去，但是注意这个filter里边要获取字符集的名字（filter.setEncoding(this.properties.getCharset().name());)，你是UTF8编码还是什么编码，它要从properties中进行获取，意思就是这个组件的某些值需要从properties中获取
    public CharacterEncodingFilter characterEncodingFilter() {
        CharacterEncodingFilter filter = new OrderedCharacterEncodingFilter();
        filter.setEncoding(this.properties.getCharset().name());
        filter.setForceRequestEncoding(this.properties.shouldForce(Type.REQUEST));
        filter.setForceResponseEncoding(this.properties.shouldForce(Type.RESPONSE));
        return filter;
    }
```

我们可以再深入的看一下properties

```java
private final HttpEncodingProperties properties; 
//它已经和SpringBoot配置文件进行映射了。
```

 

我们看到properties是

HttpEncodingProperties，也就是说HttpEncodingProperties这个对象的值它是获取配置文件的值的，所以我们在配置这个filter到底要用什么编码的时候是从properties获取的。

 

而且值得注意的是：

```java
@Configuration
@EnableConfigurationProperties(HttpEncodingProperties.class)
@ConditionalOnWebApplication
@ConditionalOnClass(CharacterEncodingFilter.class)
@ConditionalOnProperty(prefix = "spring.http.encoding", 
          value = "enabled", matchIfMissing = true)
public class HttpEncodingAutoConfiguration {

    private final HttpEncodingProperties properties;
    //只有一个有参构造器
    public HttpEncodingAutoConfiguration(HttpEncodingProperties properties) {
        this.properties = properties;
    }
```

 

这个HttpEncodingAutoConfiguration只有一个有参构造器，在只有一个有参构造器的情况下，参数的值就会从容器中拿

 

**8、而容器中它怎么去拿到呢？**

相当于是前面的这个

@EnableConfigurationProperties(HttpEncodingProperties.class) 注解，这个@EnableConfigurationProperties注解的作用就是把HttpEncodingProperties.class和配置文件进行绑定起来并把HttpEncodingProperties加入到容器中。

 

接下来这个自动配置类，通过一个有参构造器把这个属性拿到，而这个属性已经和SpringBoot映射了，接下来要用什么编码，就是拿到HttpEncodingProperties这个类里边的属性。

 

所以SpringBoot能配置什么，它要设置编码，它是获取properties里边getCharset里边的name值。

```java
filter.setEncoding(this.properties.getCharset().name());
```

 

所以就以此类推，配置一个Spring配置，就可以照着HttpEncodingProperties这里边的来配置。

 

比如在application.properties配置文件下配置一个http.encoding.enabled属性：

```properties
spring.http.encoding.enabled=true   //能配置这个就相当于是我们之前的判断属性
```

 

还能配置其他的一些属性。

比如：

```properties
spring.http.encoding.charset=UTF-8
```

 

**所以我们能够配置哪些属性，都是来源于这个功能的properties类**

 

有了这个自动配置类，自动配置类就给容器中添加这个filter，然后这个filter就会起作用了。

 

**用好SpringBoot只要把握这几点：**

1. SpringBoot启动会加载大量的自动配置类
2. 所要做的就是我们需要的功能SpringBoot有没有帮我们写好的自动配置类：
3. 如果有就再来看这个自动配置类中到底配置了哪些组件，Springboot自动配置类里边只要我们要用的组件有，我们就不需要再来配置了，但是如果说没有我们所需要的组件，那么我们就需要自己来写一个配置类来把我们相应的组件配置起来。
4. 给容器中自动配置类添加组件的时候，会从properties类中获取某些属性，而这些属性我们就可以在配置文件指定这些属性的值