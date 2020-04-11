# Docker使用网络

**创建网络**

```sh
docker network create 网络名
```

> **示例**
>
> ```sh
> docker network create elastic
> ```



**docker-compose.yml中加入同一个网络**

在服务名节点下添加

```yml
networks:
  - "网络名"
```

在最外层添加

```yml
networks:
  网络名:
    external: true
```

> **完整示例**
>
> ```yml
> version: '2.2'
> services:
>   es01:
>     image: docker.elastic.co/elasticsearch/elasticsearch:7.6.1
>     container_name: es01
>     environment:
>       - node.name=es01
>       - discovery.type=single-node
>       - bootstrap.memory_lock=true
>       - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
>     ulimits:
>       memlock:
>         soft: -1
>         hard: -1
>     volumes:
>       - data01:/usr/share/elasticsearch/data
>     ports:
>       - 9200:9200
>     networks:
>       - elastic
> 
> volumes:
>   data01:
>     driver: local
> 
> 
> networks:
>   elastic:
>     external: true
> 
> ```
>
> 