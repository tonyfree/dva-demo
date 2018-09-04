<%= octicon "unmute" %>
此方案已废弃，请移步[dva-template](https://github.com/tonyfree/dva-template)

### 基于create-react-app集成dva

#### 前提说明
+ 本方案是基于react技术栈和ES6语法，本文假设你已掌握以下相关技术
+ [react](https://reactjs.org/)、[react-router](https://reacttraining.com/react-router/web/guides/philosophy)、[redux](https://redux.js.org)、[redux-saga](https://redux-saga.js.org/)、[ECMAScript 6 入门](http://es6.ruanyifeng.com/)


#### 创建项目
1. 安装[node](https://nodejs.org/en/),建议通过[nvm](https://github.com/creationix/nvm)来安装，便于版本切换
2. 包管理工具：node自带[npm](https://www.npmjs.com/),可以通[nrm](https://github.com/Pana/nrm)设置registry，如果公司内部搭建了私有仓库：
``` 
npm config set registry your-registry
```
或者用[yarn](https://yarnpkg.com/zh-Hans/)进行包管理(本文后续统一使用yarn)：
```
yarn config set registry "your-registry"
```
3. 创建项目，参考：[create-react-app](https://github.com/facebook/create-react-app)
``` 
yarn create react-app my-app 
```

#### 修改项目目录
为了便于后续平滑过渡到umi，项目目录参考umi的设计方式，可参考[umi文档](https://umijs.org/guide/app-structure.html#%E7%9B%AE%E5%BD%95%E5%8F%8A%E7%BA%A6%E5%AE%9A)和[案例：antd-admin](https://github.com/zuiidea/antd-admin)  

修改前默认项目目录结构
``` 
my-app
├── README.md                     // 说明文档
├── node_modules                  // 依赖模块
├── package.json                  // 项目信息
├── .gitignore                    // git忽略配置
├── public                        // 静态资源，不会被webpack处理，直接拷贝到build文件夹下
│   ├── favicon.ico
│   ├── index.html                // 入口页面
│   └── manifest.json             // PWA扩展配置
└── src                           // 开发源码，webpack只编译此目录下的代码
    ├── App.css            
    ├── App.js                    // React根组件
    ├── App.test.js               // 组件测试
    ├── index.css
    ├── index.js                  // 入口js
    ├── logo.svg
    └── registerServiceWorker.js  // React对PWA的实现,线上服务器需要https协议
```
调整后项目目录结构
```
my-app
├── README.md                     
├── node_modules                  
├── package.json                  
├── .gitignore                    
├── public                                 
└── src                          
    ├── layouts                    // umi约定src/layouts/index.js为全局路由，我们略做调整
    |     ├── App.css                    
    |     ├── App.js               // 全局布局
    |     ├── App.test.js  
    |     └── logo.svg  
    ├── pages                     // umi约定pages为路由目录
    |     ├── dashboard           // 路由页面    
    |     ├── login               // 路由页面
    |     └── user                // 路由页面
    ├── index.css
    ├── index.js                  
    └── registerServiceWorker.js 
```

#### 使用dva 
1. 安装dva
```
yarn add dva -S
```
2. 修改目录
```
my-app                                
└── src                    
    ├── components                    // 全局通用组件      
    ├── layouts
    ├── models                        // 全局dva model
    ├── pages                    
    |     ├── dashboard              
    |     ├── login  
    |     |     ├── index.css        // 路由样式            
    |     |     ├── index.js         // 路由入口     
    |     |     ├── model.js         // 路由dva model
    |     |     └── service.js       // 路由API
    |     └── user   
    |          ├── $id               // 动态字路由
    |          |    ├── index.css    
    |          |    ├── index.js     
    |          |    └── model.js     
    |          ├── components        // 路由内通用组件    
    |          ├── index.js               
    |          ├── model.js  
    |          └── service.js  
    ├── services                     // 全局API
    ├── index.css
    ├── index.js                  
    └── registerServiceWorker.js 
```
3. 使用dva，参考：[dva文档](https://dvajs.com)  
定义model
```javascript
// src/pages/dashboard/model.js
export default {
  // 命名空间
  namespace: 'dashboard',
  state: {
    temperature: 30,
    humidity: 70
  },
  // 同步操作，唯一可以修改state的地方
  reducers: {},
  // 异步操作和业务逻辑
  effects: {},
  // 监听数据：history路由变化等
  subscriptions: {}
}
```

定义组件：通过[connect](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)把model注入到组件
```javascript
// src/pages/dashboard/index.js
import React from 'react'
import { connect } from 'dva'

const Dashboard = ({ dashboard }) => (
  <div>
    <p>温度：{dashboard.temperature}</p>
    <p>湿度：{dashboard.humidity}</p>
  </div>
)

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
```
创建应用
``` javascript
// src/index.js
import React from 'react'
import dva from 'dva'
import './index.css'
import App from './layouts/App'

//  创建应用
const app = dva()

// 注册model
app.model(require('./pages/dashboard/model').default)

// 注册视图
app.router(() => <App />)

// 启动应用
app.start('#root')
```

#### 使用antd


#### 使用rap2

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

+ dva
+ rap2
+ antd
+ babel
+ webpack
+ jest
+ enzyme
+ www.chromefor.com
