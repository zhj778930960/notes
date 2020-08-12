# nodemailer 发送邮件

1. 安装

   ```javascript
   npm install nodemailer --save
   ```

   

2. 使用

   ```javascript
   const Koa = require("koa");
   const app = new Koa();
   const router = require("koa-router")();
   const bodyparser = require("koa-bodyparser");
   const fs = require("fs");
   //引入发送邮件的插件
   
   const nodemailer = require("nodemailer");
   
   app.use(bodyparser());
   
   //配置基本的邮箱信息，发送者邮箱信息的配置，需要用到pop3/smtp 的验证码。这样就是免密登陆邮箱，直接就可以用这个邮箱给想要  给某个邮箱发送地址
   /**
   授权码是QQ邮箱推出的，用于登录第三方客户端的专用密码。
   适用于登录以下服务：POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务。
   */
   const transport = nodemailer.createTransport({
        service: "qq", //配置发送邮箱是哪个邮箱，这里以QQ邮箱为发送邮箱
        hosts: "", //SMTP的地址
        port: 465, //SMTP 对应的端口号  如果smtp的端口号改变了 这里就要跟着改变
        auth: {
            user: "778930960@qq.com", //发送者所使用的邮箱，必须开通SMTP服务，才可以，在QQ邮箱的设置中，可以去开启，开启之后有一个16位的密匙，这里需要用到
            pass: "yqraxjurzpxabfee" //这里就是16位的密匙
        }
   })
   
   
   router.get("/emil", async (ctx, next) => {
        /**配置要发送的邮箱，接收的邮箱地址，邮件标题，邮件内容（text, html两种模式，只能选其中一个）,  还有附件配置
        */
         
       let meilOptions = {
            from: "778930960@qq.com", // 从这个邮箱发送邮件，这个必须与transport中的auth.user相同
            to: "778930960@qq.com，2860020786@qq.com", //要发送到的邮件地址，可以有多个，多个以逗号隔开就可以了
            subject: "你好，我是邮件的标题", //邮件的标题
            text: "我是邮件的内容",  //这里是邮件的内容，是纯文本。如果需要使用样式，就需要使用html模式
            html: "<p>我是html格式邮件内容</p>"， //这里你可以读取某个文件的内容放入到这里，比如你读取文件流的方式将文件的内容放置到这里
            html: fs.createReadStream("./index.html"), //读取文件流
            
            //配置附件
            attachments: [
                 {
                     filename: "xxx.png", //文件名称和后缀
                     path: "./1.png", //文件所在的地址
                 },
                 {
                     filename: "xxx.json",
                     content: "123" //可以生成一个附件，并且给里面写入内容
                    
                 }
            ]
       }
       
       //调用发送函数
              transport.sendMail(meilOptions, async (err, info) => {
                   //发送成功之后的回调函数
              })
              
   })
   
   
   app.listen(3000);
   app.use(router.routes()).use(router.allowedMethods());
   
   ```

   

