# Koa2路由

####       与express 不同，express体积比较大，在其框架中，本身就存在了路由，但是koa不一样，koa本身体积小，额外的模块是需要去安装的，所以我们需要去安装koa路由模块

1. 安装

   ```javascript
   //先初始化一个项目
   npm init -y  //如果项目中有package.json 就不需要初始化了
   
   npm install koa-router --save
   ```

   

2. 使用

   ```javascript
   //koa-router 是一个类，所以在使用的时候，new 一个实例
   
   //第一步
   const Koa = require("koa");
   
   const app = new Koa();  //实例化这个koa类
   
   const Router = require("koa-router"); 
   
   const router = new Router();  //实例化这个路由
   
   
   //上面这种实例化的方式， 是可以进行改进的，这样写有点啰嗦，冗余
   
   
   
   //最后一步  才是使用
   
   router.get("路由地址，也就是接口", 回调函数callback(ctx){})
   
   //例如
   router.get("/", (ctx) => {
       ctx.body = "你好"；
       
       //cts 就代表原来的req 和 res 
       
       //ctx.body 就是原来的 res.send()
   })
   
   
   
   //第二步
   
   
   //最重要的一点就是，我们需要利用中间件，去激活这个路由的使用，才是可以正式运行的
   
   app.use(router.routes())// 正式的启用这个路由
   
   /*可以设置， 也可以不设置，如果接口中，设置了响应头的话，就不会用到这个，如果接口中没有设置响应头
   这里会自动给你的接口生成一个响应头*/
   app.use(router.allowedMethods()); 
   
   
   
   //第三步
   
   app.listen(3000, () => {
       //开启服务器；
   });
   ```

   - 注意 上面的实例化路由的方式是可以简化的

     ```javascript
     const router = require("koa-router")() //引入并实例化
     ```

3. 获取`get`类型接口的值

   ```javascript
   //获取动态路由后面的参数
   const Koa = require("koa");
   const app = new Koa();
   const router = require("koa-router")();  //导入路由并且实例化
   
   //启动服务
   app.listen(3000, () => {
       //启动成功了
   });
   
   //启动路由
   app.use(router.routes());
   //启动自动响应头
   app.use(router.allowedMethods());
   
   //获取 get方式传递过来的值
   router.get("/newx", (ctx) => {
       //获取到get方式传递过来的值
      // ctx.query 就get 方法传递回来的值 是一个对象 {id: 123, name: "23"}
       ctx.body = ctx.query
       
       //或者获取ctx.request 中的query也是可以的
       ctx.body = ctx.request.query
   })
   
   //获取 get方式传递过来的值
   router.get("/newx", (ctx) => {
       //获取到get方式传递过来的值
      // ctx.query 就get 方法传递回来的值 是一个字符串
           ctx.body = ctx.querystring
       
       //或者 ctx.request 中的querystring也是可以的
       ctx.body = ctx.request.querystring;
   })
   
   ```

   

4. 动态路由

   ```javascript
   const Koa = require("koa");
   const app = new Koa();
   const router = require("koa-router")();
   
   app.listen(3000, () => {
       //启动成功
   });
   
   //如何匹配动态的路由？？
   router.get("/news/:id", (ctx) => {
       //上面路径的这种写法，就是在匹配一个动态的路由  /news/123  /news/dafds  都是可以被捕获到的
       
       //如何获取动态路由中的这个id呢  ctx.params  得到的是一个对象 {id: xxx}
       
       ctx.body = ctx.params;
   })
   
   app.use(router.routes());
   app.use(router.allowedMethods());
   ```

   

5. 全局变量`ctx.state` 可以在任何路由中使用，访问  相当于一个全局变量，可以在任何地方访问

   ```javascript
   //ctx.xxx  是上下文 可以用 this.xxx 来访问 是一样的
   
   const Koa = require("koa");
   const app = new Koa();
   const router = require("koa-router")();
   
   app.use(async (ctx, next) => {
        ctx.state = {
             name: "13",
             value: "3213"
        };
       ctx.state.id = "bbb"
       next()
   })
   router.get("/nex", async ctx => {
       //这里的ctx 可以访问到ctx.state这个全局的属性 
       console.log(ctx.state)
   })
   app.listen(3000);
   app.use(router.routes()).use(router.allowedMethods());
   ```

6. 抛出错误，`ctx.throw`用于抛出错误，将错误信息返回给用户

   ```javascript
   router.post("/por", async ctx => {
       ctx.throw(500); //页面上就可以看到500的错误也
   })
   ```

   
   
7.  `router.all()`方法，就是符合路由的都会执行到这里，前提是前面的方法有执行`next()`

   ```javascript
   const Koa = require("koa");
   const router = require("koa-router")();
   const app = new Koa();
   
   router.get("/user", async (ctx, next) => {
        //只有这里执行next() 才会走到对应的all中间件里面去
       await next()
   })
   
   router.all("/user", async (ctx, next) => {
        // 所有的user 路由 如果中间都执行了next(), 就回走入到这个方法里
   })
   
   
   app.listen(3000);
   app.use(router.routes()).use(router.allowedMthods())
   ```

   

8. 命名路由  类似于`vue-router`中给路由设置`name` 在跳转的时候，可以利用这个`name`

   ```javascript
   //给路由  "/users/:id" 命名一个名称 “user" 后面直接通过这个名称就可以访问这个路由了 
   
   router.get("user", "/users/:id", async (ctx, next) => {
      // ...
   }) 
   
   //如何使用？  直接传入命名的名称
   
   router.url("user", 3);
   
   //或者是使用 对象的方式
   router.url("user", {id: 3})
   
   //就相当于
   router.get("/user/3" async ctx => {
     // ...
   })
   ```

9. 路由重定向`ctx.redirect()`

   ```javascript
   //接上面的方法
   
   router.use(async (ctx, next) => {
       
       //跳转至路由名称为‘sign-in’的界面
       ctx.redirect(ctx.router.url("sign-in"))''
   })
   ```

10.  路由的前缀配置， 配置统一的路由前缀地址 和 URL 参数

    ```javascript
    const KoaRouter = require("koa-router");
    const router = new KoaRouter({
        prefix: "/user"
    })
    // 这样你在访问的时候 默认会加上这个前缀   相当于访问接口 "/user/:id"
    router.get("/:id", async (ctx, next) => {
        
    })
    
    //那么 我们node如何去访问“:id”这样的参数呢？？？
    router.get("/:name/:id", async (ctx, next) => {
         console.log(ctx.params)
    })
    ```

    
