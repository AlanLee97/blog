# MySQL主从配置



## 主数据库配置

1. 编辑配置文件

    添加如下内容

    ```conf
    server-id=1
    binlog-do-db=master_db1 #备份的数据库
    log-bin=mysql-bin
    binlog-ignore-db=mysql
    ```

    ![image-20200523133136523](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523133136523.png)

2. 重启mysql

3. 创建一个允许从服务器来访问的用户(主服务器)：

    ```mysql
    grant replication slave on *.* to 'root'@'%' identified by '123456';
    # 赋予Slave机器有File权限
    GRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';
    # 刷新权限
    FLUSH PRIVILEGES;
    ```

    > grant replication slave on *.* to 'root'@'%' identified by '123456';
    >
    > 说明：
    >
    > - root：Slave使用的账号
    >
    > - IDENTIFIED BY 123456：Slave使用的密码
    >
    > - %：Slave数据库IP

    

4. 查看配置的信息

    ```mysql
    show master status \G;
    ```

    如图：

    ![image-20200522155203831](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200522155203831.png)



## 从数据库配置

1. 编辑配置文件my.cnf，在[mysqld]下面添加这段内容

```mysql
log-bin=mysql-bin
server-id=2
# 忽略日志的db
binlog-ignore-db=information_schema
binlog-ignore-db=cluster
binlog-ignore-db=mysql
# 需要备份的db
replicate-do-db=master_db1
# 忽略备份的db
replicate-ignore-db=mysql
log-slave-updates
slave-skip-errors=all
slave-net-timeout=60
```

2. 关联Master信息

```mysql
stop slave;

CHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;

start slave;
```
> 这里的MASTER_LOG_POS=154的154就是配置主服务器的时候说要记住的那个


3. 查看状态

```mysql
show slave status \G;
```

![image-20200522170042277](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200522170042277.png)

> 只有Slave_IO_Running与Slave_SQL_Running都为Yes才配置成功。



## 测试

1. 在从服务器中创建数据库master_db1

![image-20200523131328951](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523131328951.png)



2. 在主MySQL服务器创建test表，测试结果是从MySQL的服务器会自动复制主MySQL服务器的test表

    ![image-20200523131539412](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523131539412.png)

![image-20200523131751534](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523131751534.png)

![image-20200523131825841](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523131825841.png)





## 启用Mycat读写分离

读写分离：

|               | 操作 | 引擎   |
| ------------- | ---- | ------ |
| 主MySQL服务器 | 写   | Innodb |
| 从MySQL服务器 | 读   | MyISAM |



1. 修改从数据库的表

    将表的引擎改为`MyISAM`

    ![image-20200523135553033](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523135553033.png)



2. 配置mycat读写分离

编辑schema.xml文件

```xml
<?xml version="1.0"?>
<!DOCTYPE mycat:schema SYSTEM "schema.dtd">
<mycat:schema xmlns:mycat="http://org.opencloudb/">

	<schema name="zdxh" checkSQLschema="false" sqlMaxLimit="100">

		<!-- 测试读写分离 -->
		<table name="test" primaryKey="ID" dataNode="dn4"
		rule="sharding-by-intfile" />
	</schema>
	<!-- <dataNode name="dn1$0-743" dataHost="localhost1" database="db$0-743" 
		/> -->

	<!-- 测试读写分离 -->
	<dataNode name="dn4" dataHost="local-master-rw" database="master_db1" />

	
	<!-- 测试读写分离 -->
	<dataHost name="local-master-rw" maxCon="1000" minCon="10" balance="0"
		writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
		<heartbeat>select user()</heartbeat>
		<!-- 写入配置-->
		<writeHost host="hostM4" url="192.168.1.20:3306" 
                   user="root" password="123456">
			<!-- 添加只读库配置-->
            <readHost host="hostS1" url="192.168.1.21:3306" 
                      user="root" password="123456" />
		</writeHost>
	</dataHost>

</mycat:schema>

```



![image-20200523145846248](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200523145846248.png)



3. 向数据库插入数据

    



## 遇到的问题

### 问题1

[ERROR] unknown variable 'master-host=192.168.1.20'

![image-20200522162243354](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200522162243354.png)



#### 原因

MySQL5.6和之后的版本没有master-host参数了

#### 解决

解决方案：

1. 在my.cnf文件的[mysqld]下面添加以下配置

```
log-bin=mysql-bin
server-id=2
# 忽略日志的db
binlog-ignore-db=information_schema
binlog-ignore-db=cluster
binlog-ignore-db=mysql
# 需要备份的db
replicate-do-db=master_db
# 忽略备份的db
replicate-ignore-db=mysql
log-slave-updates
slave-skip-errors=all
slave-net-timeout=60
```

![image-20200522165424009](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200522165424009.png)



2. 重启mysql



3. 命令行输入

```mysql
CHANGE MASTER TO MASTER_HOST='192.168.1.20',MASTER_USER='root',MASTER_PASSWORD='123456',MASTER_PORT=3306,MASTER_LOG_FILE='mysql-bin.000001',MASTER_CONNECT_RETRY=60,MASTER_LOG_POS=154;
```

> 需根据自己的机子修改参数值
>
> - MASTER_HOST
> - MASTER_LOG_FILE
> - MASTER_LOG_POS

![image-20200522164835461](E:/%E6%88%91%E7%9A%84%E5%9D%9A%E6%9E%9C%E4%BA%91/OneDrive/%E5%AD%A6%E4%B9%A0/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/note_images/image-20200522164835461.png)



## 问题2

配置好了主从服务器之后，主服务器创建表后，从服务器不会复制

### 原因

没有赋予Slave机器有File权限，没有刷新权限。

### 解决

在主MySQL服务器中命令行执行

```mysql
# 赋予Slave机器有File权限
GRANT FILE ON *.* TO 'root'@'%' IDENTIFIED BY '123456';
# 刷新权限
FLUSH PRIVILEGES;
```

重启主MySQL服务器

> 还要检查其他的配置是否准确，例如MASTER_HOST，MASTER_LOG_FILE，MASTER_LOG_POS的参数值等等。

