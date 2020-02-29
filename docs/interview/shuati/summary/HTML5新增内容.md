# HTML5新增内容

![img](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/655404835_1570983771553_D7E52D9253D64A990D61875E03549140.png)

## **一、结构标签**

1.section :一个内容区域块

2.article:一块与上下文不相关的内容，如一篇文章

3.asider:article以外，与article有关的辅助信息

4.header:页面的标题

5.hgroup:对整个页面或页面中一个内容区块的标题进行组合

6.footer:脚注

7.nav:导航链接

8.figure:一块独立的内容

## **二、媒体标签:**

1.video

video 元素支持三种视频格式：

Ogg = 带有 Theora 视频编码和 Vorbis 音频编码的 Ogg 文件

MPEG4 = 带有 H.264 视频编码和 AAC 音频编码的 MPEG 4 文件

WebM = 带有 VP8 视频编码和 Vorbis 音频编码的 WebM 文件

```html
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.mp4" type="video/mp4">
如果浏览器不支持video标签，将在这个位置显示该段文字
</vide>
```

2.radio

```text
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
如果浏览器不支持radio标签，将在这个位置显示该段文字
</audio>
```

## 三、表单标签

1.input type 类型

email 、url 、number 、 date 、 rang 、search

```text
<input type="email" name="user_email" />
<input type="url" name="user_url" />
<input type="number" name="points" min="1" max="10" />
<input type="range" name="points" min="1" max="10" />
<input type="date" name="user_date" />
```



2.表单元素

datalist ：输入域的选项列表

```html
<input type="url" list="url_list" name="link" />
<datalist id="url_list">
<option label="W3School" value="http://www.W3School.com.cn" />
<option label="Google" value="http://www.google.com" />
<option label="Microsoft" value="http://www.microsoft.com" />
</datalist>
```

keygen：密钥对生成器（key-pair generator）

```html
<form action="demo_form.asp" method="get">
Username: <input type="text" name="usr_name" />
Encryption: <keygen name="security" />
<input type="submit" />
</form>
```

3.表单属性

写在form 里面的表单属性

autocomplete：规定 form 或 input 域应该拥有自动完成功能

```html
<form action="demo_form.asp" method="get" autocomplete="on">
First name: <input type="text" name="fname" /><br />
Last name: <input type="text" name="lname" /><br />
E-mail: <input type="email" name="email" autocomplete="off" /><br />
<input type="submit" />
</form>
```

form ：规定输入域所属的一个或多个表单

```html
<form action="demo_form.asp" method="get" id="user_form">
First name:<input type="text" name="fname" />
<input type="submit" />
</form>
Last name: <input type="text" name="lname" form="user_form" />
```

novalidate ：规定在提交表单时不应该验证 form 或 input 域

```html
<form action="demo_form.asp" method="get" novalidate="true">
E-mail: <input type="email" name="user_email" />
<input type="submit" />
</form>
```



写在input 标签里的属性

multiple：规定输入域中可选择多个值

```html
Select images: <input type="file" name="img" multiple="multiple" />
```

pattern 属性规定用于验证 input 域的模式（pattern）

```html
 <input type="text" name="country_code"pattern="[A-z]{3}" title="Three letter country code" />
```

placeholder ：占位符

```html
<input type="search" name="user_search"  placeholder="占位符号l" />
```

required ：规定必须在提交之前填写输入域（不能为空）

```html
<input type="text" name="usr_name" required="required" />
```

autofocus：规定在页面加载时，域自动地获得焦点

height 和 width 属性

min、max 和 step 属性用于为包含数字或日期的 input 类型规定限定（约束）。

max 属性规定输入域所允许的最大值。

min 属性规定输入域所允许的最小值。

step 属性为输入域规定合法的数字间隔（如果 step="3"，则合法的数是 -3,0,3,6 等）

## 四、其他功能标签或属性

其他功能标签

1.mark ：高亮显示

```html
<mark> XXXX </mark>
```

\2. progress ： 标签标示任务的进度（进程）

```html
<progress value="22" max="100"></progress> 
```

3.time：定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。

seo用的标签

4.ruby：对某个字进行注释

```html
<ruby>
漢 ：  <rt>
<rp>(</rp>ㄏㄢˋ<rp>)</rp>  //注释的内容
</rt>
</ruby>
```

5.wbr：如果单词太长，或者您担心浏览器会在错误的位置换行，那么您可以使用 `<wbr>` 元素来添加 Word Break Opportunity（单词换行时机）

```html
<p>如果想学习 AJAX，那么您必须熟悉 XML<wbr>Http<wbr>Request 对象。</p>
```

6.details：描述文档或文档某个部分的细节。

与标签配合使用可以为 details 定义标题。标题是可见的，用户点击标题时，会显示出 details。

```html
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>
```

7.datalist：描述了其可能的值：

```html
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```



其他功能属性

1.defer

```html
<script defer scr="#"> </script>
```

表示加载完后不马上执行（推迟执行），等全部加载完后再执行

2.async

```html
<script async scr="#"> </script>
```

表示加载后马上执行（异步执行）,执行同时加载下面内容

3.link里面的size属性

规定小图标的大小

4.base 里面的target="_blank" 属性

表示全部文档在新窗口打开

\5. a 标签里面的media属性

media 里面将会对什么进行优化

hreflang 表示网址使用什么语言

ref="external" 表示外部链接

6.ol 有序列表

start="50" ：从50开始排列

reversed：倒叙显示

7.menu 标签里的

type="toolbar"

8.iframe标签

seamless：这个框架没有边框，没有边距

srcdoc：指定框架的内容

sandbox：规定安全级别

以下对任何一个标签都可以使用的

data-youvalue：自定义属性



hidden：显示或者隐藏一个标签

spellcheck：语法纠错

tabindex：用tab键时候切换顺序

tabindex="1";

tabindex="2";

contenteditable:

contenteditable="ture"; 表示该内容可被编辑

desginMode

javascript属性,写在javascript里面的

window.document.designMode="on"; 整个页面都是可以被编辑的