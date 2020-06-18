(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{331:function(t,s,a){"use strict";a.r(s);var n=a(33),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pm2"}},[t._v("#")]),t._v(" "),a("code",[t._v("pm2")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("什么是"),a("code",[t._v("pm2")]),t._v("?")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pm2")]),t._v("是一个进程管理器，用于管理"),a("code",[t._v("Node.js")]),t._v("应用程序的进程，")]),t._v(" "),a("li",[a("code",[t._v("pm2")]),t._v("有许多的功能，例如负载均衡，程序集群管理等")])])]),t._v(" "),a("li",[a("p",[t._v("为什么使用"),a("code",[t._v("pm2")]),t._v("?")]),t._v(" "),a("ul",[a("li",[t._v("在平时的开发当中，我们使用"),a("code",[t._v("nodemon")]),t._v("来启动项目，"),a("code",[t._v("nodemon")]),t._v("在我们改动项目代码的时候，可以自动的更新界面，有效的提高我们的开发效率。")]),t._v(" "),a("li",[t._v("但是在生产环境中，我们是不需要这么做的，代码更改比较频繁，不能一改就直接更新生产上的代码。")]),t._v(" "),a("li",[t._v("还有就是"),a("code",[t._v("nodemon")]),t._v("工具，无法自动重启，无法进行负载均衡，因为线上项目，如果出错，没有自动重启的功能的话，就不能继续访问，这样就是个大问题。")]),t._v(" "),a("li",[a("code",[t._v("pm2")]),t._v("可以进行负载均衡，和自动重启等功能。")]),t._v(" "),a("li",[a("code",[t._v("pm2")]),t._v("还可以实现多进程，日志功能")])])]),t._v(" "),a("li",[a("p",[t._v("如何使用？")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装"),a("code",[t._v("pm2")]),t._v("   一般用于生产环境的配置，所以需要全局安装")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("npm install pm2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g\n")])])])]),t._v(" "),a("li",[a("p",[t._v("生成配置文件，并且配置对应的属性和配置")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*这里就需要执行官方提供的生成配置文件的方法, \n运行下面的命令，可以生成一个ecosystem.congfig.js*/")]),t._v("\n\n  pm2 ecosystem  \n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//我们来看看，生成的文件中，具体有哪些配置，我们需要如何去配置我们的启动文件")]),t._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里就是用上述命令生成的配置文件  ")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//生产环境")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhj"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境名称")]),t._v("\n      script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./bin/www"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启动脚本，也就是启动文件所在的路径")]),t._v("\n      args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//传递给脚本的参数")]),t._v("\n      watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听重启，启用的情况下，当文件或者文件夹下产生了变化，应用将自动重启  与在命令中使用--watch 是一样的")]),t._v("\n      ignore_watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//忽略监听的文件，或者目录， 数组中的文件或者目录是不在监听范围内的")]),t._v("\n      exec_mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//应用启动模式，有两种模式 cluser集群和fork多进程 默认为fork")]),t._v("\n      instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅在cluster 模式下有效，应用启动实例个数")]),t._v("\n      max_memory_restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3G"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大内存限制，当超过这个内存的时候，将会自动重启")]),t._v("\n      error_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logs/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误输出日志")]),t._v("\n      out_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logs/app.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//日志输出的文件")]),t._v("\n      env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//production代表生产环境，development代表开发环境  可以从process.env.NODE_ENV访问到这个属性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以设置这个环境的id")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境变量")]),t._v("\n      log_date_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定日志输出的日期的格式")]),t._v("\n      min_uptime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当应用运行的时间小于设置的数值的时候，将认为是异常启动")]),t._v("\n      max_restarts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大异常启动次数，即运行时间小于min_uptime设置的时间的重启次数")]),t._v("\n      autorestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为true, 当发生故障的时候自动重启")]),t._v("\n      restart_delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//异常重启的情况下，延迟重启的时间")]),t._v("\n      \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开发环境")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zhj1111"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境名称")]),t._v("\n      script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./bin/www"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//启动脚本，也就是启动文件所在的路径")]),t._v("\n      args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//传递给脚本的参数")]),t._v("\n      watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监听重启，启用的情况下，当文件或者文件夹下产生了变化，应用将自动重启 与在命令中使用--watch 是一样的")]),t._v("\n      ignore_watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//忽略监听的文件，或者目录， 数组中的文件或者目录是不在监听范围内的")]),t._v("\n      exec_mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fork"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//应用启动模式，有两种模式 cluser集群和fork多进程 默认为fork")]),t._v("\n      instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//仅在cluster 模式下有效，应用启动实例个数")]),t._v("\n      max_memory_restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3G"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大内存限制，当超过这个内存的时候，将会自动重启")]),t._v("\n      error_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logs/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//错误输出日志")]),t._v("\n      out_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./logs/app.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//日志输出的文件")]),t._v("\n      env"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//production代表生产环境，development代表开发环境 可以从process.env.NODE_ENV访问到这个属性")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以设置这个环境的id")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境变量")]),t._v("\n      log_date_format"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定日志输出的日期的格式")]),t._v("\n      min_uptime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//当应用运行的时间小于设置的数值的时候，将认为是异常启动")]),t._v("\n      max_restarts"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//最大异常启动次数，即运行时间小于min_uptime设置的时间的重启次数")]),t._v("\n      autorestart"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认为true, 当发生故障的时候自动重启")]),t._v("\n      restart_delay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//异常重启的情况下，延迟重启的时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//自动化部署项目 配合nginx")]),t._v("\n  deploy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    production"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      user"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SSH_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SSH_HOSTMACHINE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"origin/master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GIT_REPOSITORY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DESTINATION_PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-deploy-local"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post-deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm install && pm2 reload ecosystem.config.js --env production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-setup"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  \n")])])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("pm2")]),t._v("的常用命令")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 启动 启动配置文件， 这样会将上述两个环境同时启动，所以在启动后看到的表格会有两个数据\n   pm2 start ecosystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js \n   pm2 start all  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也可以同时启动配置好的所有的环境")]),t._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如何只启动其中一个环境呢  这样在命令中需要加入 --only name  命令 name为配置好的环境名称")]),t._v("\n   pm2 start ecosystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("only zhj   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样就只启动zhj环境，在启动后只看到一条在启动")]),t._v("\n   pm2 start "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//也可以这么启动，启动的就是配置好的第一个环境，同理1是第二个")]),t._v("\n   \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 停止  停止环境的运行stop\n  pm2 stop ecosystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//会将正在运行的所有的环境都停止掉  同理如何只停止一个呢？")]),t._v("\n  pm2 stop all  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//停止所有的环境   ")]),t._v("\n\n  pm2 stop zhj  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接停止对应名称的环境也是可以的")]),t._v("\n  pm2 stop  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id 为0 的环境，也是可以这么使用进行停止的")]),t._v("\n  \n  \n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 重启  重启环境  restart\n\n   pm2 restart ecosystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重启所有的环境")]),t._v("\n   pm2 restart all "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同理重启所有环境")]),t._v("\n   \n   pm2 restart zhj "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定name  重启对应的环境")]),t._v("\n   \n   pm2 restart "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//id 为 0的环境，重启环境")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v(" 删除  删除环境  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除所有环境 ")]),t._v("\n   pm2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" ecosystem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n   pm2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" all\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除单个  利用id 或者 name")]),t._v("\n   pm2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" zhj\n   pm2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.")]),t._v(" 其他的使用方法\n\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看日志")]),t._v("\n  pm2 logs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log\n  pm2 logs zhj\n  pm2 logs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看实时的仪表板")]),t._v("\n  pm2 monit\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//监视和带有诊断系统的跨服务器")]),t._v("\n  pm2 plus\n  \n  \n \n 还有一些别的方法 暂时就不在这里介绍了 可以看看官方网站\n https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pm2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keymetrics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pm2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("single"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("page"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);