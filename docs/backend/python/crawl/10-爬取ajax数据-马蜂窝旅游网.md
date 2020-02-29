# 10-爬取ajax数据-马蜂窝旅游网

## 目标

马蜂窝旅游网-广州全部景点

地址：https://www.mafengwo.cn/jd/10088/gonglve.html

![image-20200218001802634](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200218001802634.png)

## 分析



网站分析：

1. 打开目标网页，打开开发者工具，进入`networks`选项卡，选到`XHR`

    ![image-20200217234913967](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200217234915-46556.png)

2. 再点到preview中可以看到响应的数据

![image-20200217235145889](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200217235146-954147.png)

![image-20200218000344219](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200218000408-822881.png)



3. 尝试打开刚刚的请求路径https://www.mafengwo.cn/ajax/router.php

    ![image-20200217235442611](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200217235443-738674.png)

    4. 带上请求参数重新请求一次

    ![image-20200217235719317](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200217235723-509285.png)

点击view source，将参数复制然后粘贴到浏览器的地址栏里访问

![image-20200217235900623](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200217235901-819030.png)

![image-20200218000244507](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200218000245-493006.png)



## 编写代码

```python
import json
import requests
from bs4 import BeautifulSoup

def request_page(url):
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36',
    }

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        # 将返回的数据转成json
        str = json.loads(response.text)
        # 使用bs解析
        html = str.get('data').get('list')
        soup = BeautifulSoup(html, 'lxml')
        imgs = soup.find_all('img')
        titles = soup.find_all('h3')

        list = []
        for title, img_src in zip(titles, imgs):
            print(title.text, img_src['src'])
            result = {
                "title": title.text,
                "img_src": img_src['src'],
            }
            list.append(result)

        mafengwo_json = json.dumps(list)
        print(mafengwo_json)

        # 保存文件
        with open('mafengwo.json', 'w') as f:
            f.write(mafengwo_json)

if __name__ == '__main__':
    # 目标地址
    url = 'https://www.mafengwo.cn/ajax/router.php?sAct=KMdd_StructWebAjax%7CGetPoisByTag&iMddid=10088&iTagId=0&iPage=1&_ts=1581949096886&_sn=7d60ba1964'
    # 发送请求
    request_page(url)

```



![image-20200218002127936](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200218002127936.png)