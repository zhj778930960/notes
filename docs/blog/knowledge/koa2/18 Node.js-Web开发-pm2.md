

# `pm2`

1. 什么是`pm2`?
   - `pm2`是一个进程管理器，用于管理`Node.js`应用程序的进程，
   - `pm2`有许多的功能，例如负载均衡，程序集群管理等
   
2. 为什么使用`pm2`?
   - 在平时的开发当中，我们使用`nodemon`来启动项目，`nodemon `在我们改动项目代码的时候，可以自动的更新界面，有效的提高我们的开发效率。
   - 但是在生产环境中，我们是不需要这么做的，代码更改比较频繁，不能一改就直接更新生产上的代码。
   - 还有就是`nodemon`工具，无法自动重启，无法进行负载均衡，因为线上项目，如果出错，没有自动重启的功能的话，就不能继续访问，这样就是个大问题。
   - `pm2`可以进行负载均衡，和自动重启等功能。
   - `pm2`还可以实现多进程，日志功能
   
3. 如何使用？

   - 安装`pm2`   一般用于生产环境的配置，所以需要全局安装

     ```javascript
     npm install pm2 -g
     ```

   - 生成配置文件，并且配置对应的属性和配置

     ```javascript
     /*这里就需要执行官方提供的生成配置文件的方法, 
     运行下面的命令，可以生成一个ecosystem.congfig.js*/
     
       pm2 ecosystem  
       
     //我们来看看，生成的文件中，具体有哪些配置，我们需要如何去配置我们的启动文件
       
     //这里就是用上述命令生成的配置文件  
     
     module.exports = {
       apps: [
         //生产环境
         {
           name: "zhj", //环境名称
           script: "./bin/www", //启动脚本，也就是启动文件所在的路径
           args: "", //传递给脚本的参数
           watch: true, //监听重启，启用的情况下，当文件或者文件夹下产生了变化，应用将自动重启  与在命令中使用--watch 是一样的
           ignore_watch: ["node_modules"], //忽略监听的文件，或者目录， 数组中的文件或者目录是不在监听范围内的
           exec_mode: "fork", //应用启动模式，有两种模式 cluser集群和fork多进程 默认为fork
           instance: 1, //仅在cluster 模式下有效，应用启动实例个数
           max_memory_restart: "3G", //最大内存限制，当超过这个内存的时候，将会自动重启
           error_file: "./logs/error.log", //错误输出日志
           out_file: "./logs/app.log", //日志输出的文件
           env: {
             NODE_ENV: "production", //production代表生产环境，development代表开发环境  可以从process.env.NODE_ENV访问到这个属性
             ID: 43, //可以设置这个环境的id
           }, //环境变量
           log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定日志输出的日期的格式
           min_uptime: "60s", //当应用运行的时间小于设置的数值的时候，将认为是异常启动
           max_restarts: 10000, //最大异常启动次数，即运行时间小于min_uptime设置的时间的重启次数
           autorestart: true, //默认为true, 当发生故障的时候自动重启
           restart_delay: 100, //异常重启的情况下，延迟重启的时间
           
         },
     
         //开发环境
         {
           name: "zhj1111", //环境名称
           script: "./bin/www", //启动脚本，也就是启动文件所在的路径
           args: "", //传递给脚本的参数
           watch: true, //监听重启，启用的情况下，当文件或者文件夹下产生了变化，应用将自动重启 与在命令中使用--watch 是一样的
           ignore_watch: ["node_modules"], //忽略监听的文件，或者目录， 数组中的文件或者目录是不在监听范围内的
           exec_mode: "fork", //应用启动模式，有两种模式 cluser集群和fork多进程 默认为fork
           instance: 1, //仅在cluster 模式下有效，应用启动实例个数
           max_memory_restart: "3G", //最大内存限制，当超过这个内存的时候，将会自动重启
           error_file: "./logs/error.log", //错误输出日志
           out_file: "./logs/app.log", //日志输出的文件
           env: {
             NODE_ENV: "development", //production代表生产环境，development代表开发环境 可以从process.env.NODE_ENV访问到这个属性
             ID: 44, //可以设置这个环境的id
           }, //环境变量
           log_date_format: "YYYY-MM-DD HH:mm:ss", // 指定日志输出的日期的格式
           min_uptime: "60s", //当应用运行的时间小于设置的数值的时候，将认为是异常启动
           max_restarts: 10000, //最大异常启动次数，即运行时间小于min_uptime设置的时间的重启次数
           autorestart: true, //默认为true, 当发生故障的时候自动重启
           restart_delay: 100, //异常重启的情况下，延迟重启的时间
         },
       ],
     
       //自动化部署项目 配合nginx
       deploy: {
         production: {
           user: "SSH_USERNAME",
           host: "SSH_HOSTMACHINE",
           ref: "origin/master",
           repo: "GIT_REPOSITORY",
           path: "DESTINATION_PATH",
           "pre-deploy-local": "",
           "post-deploy":
             "npm install && pm2 reload ecosystem.config.js --env production",
           "pre-setup": "",
         },
       },
     };
     
       
     ```

4. `pm2`的常用命令

   ```javascript
   1. 启动 启动配置文件， 这样会将上述两个环境同时启动，所以在启动后看到的表格会有两个数据
      pm2 start ecosystem.config.js 
      pm2 start all  //也可以同时启动配置好的所有的环境
      
      //如何只启动其中一个环境呢  这样在命令中需要加入 --only name  命令 name为配置好的环境名称
      pm2 start ecosystem.config.js --only zhj   //这样就只启动zhj环境，在启动后只看到一条在启动
      pm2 start 0  //也可以这么启动，启动的就是配置好的第一个环境，同理1是第二个
      
   2. 停止  停止环境的运行stop
     pm2 stop ecosystem.config.js //会将正在运行的所有的环境都停止掉  同理如何只停止一个呢？
     pm2 stop all  //停止所有的环境   
   
     pm2 stop zhj  //直接停止对应名称的环境也是可以的
     pm2 stop  0   // id 为0 的环境，也是可以这么使用进行停止的
     
     
   3. 重启  重启环境  restart
   
      pm2 restart ecosystem.config.js  //重启所有的环境
      pm2 restart all //同理重启所有环境
      
      pm2 restart zhj //指定name  重启对应的环境
      
      pm2 restart 0  //id 为 0的环境，重启环境
   
   4. 删除  删除环境  delete
      //删除所有环境 
      pm2 delete ecosystem.config.js
      pm2 delete all
   
      //删除单个  利用id 或者 name
      pm2 delete zhj
      pm2 delete 0
   
   5. 其他的使用方法
   
      //查看日志
     pm2 logs/log
     pm2 logs zhj
     pm2 logs 0
   
     //查看实时的仪表板
     pm2 monit
     
     //监视和带有诊断系统的跨服务器
     pm2 plus
     
     
    
    还有一些别的方法 暂时就不在这里介绍了 可以看看官方网站
    https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/
   
   ```

   