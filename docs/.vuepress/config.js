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
      { 
        text: "目录", 
        items: [
          { text: 'Node', link: '/blog/knowledge/node/1 Node.js基础-环境安全配置.md' },
          { text: 'Node进阶', link: '/blog/knowledge/node进阶/Buffer 缓冲.md' },
          { text: 'Koa2', link: '/blog/knowledge/koa2/1 Node.js-Web开发-supervisor & nodemon.md' },
          { text: 'Egg基础', link: '/blog/knowledge/Egg基础/1 egg.js介绍和环境搭建.md' },
          { text: 'Nginx', link: '/blog/knowledge/nginx/1 Nginx 环境搭建.md' },
          { text: 'TypeScript', link: '/blog/knowledge/TypeScript/1 基础类型.md' },
          { text: 'Css', link: '/blog/knowledge/Css/1 Grid 网格布局.md' },
          { text: 'HTTP协议', link: '/blog/knowledge/1 web及网络基础.md' }
        ]
      },
      { 
        text: "题目", 
        items: [
          { text: 'JS', link: '/blog/questions/JS-题目/1 手写new的过程.md' },
          { text: 'HTTP', link: '/blog/questions/HTTP-题目/1 HTTP缓存机制.md' },
          { text: 'Vue', link: '/blog/questions/Vue-题目/1 Vue双向绑定原理.md' },
          { text: '浏览器', link: '/blog/questions/浏览器-题目/1 重绘和回流.md' }
        ]
      },
    ],
    displayAllHeaders: true
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
};
