# Docker安装Elastic Search

## 单节点集群

### 普通方式安装

#### 拉取镜像

```sh
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.6.1
```

#### 运行

```sh
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.6.1
```



### Docker-compose.yml方式

docker-compose.yml

```yml
version: '2.2'
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.2.2
    container_name: es01
    environment:
      - node.name=es01
	  - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms64m -Xmx64m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic

volumes:
  data01:
    driver: local


networks:
  elastic:
    driver: bridge
```



启动

```sh
docker-compose up -d
```



## Docker安装kibana

docker-compose.yml

```yml
version: '2.2'
services:
  kibana:
    image: docker.elastic.co/kibana/kibana:7.6.1
    container_name: kibana
    environment:
      - ELASTICSEARCH_HOSTS=http://es01:9200
      # 需要将Kibana配置文件中的小写转换成大写，然后这个才能用于变量，才能被设置
到
      - I18N_LOCALE=zh-CN
      - xpack.monitoring.ui.container.elasticsearch.enabled=false
    ports:
      - 5601:5601
    networks:
      - elastic

networks:
  elastic:
    driver: bridge

```

创建config目录

```sh
mkdir config
```

进入config目录

```sh
cd config
```

创建配置文件kibana.yml

```sh
vim kibana.yml
```

粘贴如下内容

```yml
#
# ** THIS IS AN AUTO-GENERATED FILE **
#

# Default Kibana configuration for docker target
server.name: kibana
server.host: "0"
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true

elasticsearch.requestTimeout: 120000
```

