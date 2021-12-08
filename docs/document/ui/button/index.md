# 按钮组件
本插件除了用作登录认证，还可以提供有限的ui组件方便开发，下面介绍开发中非常常用的按钮组件。
## 基础用法
最基础的按钮有五个颜色，可以通过`type`配置，分别是默认无色、常规蓝色、积极绿色、警告黄色、消极红色。
除此之外还可以通过`circle`、`round`、`plain`来改变按钮的圆角和透明度。

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button>默认按钮</as-button>
        <as-button type="primary">常规按钮</as-button>
        <as-button type="positive">积极按钮</as-button>
        <as-button type="warning">警告按钮</as-button>
        <as-button type="negative">消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button>默认按钮</as-button>
        <as-button type="primary" plain>常规按钮</as-button>
        <as-button type="positive" plain>积极按钮</as-button>
        <as-button type="warning" plain>警告按钮</as-button>
        <as-button type="negative" plain>消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button circle prefix-icon="star"></as-button>
        <as-button type="primary" circle prefix-icon="star"></as-button>
        <as-button type="positive" circle prefix-icon="star"></as-button>
        <as-button type="warning" circle prefix-icon="star"></as-button>
        <as-button type="negative" circle prefix-icon="star"></as-button>
    </div>
    <div class="as-row">
        <as-button round>默认按钮</as-button>
        <as-button type="primary" round>常规按钮</as-button>
        <as-button type="positive" round>积极按钮</as-button>
        <as-button type="warning" round>警告按钮</as-button>
        <as-button type="negative" round>消极按钮</as-button>
    </div>
</template>
```

</CodeRun>

## 图标按钮
通过给按钮设置图标可以赋予按钮不同的意义，图标支持显示在前面和后面，分别通过`prefix-icon`和`suffix-icon`配置，可配置的值可查看[字体图标](/document/ui/svg_icons/)章节。

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button prefix-icon="search">默认按钮</as-button>
        <as-button type="primary" prefix-icon="search">常规按钮</as-button>
        <as-button type="positive" prefix-icon="search">积极按钮</as-button>
        <as-button type="warning" prefix-icon="search">警告按钮</as-button>
        <as-button type="negative" prefix-icon="search">消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button suffix-icon="search">默认按钮</as-button>
        <as-button type="primary" suffix-icon="search">常规按钮</as-button>
        <as-button type="positive" suffix-icon="search">积极按钮</as-button>
        <as-button type="warning" suffix-icon="search">警告按钮</as-button>
        <as-button type="negative" suffix-icon="search">消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button prefix-icon="search"></as-button>
        <as-button type="primary" prefix-icon="search"></as-button>
        <as-button type="positive" prefix-icon="search"></as-button>
        <as-button type="warning" prefix-icon="search"></as-button>
        <as-button type="negative" prefix-icon="search"></as-button>
    </div>
</template>
```

</CodeRun>

## 禁用按钮
如果在某些情况下希望按钮不可用，可以设置`disabled`属性让按钮处于禁用状态。
::: danger 提示
该属性会禁用按钮的点击事件。
:::

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button disabled>默认按钮</as-button>
        <as-button type="primary" disabled>常规按钮</as-button>
        <as-button type="positive" disabled>积极按钮</as-button>
        <as-button type="warning" disabled>警告按钮</as-button>
        <as-button type="negative" disabled>消极按钮</as-button>
    </div>
</template>
```

</CodeRun>

## 加载按钮
在点进按钮发送请求后，如果希望按钮处于等待状态，可以设置`loading`属性让按钮处于等待状态。
::: danger 提示
该属性会禁用按钮的点击事件。
:::

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button loading>默认按钮</as-button>
        <as-button type="primary" loading>常规按钮</as-button>
        <as-button type="positive" loading>积极按钮</as-button>
        <as-button type="warning" loading>警告按钮</as-button>
        <as-button type="negative" loading>消极按钮</as-button>
    </div>
</template>
```

</CodeRun>

## 按钮尺寸
通过设置`size`属性即可变换按钮尺寸，按钮尺寸支持`mini|small|normal`等值，默认为`normal`。

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button type="primary" size="mini">常规按钮</as-button>
        <as-button type="positive" size="small">积极按钮</as-button>
        <as-button type="warning" size="normal">警告按钮</as-button>
    </div>
    <div class="as-row">
        <as-button type="primary" size="mini" round>常规按钮</as-button>
        <as-button type="positive" size="small" round>积极按钮</as-button>
        <as-button type="warning" size="normal" round>警告按钮</as-button>
    </div>
    <div class="as-row">
        <as-button type="primary" size="mini" circle prefix-icon="search"></as-button>
        <as-button type="positive" size="small" circle prefix-icon="search"></as-button>
        <as-button type="warning" size="normal" circle prefix-icon="search"></as-button>
    </div>
</template>
```

</CodeRun>

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 | 可选值 |
| ------------- | ------------ | ------- | ------ | ------ |
| prefix-icon   | 按钮前置图标  | String  |   | |
| suffix-icon   | 按钮后置图标  | String  |   | |
| type          | 按钮样式| String  |     | primary \| positive \| warning \| negative |
| circle    | 是否圆形 | Boolean | | true \| false |
| plain    | 背景是否透明 | Boolean | | true \| false |
| disabled    | 是否禁用 | Boolean | | true \| false |
| loading    | 是否加载 | Boolean | | true \| false |
| round    | 是否圆角 | Boolean | | true \| false |
| size  | 按钮大小 | Stirng | normal | mini \| small \| normal |

<script setup>
    import {onMounted} from "vue";
    import {initPage} from "../../../.vitepress/theme/customer";


    onMounted(() => {
        initPage();
    });
</script>
