(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{554:function(e,v,_){"use strict";_.r(v);var f=_(2),o=Object(f.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h4",{attrs:{id:"本质上就是字节数组-为了将数据转换为进制数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本质上就是字节数组-为了将数据转换为进制数"}},[e._v("#")]),e._v(" 本质上就是字节数组-为了将数据转换为进制数")]),e._v(" "),_("h5",{attrs:{id:"buffer对象是node处理二进制数据的一个接口，它是node原生提供的全局对象，可以直接使用，不需要去require-buffer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#buffer对象是node处理二进制数据的一个接口，它是node原生提供的全局对象，可以直接使用，不需要去require-buffer"}},[e._v("#")]),e._v(" "),_("code",[e._v("Buffer")]),e._v("对象是"),_("code",[e._v("Node")]),e._v("处理二进制数据的一个接口，它是"),_("code",[e._v("Node")]),e._v("原生提供的全局对象，可以直接使用，不需要去require('buffer')")]),e._v(" "),_("p",[_("strong",[e._v("实例化---下面的方法在调用的时候其实就已经是在实例化一个buffer了")])]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("Buffer.from(array)")]),e._v("   将数组转换为进制数 第二个参数为编码，例如"),_("code",[e._v("base64")]),e._v(", 默认为"),_("code",[e._v("utf8")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Buffer.from(string)")]),e._v(" 将字符串转换为进制数 第二个参数为编码，例如"),_("code",[e._v("base64")]),e._v(", 默认为"),_("code",[e._v("utf8")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Buffer.alloc(number)")]),e._v(" 将数字转换为进制数  第二个参数为编码，例如"),_("code",[e._v("base64")]),e._v(", 默认为"),_("code",[e._v("utf8")])])])]),e._v(" "),_("ol",[_("li",[_("p",[e._v("构造方法(类）---已经废弃")]),e._v(" "),_("ul",[_("li",[e._v("实例化"),_("code",[e._v("Buffer")]),e._v(" "),_("code",[e._v("var buff = new Buffer()")]),e._v(" 但是这个方法现在的node已经废弃了，需要去使用静态方法。")])])]),e._v(" "),_("li",[_("p",[e._v("静态方法 -- 其实内部实现还是进行了实例化，就是在赋值的时候，就已经进行了实例化了")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("将数字转换为16进制数 "),_("code",[e._v("var buff = Buffer.alloc(612);")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("alloc")]),e._v("方法内只能是数字，不能是别的。")])])]),e._v(" "),_("li",[_("p",[e._v("将字符串转换为16进制数 "),_("code",[e._v("var buff1 = Buffer.from('woaini')")])]),e._v(" "),_("ul",[_("li",[_("code",[e._v("alloc")]),e._v("方法内只能是字符串，不能是别的。")])])])])]),e._v(" "),_("li",[_("p",[e._v("功能方法")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("Buffer.isEncoding()")]),e._v(" 判断是否支持该编码")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Buffer.isBuffer()")]),e._v(" 判断是否为"),_("code",[e._v("Buffer")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Buffer.byteLength()")]),e._v(" 返回指定编码的字节长度，默认为"),_("code",[e._v("utf-8")])]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v('let buf3 = Buffer.from("zhanghaojie")')])]),e._v(" "),_("p",[_("code",[e._v("console.log(Buffer.byteLength(buf))")])])])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("Buffer.concat()")]),e._v(" 将一组"),_("code",[e._v("Buffer")]),e._v("对象合并为一个"),_("code",[e._v("Buffer")]),e._v("对象")])])])]),e._v(" "),_("li",[_("p",[e._v("实例方法")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("write()")]),e._v(" 将"),_("code",[e._v("Buffer")]),e._v("内容写入， 第一个参数是写入的数据，第二个参数是从数据的哪个位置开始，第三个参数就是写入的长度是多少，写入的个数")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("let buf = Buffer.alloc(5);")]),e._v("这个5代表要转换5个数进去")]),e._v(" "),_("li",[_("code",[e._v("buf.wirte('woaini', 3, 4)")])])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("slice()")]),e._v("截取新的"),_("code",[e._v("buffer")]),e._v("对象")]),e._v(" "),_("ul",[_("li",[_("code",[e._v('let buf1 = Buffer.form("hello");')]),e._v("实例化一个"),_("code",[e._v("Buffer")]),e._v("对象。")]),e._v(" "),_("li",[_("code",[e._v("let buf2 = buf1.slice(2, 3);")]),e._v("截取"),_("code",[e._v("buf1")]),e._v("的文字 2代表起始位置，3代表结束位置（2， 3] 不包含2， 包涵3")])])]),e._v(" "),_("li",[_("p",[_("code",[e._v("toString()")]),e._v("把"),_("code",[e._v("buf")]),e._v("对象转为字符串`")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("toJSON")]),e._v(" 把"),_("code",[e._v("buf")]),e._v("转换为"),_("code",[e._v("JSON")]),e._v("字符串，是隐形调用，利用"),_("code",[e._v("JSON.stringify()")]),e._v(" (10进制）调用时，会自动的调用"),_("code",[e._v("toJSON()")]),e._v("。")]),e._v(" "),_("ul",[_("li",[e._v("转换后的数据为： "),_("code",[e._v('{"type":"Buffer","data":[122,104,97,110,103,104,97,111,106,105,101]}')])]),e._v(" "),_("li",[e._v("会出现一个类型和后面的数据")])])])])])])])}),[],!1,null,null,null);v.default=o.exports}}]);