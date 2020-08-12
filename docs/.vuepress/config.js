module.exports = {
  base: "/notes/", // 站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束，
  title: "相得益张", // 网站的标题
  description: "相得益张--学习记录", //网站的描述
  dest: '/dist/', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
  head: [
    ["link", { rel: "icon", href: '/favicon.ico' }],
  ],
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/zhj778930960/notes",
    // 自定义仓库链接文字。
    repoLabel: "My GitHub",
    nav: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/blog/node/1 Node.js基础-环境安全配置" },
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Node",
        sidebarDepth: 3, // 可选的, 默认值是 1
        children: [
          "../blog/node/1 Node.js基础-环境安全配置.md",
          "../blog/node/2 Node.js基础-全局成员概述.md",
          "../blog/node/3 Node.js基础-初识模块化.md",
          "../blog/node/4 Node,js基础-模块成员导出详情.md",
          "../blog/node/5 Node.js基础-ES6.md",
          "../blog/node/6 Node.js基础-Buffer.md",
          "../blog/node/7 Node.js基础-路径操作.md",
          "../blog/node/8 Node.js基础-异步IO.md",
          "../blog/node/9 Node.js基础-核心模块fs.md",
          "../blog/node/10 Node.js基础-npm使用.md",
          "../blog/node/11 Node.js-Web开发-静态资源服务器.md",
          "../blog/node/12 Node.js-Web开发-基础-动态服务器.md",
          "../blog/node/13 Node.js-Web开发-Express.md",
          "../blog/node/14 Node.js-Web开发-托管静态文件.md",
          "../blog/node/15 Node.js-Web开发-路由.md",
          "../blog/node/16 Node.js-Web开发-中间件.md",
        ],
      },
      {
        title: "Node进阶",
        sidebarDepth: 3,
        children: [
          "../blog/node进阶/Buffer 缓冲.md",
          "../blog/node进阶/DNS解析.md",
          "../blog/node进阶/process 进程.md",
          "../blog/node进阶/浅谈 Node.js 模块机制及常见面试问题解答.md",
          "../blog/node进阶/浅谈IO.md",
          "../blog/node进阶/浅谈内存和V8垃圾回收机制.md",
        ],
      },
      {
        title: "Koa2",
        sidebarDepth: 3,
        children: [
          "../blog/koa2/1 Node.js-Web开发-supervisor & nodemon.md",
          "../blog/koa2/2 Node.js-Web开发-MongoDb数据库.md",
          "../blog/koa2/3 Node.js-Web开发-Koa2框架.md",
          "../blog/koa2/4 Node.js-Web开发-Koa2路由.md",
          "../blog/koa2/5 Node.js-Web开发-Koa2中间件.md",
          "../blog/koa2/6 Node.js-Web开发-koa-bodyparser.md",
          "../blog/koa2/7 Node.js-Web开发-Static静态资源.md",
          "../blog/koa2/8 Node.js-Web开发-art-template.md",
          "../blog/koa2/9 Node.js-Web开发-Cookie.md",
          "../blog/koa2/10 Node.js-Web开发-Session.md",
          "../blog/koa2/11 Node.js-Web开发-Koa封装Mongodb.md",
          "../blog/koa2/12 Node.js-Web开发-Koa脚手架.md",
          "../blog/koa2/13 Node.js-Web开发-mongoose操作数据库mongodb.md",
          "../blog/koa2/14 Node.js-Web开发-上传文件@koamulter.md",
          "../blog/koa2/15 Node.js-Web开发-发送邮件nodemailer.md",
          "../blog/koa2/16 Node.js-Web开发-redis.md",
          "../blog/koa2/17 Node.js-Web开发-ioredis.md",
          "../blog/koa2/18 Node.js-Web开发-pm2.md",
        ],
      },
      {
        title: "Nginx",
        sidebarDepth: 3,
        children: [
          "../blog/nginx/1 Nginx 环境搭建.md",
          "../blog/nginx/2 Nginx 配置文件.md",
          "../blog/nginx/3 Nginx 主要应用.md",
        ],
      },
      {
        title: "TypeScript",
        sidebarDepth: 3,
        children: [
          "../blog/TypeScript/1 基础类型.md",
          "../blog/TypeScript/2 接口.md",
          "../blog/TypeScript/3 类.md",
          "../blog/TypeScript/4 函数.md",
          "../blog/TypeScript/5 泛型.md",
          "../blog/TypeScript/6 枚举.md",
          "../blog/TypeScript/7 装饰器.md",
          "../blog/TypeScript/8 类型推论.md",
        ],
      },
      {
        title: "Egg基础",
        sidebarDepth: 3,
        children: [
          "../blog/Egg基础/1 egg.js介绍和环境搭建.md",
          "../blog/Egg基础/2 egg.js 目录结构.md",
          "../blog/Egg基础/3 路由Router.md",
          "../blog/Egg基础/4 控制器Controller.md",
          "../blog/Egg基础/5 服务Service.md",
          "../blog/Egg基础/6 插件.md",
          "../blog/Egg基础/7 定时任务.md",
          "../blog/Egg基础/8 扩展.md",
          "../blog/Egg基础/9 自定义启动项.md",
          "../blog/Egg基础/10 egg-mongoose.md",
          "../blog/Egg基础/11 egg-cors.md",
          "../blog/Egg基础/12 egg-jwt.md",
        ],
      },
      {
        title: "HTTP协议",
        sidebarDepth: 3,
        children: [
          "../blog/HTTP协议/1 web及网络基础.md",
          "../blog/HTTP协议/2 简单的HTTP协议.md",
        ]
      },
      {
        title: "Css",
        sidebarDepth: 3,
        children: [
          "../blog/Css/1 Grid 网格布局.md",
        ]
      },
      {
        title: "JS-questions",
        sidebarDepth: 3,
        children: [
          "../blog/JS-题目/1 手写new的过程.md",
          "../blog/JS-题目/2 手写一个节流函数.md",
          "../blog/JS-题目/3 手写一个防抖函数.md",
          "../blog/JS-题目/4 JS的数据结构.md",
          "../blog/JS-题目/5 JS事件流.md",
          "../blog/JS-题目/6 深拷贝和浅拷贝.md",
          "../blog/JS-题目/7 继承.md",
          "../blog/JS-题目/8 设计模式.md",
        ]
      },
      {
        title: "HTTP-questions",
        sidebarDepth: 3,
        children: [
          "../blog/HTTP-题目/1 HTTP缓存机制.md",
          "../blog/HTTP-题目/2 HTTP 状态码.md",
        ]
      },
      {
        title: "Vue-questions",
        sidebarDepth: 3,
        children: [
          "../blog/Vue-题目/1 Vue双向绑定原理.md",
          "../blog/Vue-题目/2 Diff算法.md",
          "../blog/Vue-题目/3 v-if 和 v-show的区别.md",
          "../blog/Vue-题目/4 为什么v-for 要用key.md",
          "../blog/Vue-题目/5 vue组件的生命周期.md",
          "../blog/Vue-题目/6 vue组件如何通信.md",
          "../blog/Vue-题目/7 描述组件渲染和更细的过程.md",
          "../blog/Vue-题目/8 v-model实现原理.md",
          "../blog/Vue-题目/9 vue父子组件传值.md",
          "../blog/Vue-题目/10 nextTick.md",
          "../blog/Vue-题目/11 slot.md",
          "../blog/Vue-题目/12 动态，异步组件.md",
          "../blog/Vue-题目/13 keep-alive.md",
          "../blog/Vue-题目/14 mixin.md",
          "../blog/Vue-题目/15 路由.md",
          "../blog/Vue-题目/16 data 为啥是一个函数.md",
        ]
      },
      {
        title: "浏览器-questions",
        sidebarDepth: 3,
        children: [
          "../blog/浏览器-题目/1 重绘和回流.md",
          "../blog/浏览器-题目/2 V8 引擎垃圾回收机制.md",
        ]
      },
    ],
  },
};
