# 图形旋转认证
当点击登录或注册时，拖动底部滑块将图形旋转到正确位置完成认证。
## 基础用法
在需要用到图形旋转认证的地方添加相关标签即可，滑块的宽度可自适应父级标签。

<CodeRun auto editable>

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-rotate-slider />
    </div>
</template>
```

</CodeRun>

## 自定义背景图片
旋转模块的背景有一个默认值，如果不想使用该默认值可以自己替换，通过`refresh`方法传递即可完成。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-rotate-slider :refresh="refresh" />
    </div>
</template>

<script>
export default {
    setup() {
        function refresh(callback) {
            // 模拟异步请求
            setTimeout(() => {
                callback({
                    background: "https://cn.bing.com/th?id=OHR.FloridaManatee_ZH-CN2405291075_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"
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

## 刷新频率以及认证误差
- 如果认证失败后，图形会自动归位，但是图形角度和背景不会有任何改变，但是为了安全考虑，在错误次数超过限制后会调用refresh方法请求新的位置跟背景图片，默认的次数是`3`，如果想要自己设置，可以选择使用`refreshFrequency`参数设置
- 图形旋转角度允许存在一定误差，这个误差默认为`5`度，也可以选择使用`errorRange`参数设置。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 350px;">
        <as-rotate-slider :refreshFrequency="5" :errorRange="50" />
    </div>
</template>
```

</CodeRun>

## 认证成功
在用户认证成功后需要触发回调函数进行成功后的操作，本模块提供了`success`属性来执行认证成功后的回调。

<CodeRun auto editable="true">

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-rotate-slider :success="success" />
    </div>
</template>

<script>
export default {
    methods: {
        success() {
            this.$as_message("认证成功！");
        }
    }
}
</script>
```

</CodeRun>

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| tips          | 滑动区域提示字| String  | 拖动滑块将图形旋转到正确位置 |
| errorRange    | 两个滑块之间允许误差范围 | Number | 5deg |
| refreshFrequency | 每次允许认证失败的次数 | Number | 3 |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| refresh | 认证失败或点击刷新按钮触发 | -   |
| success | 认证成功触发 | - |

<script setup>
    import {onMounted} from "vue";
    import {initPage} from "../../../.vitepress/theme/customer";


    onMounted(() => {
        initPage();
    });
</script>
