(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{334:function(t,s,n){"use strict";n.r(s);var a=n(33),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"服务-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务-service"}},[t._v("#")]),t._v(" 服务 Service")]),t._v(" "),n("ol",[n("li",[t._v("作用")])]),t._v(" "),n("ul",[n("li",[t._v("controller 是用于处理业务逻辑的，但是如果一个方法内的业务逻辑过多的话，会特别的臃肿，所以需要进行拆分，将多余的逻辑拆分到service里面，这样controller里面代码逻辑变的就更加的清晰")]),t._v(" "),n("li",[t._v("抽离出来的逻辑，可以被重复的使用，可以被多个controller使用")]),t._v(" "),n("li",[t._v("逻辑和业务分离，可以更好的进行代码测试")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("场景")]),t._v(" "),n("ul",[n("li",[t._v("当服务器返回的数据，需要处理之后在返回给controller的时候，就可以在service里面进行数据处理，计算完成之后，返回给controller；或者计算完成会后，提给数据库")])])]),t._v(" "),n("li",[n("p",[t._v("使用")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 在app 文件夹下创建service 文件夹，然后创建一个js文件\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 代码\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Service "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'egg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainService")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * @ctx 当前请求的上下文context 对象，跟koa中的是一样的，接口的参数，返回都可以从上面获取\n         * @app 当前应用 Application 对象的实例，我们可以拿到所有的全局方法和对象\n         * @service 定义好的service 层的数据，一般业务层的处理都在service, 这里我们就可以拿到service定义好得方法 等价于                                     this.ctx.service\n         * @config 应用时的配置项基本上就是，config.default.js  config.xxxhuanjing.js 结合起来的属性\n         * @logger logger 对象 有四个属性 debug, info, warn, error 四种不同的日志， 生成的日志会自动加上打印文件所在的路径\n         */")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 例如 连接数据库 然后查询数据库的值")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'select * from user where uid = ?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" user\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MainService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n # service  ctx 详解\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("curl   用于发起网络请求，如果是作为中间层的话，那么这里就可以访问后端的接口。\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("otherService 调用其他的service  otherService 就是其他服务的名称。\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db  发起数据库的调用，db这个 需要数据库的插件，将数据库先绑定到这个变量上，这样才可以使用。\n   \n   \n   \n   \n   \n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);