(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{508:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ol",[n("li",[s._v("作用")])]),s._v(" "),n("ul",[n("li",[s._v("controller 是用于处理业务逻辑的，但是如果一个方法内的业务逻辑过多的话，会特别的臃肿，所以需要进行拆分，将多余的逻辑拆分到service里面，这样controller里面代码逻辑变的就更加的清晰")]),s._v(" "),n("li",[s._v("抽离出来的逻辑，可以被重复的使用，可以被多个controller使用")]),s._v(" "),n("li",[s._v("逻辑和业务分离，可以更好的进行代码测试")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[s._v("场景")]),s._v(" "),n("ul",[n("li",[s._v("当服务器返回的数据，需要处理之后在返回给controller的时候，就可以在service里面进行数据处理，计算完成之后，返回给controller；或者计算完成会后，提给数据库")])])]),s._v(" "),n("li",[n("p",[s._v("使用")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 在app 文件夹下创建service 文件夹，然后创建一个js文件\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 代码\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'use strict'")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Service "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'egg'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MainService")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Service")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n         * @ctx 当前请求的上下文context 对象，跟koa中的是一样的，接口的参数，返回都可以从上面获取\n         * @app 当前应用 Application 对象的实例，我们可以拿到所有的全局方法和对象\n         * @service 定义好的service 层的数据，一般业务层的处理都在service, 这里我们就可以拿到service定义好得方法 等价于                                     this.ctx.service\n         * @config 应用时的配置项基本上就是，config.default.js  config.xxxhuanjing.js 结合起来的属性\n         * @logger logger 对象 有四个属性 debug, info, warn, error 四种不同的日志， 生成的日志会自动加上打印文件所在的路径\n         */")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" logger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 例如 连接数据库 然后查询数据库的值")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("query")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'select * from user where uid = ?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MainService"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n # service  ctx 详解\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("curl   用于发起网络请求，如果是作为中间层的话，那么这里就可以访问后端的接口。\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("otherService 调用其他的service  otherService 就是其他服务的名称。\n   "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db  发起数据库的调用，db这个 需要数据库的插件，将数据库先绑定到这个变量上，这样才可以使用。\n   \n   \n   \n   \n   \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);