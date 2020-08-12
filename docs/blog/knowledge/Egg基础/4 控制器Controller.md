# 控制器Controller

1.   controller 是在app 目录下的文件夹，**解析用户的输入，处理后返回相应的结果**
   - 在app 目录下创建一个controller 文件夹
   - 在controller 文件夹下创建一个 js

2.  过程
   - 获取用户通过 HTTP 传递过来的请求参数。
   - 校验、组装参数。
   - 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
   - 通过 HTTP 将结果响应给用户。

```javascript
# 文件内部代码结构

'use strict'  
const Controller = require("egg").Controller;


# 这里class的命名与此时文件的名称要一致，文件的名字为main.js  则class  为 MainController

class MainController extends Controller {
    aysnc login(){
        /**
         * @ctx 当前请求的上下文context 对象，跟koa中的是一样的，接口的参数，返回都可以从上面获取
         * @app 当前应用 Application 对象的实例，我们可以拿到所有的全局方法和对象
         * @service 定义好的service 层的数据，一般业务层的处理都在service, 这里我们就可以拿到service定义好得方法 等价于 this.ctx.service
         * @config 应用时的配置项基本上就是，config.default.js  config.xxxhuanjing.js 结合起来的属性
         * @logger logger 对象 有四个属性 debug, info, warn, error 四种不同的日志， 生成的日志会自动加上打印文件所在的路径
         */
        const { ctx, app, service, config, logger } = this;
        
        # 可以这样引用service 或者model 文件夹下的js中的方法
        const res = await ctx.service.main.getList();  // 引用service 文件夹下 main.js 中的getList方法
        ctx.body = res;
    }
}

module.exports = MainController;
```

```javascript
# 表单的校验
'use strict'
const Controller = require('egg').Controller;

// 先设置表单
const createRule = {
    username: {
        type: 'email'
    },
    password: {
        type: "password",
        compare: 're-password'
    }
}
class MainController extends Controller {
    async login(){
        const { ctx } = this;
        ctx.validte(createRule);
        ctx.body = ctx.request.body;
    }
}
```



```javascript
# app 下的 router.js 如果使用定义好的controller中的方法呢？？

'use strict'

/**
 * @[Egg.Application] app =>  其实这个是个全局应用对象，在每个对象只会实例化一次，默认已经把控制器和路由已经实例化好了，所以我们在这里就可以访问了
 */
module.exports = app => {
    const { router, controller } = app;
    
    // 这样就是引用controller 文件夹下 main.js 的login 方法
    router.get("/login", controller.main.login)
}
```



```javascript
# cookie 如何配置
  
'use strict'
const Controller = require("egg").Controller;
class MainController extends Controller {
    async  index (){
        const { ctx } = this;
        // 获取cookie
        ctx.cookies.get('name');
        
        // 设置cookies
        ctx.cookies.set("name", "xxxx");
    }
}


# 如果需要额外的配置 需要在config.default.js 里面进行配置
module.exports = {
    cookies: {
        httpOnly: false | true,
        sameSite: 'none|lax|strict'
    }
}

```



```javascript
# session 配置
'use strict'
const Controller = require('egg').Controller;
class HomeController extends Controller {
    const { ctx } = this;
    // 获取session
    const userId = ctx.session.userId;

    // 设置session
    ctx.session.name = "fasdfa"
}


//  有几个参数可以再config.default.js中进行配置
  module.exports = {
      key: 'Egg_sess',
      maxAge: 86400000
  }
```



```javascript
# validate参数校验
1. 需要下载egg-validate插件
            npm install egg-validate --save

2. 在plugin.js 中去配置插件，启动插件
  module.exports = {
      validate: {
          enable: true,
          package: 'egg-validate'
      }
  }

3. 使用ctx.validate(rule,[body]) 来进行参数校验
  'use strict'
  const Controller = require('egg').Controller;
  class MainController extends Controller {
      const { ctx } = this;
      ctx.validate({
          title: {
              type: 'string'
          },
          content: {
              type: 'string'
          }
      })

   # 校验的异常 会抛出422 这个错误 如果需要自己定义错误，那就需要try catch 去捕获错误了
    try {
        ctx.validate({
          title: {
              type: 'string'
          },
          content: {
              type: 'string'
          }
      })
    } catch (err){
        ctx.logger.warn(err.errors);
        // 然后自定义接口返回就可以了
        ctx.body = '出错'；
        return 
    }
  }
  
  
4. 自定义校验规则

// app.js
app.validator.addRule('json', (rule, value) => {
  try {
    JSON.parse(value);
  } catch (err) {
    return 'must be json string';
  }
});

class PostController extends Controller {
  async handler() {
    const { ctx}  = this;
    // query.test 字段必须是 json 字符串
    const rule = { test: 'json' };
    ctx.validate(rule, ctx.query);
  }
};



5. 调用service
       如果所有的业务逻辑都放置到controller 里面，就回导致controller里面特别的臃肿，所以， 我们可以将一部分业务逻辑放置到service里面
   可以提高代码的复用性。
       service 是懒加载的，所以需要使用await 去调用
    'use strict'
    const Controller = require('egg').Controller;
    class HomeController extends Controller {
         async index(){
             const { ctx } = this;
             const body = await ctx.service.post.getlist;  // 获取service文件夹下 post.js中的getlist方法
             ctx.body = body;
         }
    }


6. 使用模板 例如ejs
    
   // 使用ejs时 需要先安装 然后 引入ejs 插件
    npm install egg-view-ejs --save
    
    // plugin.js 引入这个插件
     ejs: {
         enable: true,
         package: 'egg-view-ejs'
     }
    
    // 然后去config.default.js 中配置对应的后缀文件

    config.view = {
        mapping: {
            '.html': 'ejs'   // 意思就是说 views 下面的.html 文件 当做是ejs 的模板
        }
    }

 // 然后在对应的view 下面写入.html文件  

// 最后就是在controller 中把文件渲染出去就可以了
'use strict'
const Controller = require("egg").Controller;
class MainController extends Controller {
    async index(){
        const { ctx } = this;
        //读取文件，渲染文件
        await ctx.render('index.html');
    }
}



7. 跨域  除了设置cors 之外  egg 提供了 jsonp() 方法来实现跨域访问，自带XSS防御
  # 当用户在请求这个接口的时候，必须带上_callback 这个参数  值为一个不大于50长度的字符串  不然会返回json格式的数据
   // router.js
  module.exports = app => {
      const { router, jsonp, controller } = app;
      const jsonp = jsonp();
      router.get("/", jsonp, controller.main.getlist)
  }
  
 方法1 // 如果希望用别的字段 也是可以的 但是需要去全局重新去配置 config.default.js
     config.jsonp = {
         callback: "callback",   //设置好的字段
         limit: 100  // 最大为100
     }
  

方法2： 在路由界面中进行配置覆盖
  
   module.exports = app => {
      const { router, jsonp, controller } = app;
      const jsonp = jsonp();
      router.get("/", jsonp({callback: 'callback'}), controller.main.getlist);
      router.get("/login", jsonp({callback: 'bv'}), controller.main.login);
  }
   
   
   # 默认情况下， jsonp 是不会对csrf 攻击进行防范的，这个就需要我们自己去配置 config.default.js
    config.jsonp = {
        callback: 'callback',
        csrf: true,  //  因为默认是开启xss防御的  csrf防御需要这样手动的去开启
        limit: 100,
        
        # 可以设置jsonp的访问地址的白名单，可以使字符串， 数组，或者正则表达式
        whiteList: [ '.com', '.cm' ],  
        whiteList: '.com',
        whiteList: /^https?:\/\/test.com\//,
    };
```