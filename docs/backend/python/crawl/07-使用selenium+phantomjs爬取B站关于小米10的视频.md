# 07-使用selenium+phantomjs爬取B站关于小米10的视频

## 目标

b站搜索页面https://search.bilibili.com/，爬取关于小米10的视频

![image-20200214144425392](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214144427-669803.png)



## 分析

搜索小米10后的结果

![image-20200214144352911](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200214144352911.png)

在这个页面可以看到，我们需要的数据有

名称

视频地址

描述

观看次数

弹幕数量

发布时间

待会我们就把这些数据都爬下来





## 代码

```python
# 爬取哔哩哔哩的数据
# 导入 web 驱动模块
import xlwt
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.by import By
# 创建一个 Chrome 驱动
browser = webdriver.PhantomJS()
# browser = webdriver.Chrome()
WAIT = WebDriverWait(browser, 10)

# 全局变量：视频总页数
total_page = 0

# 创建excel文件
book = xlwt.Workbook(encoding='utf-8', style_compression=0)
sheet = book.add_sheet('小米10视频', cell_overwrite_ok=True)
sheet.write(0, 0, '名称')
sheet.write(0, 1, '时长')
sheet.write(0, 2, '地址')
sheet.write(0, 3, '描述')
sheet.write(0, 4, '观看次数')
sheet.write(0, 5, '弹幕数')
sheet.write(0, 6, '发布时间')
# 全局变量：控制excel中的行
row = 0


# 打开浏览器搜索
def search():
    # 使用 get 方法打开网页
    url = 'https://search.bilibili.com/'
    browser.get(url)

    # 获取到输入框
    input = browser.find_element_by_css_selector('#search-keyword')
    # 获取到输入框之后我们就往里面写入我们要搜索的内容
    input.send_keys('小米10')

    # 获取到搜索按钮
    btn = browser.find_element_by_class_name('searchBtn')
    # 按钮点击
    btn.click()
	
    # 等到这个元素可操作的时候才会继续执行下一步
    total = WAIT.until(EC.presence_of_element_located(
        (By.CSS_SELECTOR, '#all-list > div.flow-loader > div.page-wrap > div > ul > li.page-item.last > button')))
    print(total.text)
    global total_page
    total_page = int(total.text)

# 获取网页源码
def get_source():
    html = browser.page_source
    soup = BeautifulSoup(html, 'lxml')
    parse_html(soup)

# 解析html
def parse_html(soup):
    list = soup.find(class_='video-list clearfix').find_all('li')

    global row

    for item in list:
        row += 1
        item_title = item.find('a').get('title')
        item_link = item.find('a').get('href')
        item_duration = item.find(class_='so-imgTag_rb').text
        item_dec = item.find(class_='des hide').text
        item_watch_num = item.find(class_='so-icon watch-num').text
        item_danmu = item.find(class_="so-icon hide").text
        item_up_time = item.find(class_='so-icon time').text

        # 将数据写入excel
        sheet.write(row, 0, item_title)
        sheet.write(row, 1, item_duration)
        sheet.write(row, 2, item_link)
        sheet.write(row, 3, item_dec.strip())
        sheet.write(row, 4, item_watch_num)
        sheet.write(row, 5, item_danmu)
        sheet.write(row, 6, item_up_time)

        result = '爬取结果：' + item_title\
        + item_duration \
        + item_dec \
        + item_watch_num \
        + item_danmu \
        + item_up_time + '\n'

        print(result)


    # print(list)

# 下一页
def next_page(page_num):
    try:
        btn_next_page = WAIT.until(
            EC.element_to_be_clickable((
                By.CSS_SELECTOR, '#all-list > div.flow-loader > div.page-wrap > div > ul > li.page-item.next > button')))
        btn_next_page.click()

        WAIT.until(EC.text_to_be_present_in_element((By.CSS_SELECTOR,
                                                     '#all-list > div.flow-loader > div.page-wrap > div > ul > li.page-item.active > button'),
                                                    str(page_num)))

        get_source()

    except TimeoutError:
        browser.refresh()
        return next_page(page_num)

# 开始爬取数据
def start():
    try:
        search()

        for x in range(2, int(total_page + 1)):
            next_page(x)

    finally:
        browser.close()

if __name__ == '__main__':
    # 开始爬取
    start()
    # 保存文件
    book.save(u'B站小米10视频.xlsx')


```



## 结果

![image-20200214144856862](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214144858-516776.png)



