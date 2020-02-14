# 06-selenium使用

什么是 selenium ？

其实它就是一个自动化测试工具，支持各种主流的浏览器

## 使用selenium 

1.下载浏览器驱动

使用selenium时，要确保所用的chrome浏览器跟chrome驱动版本对应，否则就会报错。
驱动下载地址
http://chromedriver.storage.googleapis.com/index.html

浏览器驱动下载地址

| **Chrome**:  | https://sites.google.com/a/chromium.org/chromedriver/downloads |
| ------------ | ------------------------------------------------------------ |
| **Edge**:    | https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/ |
| **Firefox**: | https://github.com/mozilla/geckodriver/releases              |
| **Safari**:  | https://webkit.org/blog/6900/webdriver-support-in-safari-10/ |

解压下载的驱动

2.配置环境变量

![image-20200214115431488](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214115432-315946.png)

3.编写代码

```python
# 导入 web 驱动模块
from selenium import webdriver
# 创建一个 Chrome 驱动
driver = webdriver.Chrome()
# 使用 get 方法打开百度
url = 'http://www.baidu.com/'
driver.get(url)

# 获取到输入框
input = driver.find_element_by_css_selector('#kw')
# 获取到输入框之后我们就往里面写入我们要搜索的内容
input.send_keys('海的照片')

# 获取到搜索按钮
btn = driver.find_element_by_css_selector('#su')
# 按钮点击
btn.click()
```

![image-20200214115815009](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200214115815009.png)



## selenium常用方法

selenium 提供了挺多方法给我们获取的

当我们要在页面中获取一个元素的时候，可以使用这些方法

- find_element_by_id
- find_element_by_name
- find_element_by_xpath
- find_element_by_link_text
- find_element_by_partial_link_text
- find_element_by_tag_name
- find_element_by_class_name
- find_element_by_css_selector

比如我们打开了一个页面

是这样的 HTML

```html
<html>
<body>
 <form id="loginForm">
  <input name="username" type="text" />
  <input name="password" type="password" />
  <input class="login" name="continue" type="submit" value="Login" />
 </form>
</body>
<html>
```

可以通过 id 获取 form 表单

```
login_form = driver.find_element_by_id('loginForm')
```

通过 name 获取相应的输入框

```
username = driver.find_element_by_name('username')
password = driver.find_element_by_name('password')
```

通过 xpath 获取表单

```
login_form = driver.find_element_by_xpath("/html/body/form[1]")
login_form = driver.find_element_by_xpath("//form[1]")
login_form = driver.find_element_by_xpath("//form[@id='loginForm']")
```

通过标签获取相应的输入框

```
input1 = driver.find_element_by_tag_name('input')
```

class 获取相应的元素

```
login = driver.find_element_by_class_name('login')
```

用 Chrome 浏览器的审核元素

可以很方便获取相应的属性

直接 copy 就完事了



![img](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214120344-438946.gif)



如果觉得find_element_by_xxx_xxx太长了，那么我们还可以这样写

```html
driver.find_elements(By.ID, 'xxx')
```

By.属性和上面的是一样的

```
ID = "id"
XPATH = "xpath"
LINK_TEXT = "link text"
PARTIAL_LINK_TEXT = "partial link text"
NAME = "name"
TAG_NAME = "tag name"
CLASS_NAME = "class name"
CSS_SELECTOR = "css selector"
```

**其他方法**

获取请求链接

```
driver.current_url
```

获取 cookies

```
driver.get_cookies()
```

获取源代码

```
driver.page_source
```

获取文本的值

```
input.text
```

以上就是 selenium 的常用方法

想要了解更多相关 selenium 的可以到官方文档查看

https://selenium-python.readthedocs.io/





## 使用phantomjs 

1. 下载phantomjs 

下载地址http://phantomjs.org/download.html

下载后解压

2. 配置环境变量

![image-20200214143716577](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200214143716577.png)

3. 将 Chrome 换成 phantomjs

```python
browser = webdriver.PhantomJS()
```

