# wheel UI —— 轮子 UI 框架

> 记录项目开发过程

## UI 色值

### 主色

> Light Primary 常用于 hover，Dark Primary 常用于 active

| Primary(ok) | Light Primary | Dark Primary |
| :---------: | :-----------: | :----------: |
|   #2d8cf0   |    #5cadff    |   #2b85e4    |

### 辅助色

> 具有代表性的颜色，常用于信息提示：成功、警告、失败

|  Info   | Success | Warning | Error(ok) |
| :-----: | :-----: | :-----: | :-------: |
| #2db7f5 | #19be6b | #ff9900 |  #e81123  |

## 中性色

> 常用于文本、背景、边框、线条等，可以体现层次结构

|  Title  |  正文   | 辅助/图标背景(ok) |  失效   |  边框   | 分割线  | 背景(ok) |
| :-----: | :-----: | :---------------: | :-----: | :-----: | :-----: | :------: |
| #17233d | #515a6e |      #959595      | #c5c8ce | #dcdee2 | #e8eaec | #f8f8f8  |

## 使用 Vite 搭建官网

### 1. 全局安装 create-vite-app

`yarn global add create-vite-app@1.18.0` 或者 `npm i -g create-vite-app@1.18.0`

### 2. 创建项目目录

`cva wheel-ui` 或者 `create-vite-app wheel-ui`

## 使用 Vue Router 4

> 路由器，用于页面切换

### 引入 Vue Router 4

#### 1. 查看 vue-router 所有版本号

`npm info vue-router versions`

#### 2. 安装 vue-router

> 我当前的最新版本号是 4.0.12 所以我使用此版本

`yarn add vue-router@4.0.12`

### 初始化 vue-router

- 新建 history 对象
- 新建 router 对象
- 引入 TypeScript
- `app.use(router)`
- 添加 `<router-view>`
- 添加 `router-link`
