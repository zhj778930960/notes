(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{507:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ol",[n("li",[n("p",[s._v("为什么要使用插件？？")]),s._v(" "),n("ul",[n("li",[s._v("中间件加载其实是有先后顺序的，但是中间件自身缺无法管理这种顺序，只能交给使用者，这样其实不友好，一旦顺序不对，结果可能有天壤之别")]),s._v(" "),n("li",[s._v("中间件的定位是拦截用户请求，并在它前后做一些事情，例如：鉴权，安全检查，访问日志等等，但实际情况是，有些功能是和请求无关的，例如：定时任务，消息订阅，后台逻辑等等。")]),s._v(" "),n("li",[s._v("有些功能包含非常复杂的初始化逻辑，需要在应用启动的时候完成，这显然也不适合放到中间件去实现。")])])]),s._v(" "),n("li",[n("p",[s._v("插件")]),s._v(" "),n("ul",[n("li",[s._v("包含了service, 中间件，配置，框架扩展等等。")]),s._v(" "),n("li",[s._v("没有独立的Router和Controller")]),s._v(" "),n("li",[s._v("没有"),n("code",[s._v("plugin.js")]),s._v(" 只能声明跟其他插件的依赖，而不能决定其他插件的开启与否。")])])]),s._v(" "),n("li",[n("p",[s._v("使用(外置插件)")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 需要去安装对应的插件  例如 egg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ejs\n   npm install egg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("view"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ejs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save\n   \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 需要将插件引入到plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js 中\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//plugin.js")]),s._v("\nejs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    enable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启插件，默认是开启的")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'egg-view-ejs'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插件的名称")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 如果插件需要进行全局的配置，那么，就需要去config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js中进行配置\n   插件本身都有自己的配置，这里可以用于覆盖插件自身的配置\n\n  config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("view "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      mapping"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.html'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ejs'")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 这里就是ejs模板 配置是以html结尾的文件")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("配置插件的参数介绍")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//plugin.js")]),s._v("\nejs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    enable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启插件，默认是开启的  false 是不开启")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'egg-view-ejs'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm 模块名称    通过npm 模块的形式引入插件 这个插件一般属于成熟的插件，发布的")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 插件的绝对路径，与package是互斥的，有你没我  这里主要用于本项目内没有完成，或者没有发布的一些插件，所以这里用路径获取")]),s._v("\n    env"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动这个插件的环境，会覆盖插件自身的package.json中的配置  ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("内置插件列表")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("onerror       统一异常处理\nSession       Session 实现\ni18n          多语言\nwatcher       文件和文件夹监控\nmultipart     文件流式上传\nsecurity      安全\ndevelopment   开发环境配置\nlogrotator    日志切分\nschedule      定时任务\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v("        静态服务器\njsonp         jsonp 支持\nview          模板引擎\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);