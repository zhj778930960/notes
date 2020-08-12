# ioredis

1. `redis`是什么？
- `redis`是一个免费开源，基于内存的高性能key-value数据库
2. `redis`能做什么？
   - `redis`应用很广泛，`redis`具有速度快，数据持久化，丰富的数据类型，多语言支持，和多功能等特性。
   - 速度快：10W的OPS速度（读写速度）。
   - 持久化：`redis`是基于内存模型，可以解决断电或者重启造成的数据丢失，`redis`采取了两种数据持久化的策略，分别为RDB和AOF，会将`redis`在内存中保存的数据异步更新到磁盘中，实现数据的持久化功能。


3.  `redis`的安装，windows系统建议安装虚拟机，安装一个ubuntu或者mac os 系统

   ``` javascript
   如何在mac os上安装redis
   
   $ wget http://download.redis.io/releases/redis-5.0.5.tar.gz # 下载 
   $ tar xzf redis-5.0.5.tar.gz # 解压
   $ # ln -s redis-5.0.5 redis
   $ cd redis-5.0.5 # 执行了上面一步 此处 cd redis
   $ make
   
   
   //启动
   $ src/redis-server
   $ src/redis-server --port 6380 # 指定端口号启动
   ```
   

   
4. 如何连接`redis`数据库  这里我用的是`ioredis`插件，来连接和操作`redis`数据库

   ```javascript
   首先安装完成之后 通过redis-server 启动了数据库
   
   
   如何连接呢?  通过 redis-cli 就可以连接了
   
   如何在代码中连接redis?  我们就需要到ioredis插件来帮忙
   
   有个问题  在启动数据库之后，代码连接的时候，无法连接的问题，这个问题是因为redis 是处于保护模式下，只接受来自环回接口的连接，不允许通过外部计算机连接到本机的redis。  有四种方式解除保护模式：
   
   1. redis-cli 在终端上连接上数据库后 输入  config set protected-mode no  这样重启数据库后会失效
   
   2. 更改 redis.conf 。将 protected-mode yes  改为 protected-mode no.
   
   3.redis-cli.exe -h 192.168.0.8 -p 6379 --protected mode no
   
   4.设置绑定地址或身份验证密码。（这个我没有测试）
   
   
   
   
   //如何制定redis 的端口号和prot呢？
   
   打开src/redis-cli -p 6380       指定端口号
   
   //指定服务器地址和端口
   src/redis-cli -h localhost -p 6380
   
   
   
   
   
   
   1. 安装  npm install ioredis --save
   
   2. 使用
      const Redis = require("ioredis");
      const redis = new Redis(6397, "192.168.31.41"); "192.168.31.41:6397"
   
   3.如何增加和获取数据呢？
      redis.set("name", "123");  设置一个key为name  value为123的  k-v数据 存储到数据库
      
      redis.get("name", (err, result) => {
          //result 就是123这个数据
          console.log(result)
      })
    
   ```

   

5.  `ioredis`在代码中的使用

   ```javascript
   const Redis = require("ioredis");
   const redis = new Redis(6397, "192.168.31.41"); //连接"192.168.31.41:6397"
   
   redis.set("name", "123"); //设置一个key为name  value为123的  k-v数据 存储到数据库
   redis.get("name", async (err, res) => {
       //已回调函数的方式拿到get的值
        console.log(res);
   })

   //删除
   redis.del("foo");
   
   
   //下面这两种写法，存入的数据是一样的  
   redis.sadd("set", 1, 3, 5, 7);
   redis.sadd("set", [1, 3, 5, 7]);
   
   //所有参数都直接传递给redis服务器：
   redis.set("key", 100, "EX", 10);
   ```
   
   

​                                                                                                                                                                  

