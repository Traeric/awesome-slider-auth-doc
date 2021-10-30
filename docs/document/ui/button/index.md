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
        <as-button circle>默认按钮</as-button>
        <as-button type="primary" circle>常规按钮</as-button>
        <as-button type="positive" circle>积极按钮</as-button>
        <as-button type="warning" circle>警告按钮</as-button>
        <as-button type="negative" circle>消极按钮</as-button>
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
通过给按钮设置图标可以赋予按钮不同的意义，图标支持显示在前面和后面，分别通过`prefix-icon`和`suffix-icon`配置，可配置的值可查看[字体图标](/document/ui/font_icons/)章节。

<CodeRun auto editable>

```vue
<template>
    <div class="as-row">
        <as-button prefix-icon="icon-Star">默认按钮</as-button>
        <as-button type="primary" prefix-icon="icon-icon1">常规按钮</as-button>
        <as-button type="positive" prefix-icon="icon-renzhengshibai">积极按钮</as-button>
        <as-button type="warning" prefix-icon="icon-star-circle">警告按钮</as-button>
        <as-button type="negative" prefix-icon="icon-zuobian">消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button suffix-icon="icon-wancheng">默认按钮</as-button>
        <as-button type="primary" suffix-icon="icon-chenggong">常规按钮</as-button>
        <as-button type="positive" suffix-icon="icon-zhifuchenggong">积极按钮</as-button>
        <as-button type="warning" suffix-icon="icon-zuobian">警告按钮</as-button>
        <as-button type="negative" suffix-icon="icon-jiazaizhong">消极按钮</as-button>
    </div>
    <div class="as-row">
        <as-button suffix-icon="icon-wancheng"></as-button>
        <as-button type="primary" suffix-icon="icon-chenggong"></as-button>
        <as-button type="positive" suffix-icon="icon-zhifuchenggong"></as-button>
        <as-button type="warning" suffix-icon="icon-zuobian"></as-button>
        <as-button type="negative" suffix-icon="icon-jiazaizhong"></as-button>
    </div>
</template>
```

</CodeRun>

## 禁用按钮
如果在某些情况下希望按钮不可用，可以设置`disabled`属性让按钮处于禁用状态。
::: danger 提示
此禁用仅仅只是按钮样式的禁用，不能禁用按钮事件。
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
这仅仅是按钮样式的改变，如果在等待的过程中不希望按钮事件触发，请自行禁用。
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
        <as-button type="primary" size="mini" circle>常规按钮</as-button>
        <as-button type="positive" size="small" circle>积极按钮</as-button>
        <as-button type="warning" size="normal" circle>警告按钮</as-button>
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
