# egg目录结构

1. 目录结构介绍  

   ```javascript
   - 项目名称
      - app
        - router.js   # 配置URL路径
        
        - controller  # 处理业务逻辑，处理后返回相应的结果
           - xxx.js   # 具体处理业务逻辑的js文件
           
        - service     # 抽象层，像业务逻辑中公用的处理部分，可以抽离出来，或者封装，放置到这个文件夹去调用   可以将数据库获取数据的方法写入这里
           - xxx.js   # 具体的公用业务逻辑代码
           
        - middeware   # 编写中间件
           - xxx.js   # 具体的中间件逻辑
   
        - schedule    # 定时任务
           - xxx.js   # 具体定时任务代码逻辑
           
        - public      # 静态资源地址，像css, 图片，文档等都可以放置到这里
           - xxx.css   
        
        - views       # 放置模板文件，由模板插件约定，什么格式的模板插件，就放置什么格式的文件
           - xxx.tpl  # 模板文件
           
        - extend      # 扩展  可以分别对下面五个属性进行扩展，下面五个文件，就对应内置五个对象，启动时会与内置对象的prototype进行合并
           - helper.js
           - context.js
           - request.js
           - response.js
           - application.js
      - config        # 环境配置文件， 当前环境的不同，启动的时候，就会启动不同的文件
        - plugin.js              # 插件
        - config.default.js      # 默认配置文件
        - config.prod.js         # 生产环境配置文件，当与默认配置属性相同时，会覆盖掉默认配置的属性
        - config.test.js         # 测试环境配置文件，当与默认配置属性相同时，会覆盖掉默认配置的属性
        - config.local.js        # 本地环境配置文件，当与默认配置属性相同时，会覆盖掉默认配置的属性
        - config.unittest.js     # 单元测试环境配置文件，当与默认配置属性相同时，会覆盖掉默认配置的属性
        
      - test         # 单元测试
        - middware
        - controller 
   ```

   

 