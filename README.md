
### 安装依赖包

```bash
npm install
```


## 开发运行





开发编译（调用生产环境接口）：





开发编译（调用测试环境接口）：

## 测试/生产部署

编译打包



### 项目目录：

```
.
├── public
|   ├── lib // 插件
|   ├── CubeModule.json // 版本文件
|   └── index.html // 单页面入口
| 
├── src // 项目源代码
|   ├── assets // 静态资源等
|   |   └── js
|   |       ├── api-dev.js // 模拟接口
|   |       └── api.js // 接口
|   |
|   ├── component // 组件
|   ├── views // 页面
|   ├── App.vue // 组件入口
|   ├── main.js // 项目入口
|   ├── router.js // 路由
|   └── store.js // 状态
|
├── tests // e2e测试等（项目未用到）
├── .browserslistrc // 项目的目标浏览器范围
├── .editorconfig // 编辑器配置
|
├── .env // 通用全局运行环境变量
├── .env.dev // 开发运行环境配置
├── .env.online // 打包运行环境配置
├── .env.cloud // 打包运行环境配置
|
├── .eslintrc.js // eslint格式校验配置
├── .gitignore // 提交git仓忽略的文件
├── babel.config.js // babel配置
├── package.json // 项目描述
├── postcss.config.js // postcss配置
|
├── README.md // 项目说明文档
|
├── vue.config.js // 项目工程配置
└── yarn.lock // yarn管理依赖
```






