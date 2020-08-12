# 服务 Service

1.  作用

   - controller 是用于处理业务逻辑的，但是如果一个方法内的业务逻辑过多的话，会特别的臃肿，所以需要进行拆分，将多余的逻辑拆分到service里面，这样controller里面代码逻辑变的就更加的清晰
   - 抽离出来的逻辑，可以被重复的使用，可以被多个controller使用
   - 逻辑和业务分离，可以更好的进行代码测试

2. 场景

   - 当服务器返回的数据，需要处理之后在返回给controller的时候，就可以在service里面进行数据处理，计算完成之后，返回给controller；或者计算完成会后，提给数据库

3. 使用

   ```javascript
   1. 在app 文件夹下创建service 文件夹，然后创建一个js文件
   
   2. 代码
     'use strict'
    const Service = require('egg').Service;
    class MainService extends Service {
        async find(){
           /**
            * @ctx 当前请求的上下文context 对象，跟koa中的是一样的，接口的参数，返回都可以从上面获取
            * @app 当前应用 Application 对象的实例，我们可以拿到所有的全局方法和对象
            * @service 定义好的service 层的数据，一般业务层的处理都在service, 这里我们就可以拿到service定义好得方法 等价于                                     this.ctx.service
            * @config 应用时的配置项基本上就是，config.default.js  config.xxxhuanjing.js 结合起来的属性
            * @logger logger 对象 有四个属性 debug, info, warn, error 四种不同的日志， 生成的日志会自动加上打印文件所在的路径
            */
            const { ctx, app, service, logger, config } = this;
            // 例如 连接数据库 然后查询数据库的值
            const user = await ctx.db.query('select * from user where uid = ?', uid);
            return user
        }
    }
   
     module.exports = MainService;
   
    # service  ctx 详解
      this.ctx.curl   用于发起网络请求，如果是作为中间层的话，那么这里就可以访问后端的接口。
      this.ctx.service.otherService 调用其他的service  otherService 就是其他服务的名称。
      this.ctx.db  发起数据库的调用，db这个 需要数据库的插件，将数据库先绑定到这个变量上，这样才可以使用。
      
      
      
      
      
   ```

   



