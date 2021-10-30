# 滑动拼图认证
当点击登录或注册时，通过滑动拼图与画面中缺失的部分重合进行验证。
## 基础用法
在需要用到认证滑块的地方添加滑块标签即可，滑块的宽度可自适应父级标签。

<CodeRun auto editable>

```vue
<template>
    <div class="wrap" style="width: 350px; margin-top: 50px;">
        <as-puzzle-slider />
    </div>
</template>
```

</CodeRun>

## 刷新频率以及认证误差
- 如果认证失败后，滑块还自动归位，但是拼图和背景不会有任何改变，但是为了安全考虑，在错误次数超过限制后会调用refresh方法请求新的位置跟背景图片，默认的次数是`3`，如果想要自己设置，可以选择使用`refreshFrequency`参数设置
- 当两个滑块之间满足一定距离时会认证成功，这个距离默认为`5px`，也可以选择使用`errorRange`参数设置。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 350px; margin-top: 50px;">
        <as-puzzle-slider :refreshFrequency="5" :errorRange="10" />
    </div>
</template>
```

</CodeRun>

## 自定义背景图片以及滑块位置
::: tip 提示
在未指定图片背景以及滑块位置时，AwesomeSliderAuth会自动生成滑块位置以及使用默认背景。但是这是不安全的，AwesomeSliderAuth并不建议这些操作在前端实现，而应该在后端生成并传给AwesomeSliderAuth，而通过指定refresh方法即可将这些数据传递给AwesomeSliderAuth。
:::

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 350px; margin-top: 50px;">
        <as-puzzle-slider :refresh="refresh" />
    </div>
</template>

<script>
export default {
    setup() {
        function refresh(callback) {
            // 模拟ajax请求
            setTimeout(() => {
                // 模拟ajax请求到数据
                const data = {
                    "x": Math.random() * 450,
                    "y": Math.random() * 150,
                    "background": "https://cn.bing.com/th?id=OHR.MidAutumnFestival2021_ZH-CN7657484762_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
                };
                // 将数据传递给refresh的回调函数 AwesomeSliderAuth会在需要刷新时调用该refresh方法，并获取回调函数中的对象，根据对象中的数据初始化背景以及拼图位置
                callback(data);
            }, 500);
        }

        return {
            refresh
        };
    }
}
</script>
```

</CodeRun>

## 认证成功
::: tip 提示
对于用户来说，最关心的可能就是在将拼图拉到正确位置后，如何拿到正确的结果，其实AwesomeASliderAuth在判断滑块重叠后会触发一个回调方法，用户可以在该方法中定义认证成功后要执行的操作
:::

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 350px; margin-top: 50px;">
        <as-puzzle-slider :success="success" />
    </div>
    <div :style="{'color': flag ? '#67C23A' : '#409EFF', 'margin-top': '20px'}">{{ tips }}</div>
</template>

<script>
export default {
    methods: {
        // 认证成功后的回调函数
        success() {
            this.tips = "认证成功";
            this.flag = true;
        }
    },
    data() {
        return {
            tips: "滑动认证",
            flag: false
        };
    },
}
</script>
```

</CodeRun>

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| tips          | 滑动区域提示字| String  | 移动滑块，完成拼图      |
| errorRange    | 两个滑块之间允许误差范围 | Number | 5px |
| refreshFrequency | 每次允许认证失败的次数 | Number | 3 |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| refresh | 滑块认证失败或点击刷新按钮触发 | -   |
| success | 滑块认证成功触发 | - |
