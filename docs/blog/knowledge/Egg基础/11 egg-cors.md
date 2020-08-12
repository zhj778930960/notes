# egg-cors 跨域设置

1.  安装

   ```javascript
   npm install egg-cors --save
   ```

   

2. 配置

   ```javascript
   // plugin.js
    cors: {
       enable: true,
       package: 'egg-cors',
    },
       
       
   // config.{env}.js
     config.cors = {
         origin: '*',   # 代表任何网站都可以访问
         allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'  # 代表这些访问方式都是可以的
     }
   ```

   