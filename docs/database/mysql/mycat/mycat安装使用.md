# Mycat



## 准备资源

| IP           | 主机名 | 数据库名   | 安装软件    |
| ------------ | ------ | ---------- | ----------- |
| 192.168.1.20 | master | master_db1 | mycat,mysql |
| 192.168.1.21 | node1  | node1_db2  | mysql       |
| 192.168.1.22 | node2  | node2_db3  | mysql       |



## 使用Docker安装MySQL

3台机子上都执行同样的操作

![image-20200515152615593](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515152615593.png)

![image-20200515155644635](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515155644635.png)



## 使用navicat连接数据

![image-20200515155756557](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515155756557.png)

### 创建数据库

```sh
create database db1;
```



## 安装Mycat

1. 上传Mycat到服务器

![image-20200515160405920](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515160405920.png)



2. 解压

```sh
tar -zxvf Mycat-server-1.4-release-20151019230038-linux.tar.gz
```



![image-20200515160529560](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515160529560.png)



3. 创建组

```
groupadd mycat
```

4. 创建一个新的用户，并加入group

```sh
useradd -g mycat mycat
```

5. 给新用户设置密码

```sh
passwd mycat
```

![image-20200515161040956](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515161040956.png)

6. 进入conf

修改server.xml

![image-20200515161416760](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515161416760.png)

> 完整的server.xml
>
> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> 
> <!DOCTYPE mycat:server SYSTEM "server.dtd">
> <mycat:server xmlns:mycat="http://org.opencloudb/">
> 	<system>
> 	<property name="defaultSqlParser">druidparser</property>
> 	</system>
> 	<user name="root">
> 		<property name="password">123456</property>
> 		<property name="schemas">zdxh</property>
> 	</user>
> </mycat:server>
> ```
>
> 



修改schema.xml

![image-20200515161739168](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515161739168.png)



![image-20200516105219957](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200516105219957.png)



> 完整的schema.xml
>
> ```xml
> <?xml version="1.0"?>
> <!DOCTYPE mycat:schema SYSTEM "schema.dtd">
> <mycat:schema xmlns:mycat="http://org.opencloudb/">
> 
> 	<schema name="zdxh" checkSQLschema="false" sqlMaxLimit="100">
> 		<table name="employee" primaryKey="ID" dataNode="dn1,dn2,dn3"
> 			rule="sharding-by-intfile" />
> 	</schema>
> 
> 	<dataNode name="dn1" dataHost="local-master" database="master_db1" />
> 	<dataNode name="dn2" dataHost="local-node-1" database="node1_db2" />
> 	<dataNode name="dn3" dataHost="local-node-2" database="node2_db3" />
> 
> 	<dataHost name="local-master" maxCon="1000" minCon="10" balance="0"
> 		writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
> 		<heartbeat>select user()</heartbeat>
> 		<writeHost host="hostM1" url="192.168.1.20:3306" user="root" password="123456"></writeHost>
> 	</dataHost>
> 	
> 	<dataHost name="local-node-1" maxCon="1000" minCon="10" balance="0"
> 		writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
> 		<heartbeat>select user()</heartbeat>
> 		<writeHost host="hostM2" url="192.168.1.21:3306" user="root" password="123456"></writeHost>
> 	</dataHost>
> 	
> 	<dataHost name="local-node-2" maxCon="1000" minCon="10" balance="0"
> 		writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
> 		<heartbeat>select user()</heartbeat>
> 		<writeHost host="hostM3" url="192.168.1.22:3306" user="root" password="123456"></writeHost>
> 	</dataHost>
> 
> </mycat:schema>
> 
> ```
>
> 



修改partition-hash-int.txt

```
10000=0
10010=1
10020=2
```



7. 启动mycat

```sh
cd bin
./mycat start
```



启动成功

![image-20200515170634394](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515170634394.png)



## 测试

1. navicat连接mycat

![image-20200515170923072](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515170923072.png)





2. 创建表

```mysql
use zdxh;
create table employee (id int not null primary key,name varchar(100),sharding_id int not null);
```

![image-20200515175655400](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515175655400.png)

3. 往mycat中插入数据

```mysql
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(1, 'I am db1',10000);
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(2, 'I am db2',10010);
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(3, 'I am db3',10020);
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(4, 'I am db1',10000);
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(5, 'I am db2',10010);
INSERT INTO EMPLOYEE(ID,NAME,SHARDING_ID) VALUES(6, 'I am db3',10020);
```

效果

![image-20200515203852730](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515203852730.png)

![image-20200515204045044](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515204045044.png)



![image-20200515204109907](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515204109907.png)



![image-20200515204124375](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515204124375.png)





## 遇到的问题

### 问题1

org.opencloudb.config.util.ConfigException: schema zdxh refered by user root is not exist!

![image-20200515163739559](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515163739559.png)

#### 原因

schema.xml文件下的schema标签的name属性值忘了改成zdxh

#### 解决

schema.xml文件下的schema标签的name属性值改成zdxh

























### 问题2

database not selected

<img src="E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515171718851.png" alt="image-20200515171718851" style="zoom: 50%;" />

#### 原因

navicat版本的问题

#### 解决

方案1：

如果采用工具连接，1.4,1.3目前部分工具无法连接，会提示database not selected，建议采用高版本，navicat测试。1.5已经修复了部分工具连接。

方案2：使用mysql客户端连接

```sh
mysql -uroot -p123456 -P8066 -h192.168.1.20
```

![image-20200515173743637](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200515173743637.png)