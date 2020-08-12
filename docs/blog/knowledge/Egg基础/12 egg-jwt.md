# egg-jwt

1. 安装

   ```javascript
   npm install egg-jwt --save
   ```

2. 配置

   ```javascript
   // plugin.js
   jwt: {
       enable: true,
       package: 'egg-jwt',
   },
       
   // config.{env},js
   config.jwt = {
       secret: 'zhanghaojie',  // 随意设置，就是一个签名，防止被篡改
   }
   ```

3. 生成token

   ```javascript
   // 直接在controller 配置使用就可以了
   
   'use strict';
   const Controller = require('egg').Controller;
   class MainController  extends Controller {
       async findUser(){
           const { ctx } = this;
           const { name, password } = ctx.request.body;
           // 请求service, 操纵数据库，拿到用户信息
           const res = await ctx.service.main.findUser({name, password});
           if (res) {
               // expiresIn 过期时间设置 24h 一天
               const token = ctx.app.jwt.sign({
                   name,
                   password
               }, ctx.app.config,secret,
                 {  expiresIn:'24h'  }  
               )
               ctx.body = {
                   code: 0,
                   msg: '登录成功',
                   errorMsg: null,
                   object: token
               }
           }  
       }
    }
    ```
   
4. 校验token

   ```javascript
   // jwt生成的token  前端必须要在header中加入一个Authorization 参数 值为  "Bearer" + " " + token 的格式才能通过第一层token校验
   
   //egg-jwt 默认已经有校验前端token的功能了，不需要去单独开发一个中间件来校验token的正确性
   
   // 在config.{env}.js中 jwt 的配置 已经挂在到了app上，所以我们直接在router 中使用就可以了
   
   'use strict';
   moudule.exports = app => {
       const { router, controller, jwt } = app;
       router.get('/login', controller.main.login);
       // jwt 作为中间件， 在这里回自动验证token,如果不符合就会抛出401
       router.post('/create/user', jwt, controller.main.createUser);
   }
   
   ```

   

