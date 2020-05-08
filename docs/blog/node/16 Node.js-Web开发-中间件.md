# 中间件

####       Express 是一个路由中间件Web框架， 其本身的功能很少： Express应用程序本质上是一系列中间件函数调用

1.  中间件的功能
   - 是可以访问请求对象`req`， 响应对象`res` 和应用程序的请求-响应周期的下一个中间件功能的功能， 下一个中间件功能通常由名为`next`的变量表示

2. 中间件功能可以执行的任务
   - 执行任何代码
   - 红尖尖更改请求组和响应对象
   - 结束请求-响应周期
   - 调用堆栈中的下一个中间件函数

3. `express`应用程序可以使用以下类型的中间件：
   - 应用层中间件。 例如： `app.use((req, res, next)=> {});`
   - 路由器级中间件。 例如： `express.Router()`; 
   - 错误处理中间件。 例如 `app.use((err, req, res, next) => {})`
   - 内置中间件。 例如 `express.static()`
   - 第三方中间件。 例如 `var cookieParser = require("cookie-parser"); app.use(cookieParser())`

#####     应用级中间件：

```javascript
//其实， 像接口（路由）的监听，过程都算是一个中间件，我来举几个例子
//先导入express
const express = require("express");
const app = express();
//起服务
app.listen(3000, () => {
    console.log("启动成功了！")
})


//例子1：  所有接口，所有类型的访问路由 ，都会经过这个中间件
app.use((req, res, next) => {
    //这就是一个中间件，这个中间件会监听所有的接口（路由）， 当你访问所有的接口的时候， 都会经过这个中间件
    
    //然后我们在说一下，上面的单个参数都是什么意思
    
    //首先   req,  代表前端访问路由时，带进来的数据，有req.url地址，  还有传递过来的参数req.params
    //其次  res  代表返回，也就是服务端向客户端返回数据的方法，有end, send  方法，  还有就是设置返回头
    //最后 next()  这个东西其实就是告诉当前use方法中，已经执行完了，好了 你需要去执行下一个中间件 方法了
    //  也就是执行那个紧邻着当前方法的下一个方法， 就是这样的作用
    
   // 用法：
    next();
})

//例子2： 上面是所有访问的接口， 和所有访问的类型， 那我如果想指定接口和类型呢？？？
  1) get 方法
  app.get("接口路由", (req, res, next ) => {
       //这里就是指定路由接口和请求方式之后的  中间件方法  同理还有其他三个 
  })

  2) post 方法
  app.post("接口路由", (req, res, next ) => {
       //这里就是指定路由接口和请求方式之后的  中间件方法  同理还有其他三个 
  })

  1) delete 方法
  app.delete("接口路由", (req, res, next ) => {
       //这里就是指定路由接口和请求方式之后的  中间件方法  同理还有其他三个 
  })

  1) put 方法
  app.put("接口路由", (req, res, next ) => {
       //这里就是指定路由接口和请求方式之后的  中间件方法  同理还有其他三个 
  })


//上面就是 应用级中间件的简单的使用方式
var a1 = (req, res, next) => {
    next();
}

var a2 = (req, res, next) => {
    next();
}


app.get("/user:id", [a1, a2], (req, res) => {
     next(); 
}, (req, res) => {
    ...
})

//上面都是可以的，就是语法的不同而已
```



##### 路由级中间件：

路由级别的中间件，其实与应用级别的中间件基本是一致的，只不过应用级别是直接使用`use`， 而路由级别的中间件，是挂载到`Router`上，内部是一样的。

```javascript
const express = require("express");  //当然，首先还是引入express
const app = express(); 
const router = express.Router(); // 使用express 的本身的方法 Router()

//开启服务器
router.use((req, res, next) => {
    //与 app.use(...)等同
    
    next("route"); //就回跳转到下一个路由中间件
})


//接下来也是最重要的一步， 就是需要告诉app 当前监听的方法是router方法，不然router.xxx方法都是无法生效的
app.use("/", router);  //当前监听的方法是router 中间件方法  必须要有这句话 才是可以的


router.get(...)    同理 app.get(...)
router.post(...)    同理 app.post(...)
router.delete(...)    同理 app.delete(...)
router.put(...)    同理 app.put(...)


//expres返回了一个类，这个类内部的方法 通过express()返回给app, 本身身上挂载的方法，是需要express.xxx直接去访问的，因为这些方法没有存储在内部。
```

##### 错误处理中间件: 

其实还是用`app.use`的方法，只不过在参数中，会多一个参数`err`用于获取错误的信息，然后返回给前端就可以了。

```javascript
const express = require("express");
const app = express();

//只有当 回调函数的形参为四个的时候，才能说是一个错误处理的中间件，不然就还是一个普通的中间件， 如下代码：
//就是一个错误处理中间件，就算用不到next()方法，也必须写在这里，不然还是不算做错误中间件
app.use((err, req, res, next) => {
   res.statuts(500).send("服务器错误！")
})
```

##### 内置中间件

其实就是直接挂载在`express`上的方法。

```javascript
const express = require("express");
const app = express();

app.use(express.static("public")); //static 就是一个内置中间件，然后这里是作为静态服务器使用的。
```

##### 第三方中间件

```javascript
//例如 cookie-parser 用于操作cookie 

//先安装 cookie-parser 包

npm install cookie-parser --save

//引入 并使用

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
//使用第三方中间件
app.use(cookieParser());


还有很多其他的中间件，如果需要的话，去官网找就好了。
```

