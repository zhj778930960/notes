# `koa2 `中间件

1. 什么是中间件？
   - 通俗的讲： 中间件就是匹配路由之前或者匹配路由完成做的一系列的操作，我们就可以把它称作中间件
2. 中间件的功能？
   - 执行任何代码
   - 修改请求和响应对象
   - 终结请求 ---- 响应循环
   - 调用堆栈中的下一个中间件
     - 例如：如果我的`get`,  `post` 回调函数中， 没有`next`参数，那么就匹配上第一个路由。就不会往下匹配了，如果想往下继续匹配，那么需要执行`next()`方法

3. 中间件类型
   - 应用级中间件
   - 路由中间件
   - 错误处理中间件
   - 第三方中间件

#### 中间件介绍

```javascript
//先在这里引入koa
const Koa = require("koa");
const app = new Koa();
app.listen(3000, () => {
    //服务开启成功
})
```



1. 应用级中间件

   ```javascript
   //例子
   app.use((ctx, next) => {
       //这个会拦截，或者说是监听所有的路由，这个就属于应用级中间件
       next();
   })
   ```

2. 路由中间件

   ```javascript
   const router = require("koa-router")();
   
   router.get("/news", (ctx, next) => {
       //只会在相同路由下进行执行，会跳到第三个get方法中去 而不是第二个，因为第二个的路由跟其余两个不是一个路由
       next();
   })
   
   router.get("/news123", (ctx, next) => {
       ctx.body = "456"
   })
   
   router.get("/news", (ctx, next) => {
       ctx.body = "xxx"
   })
   
   //第一个路由监听不会立马给前端返回，会继续执行下面这个路由监听，然后返回去
   
   app.use(router.routes());
   app.use(router.allowedMethods())
   ```

3. 错误处中间件

   ```javascript
   app.use((ctx, next) => {
     //判断ctx.status的状态
     if (ctx.status === 404){
       ctx.body = "404 Not Found"
     }
   })
   ```

4. 第三方中间件

   ```javascript
   //例如koa-static  静态资源中间件
   ```

   

#### 中间件的执行流程

由外而内   再   由内而外

```javascript
const Koa = require("koa");
const app = new Koa();
const router = require("koa-router");
app.listen(3000, () => {
    //服务启动成功
});
app.use(router.routes());
app.use(router.allowedMethods());

app.use((cxt, next) => {
    console.log(1);
    next();
    console.log(2)''
});

router.get("/news", (ctx, next) => {
    console.log(3);
    next();
    console.log(4);
});

router.get("/news", (ctx, next) => {
    console.log(5);
    ctx.body = "执行完成"；
    console.log(6);
})


上面最终的执行顺序是 1 -> 3  ->  5 -> 6 -> 4 -> 2

```



#### 如何将多个中间件合并成一个单独的中间件，且可以复用，任意组合

######      `koa-compose`

- 安装

  ```javascript
  npm install koa-compose --save
  ```

  

- 使用

  ```javascript
  const Koa = require("koa");
  const app = new Koa();
  const compose = require("koa-compose");
  
  async function middleware1(ctx, next){
       await next();
  };
  async function middleware2(ctx, next){
       await next();
  };
  async function middleware3(ctx, next){
       await next();
  };
  //将中间件组合起来，任意组合使用 就可以，也可以复用
  const all = compose.all([middleware1, middleware2, middleware3]);
  
  //这样就可以使用这个组合起来的中间件
  app.use(all)
  ```

  

### 注意

##### 有个问题 如果`app.use()`在使用的时候，执行两次的问题，是因为咋执行的时候，首先响应的是请求， 后来会去访问静态文件，所以会执行两次

```javascript
这是因为访问 http:/ localhost:3000 后，
DOM ( Document Object Model ，文档对象模型）结构在浏览器上进行渲染，会发起相应的
静态资源文件的 HTTP 请求，／favicon.ico 即为 DOM 渲染时默认自带的静态资源。
```

