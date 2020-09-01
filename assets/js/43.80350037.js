(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{369:function(v,_,e){"use strict";e.r(_);var d=e(33),o=Object(d.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb数据库"}},[v._v("#")]),v._v(" "),e("code",[v._v("MongoDb")]),v._v("数据库")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("安装")]),v._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//Mongdb 网站下载 工具")]),v._v("\nwww"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("mongodb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("com\n")])])]),e("ul",[e("li",[v._v("下载完成后选择"),e("code",[v._v("custom")]),v._v("自定义，然后选择安装的目录即可。")]),v._v(" "),e("li",[v._v("安装时间较长，请耐心等待")])])]),v._v(" "),e("li",[e("p",[v._v("环境配置")]),v._v(" "),e("ul",[e("li",[v._v("右键我的电脑  -  高级设置  -  高级 -  环境变量  -  系统变量PATH")]),v._v(" "),e("li",[v._v("将"),e("code",[v._v("mongodb")]),v._v("所在"),e("code",[v._v("bin")]),v._v("目录路径放到变量里面去就好了")])])]),v._v(" "),e("li",[e("p",[v._v("启动")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("在任意盘新建一个文件夹")])]),v._v(" "),e("li",[e("p",[v._v("运行 在"),e("code",[v._v("cmd")]),v._v(" 界面 "),e("code",[v._v("mongod --dbpath 文件路径+名称")]),v._v("  这样就启动成功了")])]),v._v(" "),e("li",[e("p",[v._v("怎么访问，如果自己的电脑上既是服务端，也是客户端，直接"),e("code",[v._v("mongo")]),v._v(" 开启访问就可以了")])]),v._v(" "),e("li",[e("p",[v._v("如果需要访问另一个地址的 就需要"),e("code",[v._v("mongo ip地址")])])])])]),v._v(" "),e("li",[e("p",[v._v("命令")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("查看数据库数据 "),e("code",[v._v("show dbs")]),v._v("  就可以看当前有哪些数据库")])]),v._v(" "),e("li",[e("p",[v._v("进入已经存在的数据库 "),e("code",[v._v("use xxx(数据库名称)")]),v._v("  就可以进入到选择的数据库之中了")])]),v._v(" "),e("li",[e("p",[v._v("创建：")])])]),v._v(" "),e("ul",[e("li",[v._v("先使用一个不存在数据库 "),e("code",[v._v("use itying")]),v._v(" 这样就是会提示你这个数据库不存在，没关系")]),v._v(" "),e("li",[v._v("然后 "),e("code",[v._v('db.user.insert({"name": "123"})')]),v._v("  这样就是既创建了一个"),e("code",[v._v("itying")]),v._v(" "),e("code",[v._v("数据库，也创建了一个")]),v._v("user`表，最后还给里面加入了一条数据")]),v._v(" "),e("li",[v._v("展示所有的表 "),e("code",[v._v("show collections")]),v._v("  当前数据库中有哪些表")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[v._v("查询")]),v._v(" "),e("p",[v._v("我这里默认使用"),e("code",[v._v("user")]),v._v("这个表，当然你可以建立别的表，不影响啥")]),v._v(" "),e("ul",[e("li",[v._v("查询所有记录 "),e("code",[v._v("db.user.find()")]),v._v("  查询"),e("code",[v._v("user")]),v._v("表之中所有的数据")]),v._v(" "),e("li",[v._v("查询指定数据"),e("code",[v._v('db.user.find({"age": 22})')]),v._v("查找年龄为22的所有数据")]),v._v(" "),e("li",[v._v("查询一个 范围 例如 "),e("code",[v._v('db.user.find({"age": {$gt: 20}})')]),v._v("查找年龄大于20的数据")]),v._v(" "),e("li",[v._v("查询一个 范围 例如 "),e("code",[v._v('db.user.find({"age": {$lt: 20}})')]),v._v("查找年龄小于20的数据")]),v._v(" "),e("li",[v._v("查询一个 范围 例如 "),e("code",[v._v('db.user.find({"age": {$gte: 20}})')]),v._v("查找年龄大于等于20的数据")]),v._v(" "),e("li",[v._v("查询一个 范围 例如 "),e("code",[v._v('db.user.find({"age": {$lte: 20}})')]),v._v("查找年龄小于等于20的数据")]),v._v(" "),e("li",[v._v("查询多个条件，里面就需要多个值"),e("code",[v._v('db.user.find({"age": 20, name: "张三"})')])]),v._v(" "),e("li",[v._v("查询一个中间范围 "),e("code",[v._v('db.user.find({"age": {$gt:20, $lt:35})')]),v._v("查找一个数据大于20， 小于23")]),v._v(" "),e("li",[e("strong",[v._v("模糊查询  "),e("code",[v._v('db.user.find({"name": /san/})')]),v._v("查询名字之中带"),e("code",[v._v("san")]),v._v("这个字符的数据")])]),v._v(" "),e("li",[e("strong",[v._v("查询以什么开头的   "),e("code",[v._v('db.user.find({"name":/^zh/})')]),v._v("以"),e("code",[v._v("zh")]),v._v("开头的"),e("code",[v._v("name")]),v._v("数据都会被查询出来")])]),v._v(" "),e("li",[e("strong",[v._v("查询指定列的数据 "),e("code",[v._v('db.user.find({}, {"age":1})')])]),v._v("   按照正序排列  "),e("code",[v._v("-1")]),v._v("按降序排列")]),v._v(" "),e("li",[v._v("只查询前几条数据 "),e("code",[v._v("db.user.find().limit(5)")]),v._v("  查询到前五条数据")]),v._v(" "),e("li",[v._v("查询指定位置的数据 第几条数据   "),e("code",[v._v("db.user.find().skip(2)")]),v._v(" 跳过前两条数据，从第三条开始查")]),v._v(" "),e("li",[e("code",[v._v("or")]),v._v("条件查询，两个条件满足一个即可  "),e("code",[v._v('db.user.find({$or:[{"age": 20}, {"age": 24}]})')]),v._v(" 查询年龄为"),e("code",[v._v("20")]),v._v("或者为"),e("code",[v._v("24")]),v._v("的数据")]),v._v(" "),e("li",[v._v("查询表中所有数据的数量  做分页时可以返回给前端 "),e("code",[v._v("db.user.find().count()")])]),v._v(" "),e("li",[e("strong",[v._v("上面的条件可以任意组合的查询，都是可以的")])])])]),v._v(" "),e("li",[e("p",[v._v("修改")]),v._v(" "),e("ul",[e("li",[v._v("删除"),e("code",[v._v("user")]),v._v("表   "),e("code",[v._v("db.user.drop()")]),v._v("  这样就把当前数据库中"),e("code",[v._v("user")]),v._v("表删除了")]),v._v(" "),e("li",[v._v("删除当前所在的数据库 "),e("code",[v._v("db.dropDatabase()")]),v._v(" 就把当前所在的数据库就给删除了")]),v._v(" "),e("li",[v._v("删除某一条数据 "),e("code",[v._v('db.user.remove({"id": 123})')]),v._v("将"),e("code",[v._v("id")]),v._v("等于123的数据删除掉\n"),e("ul",[e("li",[v._v("只删除一条，如果有多条的话 "),e("code",[v._v('db.user.remove({"name": "wangmazi"}, {justOne: true})')])])])])])]),v._v(" "),e("li",[e("p",[v._v("修改")]),v._v(" "),e("ul",[e("li",[v._v("修改数据  "),e("code",[v._v('db.user.update({"name": "张三"}, {$set: {"age": 33}})')]),v._v(" 将"),e("code",[v._v("name")]),v._v("为张三的这条数据的"),e("code",[v._v("age")]),v._v("属性变为33")])])]),v._v(" "),e("li",[e("p",[v._v("清屏")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("cls")]),v._v("命令可以清屏")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);