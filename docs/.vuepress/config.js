module.exports = {
  head: [
    [
      "link",
      { rel: "shortcut icon", href: `./favicon.ico` },
    ],
  ],
  base: "/notes/", // 站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束，
  title: "相得益张", // 网站的标题
  description: "相得益张--学习记录", //网站的描述
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/",
    // 自定义仓库链接文字。
    repoLabel: "My GitHub",
    nav: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/blog/node/1 Node.js基础-环境安全配置" },
    ],
    displayAllHeaders: true,
    sidebarDepth: 3,
    sidebar: [
      {
        title: "首页", // 必要的
        path: "/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
      },
      {
        title: "Node",
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
        children: [
          "../blog/nginx/1 Nginx 环境搭建.md",
          "../blog/nginx/2 Nginx 配置文件.md",
          "../blog/nginx/3 Nginx 主要应用.md",
        ],
      },
    ],
  },
};
