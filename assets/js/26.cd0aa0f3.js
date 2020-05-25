(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(n,s,t){"use strict";t.r(s);var a=t(33),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"nginx环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx环境搭建"}},[n._v("#")]),n._v(" "),t("code",[n._v("Nginx")]),n._v("环境搭建")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("什么是"),t("code",[n._v("nginx")]),n._v(" ？")]),n._v(" "),t("ul",[t("li",[t("p",[n._v("就是一个轻量的"),t("code",[n._v("http")]),n._v("服务器， 和反向代理服务器，也可以作为邮件代理服务器")]),n._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[n._v("什么是反向代理：\n   反向代理方式是指以代理服务器来接受 internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet请求连接的客户端，此时，代理服务器，就表现或者称之为一个反向代理\n   \n   \n   个人理解： 比如我们去一个餐馆吃饭，我们是客户（客户端）， 厨师（服务器），服务员（反向代理服务器），我们点菜的时候，就是通知服务员，然后服务员通知厨师，上菜的时候，厨师通知服务员，服务员又端给我们\n             点菜                菜单\n     客户  "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("》  服务员  "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("》  厨师\n              菜                 上菜\n     厨师  "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("》  服务员  "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("》  客户\n     \n     \n     这样就是客户（客户端）根本就不知道 做菜的厨师（服务器）是那一个， 只知道服务员（nginx）\n     \n     \n 正向代理就相反：  服务器根本不知道具体是哪个客户在访问，只知道是从跳板（正向服务器）代理过来的， 用户是知道我当前是访问的那个服务器\n")])])])]),n._v(" "),t("li",[t("p",[n._v("采用事件驱动的异步非阻塞的处理方式框架")])]),n._v(" "),t("li",[t("p",[n._v("有极好的"),t("code",[n._v("I/O")]),n._v("性能")])]),n._v(" "),t("li",[t("p",[n._v("时长用于服务器端的反向代理和负载均衡")])])])]),n._v(" "),t("li",[t("p",[n._v("好处？")]),n._v(" "),t("ul",[t("li",[n._v("支持海量高并发，支持50000左右的高并发")]),n._v(" "),t("li",[n._v("内存消耗少，可以省钱，省服务器")]),n._v(" "),t("li",[n._v("免费，可以进行商业化")]),n._v(" "),t("li",[n._v("配置文件简单，易上手")])])]),n._v(" "),t("li",[t("p",[n._v("如何搭建"),t("code",[n._v("nginx")]),n._v("环境?")]),n._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1.")]),n._v(" 下载\n   www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("org   "),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//免费版的访问地址  可以下载stable 稳定版")]),n._v("\n   \n   windows下  下载一个zip的压缩包\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2.")]),n._v(" 安装 \n   windows 直接解压nginx的安装包，解压出来后，就可以直接用了。\n   linux 下 需要编译，和搭建环境，比较复杂\n   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3.")]),n._v(" 启动\n   vscode打开nginx文件夹，然后运行命令 start nginx \n \n   或者直接打开nginx 文件夹 直接运行其中的nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("ext 启动文件就行了\n   \n   在浏览器打开localhost"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v("  \n   如果出现welcome to nginx 就代表安装好了\n   \n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4.")]),n._v(" 关闭\n   \n    方法"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("：在资源管理器中，直接kill调nginx 进程，简单粗暴  不推荐\n    方法"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v("： 在nginx 文件夹下，vscode打开，cmd模式下，运行命令 nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("s stop 快速停止\n    方法"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("： cmd 直接打开到nginx文件夹下，运行 nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("s stop 命令\n  \n")])])])]),n._v(" "),t("li",[t("p",[t("code",[n._v("nginx")]),n._v("常用命令")])])]),n._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1.")]),n._v(" windows 下 可以先将nginx所在路径配置到环境变量"),t("span",{pre:!0,attrs:{class:"token constant"}},[n._v("PATH")]),n._v("里面 这样能全局访问了，不用进入到文件内才输入命令\n  # 右键我的电脑"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v(" 高级设置"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v(" 环境变量"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("系统变量Path "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v(" 新建  "),t("span",{pre:!0,attrs:{class:"token constant"}},[n._v("E")]),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v("\\nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1.18")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v(".0")]),n._v("\n  \n  # 以下命令无#号  #号只是代表是注释\n  \n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("2.")]),n._v(" 查看nginx 版本号\n  # nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("v\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("3.")]),n._v(" 启动nginx\n  # start nginx\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("4.")]),n._v(" 关闭nginx\n   # nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("s stop 强制退出\n   # nginx\n \n"),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("5.")]),n._v(" 重加载nginx\n   # nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("s reload\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);