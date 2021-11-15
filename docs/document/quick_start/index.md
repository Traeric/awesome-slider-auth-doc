# 快速开始
本节介绍如何在项目中使用AwesomeSliderAuth。

## 引入AwesomeSliderAuth
在main.js中写入以下内容：
```js
import { createApp } from 'vue'
import App from './App.vue'
import awesomeSliderAuth from 'awesome-slider-auth';
// 注意awesome-slider-auth的样式文件需要单独引用
import "awesome-slider-auth/dist/index.css";

createApp(App)
.use(awesomeSliderAuth)
.mount('#app')
```
完成以上代码，便可在项目中引入AwesomeSliderAuth组件。
## 开始使用
在全局配置AwesomeSliderAuth后，便可在代码中使用它了，具体使用方法参见各自的文档。
