(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{366:function(s,t,e){"use strict";e.r(t);var a=e(33),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" redis")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("redis")]),s._v("是什么？")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("redis")]),s._v("是一个免费开源，基于内存的高性能key-value数据库")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[e("code",[s._v("redis")]),s._v("能做什么？")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("redis")]),s._v("应用很广泛，"),e("code",[s._v("redis")]),s._v("具有速度快，数据持久化，丰富的数据类型，多语言支持，和多功能等特性。")]),s._v(" "),e("li",[s._v("速度快：10W的OPS速度（读写速度）。")]),s._v(" "),e("li",[s._v("持久化："),e("code",[s._v("redis")]),s._v("是基于内存模型，可以解决断电或者重启造成的数据丢失，"),e("code",[s._v("redis")]),s._v("采取了两种数据持久化的策略，分别为RDB和AOF，会将"),e("code",[s._v("redis")]),s._v("在内存中保存的数据异步更新到磁盘中，实现数据的持久化功能。")])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("redis")]),s._v("的安装，在windows 电脑安装redis")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("进入github项目下载.zip 安装包  https://github.com/microsoftarchive/redis/releases")])]),s._v(" "),e("li",[e("p",[s._v("选择一个版本进入，下载   Redis-x64-版本号.zip 压缩包")])]),s._v(" "),e("li",[e("p",[s._v("下载下来后，解压压缩包")])]),s._v(" "),e("li",[e("p",[s._v("在解压的文件夹里面 打开**cmd **界面，进入到解压的文件夹爱里面， 输入 redis-server.exe redis.windows.conf  然后运行，")]),s._v(" "),e("p",[s._v("将解压的文件夹爱配置到系统环境变量PATH里面，就可以只用输入 redis-server.exe  开启数据库")])]),s._v(" "),e("li",[e("p",[s._v("访问数据库，依然在这个目录下，新打开一个cmd界面，输入 redis-cli.exe    默认为当前IP和port")]),s._v(" "),e("p",[s._v("连接特定IP和服务器  "),e("code",[s._v("redis-cli.exe -h ip地址 -p 端口号")])])]),s._v(" "),e("li",[e("p",[s._v("有个问题  在启动数据库之后，代码连接的时候，无法连接的问题，这个问题是因为redis 是处于保护模式下，只接受来自环回接口的连接，不允许通过外部计算机连接到本机的redis。  有四种方式解除保护模式：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("redis-cli 在终端上连接上数据库后 输入  config set protected-mode no  这样重启数据库后会失效")])]),s._v(" "),e("li",[e("p",[s._v("更改 redis.conf 。将 protected-mode yes  改为 protected-mode no.")])])]),s._v(" "),e("p",[s._v("​           3.redis-cli.exe -h 192.168.0.8 -p 6379 --protected mode no")]),s._v(" "),e("p",[s._v("​           4.设置绑定地址或身份验证密码。（这个我没有测试）")])])])]),s._v(" "),e("li",[e("p",[e("code",[s._v("redis")]),s._v("数据类型")])])]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("redis "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("支持五种数据格式，string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字符串"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("， "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("哈希值， 主要用于存储对象"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("， "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("list")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("列表"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("， "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("无序集合，存储的值都是独一无二的"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("， "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("有序集合，存储的值也是独一无二的"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" string 数据类型   因为redis 是key"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("value 类型的数据库，所以操作起来类似于操作缓存\n   \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置/获取 删除单个值")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" key值  value值   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123"')]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置key  和 value")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" key值            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" name           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取值")]),s._v("\n    del key值            "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("      del name           "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除值")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置/获取  多个值")]),s._v("\n    mset key1 value1 key2 value2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mset name 张三 age "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("\n    mget key1 key2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mget name age\n    mget key1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  mget name\n    \n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" hash 哈希数据类型\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置哈希值  一次设置一个属性和值")]),s._v("\n  hset 对象名  key值  value 值  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("   hset runoob name "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置哈希值 其实就是一个对象  多个属性同时设置  ")]),s._v("\n        runoob：  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              field1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              field2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"World"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    hmset 对象名   key值  value值  key值  value值 \n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n    hmset runoob field1 "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v(" field2 "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"World"')]),s._v("\n    \n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取哈希值  ")]),s._v("\n    hget  runoob field1  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//一个一个获取")]),s._v("\n    hget  runoob field2\n    \n    hmget runoob filed1 filed2  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可以同时获取多个")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取所有的key 和 value")]),s._v("\n    hgetall runoob   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//能拿到所有的key和value  ")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取所有的key")]),s._v("\n    hkeys runoob\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取所有的值")]),s._v("\n    hvals runoob\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除其中一个属性和值")]),s._v("\n    hdel runoob field1\n    \n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" list 列表数据类型 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 数组 用来存储字符串元素的集合\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 从数组左边插入值  循环执行unshift方法")]),s._v("\n    lpush key  value1  value2  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  lpush arr a1 a2 a3\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从数组左边截取一个值，原list 则就少一个值")]),s._v("\n    lpop key  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    lpop arr\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从数组右边插入值  循环执行push方法")]),s._v("\n    rpush key value1 value2 value3  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  rpush arr b1 b2 b3\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从数组右边截取一个值，原list就少一个值")]),s._v("\n    rpop key   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  rpop arr\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从原数组某个值的前或者后插入一个值")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在arr 数组的 第一个1这个值之前的位置插入一个 值为12")]),s._v("\n    linsert key before value  field  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  linsert arr before "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("  \n\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在arr 数组的 第一个2这个值之后的位置插入一个 值为4545")]),s._v("\n    linsert key after value  field  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  linsert arr after "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("  \n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//指定下标，获取指定下表之前的值 原数组不变")]),s._v("\n    lrange key index1  index2  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  lrange arr "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取下标为0 和 10 之间的值")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//截取指定下表之前的值，原数组改变")]),s._v("\n    ltrim key  index1 index2  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  ltrim arr "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//截取下表为0 和 3的值 ， 将原数组的值改变未截取的值")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//改变数组指定下标的值")]),s._v("\n    lset key  index value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  lset arr "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将下标为1的位置的值改为2222")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取列表的长度")]),s._v("\n    llen key   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("   llen arr  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取arr这个list 长度")]),s._v("\n    \n    \n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" 无序集合"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 无顺序  可以存储多个字符串元素，和列表不同，集合元素不允许重复，且不能拿索引下标来设置和获取\n      \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置集合，给集合中添加数据，重复的不会继续添加")]),s._v("\n    sadd key value1 value2    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  sadd set1 v1 v2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value 如果重复，则只会添加一次")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除集合中的元素")]),s._v("\n    srem key value1 value2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  srem set2 v1 v2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除set2集合中 数据v1 和数据v2")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//计算集合中的元素个数")]),s._v("\n    scard key  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("   scard set2 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//计算集合set2中的数据总个数")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看集合中存在某个数据吗 如果存在则返回1  如果不存在就返回2")]),s._v("\n    sismember key  value "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  sismember set1 v2   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//有v2就返回1 没有就返回0")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//从集合中随机返回指定个数的数据")]),s._v("\n    srandmember key count "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("   srandmember set1 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//随机返回两个集合数据")]),s._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查询集合中所有的数据，慎用，因为O(n)的时间复杂度，集合数据越多，时间就越长")]),s._v("\n    smembers key  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("    smembers set1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取set1集合内的所有数据")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求集合之间的交集，可以是多个")]),s._v("\n    sinter key1  key2  key3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   sinter set1 set2 set3 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求三个集合之间的交集")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求集合之间的并集，可以是多个")]),s._v("\n    sunion key1  key2  key3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   sunion set1 set2 set3 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求三个集合之间的并集")]),s._v("\n    \n     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求集合之间的差集，可以是多个")]),s._v("\n    sinter key1  key2  key3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   sdiff set1 set2 set3 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求三个集合之间的差集")]),s._v("\n    \n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" 有序集合zset 集合元素不能重复，但是可以排序，不是利用下标，是有序集合给每个元素设置一个分值score 作为排序的依据\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 增加集合成员 nx 代表新增")]),s._v("\n    zadd key nx score1 value1  score2 value2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" zadd hero nx "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" zhangjie "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" yezi\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更新集合成员的分数，xx 代表更新")]),s._v("\n    zadd key xx newscore value1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  zadd hero xx "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" zhangjie\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查询集合成员的分数")]),s._v("\n    zscore key value1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v("  zscore hero zhangjie\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//增加集合成员的分数 在原先的分数上增加")]),s._v("\n    zincrby key addscore value1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" zincrby hero "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" zhangjie  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//此时就是100 + 4")]),s._v("\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//删除指定成员")]),s._v("\n    zrem key value1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  zrem hero zhangjie  \n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看成员排名 由低到高")]),s._v("\n    zrank key value1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  zrank hero zhangjie\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//查看成员排名 由高到低")]),s._v("\n    zrevrank key value1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" zrevrank hero zhangjie\n    \n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回指定分数区间内的数据value")]),s._v("\n    zrange key scorestart  scoreend  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  zrange hero "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n   \n  \n    \n    \n    \n    \n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);