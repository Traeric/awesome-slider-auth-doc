# 滑动拼图认证
当点击登录或注册时，通过将滑块滑动到最右边完成认证。
## 基础用法
在需要用到认证滑块的地方添加滑块标签即可，滑块的宽度可自适应父级标签。

<CodeRun auto editable>

```vue
<template>
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-simple-slider />
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
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-simple-slider 
        background="https://cn.bing.com/th?id=OHR.AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg&rf=LaDigue_1920x1080.jpg" 
        tips="通过自定义文字，可改变滑块的滑动的提示" />
    </div>
</template>
```

</CodeRun>

## 认证成功
在用户认证成功后需要触发回调函数进行成功后的操作，模块提供了`success`属性来执行认证成功后的回调。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-simple-slider :success="success" />
    </div>
    <div :style="{'color': flag ? '#67C23A' : '#409EFF', 'margin-top': '20px'}">{{ tips }}</div>
</template>

<script>
export default {
    methods: {
        success() {
            this.flag = true;
            this.tips = "认证成功";
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
| background   | 滑块背景  | String  |   | |
| tips          | 滑动区域提示字| String  | 向右滑动滑块，完成认证      | |
| errorRange  | 滑块距离最后的距离，在该范围都认为认证成功 | Number | 5 | |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| success | 滑块认证成功触发 | - |
