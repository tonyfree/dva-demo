### 基于create-react-app集成dva

#### 创建项目
1. 安装[node](https://nodejs.org/en/),建议通过[nvm](https://github.com/creationix/nvm)来安装，便于版本切换
2. 包管理工具：node自带[npm](https://www.npmjs.com/),可以通[nrm](https://github.com/Pana/nrm)设置registry，如果公司内部搭建了私有仓库：
```
npm config set registry http://192.168.251.38:8081/repository/npm-repo
```
或者用[yarn](https://yarnpkg.com/zh-Hans/)进行包管理(本文后续统一使用yarn)：
```
yarn config set registry "http://192.168.251.38:8081/repository/npm-repo"
```
3. 创建项目，参考：[create-react-app](https://github.com/facebook/create-react-app)
```
yarn create react-app my-app 
```

#### 修改项目目录
1. 为了便于后续平滑过渡到umi，项目目录参考umi的设计方式，可参考[umi文档](https://umijs.org/guide/app-structure.html#%E7%9B%AE%E5%BD%95%E5%8F%8A%E7%BA%A6%E5%AE%9A)和[案例：antd-admin](https://github.com/zuiidea/antd-admin)  

修改前默认项目目录结构
```
my-app
├── README.md                     // 说明文档
├── node_modules                  // node模块
├── package.json                  // 项目信息
├── .gitignore                    // git忽略配置
├── public                        // 静态资源，不会被webpack处理，直接拷贝到build文件夹下
│   ├── favicon.ico
│   ├── index.html                // 入口页面
│   └── manifest.json             // PWA扩展配置
└── src                           // 开发源码，webpack只编译此目录下的代码
    ├── App.css            
    ├── App.js                    // 一个React组件
    ├── App.test.js               // 组件测试
    ├── index.css
    ├── index.js                  // 入口js
    ├── logo.svg
    └── registerServiceWorker.js  // React对PWA的实现,线上服务器需要https协议
```
调整后项目目录结构
```
.
├── build/                          // 默认的 build 输出目录
├── public/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录，可选
    ├── layouts/index.js           // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── .env                           // 环境变量
└── package.json
```

#### 使用dva 

#### 使用rap2

#### 使用antd

#### 测试

#### 联调打包

#### 浏览器插件

#### 在编辑器中调试
+ vscode
+ WebStorm

#### 自动格式化代码
+ ESLint
+ Automatically

#### 浏览器兼容
+ IE9

#### SEO
+ 服务器端渲染
+ react-helmet

#### 其他参考资料
+ [package.json](https://docs.npmjs.com/files/package.json)
+ [gitignore](https://git-scm.com/docs/gitignore)
+ [manifest.json](https://developer.mozilla.org/zh-CN/docs/Web/Manifest)
+ [Your First Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp/#0)
+ react
+ react-router
+ redux
+ redux-saga
+ dva
+ rap2
+ antd
+ babel
+ webpack
+ jest
+ enzyme
+ www.chromefor.com
