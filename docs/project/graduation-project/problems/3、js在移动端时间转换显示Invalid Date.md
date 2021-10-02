# js在移动端时间转换显示Invalid Date

###### 问题

js在移动端时间转换显示Invalid Date

在`new Date('2020-11-29 20:00:00')`时出现Invalid Date NaN:NaN:NaN的问题



###### 解决

把字符串中的`-`符号替换成`/`符号即可解决，即将`2020-11-29 20:00:00`转换成`2020/11/29 20:00:00`

```js
let date = "2020-11-29 20:00:00";
date = date.replace(/-/g, "/");  // 得到 2020/11/29 20:00:00
date = new Date(date); // 成功转换时间
```



如果是ISO时间（`2020-11-28T21:32:05.000+0000`），则需手动转换成`2020/11/28 21:32:05`的形式，再进行new Date()转换

```js
let date = "2020-11-28T21:32:05.000+0000";
let d = date.split("T")[0];
let t = date.split("T")[1].split(".")[0];
let dt = d + " " + t;
date = dt.replace(/-/g, "/");  // 得到 2020/11/28 21:32:05
date = new Date(date); // 成功转换时间
```

