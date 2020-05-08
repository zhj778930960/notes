# Express

#### 主要是集合下面几个内容，形成的一个框架， 可以用于快速开发

1. `Node.js`不需要依赖第三方应用软件（`Apache`）, 可以基于`api`自己实现
2. 实现静态资源服务器
3. 路由处理
4. 动态网站
5. 模板引擎
6. `get`和`post`参数传参和处理

#### 安装和简单入门

1. 如何安装`express`?

   - 创建一个文件夹，名字不能是`express`, 因为在初始化的时候，`package.json`会使用文件名，当项目名字，这个时候去安装`express`会报错，因为重复了。

   - 进入创建好的文件夹，执行下面的命令

     ```javascript
     npm init -y  //生成一个package.json文件，其实就是初始化一个项目
     ```

   - 用命令安装`express`

     ```javascript
     npm install express --save //将express包 安装到当前项目下
     ```

2.  基本使用

   ```javascript
   const express = require("express"); //返回的express是一个方法
   const app = express(); //express内部有很多封装好的方法，例如 on  off 等等
   
   //上面两行可以简化为 下面
   const app = require("express")();
   
   
   //开启一个服务器  这个其实就是只是在监听跟路径的这个路由。如果你换了一个路由 变成了/a  就不行了。所以这个方法就只是监听一个路由（接口） 如果有其他接口的话 ，就需要增加一个app.get（）方法
   
   
   增  -----------------------   app.post("url", (req, res) => { })
   删  -----------------------   app.delete("url", (req, res) => { })
   改  -----------------------   app.put("url", (req, res) => { })
   查  -----------------------   app.get("url", (req, res) => { })
   
   
   
   app.get("/",(req, res) => {
       //这个就是一个get方式的接口  / 根路径这个路由， 也可以说是接口（前端说的接口， 其实就是路由）
       res.send("xxx")
   });
   
   //启动服务器
   //设置端口号(默认为8080)，和ip地址（默认为localhost）， 还有一个回调函数
app.listen(3000, "192.168.1.143", () => {
        //启动成功了
   })；
   
   //最后使用 node xxx 来启动文件就可以了
   node index.js
   ```
   
   

**注意：**  `app.get("路由")`其实就是监听一个接口，如果不是监听的接口，就回显示Cannot GET ， 所以当有多个接口的时候，就需要写入多可`app.get()`

   

