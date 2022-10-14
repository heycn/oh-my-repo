## 底部导航栏

### 页面 url

- #/money - 记账
- #/tag- 标签
- #/statistics - 统计
- 默认进入 - #/money
- 添加一个 404 页面

### 把导航栏组件做成全局组件

- 一开始在 `App.vue` 里写好导航栏，但是有缺点，这样子的话就是所有页面都会有导航栏

- 有些页面不需要用到导航栏，可以让指定界面引入导航栏，而不是全部界面都会有导航栏
- 在 `main.ts` 引入 `Vue.component('Nav', Nav)`

### 用 Fixed 还是用 Flex 布局

- 移动端**不要用 Fixed！**

### 如何解决 CSS 重复的问题

- 我与重复 不共戴天！
- 把重复的代码写在 `Layout.vue`，让各个界面引用
- 把不一样的内容通过插槽 `<slot/>` 插入

### 引用 svg

- 使用 svg-sprite-loader 引入 icon
- 配置 `vue.config.js `

### 封装 icon 组件

- 封装在 `Icon.vue`里

### 给 Nav 添加 CSS

- scss 使用
- active-class

### 遇到的问题

> svg 的 BUG：很有可能会默认填充颜色，导致无法更改颜色

#### 过程

- 尝试用外部 CSS 修改颜色，无法解决
- 在谷歌搜了很多没找到解决方法
- 把代码重写了一遍，无法解决
- 最终我查看了 svg 的**_原文件_**，我就发现了 svg 原文件里有 fill 属性，所以我开始尝试删除掉 fill 属性，最终成功

#### 解决

- 删除 svg 文件中的 fill 属性

- 但是如果有多个 svg 文件不想一个个删怎么办？

  - 使用 loader

  - ```javascript
    	// 在 vue.congif.js 里添加这两行，然后安装svgo-loader
    	.use('svgo-loader').loader('svgo-loader')
    	.tap(options => ({ ...options, plugin: [{ removeAttrs: { attrs: 'fill' } }] })).end
    ```

## 记账页面

### HTML

> 只写 HTML 不要想其他的

### SCSS

- reset
- 全局（字体、行高）
- 变量（把所有变量放在一个固定的地方）
- 局部样式

### TypeScript

- 模块化
  - 150 行代码以上就需要模块化！
  - 坚持代码模块化
- JS + Type
  - 装饰器
  - TS 没有构造选项，必须用 class
    - data
    - metheds
    - props
  - TS 好处
    1. 类型提示：更智能的提示
    2. 编译时报错：还没运行代码就知道自己写错了
    3. 类型检查：无法点出错误的属性
- 代码片段 - 我的第一个用 TypeScript 写的功能

```typescript
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-'; // '-'表示支出 '+'表示收入

  @Prop(Number) xxx: number | undefined;
  // Prop 告诉 Vue, xxx 不是 data 是 prop
  // Number 告诉 Vue, xxx 运行时是个 Number
  // xxx 属性名
  // number | undefined 就是 告诉 TS, xxx 的编译时类型

  selectType(type: string) {
    // type 只能是 '-' 和 '+' 中的一个
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>
```

- 写 Vue 组件的三种方式（单文件组件）

1. 用 JS 对象
2. 用 TS 类
3. 用 JS 类

- 封装 model
- vuex

> 一个用于管理数据的工具（对象）- 数据：读、写 工具

## 项目原则

### 吃自己种的粮

- 自己用的都不爽，何况面试官

### 切忌雷同

### 项目描述不空洞

![截图](../images/pocket-vue-img-1.png)
