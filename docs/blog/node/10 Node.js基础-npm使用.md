# `npm` 基本使用

####      `   npm`常用命令

1. 安装包
   - 全局安装  `npm install  -g  包名称`
   - 本地安装，也就是项目内安装  `npm install 包名称`
     - 我们在安装`nvm`时，`dev/nodejs/node_modules`下安装的都是全局的包。
   - 指定版本号安装 `npm install 包名称@版本号`
   - 生产环境使用的包` npm install 包名称 --save`
   - 开发环境使用的包 `npm install 包名称 --save-dev`
2. 删除包
   - 全局删除  `npm uninstall  -g  包名称`
   - 本地删除  `npm uninstall  包名称`
   - 指定版本号删除 `npm uninstall 包名称@版本号`

2. 更新包
   - 全局更新 `npm update -g 包名称`