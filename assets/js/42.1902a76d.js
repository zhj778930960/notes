(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{359:function(t,a,e){"use strict";e.r(a);var v=e(33),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"路径操作path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路径操作path"}},[t._v("#")]),t._v(" 路径操作path")]),t._v(" "),e("h4",{attrs:{id:"先require导入核心模块-var-path-require-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先require导入核心模块-var-path-require-path"}},[t._v("#")]),t._v(" 先"),e("code",[t._v("require")]),t._v("导入核心模块  "),e("code",[t._v("var path = require('path');")])]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("basename")]),t._v("  用法 "),e("code",[t._v("path.basename('/xxx/xxx/xxx.xxxx')")]),t._v("获取路径的最后一部分，如果最后一部分还是一个路径 那就是最后一个文件夹的名字")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/a/b/c")]),t._v(" 得到的就会是"),e("code",[t._v("c")]),t._v("这个目录名")]),t._v(" "),e("li",[e("code",[t._v("/a/b/c/d.txt")]),t._v("就回得到的是"),e("code",[t._v("d.txt")]),t._v("这个文件的全名加后缀")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("dirname")]),t._v("用法 "),e("code",[t._v("path.dirname('/xxx/xxx.xxxx')")]),t._v("获取路径，无论最后一个是文件还是目录，得到的都只有前面几部分的目录路径")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/a/b/c")]),t._v("得到的就是 "),e("code",[t._v("/a/b")])]),t._v(" "),e("li",[e("code",[t._v("/a/b/c/d.html")]),t._v("得到的就是"),e("code",[t._v("/a/b/c")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("extname")]),t._v("用法"),e("code",[t._v("path.extname('/xxx.xxxx')")]),t._v("获取文件的扩展名")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("/a/v/c.js")]),t._v(" 得到的就是"),e("code",[t._v(".js")]),t._v("这个扩展名称 如果有扩展名，就会返回扩展名")]),t._v(" "),e("li",[t._v("如果没有扩展名就会返回空， "),e("code",[t._v("/a/v/c")]),t._v("就会返回一个空值，其实就是是没有找到扩展名")]),t._v(" "),e("li",[e("code",[t._v(".txt")]),t._v("这种形式得到的扩展名也会是空字符串")])])]),t._v(" "),e("li",[e("p",[t._v("路径的格式化处理"),e("code",[t._v("format()")]),t._v("和"),e("code",[t._v("parse()")]),t._v("，我们先看"),e("code",[t._v("parse()")]),t._v("方法")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("path()")]),t._v("是将路径或者路径+名称，转换为对象的形式")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用方式"),e("code",[t._v("path.parse('/a/b/c.js')")]),t._v("得到的将是")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{  \n   \"root\": '/',   根路径\n   \"dir\": '/a/b',   目录路径 除了最后一级\n   \"base\": 'c.js',  最后一级的路径名或者  文件名+扩展名\n   \"ext\": '.js',  扩展名\n   \"name\": 'c'  文件名或者路径名\n}\n")])])])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("format()")]),t._v("是将对象转为字符串  与"),e("code",[t._v("js")]),t._v("中的"),e("code",[t._v("stringify()")]),t._v("相似，就是将上述的对象重新转换为字符串路径")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("path.format(")]),t._v("{  "),e("code",[t._v("\"root\": '/',")]),t._v(" "),e("code",[t._v("dir: '/a/b',")]),t._v(" "),e("code",[t._v("\"base\": 'c.js',")]),t._v(" "),e("code",[t._v("\"ext\": '.js',")]),t._v(" "),e("code",[t._v("\"name\": 'c'")]),t._v(" }"),e("code",[t._v(")")]),t._v("得到的就是"),e("code",[t._v("/a/b/c.js")]),t._v("这个路径字符串")])])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("isAbsolute()")]),t._v(" 判断是不是绝对路径， 在"),e("code",[t._v("windows")]),t._v("下 判断是不是绝对路径，就是判断路径的最开始前面是不是一个盘符 例如 "),e("code",[t._v("C:")])])])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("path.isAbsolute('C://a/b/c')")]),t._v("这就是一个绝对路径，返回为"),e("code",[t._v("true")])])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[e("p",[t._v("拼接路径 "),e("code",[t._v("join()")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("path.join('a', 'b/c', 'd')")]),t._v("会得到一个"),e("code",[t._v("/a/b/c/d")]),t._v("的路径字符串")]),t._v(" "),e("li",[t._v("当然其中还有一些特殊的字符，会被识别到\n"),e("ul",[e("li",[e("code",[t._v("..")]),t._v("在"),e("code",[t._v("join()")]),t._v("中，被当做返回上一层的操作，所以"),e("code",[t._v("path.join('a', 'b/c', '..', 'd');")]),t._v("你就会得到"),e("code",[t._v("a/b/d")]),t._v("这么一个路径字符串")]),t._v(" "),e("li",[e("code",[t._v(".")]),t._v("在"),e("code",[t._v("join()")]),t._v("中指的是当前路径")])])])])]),t._v(" "),e("li",[e("p",[t._v("将路径规范化"),e("code",[t._v("normalize()")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("path.normalize('/a/b/c/d/..');")]),t._v("将转换为"),e("code",[t._v("/a/b/c")])]),t._v(" "),e("li",[e("code",[t._v("path.normalize('C://a/b///d');")]),t._v("将转换为"),e("code",[t._v("C:/a/b/c")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("relative()")]),t._v("查找某个路径 到另一个路径下，需要怎么走的路径字符串 例如 "),e("code",[t._v("/a/b/c")]),t._v(" 去 "),e("code",[t._v("/a/d/e")]),t._v(" 就需要"),e("code",[t._v("../../d/e")]),t._v(" 相对路径")])])]),t._v(" "),e("ul",[e("li",[t._v("用法"),e("code",[t._v("path.relative('/a/b/c', '/a/d/e');")]),t._v(" 就会得到"),e("code",[t._v("../../d/e")])])]),t._v(" "),e("ol",{attrs:{start:"9"}},[e("li"),t._v(" "),e("li",[e("p",[e("code",[t._v("resolve([forms..], to)")]),t._v("解析路径 "),e("code",[t._v("forms")]),t._v("为多个，"),e("code",[t._v("to")]),t._v("为")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("to")]),t._v("如果带"),e("code",[t._v("/")]),t._v("开头，那么就是一个绝对路径，直接返回"),e("code",[t._v("to")]),t._v("这个字符串路径。")])]),t._v(" "),e("li",[e("p",[t._v("如果不是会有下面几种情况 "),e("code",[t._v(".")]),t._v("代表当前路径")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myPath2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./img/so'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myPath3"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./baz'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myPath4"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo/bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp/file/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             \nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myPath2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myPath3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myPath4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])])])]),t._v(" "),e("li",[e("p",[t._v("两个特殊的属性")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("delimiter")]),t._v(" 不是方法 用法是"),e("code",[t._v("path.delimiter")]),t._v("表示 路径分隔符")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("windows")]),t._v("上是分号"),e("code",[t._v(";")]),t._v("在"),e("code",[t._v("Linux")]),t._v("上是冒号"),e("code",[t._v(":")])])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("sep")]),t._v("不是方法， 用法是"),e("code",[t._v("path.set")]),t._v(" 表示环境变量分隔符")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("windows")]),t._v("上是"),e("code",[t._v("\\")]),t._v("       在"),e("code",[t._v("Linux")]),t._v("上是"),e("code",[t._v("/")])])])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);