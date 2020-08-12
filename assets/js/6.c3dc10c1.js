(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(s,t,a){s.exports=a.p+"assets/img/catch.74fe02d1.png"},403:function(s,t,a){"use strict";a.r(t);var e=a(33),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"什么是浏览器（http）缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是浏览器（http）缓存机制"}},[s._v("#")]),s._v(" 什么是浏览器（HTTP）缓存机制")]),s._v(" "),e("h4",{attrs:{id:"一、-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-概述"}},[s._v("#")]),s._v(" 一、 概述")]),s._v(" "),e("p",[s._v("浏览器缓存又称为HTTP缓存，机制是根据http请求的报文的缓存标识进行识别的， request 和 response  报文")]),s._v(" "),e("h4",{attrs:{id:"二、缓存过程分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、缓存过程分析"}},[s._v("#")]),s._v(" 二、缓存过程分析")]),s._v(" "),e("ul",[e("li",[s._v("浏览器第一次发起HTTP 请求到浏览器缓存")]),s._v(" "),e("li",[s._v("浏览器缓存 返回 说"),e("code",[s._v("没有该请求的缓存结果和缓存标识")])]),s._v(" "),e("li",[s._v("浏览器知道没有缓存之后，就像服务器发起HTTP请求")]),s._v(" "),e("li",[s._v("服务器返回该请求的结果和缓存规则给浏览器")]),s._v(" "),e("li",[s._v("浏览器将请求结果和缓存标识存储到浏览器缓存中")])]),s._v(" "),e("h4",{attrs:{id:"三、强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、强缓存"}},[s._v("#")]),s._v(" 三、强缓存")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("强缓存就是浏览器像浏览器缓存请求查找该请求的结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程。")])]),s._v(" "),e("li",[e("p",[s._v("强制缓存有如下三种情况：")]),s._v(" "),e("ul",[e("li",[s._v("第一种：不存在该缓存的结果，获取缓存失败，需要直接向服务器发起请求，跟第一次发起请求是一样的\n"),e("ul",[e("li",[s._v("浏览器发起HTTP 请求到浏览器缓存")]),s._v(" "),e("li",[s._v("浏览器缓存 返回 说"),e("code",[s._v("没有该请求的缓存结果和缓存标识")])]),s._v(" "),e("li",[s._v("浏览器知道没有缓存之后，就像服务器发起HTTP请求")]),s._v(" "),e("li",[s._v("服务器返回该请求的结果和缓存规则给浏览器")]),s._v(" "),e("li",[s._v("浏览器将请求结果和缓存标识存储到浏览器缓存中")])])]),s._v(" "),e("li",[s._v("第二种：存在该缓存结果和缓存标识，但是标识已经失效了，强制缓存失效，使用协商缓存\n"),e("ul",[e("li",[s._v("浏览器向浏览器缓存发起HTTP请求。")]),s._v(" "),e("li",[s._v("浏览器缓存表示： 该请求的缓存结果失败，只返回缓存标识给浏览器")]),s._v(" "),e("li",[s._v("浏览器拿到浏览器返回的缓存标识，像服务器发起HTTP请求")])])]),s._v(" "),e("li",[s._v("第三种：存在该缓存结果和缓存标识，且结果还没有失效，强制缓存生效，直接赶回该结果\n"),e("ul",[e("li",[s._v("浏览器向浏览器缓存发起HTTP请求")]),s._v(" "),e("li",[s._v("浏览器缓存，存在该请求的缓存结果，且未失效，返回该结果")])])])])]),s._v(" "),e("li",[e("p",[s._v("强缓存的结果是什么？？")])])]),s._v(" "),e("p",[s._v("答： 当浏览器向服务器发送请求的时候，服务器会将返回规则 放到 Response Headers 中，和请求结果一起返回给浏览器， 控制强缓存的字段分别是"),e("strong",[s._v("Expires")]),s._v("  和 "),e("strong",[s._v("Cache-Control")]),s._v("  , "),e("strong",[s._v("Cache-Control")]),s._v(" 的优先级高于 "),e("strong",[s._v("Expires")]),s._v("。")]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[e("p",[s._v("Expires")]),s._v(" "),e("p",[s._v("Expires 是在HTTP/1.0的时代，产生的控制缓存的方式， Expires  属性 对应的值 是一个时间。")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[s._v("Response Headers\n   expires"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Thu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" Jan "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是一个时间戳，代表过期时间")]),s._v("\n   \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果请求时间，超过了expires 存储的时间，那么就代表缓存过期了，需要去服务器重新获取")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 有个问题就是，客户端的时间和服务端的时间不一定是相等的，所以这里就会有问题")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("Cache-Control")]),s._v(" "),e("p",[s._v("Cache-Control 是HTTP/1.1的产物，现在基本都用的是HTTP/1.1")]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Catche-Control 就不是时间了，是有额外的一些属性组成")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Catche-Control 采用相对的时间")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v("： 默认值， 所有内容，只有客户端会缓存\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 所有内容，都将被缓存，客户端和带来服务器都会缓存\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" no"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" no"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("store"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 所有内容都不会被缓存， 不用强缓存，也不会用协商缓存\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v(" max"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("xxx"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("  xxx 是数值 秒数 ，代表xxx秒后 ，缓存就会失效\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 思考问题： 那么强缓存是将文件存在于哪里呢？？？？？ 如何判断强缓存生效了？？？")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 存在于memory cache 内存缓存  像"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JS")]),s._v("文件，图片 都会存在于内存缓存中\n  有两个特点： 快速读取和时效性\n  快速读取： 内存缓存会将编译解析后的文件，直接存入该进程的内存中，占据该进程一定的内存资源，以方便下次运行使用时的快速读取\n  时效性： 一旦该进程关闭，则该进程的内存则会清空\n  \n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 存在于disk cache 硬盘缓存，  css文件之类的会存在于硬盘缓存中\n  硬盘缓存： 直接将文件写入到硬盘文件中，读取缓存需要对该缓存存放硬盘文件进行"),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("I")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("O")]),s._v("操作，然后重新解析该缓存文件，读取复杂，速度比内存缓存慢\n")])])])])]),s._v(" "),e("h4",{attrs:{id:"四、协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、协商缓存"}},[s._v("#")]),s._v(" 四、协商缓存")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("协商缓存，就是强缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程。")])]),s._v(" "),e("li",[e("p",[s._v("协商缓存有如下两种情况：")]),s._v(" "),e("ul",[e("li",[s._v("协商缓存生效，返回304\n"),e("ul",[e("li",[s._v("浏览器向浏览器缓存发起HTTP请求")]),s._v(" "),e("li",[s._v("该请求的缓存结果失败，浏览，器缓存返回了缓存标识")]),s._v(" "),e("li",[s._v("浏览器带上缓存标识向服务器发起HTTP请求")]),s._v(" "),e("li",[s._v("服务器 返回304  证明资源无更新")]),s._v(" "),e("li",[s._v("浏览器向浏览器缓存请求该缓存结果")]),s._v(" "),e("li",[s._v("浏览器缓存返回该请求的缓存结果")])])]),s._v(" "),e("li",[s._v("协商缓存失败，返回200和请求结果\n"),e("ul",[e("li",[s._v("浏览器向浏览器缓存发起HTTP请求")]),s._v(" "),e("li",[s._v("该请求的缓存结果失败，浏览，器缓存返回了缓存标识")]),s._v(" "),e("li",[s._v("浏览器带上缓存标识向服务器发起HTTP请求")]),s._v(" "),e("li",[s._v("服务器 返回200， 并且返回请求结果  该资源更新了")]),s._v(" "),e("li",[s._v("浏览器将请求结果和缓存标识存入浏览器缓存中")])])])])]),s._v(" "),e("li",[e("p",[s._v("用什么属性标识 协商缓存？？")]),s._v(" "),e("p",[s._v("答： 协商缓存的标识也是在Response Headers 中返回给浏览器的，控制协商缓存的字段分别有：")]),s._v(" "),e("p",[e("strong",[s._v("Last-Modified  和  If-Modified-Since")]),s._v("、  "),e("strong",[s._v("Etag  和  If-None-Match")]),s._v("。 其中 "),e("strong",[s._v("Etag  和  If-None-Match")]),s._v("的优先级高")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("Last-Modified  和  If-Modified-Since")])]),s._v(" "),e("p",[s._v("Last-Modified 是  服务器响应请求时。返回该资源文件在服务器最后被修改的时间")])])]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向服务器发起请求，服务器给返回的值")]),s._v("\nResponse Headers\n   last"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Wed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 资源在服务器最后被修改的时间")]),s._v("\n   \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 再一次发起相同的请求的时候  会在Request Headers 中带上 这个时间")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过此字段值告诉服务器该资源上次请求返回的最后被修改时间。服务器收到该请求，发现请求头含有这个字段。则会根据这个字段值与该资源在服务器的最后被修改时间做对比，若服务器的资源最后的被修改的时间大于这个字段的时间，则重新返回该资源和last-modified值，状态码为200；否则返回304，资源无更新，继续使用缓存文件。")]),s._v("\nRequest Headers\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("since"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Wed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" Mar "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GMT")]),s._v("\n")])])]),e("ol",{attrs:{start:"5"}},[e("li",[e("strong",[s._v("Etag  和  If-None-Match")])])]),s._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Etag 也是向服务器发起请求， 服务器给返回的值")]),s._v("\n\nResponse Headers\n  etag"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"175737-15211592677000"')]),s._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if-none-match 是客户端再次发起请求的时候，携带上一次请求返回的唯一标识。通过此字段值告诉服务器该资源上次请求返回的唯一标识，")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器收到该请求后，发现该请求头中含有if-none-match 资源。会根据这个字段和服务器上的Etag值做对比，一致则返回304，代表资源无更新，继续使用缓存文件；不一致，则重新返回资源文件，和Etag值")]),s._v("\n\nRequest Headers\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("match"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[s._v("W")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"175737-15211592677000"')]),s._v("\n")])])]),e("h4",{attrs:{id:"五、总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、总结"}},[s._v("#")]),s._v(" 五、总结")]),s._v(" "),e("ol",[e("li",[s._v("强缓存，优先于协商缓存")]),s._v(" "),e("li",[s._v("若强缓存（expires / catche-control）生效则直接使用强缓存， （HS文件，图片存于memory catch  内存缓存,   Css文件存在于 dist catch 硬盘缓存）")]),s._v(" "),e("li",[s._v("若强缓存不生效，则使用协商缓存（last-modified/ if-modified-since  和 etag/if-none-match），协商缓存是服务器来决定缓存不缓存文件")]),s._v(" "),e("li",[s._v("若协商缓存失效，则代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中")]),s._v(" "),e("li",[s._v("若协商缓存生效，返回304，继续使用缓存")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(326),alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);