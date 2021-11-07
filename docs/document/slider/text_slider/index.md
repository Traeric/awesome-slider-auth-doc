# 文字点选认证
当点击登录或注册时，按照提示按顺序点击图中文字完成认证。
## 基础用法
在需要用到文字点选认证的地方添加相关标签即可，滑块的宽度可自适应父级标签。

<CodeRun auto editable>

```vue
<template>
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-text-slider />
    </div>
</template>
```

</CodeRun>

## 自定义背景图片
点选模块的背景有一个默认值，如果不想使用该默认值可以自己替换，通过`refresh`方法传递即可完成。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-text-slider :refresh="refresh" />
    </div>
</template>

<script>
export default {
    setup() {
        function refresh(callback) {
            // 模拟异步请求
            setTimeout(() => {
                callback({
                    background: "https://www.bing.com/th?id=OHR.MackArch_ZH-CN1068755647_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"
                });
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
在用户认证成功后需要触发回调函数进行成功后的操作，本模块提供了`success`属性来执行认证成功后的回调。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 300px; margin-top: 50px;">
        <as-text-slider :success="success" />
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

### 事件
| 事件名  | 说明             | 返回值 | 参数 |
| ------- | ---------------- | ------ | ------ |
| success | 滑块认证成功触发 | - | |
| refresh | 滑块认证失败时触发 | - | callback：获取到需要刷新的数据，通过该回调方法传入 |
