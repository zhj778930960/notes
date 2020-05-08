# redis

1. `redis`是什么？

- `redis`是一个免费开源，基于内存的高性能key-value数据库

2. `redis`能做什么？
   - `redis`应用很广泛，`redis`具有速度快，数据持久化，丰富的数据类型，多语言支持，和多功能等特性。
   - 速度快：10W的OPS速度（读写速度）。
   - 持久化：`redis`是基于内存模型，可以解决断电或者重启造成的数据丢失，`redis`采取了两种数据持久化的策略，分别为RDB和AOF，会将`redis`在内存中保存的数据异步更新到磁盘中，实现数据的持久化功能。


3. `redis`的安装，在windows 电脑安装redis

   - 进入github项目下载.zip 安装包  https://github.com/microsoftarchive/redis/releases

   - 选择一个版本进入，下载   Redis-x64-版本号.zip 压缩包

   - 下载下来后，解压压缩包

   - 在解压的文件夹里面 打开**cmd **界面，进入到解压的文件夹爱里面， 输入 redis-server.exe redis.windows.conf  然后运行，

     将解压的文件夹爱配置到系统环境变量PATH里面，就可以只用输入 redis-server.exe  开启数据库

   - 访问数据库，依然在这个目录下，新打开一个cmd界面，输入 redis-cli.exe    默认为当前IP和port

     连接特定IP和服务器  `redis-cli.exe  -h  ip地址  -p  端口号`
     
   - 有个问题  在启动数据库之后，代码连接的时候，无法连接的问题，这个问题是因为redis 是处于保护模式下，只接受来自环回接口的连接，不允许通过外部计算机连接到本机的redis。  有四种方式解除保护模式：

     1. redis-cli 在终端上连接上数据库后 输入  config set protected-mode no  这样重启数据库后会失效

     2. 更改 redis.conf 。将 protected-mode yes  改为 protected-mode no.

     ​           3.redis-cli.exe -h 192.168.0.8 -p 6379 --protected mode no

     ​           4.设置绑定地址或身份验证密码。（这个我没有测试）

4.  `redis`数据类型

   ```javascript
   redis 支持五种数据格式，string(字符串)， hash(哈希值， 主要用于存储对象)， list(列表)， set(无序集合，存储的值都是独一无二的)， zset(有序集合，存储的值也是独一无二的)
   
   
   1. string 数据类型   因为redis 是key-value 类型的数据库，所以操作起来类似于操作缓存
      
       //设置/获取 删除单个值
       set key值  value值   =======>      set name "123"      // 设置key  和 value
       get key值            =======>      get name           // 获取值
       del key值            =======>      del name           // 删除值
       
       //设置/获取  多个值
       mset key1 value1 key2 value2... ===>  mset name 张三 age 23
       mget key1 key2...  ===>  mget name age
       mget key1  ===>  mget name
       
   2. hash 哈希数据类型
       // 设置哈希值  一次设置一个属性和值
     hset 对象名  key值  value 值  ==========>   hset runoob name 123
   
       // 设置哈希值 其实就是一个对象  多个属性同时设置  
           runoob：  {
                 field1: "Hello",
                 field2: "World"
             }
       hmset 对象名   key值  value值  key值  value值 
           =========> 
       hmset runoob field1 "Hello" field2 "World"
       
      // 获取哈希值  
       hget  runoob field1  //一个一个获取
       hget  runoob field2
       
       hmget runoob filed1 filed2  //可以同时获取多个
       
       //获取所有的key 和 value
       hgetall runoob   //能拿到所有的key和value  
       
       //获取所有的key
       hkeys runoob
       
       //获取所有的值
       hvals runoob
       
       //删除其中一个属性和值
       hdel runoob field1
       
   3. list 列表数据类型 [] 数组 用来存储字符串元素的集合
   
       // 从数组左边插入值  循环执行unshift方法
       lpush key  value1  value2  ===>  lpush arr a1 a2 a3
       
       //从数组左边截取一个值，原list 则就少一个值
       lpop key  ===>    lpop arr
       
       //从数组右边插入值  循环执行push方法
       rpush key value1 value2 value3  ====>  rpush arr b1 b2 b3
       
       //从数组右边截取一个值，原list就少一个值
       rpop key   ====>  rpop arr
       
       //从原数组某个值的前或者后插入一个值
         //在arr 数组的 第一个1这个值之前的位置插入一个 值为12
       linsert key before value  field  ====>  linsert arr before 1  12  
   
         //在arr 数组的 第一个2这个值之后的位置插入一个 值为4545
       linsert key after value  field  ====>  linsert arr after 2  12  
   
       //指定下标，获取指定下表之前的值 原数组不变
       lrange key index1  index2  ====>  lrange arr 0  10   //获取下标为0 和 10 之间的值
   
       //截取指定下表之前的值，原数组改变
       ltrim key  index1 index2  ===>  ltrim arr 0 3  //截取下表为0 和 3的值 ， 将原数组的值改变未截取的值
   
       //改变数组指定下标的值
       lset key  index value ====>  lset arr 1  2222  //将下标为1的位置的值改为2222
   
       //获取列表的长度
       llen key   ====>   llen arr  //获取arr这个list 长度
       
       
   4. 无序集合set 无顺序  可以存储多个字符串元素，和列表不同，集合元素不允许重复，且不能拿索引下标来设置和获取
         
       // 设置集合，给集合中添加数据，重复的不会继续添加
       sadd key value1 value2    =====>  sadd set1 v1 v2 // value 如果重复，则只会添加一次
       
       //删除集合中的元素
       srem key value1 value2 =====>  srem set2 v1 v2 //删除set2集合中 数据v1 和数据v2
       
       //计算集合中的元素个数
       scard key  =======>   scard set2 //计算集合set2中的数据总个数
       
       //查看集合中存在某个数据吗 如果存在则返回1  如果不存在就返回2
       sismember key  value ====>  sismember set1 v2   //有v2就返回1 没有就返回0
       
       //从集合中随机返回指定个数的数据
       srandmember key count ====>   srandmember set1 2 //随机返回两个集合数据
   
       //查询集合中所有的数据，慎用，因为O(n)的时间复杂度，集合数据越多，时间就越长
       smembers key  ====>    smembers set1 //获取set1集合内的所有数据
       
       //求集合之间的交集，可以是多个
       sinter key1  key2  key3 =====>   sinter set1 set2 set3 //求三个集合之间的交集
       
       //求集合之间的并集，可以是多个
       sunion key1  key2  key3 =====>   sunion set1 set2 set3 //求三个集合之间的并集
       
        //求集合之间的差集，可以是多个
       sinter key1  key2  key3 =====>   sdiff set1 set2 set3 //求三个集合之间的差集
       
   5. 有序集合zset 集合元素不能重复，但是可以排序，不是利用下标，是有序集合给每个元素设置一个分值score 作为排序的依据
   
       // 增加集合成员 nx 代表新增
       zadd key nx score1 value1  score2 value2 ==> zadd hero nx 90 zhangjie 80 yezi
       
       // 更新集合成员的分数，xx 代表更新
       zadd key xx newscore value1 ===>  zadd hero xx 100 zhangjie
       
       //查询集合成员的分数
       zscore key value1  ====>  zscore hero zhangjie
       
       //增加集合成员的分数 在原先的分数上增加
       zincrby key addscore value1  ====> zincrby hero 4 zhangjie  //此时就是100 + 4
       
       //删除指定成员
       zrem key value1  ======>  zrem hero zhangjie  
       
       //查看成员排名 由低到高
       zrank key value1  =====>  zrank hero zhangjie
       
       //查看成员排名 由高到低
       zrevrank key value1  =====> zrevrank hero zhangjie
       
       //返回指定分数区间内的数据value
       zrange key scorestart  scoreend  ======>  zrange hero 0  200
      
     
       
       
       
       
   ```
   
