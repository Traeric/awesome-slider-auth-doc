# 滑动拼图认证
当点击登录或注册时，通过将滑块滑动到最右边完成认证。
## 基础用法
<CodeRun auto editable>

```vue
<template>
    <div id="wrap">
        <as-simple-slider />
    </div>
</template>
```

</CodeRun>

## 设置大小
组件大小有四挡，分别可设置`mini`, `normal`, `large`, `big`，通过在标签上添加size属性来设置组件大小，默认为`normal`。

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap">
        <as-simple-slider size="mini" />
        <as-simple-slider size="normal" />
        <as-simple-slider size="large" />
        <as-simple-slider size="big" />
    </div>
</template>
```

</CodeRun>

## 自定义背景图片以及滑动提示
- 滑块的背景有一个默认值，如果不想使用该默认值可以自己替换，通过`background`属性即可完成。
- 滑块滑动的提示文字也可以通过`tips`属性进行更改。

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap">
        <as-simple-slider 
        background="https://cn.bing.com/th?id=OHR.AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg&rf=LaDigue_1920x1080.jpg" 
        tips="通过自定义文字，可改变滑块的滑动的提示" />
    </div>
</template>
```

</CodeRun>

## 自动关闭
在认证成功后，可能需要隐藏认证滑块，可以选择隐藏承载滑块的父级标签，滑块本身也提供了隐藏滑块的方法，可以选择的自动隐藏和手动隐藏
- 自动隐藏通过设置`autoClose`属性为true即可，当然默认值就是true，也就是说可以不用设置该属性就能实现自动隐藏。
- 如果不喜欢自动隐藏也可以选择手动隐藏滑块，手动隐藏在[认证成功](/awesome-slider-auth-doc/document/slider/simple_slider/#%E8%AE%A4%E8%AF%81%E6%88%90%E5%8A%9F)会介绍。

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap" style="border: 1px solid #eee; border-radius: 4px; padding: 10px;">
        <p>不自动关闭</p>
        <as-simple-slider :autoClose="false" />
        <p>自动关闭</p>
        <as-simple-slider :autoClose="true" />
    </div>
</template>
```

</CodeRun>

## 认证成功
在用户认证成功后需要触发回调函数进行成功后的操作，awesome-slider-auth提供了`success`属性来执行认证成功后的回调。
::: tip
如果在认证成功的方法中有用到异步操作，如果希望在异步操作执行完成之后再关闭滑块则可以使用手动关闭，手动关闭的步骤为
- 设置`autoClose`属性为false
- 在success方法中会带一个`close`的入参方法，执行该方法即可手动关闭认证滑块
:::

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap" style="border: 1px solid #eee; border-radius: 4px; padding: 10px;">
        <as-simple-slider :autoClose="false" :success="success" />
        <div :style="{'color': flag ? '#67C23A' : '#409EFF', 'margin-top': '20px'}">{{ tips }}</div>
    </div>
</template>

<script>
export default {
    methods: {
        success(close) {
            this.flag = true;
            this.tips = "认证成功";
            // 模拟异步操作 1s后关闭认证滑块
            setTimeout(() => close(), 1000);
        }
    },
    data() {
        return {
            flag: false,
            tips: "滑动认证",
        }
    },
}
</script>
```

</CodeRun>

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 | 可选值 |
| ------------- | ------------ | ------- | ------ | ------ |
| size         | 滑块大小  | String  | normal  | mini \| normal \| large \| big |
| background   | 滑块背景  | String  |   | |
| tips          | 滑动区域提示字| String  | 向右滑动滑块，完成认证      | |
| autoClose    | 是否自动关闭 | Boolean | true | true \| false |
| errorRange  | 滑块距离最后的距离，在该范围都认为认证成功 | Number | 5 | |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| success | 滑块认证成功触发 | - |
