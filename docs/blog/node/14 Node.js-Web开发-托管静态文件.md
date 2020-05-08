# Express   托管静态文件

####          其实就是开放（托管）一个目录给前端， 前端可以直接访问，这个目录下的所有的问件， 这些文件都属于静态资源， 一般用于前端在下载，导出，文件的时候，可以直接使用这个接口（路由）。

####       `express.static()`托管静态文件

1.  如何使用？如下：

   ```javascript
   const express = require("express"); //先导入express
   
   const app = express(); //获取到express()中所有的方法
   
   //先启动服务
   
   app.listen(3000, "自己的ip地址", () => {
       //启动成功了
   })
   
   app.use(express.static("所需要访问到的文件所在的目录路径"))；//需要注意的是，这里的路径是根据服务启动时，启动服务时，文件的相对路径，如果服务在另一个文件启动，这个时候，需要提供的就是一个绝对路径
   
   //例如启动的是一个index.js  则目录要与index.js在同一级的情况下，可以这么使用
   app.use(express.static("public"));//public 与 index.js 在同一级
   
   
   //如上述代码， 在浏览器访问文件的时候 直接输入如下文件路径
   
   http:// 服务器ip+port/xxx文件   例如： http://localhost:3000/index.html  就可以了
   
   
   服务器就直接会在pulic目录下去找，你需要的文件，pulic这个路径不需要出现在url之中。
   
   
   ```

   

2.  `app.use()` 还接收一个虚拟路径的参数，其实就是后端人员在写接口的时候，自定义的接口罢了

   ```javascript
   app.use("/a/b/c", express.static("public"))；
   
   //在访问文件的时候，访问地址必须加上/a/b/c 这个路径，这个路径在服务器上是不存在的，这个就是后端给前端提供的一个接口，虚拟的路径 
   
   
   
   例如： http://localhost:3000/a/b/c/index.html
   
   ```

   

3.  因为上述代码中`public` 是一个相对路径，一般在使用的时候，最好使用绝对路径，这样在访问的时候，比较准确

     

   ```javascript
   const path = require("path");
   app.use("/a/b/c", express.static(path.join(__dianame, "public")));
   ```

   

4. 如果文件存在于不同目录下，我们都想去访问这些不同的目录，我们只需要，将`app.use()`方法多执行几次就好了。

   ```javascript
   app.use(express.static("public"));
   app.use(express.static("static"));
   ...
   ```

   

   