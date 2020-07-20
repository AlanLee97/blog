# 广州租房价格分析预测



## 1. 爬虫获取数据

lianjia_spider.py

```python
import re

import scrapy
from learn_scrapy.lianjia.lianjia.items import LianjiaItem


class LianJiaSpider(scrapy.Spider):
    name = 'lianjia'
    base_url = 'https://gz.lianjia.com/zufang/pg'
    allowed_domains = ['lianjia.com']

    start_urls = [
        'https://gz.lianjia.com/zufang/'
        # 'https://gz.lianjia.com/zufang/tianhe'
    ]

    start_page_no = 1

    def parse(self, response):
        current_district = ''
        item = LianjiaItem()
        content_list_items = response.xpath('//div[@class="content__list--item"]')
        total_page = response.xpath('//div[@data-totalpage]/@data-totalpage').get()

        for list_item in content_list_items:
            title = list_item.xpath('div/p[@class="content__list--item--title twoline"]/a/text()').get()
            p_tag_html = list_item.xpath('div/p[@class="content__list--item--des"]').get()
            price_temp = list_item.xpath('div/span/em/text()').get()

            # 提取的字段
            try:
                house_name = self.split_hire_way_and_name(self.split_str(title, " ")[0])[1]
            except:
                house_name = self.split_hire_way_and_name(self.split_str(title, " ")[0])[0]
            hire_way = self.split_hire_way_and_name(self.split_str(title, " ")[0])[0]
            district = list_item.xpath('div/p[@class="content__list--item--des"]/a[1]/text()').get()
            subway_station = list_item.xpath('div/p[@class="content__list--item--des"]/a[2]/text()').get()
            square = self.re_search_number(p_tag_html, "㎡")
            bedroom = self.re_search_number(p_tag_html, "室")
            livingroom = self.re_search_number(p_tag_html, "厅")
            bathroom = self.re_search_number(p_tag_html, "卫")
            price = self.split_str(price_temp.strip(), "-")[0]

            # print(house_name, hire_way, subway_station, square, bedroom, livingroom, bathroom, price.strip())
            item["district"] = district
            item["house_name"] = house_name
            item["hire_way"] = hire_way
            item["subway_station"] = subway_station
            item["square"] = square
            item["bedroom"] = bedroom
            item["livingroom"] = livingroom
            item["bathroom"] = bathroom
            item["price"] = price

            yield item

        # 爬取后面的页数的数据
        if self.start_page_no < int(total_page):
            self.start_page_no += 1
            yield scrapy.Request(self.base_url + str(self.start_page_no), callback=self.parse)


    # 分割标题
    def split_str(self, title, charcater):
        return title.strip().split(charcater)

    # 分割租用方式与房子名称
    def split_hire_way_and_name(self, hire_way_and_name):
        return hire_way_and_name.strip().split("·")

    # 使用正则表达式匹配房间的平方数
    def re_search_number(self, text, unit):
        matchObj = re.search(r' ?[1-9]\d*' + str(unit), text, re.M | re.I)
        if text is not None and matchObj is not None:
            matchObj = re.search(r' ?[1-9]\d*', matchObj.group(), re.M | re.I)
            if text and matchObj is not None:
                return matchObj.group()
            else:
                return 0
        else:
            return 0


```

items.py

```python
import scrapy


class LianjiaItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    house_name = scrapy.Field()
    hire_way = scrapy.Field()
    subway_station = scrapy.Field()
    district = scrapy.Field()
    square = scrapy.Field()
    bedroom = scrapy.Field()
    livingroom = scrapy.Field()
    bathroom = scrapy.Field()
    price = scrapy.Field()
    pass

```

pipelines.py

```python
import csv

class LianjiaPipeline(object):
    def __init__(self):
        # 1. 创建文件对象
        self.f = open('lianjia_zufang_guangzhou.csv', 'w', encoding='utf-8', newline='')
        # 2. 基于文件对象构建 csv写入对象
        self.csv_writer = csv.writer(self.f)

        # 3. 构建列表头
        self.csv_writer.writerow(
            ["district", "house_name", "hire_way", "subway_station", "square", "bedroom", "livingroom", "bathroom", "price"])

    def open_spider(self, spider):
        print('爬虫开始...')

    def process_item(self, item, spider):

        district = item["district"]
        house_name = item["house_name"]
        hire_way = item["hire_way"]
        subway_station = item["subway_station"]
        square = item["square"]
        bedroom = item["bedroom"]
        livingroom = item["livingroom"]
        bathroom = item["bathroom"]
        price = item["price"]

        self.csv_writer.writerow([district, house_name, hire_way, subway_station, square, bedroom, livingroom, bathroom, price])
        return item

    def close_spider(self, spider):
        self.f.close()
        print('爬虫结束')

```





## 2. 数据清洗

```python
import pandas as pd

data = pd.read_csv("data/lianjia_zufang_guangzhou.csv")
data.dropna(how='any')
data.drop_duplicates(keep='first', inplace=True)
data.to_csv('data/lianjia_zufang_guangzhou2.csv', encoding='utf8')

```





## 3. 数据可视化

### 1. 广州各区租房房价均值对比、租房数量对比

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data = pd.read_csv("lianjia_zufang_guangzhou.csv")

df_house_count = data.groupby("district")['price'].count().sort_values(ascending=False)
df_house_mean = data.groupby("district")['price'].mean().sort_values(ascending=False)


# 设置X轴刻度标签：
def auto_xtricks(rects, xticks):
    x = []
    for rect in rects:
        x.append(rect.get_x() + rect.get_width() / 2)
    x = tuple(x)
    plt.xticks(x, xticks)


# 设置数据标签：
def auto_tag(rects, data=None, offset=[0, 0], size=14):
    for rect in rects:
        try:
            height = rect.get_height()
            plt.text(rect.get_x() + rect.get_width() / 2.4, 1.01 * height, '%s' % int(height), fontsize=size)
        except AttributeError:
            x = range(len(data))
            y = data.values
            for i in range(len(x)):
                plt.text(x[i] + offset[0], y[i] + 0.05 + offset[1], y[i], fontsize='14')


def auto_tag_float(rects, data=None, offset=[0, 0], size=14):
    for rect in rects:
        try:
            height = rect.get_height()
            plt.text(rect.get_x() + rect.get_width() / 2.4, 1.01 * height, '%s' % round(float(height), 1),
                     fontsize=size)
        except AttributeError:
            x = range(len(data))
            y = data.values
            for i in range(len(x)):
                plt.text(x[i] + offset[0], y[i] + 0.05 + offset[1], y[i], fontsize='14')


plt.figure(figsize=(20,10))
plt.rc('font', family='SimHei', size=13)
plt.style.use('ggplot')


# 各区租房房数量对比
plt.subplot(212)
plt.title(u'各区租房数量对比', fontsize=20)
plt.ylabel(u'租房总数量（单位：间）', fontsize=15)
rect1 = plt.bar(np.arange(len(df_house_count.index)), df_house_count.values, color='c')
auto_xtricks(rect1, df_house_count.index)
auto_tag(rect1, offset=[-1,0])

# 各区租房平均价格对比
plt.subplot(211)
plt.title(u'各区租房平均价格对比', fontsize=20)
plt.ylabel(u'租房平均价格（单位：元/月）', fontsize=15)
rect2 = plt.bar(np.arange(len(df_house_mean.index)), df_house_mean.values, color='c')
auto_xtricks(rect2, df_house_mean.index)
auto_tag_float(rect2, offset=[-1,0])
plt.savefig("mean_price.png")

# 各区租房数量百分比
plt.figure(figsize=(10,10))
plt.title(u'各区租房数量百分比', fontsize=22)
explode=[0]*len(df_house_count)
explode[0] = 0.2
plt.pie(df_house_count, radius=3, autopct='%1.f%%', shadow=True, labels=df_house_count.index, explode=explode)
plt.axis('equal')
plt.savefig("house_count.png")

plt.show()

```

![mean_price](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/mean_price.png)



![house_count](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/house_count.png)



#### 结论：

- 租房数量：从数量统计上来看，可以看出目前租房市场上比较火热的区域。天河区租房数量最多，其次是番禺区。
- 租房均价：可以看出，天河区的房价最贵均价大约**2270.8元/月**，因为广州CBD珠江新城在天河区，房价必然贵。 其次是越秀区**2237.7元/月**，然后是海珠区大约**2091.6元/月**。其它均低于**2000元/月**。





### 房价和房屋面积区段的租房数量统计

```python
# 获取租房总价的范围
def get_price_range(price, base=500):
    return '{0}-{1}'.format(int(price//base)*base, int(price//base)*base+base)

# 获取租房面积的范围
def get_size_range(size, base=5):
    return '{0}-{1}'.format(int(size//base)*base, int(size//base)*base+base)

# 筛选房屋总价小于5000元的租房房信息进行统计
data['group_price'] = data['price'].apply(get_price_range)
data['group_price_split'] = data['group_price'].str.extract('(\d+)-\d+', expand=False)
data['group_price_split'] = data['group_price_split'].astype('int')
sort_by_price_range = data.loc[data['group_price_split'] < 5000, ['group_price','price','group_price_split']]
sort_by_price_range.set_index('group_price', inplace=True)
sort_by_price_range.sort_values(by='group_price_split', inplace=True)

# 筛选房屋面积小于200平方的租房房信息进行统计
data['group_square'] = data['square'].apply(get_size_range)
data['group_square_split'] = data['group_square'].str.extract('(\d+)-\d+', expand=False)
data['group_square_split'] = data['group_square_split'].astype('int')
sort_by_size_range = data.loc[data['group_square_split'] < 200, ['group_square','square','group_square_split']]
sort_by_size_range.set_index('group_square', inplace=True)
sort_by_size_range.sort_values(by='group_square_split', inplace=True)
# display(sort_by_size_range)

# 对房价和房屋面积分组
df_group_price = sort_by_price_range.groupby('group_price')['price'].count()
df_group_size = sort_by_size_range.groupby('group_square_split')['square'].count()

# 房价范围和房屋数量可视化分析
fig_group_price = plt.figure(figsize=(20,5))
# plt.subplot(121)
plt.title(u'租房房价/数量统计', fontsize=15)
plt.xlabel(u'租房价区间(单位：元)', fontsize=15)
plt.ylabel(u'租房数量', fontsize=15)
rect_group_price = plt.bar(np.arange(len(df_group_price.index)), df_group_price.values)
auto_xtricks(rect_group_price, df_group_price.index)
auto_tag(rect_group_price, offset=[-1,0])
plt.savefig("price_count.png")
plt.show()

# plt.subplot(122)
fig_group_price = plt.figure(figsize=(20,5))
plt.title(u'租房面积/数量统计', fontsize=15)
plt.xlabel(u'租房屋面积区间', fontsize=15)
plt.ylabel(u'租房数量', fontsize=15)
rect_group_size = plt.bar(np.arange(len(df_group_size.index)), df_group_size.values)
auto_xtricks(rect_group_size, df_group_size.index)
auto_tag(rect_group_size, offset=[-1,0])
plt.savefig("square_count.png")

plt.show()
```



![price_count](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/price_count-1593441982542.png)

![square_count](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/square_count.png)





#### 结论

- 在1500至2000元之间的租房数量最多，其次是2000-2500元之间。可以看出主要的租房房价集中在1500-2000元之间，整体呈现出类似正态分布的曲线。
- 租房屋面积5-10平米之间的数量最多，为353，远高出其它面积大小，是大多数人的选择。





## 4. 房价预测

机器学习需要输入好的数据集，有意义的特征字段才能使得结果更加准确。

租房房价预测项目中的数据集的特征有：

| 特征           | 说明       |
| -------------- | ---------- |
| house_name     | 房屋名称   |
| hire_way       | 租用方式   |
| subway_station | 地铁站     |
| district       | 区域       |
| square         | 平方       |
| bedroom        | 卧室数量   |
| livingroom     | 客厅数量   |
| bathroom       | 卫生间数量 |
| price          | 价格       |

策略方法：

- 使用**决策树**的回归模型对二手房房价进行分析预测
- 使用**交叉验证**方法充分利用数据集进行训练，避免数据划分不均匀的影响。
- 使用**GridSearchCV**方法优化模型参数
- 使用**R2**评分方法对预测打分



### 代码

lianjia_zufang_price_predict.py

```python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.model_selection import KFold
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import make_scorer
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import r2_score
import homework.lianjia_zufang_price_predict.visuals as vs


lianjia_df = pd.read_csv("data/lianjia_zufang_guangzhou2.csv")
data_old = lianjia_df


# 完善数据集，删除无意义特征，将特征数字化
drop_out = ['house_name', 'subway_station']
data = lianjia_df.drop(drop_out, axis=1)

# 汉字到数字的映射字典
loc_map = {'天河':1, '越秀':2, '荔湾':3, '海珠':4, '番禺':5, '白云':6, '黄埔':7, '从化':8, '增城':9, '花都':10,
           '南沙':11}
hire_way_map = {'整租':0, '合租':1, '独栋':2}


# 数据集映射和清洗
data['district'] = data['district'].map(loc_map)
data['hire_way'] = data['hire_way'].map(hire_way_map)
# data['Layout'] = data['Layout'].str.extract('(^\d).*', expand=False)
data = data.dropna(how='any')

# 重新排列字段
columns1 = ['district', 'hire_way', 'bedroom', 'livingroom', 'bathroom', 'square', 'price']
data = pd.DataFrame(data, columns=columns1)

print(data)

# 分配数据集-训练集和测试集
prices = data['price']
features = data.drop('price', axis = 1)
print('租房房价有数据 {0} 条，字段 {1} 个。'.format(*data.shape))
data.head()


# ============================ 将数据集划分为训练集与测试集
# 转换训练测试集格式为数组
features = np.array(features)
prices = np.array(prices)
features_train, features_test, prices_train, prices_test = train_test_split(features, prices, test_size=0.2, random_state=0)

# ============================ 建立模型
# 利用GridSearchCV计算最优解
def fit_model(X, y):
    """ 基于输入数据 [X,y]，利于网格搜索找到最优的决策树模型"""
    cross_validator = KFold(10, shuffle=True)
    regressor = DecisionTreeRegressor()
    params = {'max_depth': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
    scoring_fnc = make_scorer(performance_metric)
    grid = GridSearchCV(estimator=regressor, param_grid=params, scoring=scoring_fnc, cv=cross_validator)

    # 基于输入数据 [X,y]，进行网格搜索
    grid = grid.fit(X, y)
    #     print pd.DataFrame(grid.cv_results_)
    return grid.best_estimator_


# 计算R2分数
def performance_metric(y_true, y_predict):
    """计算并返回预测值相比于预测值的分数"""
    score = r2_score(y_true, y_predict)
    return score


# ============================ 调参优化模型
# 分析模型
vs.ModelLearning(features_train, prices_train)
vs.ModelComplexity(features_train, prices_train)

optimal_reg1 = fit_model(features_train, prices_train)

# 输出最优模型的 'max_depth' 参数
print("最理想模型的参数 'max_depth' 是 {} 。".format(optimal_reg1.get_params()['max_depth']))

predicted_value = optimal_reg1.predict(features_test)
print("预测值：", predicted_value)
print("预测值大小：", predicted_value.shape)
print("测试集数据：", features_test)
r2 = performance_metric(prices_test, predicted_value)

print("最优模型在测试数据上 R^2 分数 {:,.2f}。".format(r2))

predicted_value2 = optimal_reg1.predict(features)
print("预测后的数据：", predicted_value2)
print("预测后的数据大小：", predicted_value2.shape)
print("原数据大小：", data_old.shape)
print("特征数据大小：", features.shape)

data_old['predict_price'] = predicted_value2

print("预测后的总数据:", data_old)


data_old.to_csv("data/predict_price.csv")

```



visuals.py

```python
import matplotlib.pyplot as plt
import numpy as np
from sklearn.model_selection import learning_curve, validation_curve
from sklearn.tree import DecisionTreeRegressor
from sklearn.model_selection import ShuffleSplit, train_test_split


def ModelLearning(X, y):
    """ Calculates the performance of several models with varying sizes of training data.
        The learning and validation scores for each model are then plotted. """
    
    # Create 10 cross-validation sets for training and testing
    cv = ShuffleSplit(n_splits = 10, test_size = 0.2, random_state = 0)


    # Generate the training set sizes increasing by 50
    train_sizes = np.rint(np.linspace(1, X.shape[0]*0.8 - 1, 9)).astype(int)

    # Create the figure window
    fig = plt.figure(figsize=(12,8))

    # Create three different models based on max_depth
    for k, depth in enumerate([1,3,6,10]):
        
        # Create a Decision tree regressor at max_depth = depth
        regressor = DecisionTreeRegressor(max_depth = depth)

        # Calculate the training and testing scores
        sizes, train_scores, valid_scores = learning_curve(regressor, X, y, \
            cv = cv, train_sizes = train_sizes, scoring = 'r2')
        
        # Find the mean and standard deviation for smoothing
        train_std = np.std(train_scores, axis = 1)
        train_mean = np.mean(train_scores, axis = 1)
        valid_std = np.std(valid_scores, axis = 1)
        valid_mean = np.mean(valid_scores, axis = 1)
#         print train_mean
#         print train_scores

        # Subplot the learning curve 
        ax = fig.add_subplot(2, 2, k+1)
        ax.plot(sizes, train_mean, 'o-', color = 'r', label = 'Training Score')
        ax.plot(sizes, valid_mean, 'o-', color = 'g', label = 'Validation Score')
        ax.fill_between(sizes, train_mean - train_std, \
            train_mean + train_std, alpha = 0.15, color = 'r')
        ax.fill_between(sizes, valid_mean - valid_std, \
            valid_mean + valid_std, alpha = 0.15, color = 'g')
        
        # Labels
        ax.set_title('max_depth = %s'%(depth))
        ax.set_xlabel('Number of Training Points')
        ax.set_ylabel('r2_score')
        ax.set_xlim([0, X.shape[0]*0.8])
        ax.set_ylim([-0.05, 1.05])
    
    # Visual aesthetics
    ax.legend(bbox_to_anchor=(1.05, 2.05), loc='lower left', borderaxespad = 0.)
    fig.suptitle('Decision Tree Regressor Learning Performances', fontsize = 16, y = 1.03)
    fig.tight_layout()
    plt.savefig("predict_model_learning.png")
    fig.show()


def ModelComplexity(X, y):
    """ Calculates the performance of the model as model complexity increases.
        The learning and validation errors rates are then plotted. """
    
    # Create 10 cross-validation sets for training and testing
    cv = ShuffleSplit(n_splits = 10, test_size = 0.2, random_state = 0)

    # Vary the max_depth parameter from 1 to 10
    max_depth = np.arange(1,11)

    # Calculate the training and testing scores
    train_scores, valid_scores = validation_curve(DecisionTreeRegressor(), X, y, \
        param_name = "max_depth", param_range = max_depth, cv = cv, scoring = 'r2')

    # Find the mean and standard deviation for smoothing
    train_mean = np.mean(train_scores, axis=1)
    train_std = np.std(train_scores, axis=1)
    valid_mean = np.mean(valid_scores, axis=1)
    valid_std = np.std(valid_scores, axis=1)

    # Plot the validation curve
    plt.figure(figsize=(7, 5))
    plt.title('Decision Tree Regressor Complexity Performance')
    plt.plot(max_depth, train_mean, 'o-', color = 'r', label = 'Training Score')
    plt.plot(max_depth, valid_mean, 'o-', color = 'g', label = 'Validation Score')
    plt.fill_between(max_depth, train_mean - train_std, \
        train_mean + train_std, alpha = 0.15, color = 'r')
    plt.fill_between(max_depth, valid_mean - valid_std, \
        valid_mean + valid_std, alpha = 0.15, color = 'g')
    
    # Visual aesthetics
    plt.legend(loc = 'lower right')
    plt.xlabel('Maximum Depth')
    plt.ylabel('r2_score')
    plt.ylim([-0.05,1.05])
    plt.savefig("predict_model_complexity.png")
    plt.show()


def PredictTrials(X, y, fitter, data):
    """ Performs trials of fitting and predicting data. """

    # Store the predicted prices
    prices = []

    for k in range(10):
        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(X, y, \
            test_size = 0.2, random_state = k)
        
        # Fit the data
        reg = fitter(X_train, y_train)
        
        # Make a prediction
        pred = reg.predict([data[0]])[0]
        prices.append(pred)
        
        # Result
        print("Trial {}: ${:,.2f}".format(k+1, pred))

    # Display price range
    print("\nRange in prices: ${:,.2f}".format(max(prices) - min(prices)))

```

![predict_model_learning](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/predict_model_learning.png)



![predict_model_complexity](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/predict_model_complexity.png)

最理想模型的参数 'max_depth' 是 7 。

最优模型在测试数据上 R^2 分数 0.60。

### 结论

- 可以看到，决策树回归模型的决策深度**大约为 7** 的时候可以达到偏差与方差的平衡，也即最优模型。
- R2评分的准确率大约 **0.6**, 基本可以有效预测租房房价。