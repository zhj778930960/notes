# egg.js 介绍和环境搭建

#####        egg.js 介绍

1. 什么 是egg.js ？

   - egg.js 是阿里巴巴开发的，基于koa的 node.js的企业级应用开发框架。

   - 因为express和koa开发起来，太过随心所欲，每一个人的开发习惯都不太一样，而express 和 koa 给与开发的权限比较高，开发人员可以

     随意封装和开发代码，这样就导致，协作能力太差。

2. Egg.js的特性

   - 提供基于egg.js定制化上层框架的能力
   - 高度可扩展 的插件机制
   - 内置多进程管理
   - 基于Koa开发，性能优异
   - 框架稳定，测试覆盖率搞
   - 渐进式开发
   
3.  个人看法说明

   - egg.js遵循【约定大于配置】的惯例吧， 其实就是内部有一套自己的代码规范，什么文件提供什么样的功能，像app下的controller, middleware,service,model等，都是以文件夹的规定方式，来约定俗成的行程一套固有的写法，其实我们就是根据这套写法，就可以正常顺利的进行开发了

#####       环境准备

- 操作系统： 支持macOS, Linux, windows
- 运行环境： Nodejs建议选择LTS稳定版本，最低要求8.x



#####      创建egg项目

1. 利用官方提供的egg-init 脚手架安装

   ```javascript
   npm install egg-init -g 
   ```

   ```javascript
   1. 直接利用egg-init 创建项目
      egg-init  项目名称  --type=simple
   ```

   







   