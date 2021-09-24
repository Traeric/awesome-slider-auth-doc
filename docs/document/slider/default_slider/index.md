# 滑动拼图认证
当点击登录或注册时，通过滑动拼图与画面中缺失的部分重合进行验证。
## 基础用法
<CodeRun auto editable>

```vue
<template>
    <div id="wrap">
        <as-default-slider />
    </div>
</template>
```

</CodeRun>

## 自定义宽高
默认宽高为`300x150`，通过在标签上添加width跟height属性来设置宽高，设置单位为px。

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap">
        <as-default-slider :width="width" :height="height" />
    </div>
</template>

<script>
export default {
    setup() {
        let width = 450;
        let height = 300;

        return {
            width,
            height
        };
    }
}
</script>
```

</CodeRun>

## 自定义背景图片以及滑块位置
::: tip
在未指定图片背景以及滑块位置时，AwesomeSliderAuth会自动生成滑块位置以及使用默认背景。但是这是不安全的，AwesomeSliderAuth并不建议这些操作在前端实现，而应该在后端生成并传给AwesomeSliderAuth，而通过指定refresh方法即可将这些数据传递给AwesomeSliderAuth。
:::

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap">
        <as-default-slider :refresh="refresh" />
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
                    "puzzleX": Math.random() * 450,
                    "puzzleY": Math.random() * 150,
                    "backgroundPath": "https://cn.bing.com/th?id=OHR.MidAutumnFestival2021_ZH-CN7657484762_1920x1080.jpg&rf=LaDigue_1920x1080.jpg",
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
::: tip
对于用户来说，最关心的可能就是在将拼图拉到正确位置后，如何拿到正确的结果，其实AwesomeASliderAuth在判断滑块重叠后会触发一个回调方法，用户可以在该方法中定义认证成功后要执行的操作
:::

<CodeRun auto editable="true">

```vue
<template>
    <div id="wrap" style="border: 1px solid #eee; border-radius: 4px; padding: 10px;">
        <as-default-slider :success="success" />
        <div :style="{'color': flag ? '#67C23A' : '#409EFF', 'margin-top': '20px'}">{{ tips }}</div>
    </div>
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
| width         | 滑块区域宽度  | Number  | 300  |
| height        | 滑块区域高度  | Number  | 150  |
| tips          | 滑动区域提示字| String  | 移动滑块，完成拼图      |
| errorRange    | 两个滑块之间允许误差范围 | Number | 5px |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| refresh | 滑块认证失败或点击刷新按钮触发 | -   |
| success | 滑块认证成功触发 | - |
