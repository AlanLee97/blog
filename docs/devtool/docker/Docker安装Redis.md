# Docker安装Redis



## 安装单机版redis

```css
vim docker-compose.yml
```

docker-compose.yml

```yaml
version: '3.1'
services:
  redis:
    image: redis:5.0.8
    container_name: redis
    restart: always
    command: redis-server --requirepass 123456
    ports:
      - 6379:6379
    volumes:
      - ./data:/data
      - ./conf:/conf
```

