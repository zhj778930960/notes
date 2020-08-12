# 路由Router

1. 作用

   - router 主要用来描述请求URL和具体承担执行动作的Controller的对应关系，框架约定了app/router.js文件用于同一放置所有的路由规则

2. 基本写法

   ```javascript
   'use strict'
   
   # 这是一个基础路由的制定，当用户访问这个接口的时候，就回执行，controller 文件夹下的main.js 执行其中的getlist方法
   
   moudule.exports = app => {
       const { router, controller } = app;
       router.get('/api/getlist', controller.main.getlist)
   }
   ```

3. 详细定义说明

   ```javascript
   # 可以根据场景的不同选择不用的书写方式
   
   # 主要有几个方面的不同
       1. 请求方式的不同 verb: post, get, delete, put, head, patch, head, options, del（保留字，delete别名）， redirect重定向
       2. router-name：  给路由设置的别名，可以通过helper 内置方法来配置pathFor 和 urlFor 来生成url
       3. path-match: url 路径
       4. middleware: 中间件函数，在路由中可以配置多个中间件   
       5. controller: 控制器函数，可以通过app.controller.main.getlist 或者  'main.getlist' 两种方式进行访问
       
       
    路由的定义方式
     
    moudule.exports = app => {
        const { router, controller } = app;
        # 四种访问方式
        router.verb('path-match', controller.main.login);
        router.verb('router-name', 'path-match', controller.main.login);
        router.verb('path-match', middleware1, ..., middlewaren,  controller.main.login);
        router.verb('router-name', 'path-match', middleware1, ..., middlewaren,  controller.main.login);
        
    }
    
    
    # 路由的重定向(router.js 内部)
    router.redirect("/", "/home/index", 302);
   
    # 路由重定向（router.js 外部）
    router.redirect("http://www.baidu.com")
   
   
   # 如果觉得所有的路由都写到一个module.exports 里面的话有点多，可以进行拆分，拆分成多个module.exports 就可以了
   
   ```

   

