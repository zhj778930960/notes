# Mongoose

1.  安装

   ```javascript
   npm install egg-mongoose --save
   ```

2. 配置

   ```javascript
   1. 在插件文件 plugin 中开启插件
     mongoose: {
         enable: true,    // 是否开启插件
         package: 'egg-mongoose',   // 是哪个插件，指明插件的位置
     },
         
         
   # 前提是数据库有开启，并且有对应名称的数据库存在
   2. 去 config.default.js  或者  config.{env}.js 中去配合mongoose的一些属性
     config.mongoose = {
         url: 'mongodb://127.0.0.1:27103/egg-db', # egg-db 是我自己创建的数据库的名称
         options: {
            useUnifiedTopology: true, # 这个必须加上，不然连接数据库会报错，并且连接不上
         },
     }
     
   ```

   

3. 使用

   ```javascript
   # 在egg 中使用mongoose 配置完成后  使用的顺序如下
   //1. 去model 文件夹下创建 文件，所有的接口的数据的增删改查，都放置到这个文件夹的文件里面  return 出一个模型，  # 配置schema 然后return model
      // app/model/main.js  建立一个模型，然后将这个模型导出，这样在service里面就可以对这个模型进行curd的操作了
    'use strict';
     module.exports = app => {
         const mongoose = app.mongoose;  // 这个其实就是congfig 里面去配置的时候，就挂载到app上了
         const Schema = mongoose.Schema;
         const UserSchema = new Schema({
             name: {
                 type: String,
                 required: true
             },
             password: {
                 type: String,
                 required: true
             }
         },{
             timestamps: true,  // 这样就是给新增的每一条数据，都加上一个时间戳
         });
         return mongoose.model("User", UserSchema, 'use');
     }
   
   
   
   2. 在service 里面加入文件，去调用model里面的数据模型去获取数据 然后return
      // app/service/main.js
      'use strict';
      const Service = require('egg').Service;
      class MainService extends Service {
          async finItem(){
              const { ctx } = this;
              const res = await ctx.model.Main.find({});   # 调用model中的main的文件中的模型，注意： 此时的Main 首字母需要大写，find是mongodb的固定查询数据的写法， find({}) 代表查询所有数据
              return res
          }
      }
      module.exports = MainService;
   
   3. 最后，在controller文件夹内部的文件的方法中，就可以直接调用service里面的方法，去获取数据使用了
     // app/controller/main.js
     const Controller = require('egg').Controller;
     class MainController extends Controller {
         async findUser(){
             const { ctx } = this;
             const data = ctx.service.main,findItem();
             ctx.body = {
                 code: 0,
                 msg: "请求成功",
                 errorMsg: null,
                 object: data;
             }
         }
     }
     module.exports = MainController;
   
   4. 最后的最后，就需要在router.js中将路由加进去就可以了
   module.exports = app => {
       const { router, controller } = app;
       router.get('/user', controller.main.findUser)；
   }
   ```
   
4.  增删改查

    ```javascript
    # 增加数据
    // app/service/main.js
    
    'use strict';
    const Service = require('egg').Service;
    class MainService extends Service {
        // 查询多个
        async finItem(){
            const { ctx } = this;
            const res = await ctx.model.Main.find({});   # 调用model中的main的文件中的模型，注意： 此时的Main 首字母需要大写，find是mongodb的固定查询数据的写法， find({}) 代表查询所有数据
            return res
        }
        
        // 增加
        async createUser(name, password){
            const { ctx } = this;
            const res = await ctx.model,Main.create({ name, password });
            return res
        }
        
        // 删除
        async removeUser(id){
            const { ctx } = this;
            const res = await ctx.model.Main.remove({ id });
            return res
        }
        
        // 更新
        async updateUser({id, name, password }){
            const { ctx } = this;
            const res = await ctx.model.Main.update({id}, {name, password});
            return res
        }
       
    }
    ```

    



