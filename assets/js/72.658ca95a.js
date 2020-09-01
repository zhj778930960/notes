(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{560:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h4",{attrs:{id:"什么是dns解析？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns解析？"}},[s._v("#")]),s._v(" 什么是"),n("code",[s._v("DNS")]),s._v("解析？")]),s._v(" "),n("p",[s._v("首先，当我们访问，某一个地址的时候，例如"),n("code",[s._v("www.baidu.com")]),s._v(" ，但是我们也知道，服务器是不识别这个的，他识别的只是"),n("code",[s._v("127.0.0.1")]),s._v(" 这些"),n("code",[s._v("ip")]),s._v(",  所以，从"),n("code",[s._v("www.baidu.com")]),s._v("解析对应的"),n("code",[s._v("ip")]),s._v("地址，就是"),n("code",[s._v("DNS")]),s._v("的解析。")]),s._v(" "),n("h4",{attrs:{id:"如何解析dns？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何解析dns？"}},[s._v("#")]),s._v(" 如何解析"),n("code",[s._v("DNS")]),s._v("？")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("浏览器"),n("code",[s._v("DNS")]),s._v("缓存")]),s._v(" "),n("ul",[n("li",[s._v("当我们访问一个"),n("code",[s._v("URL")]),s._v("的时候，优先会访问浏览器的"),n("code",[s._v("DNS")]),s._v("缓存，如果找到了就回返回，如果找不到，就会进行下一步的寻找。")])])]),s._v(" "),n("li",[n("p",[s._v("系统（"),n("code",[s._v("os")]),s._v("）缓存")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("如果浏览器里面并没有找到对应的"),n("code",[s._v("DNS")]),s._v("缓存，那么就回去操作系统中去找有没有对应的"),n("code",[s._v("ip")]),s._v("地址。位于操作系统的"),n("code",[s._v("hosts")]),s._v("文件")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("windows: C:/windows/system32/drivers/etc/hosts")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("# "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Copyright")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1993")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v(" Microsoft Corp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n#\n# This is a sample "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOSTS")]),s._v(" file used by Microsoft "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TCP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Windows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n#\n# This file contains the mappings "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" addresses to host names"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Each\n# entry should be kept on an individual line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" The "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" address should\n# be placed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the first column followed by the corresponding host name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n# The "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IP")]),s._v(" address and the host name should be separated by at least one\n# space"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n#\n# Additionally"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("comments")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("such "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" these"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" may be inserted on individual\n# lines or following the machine name denoted by a "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),s._v(" symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n#\n# For example"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n#\n#      "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("102.54")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".94")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".97")]),s._v("     rhino"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("acme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com          # source server\n#       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38.25")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".63")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),s._v("     x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("acme"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com              # x client host\n\n# localhost name resolution is handled within "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DNS")]),s._v(" itself"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n#\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("       localhost\n#\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("             localhost\n#              "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("     xmind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net\n#              "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("     www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xmind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("net\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("mac: /private/ect/hosts")])])]),s._v(" "),n("li",[n("p",[n("code",[s._v("ubunto: /ect/hosts")])])])])])])]),s._v(" "),n("li",[n("p",[s._v("路由器缓存")])])]),s._v(" "),n("ul",[n("li",[s._v("当 "),n("strong",[s._v("浏览器 "),n("code",[s._v("DNS")]),s._v("缓存")]),s._v(" 与 "),n("strong",[s._v("系统（OS）缓存")]),s._v(" 均无映射，则请求会发送到路由器缓存中检查")])]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[n("code",[s._v("ISP DNS")]),s._v("缓存")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("ISP")]),s._v("为互联网服务提供商，目前我国有三大基础运营商：中国电信、中国移动和中国联通，在以上的三种情况下均找不到域名对应 "),n("code",[s._v("IP")]),s._v("地址，就会进行到这一步 "),n("code",[s._v("IPS")]),s._v("的 "),n("code",[s._v("DNS")]),s._v("缓存查找。")]),s._v(" "),n("p",[s._v("举个例子，假设你用的中国联通服务提供商，则会进入联通的 "),n("code",[s._v("DNS")]),s._v(" 缓存服务器中查找。")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);