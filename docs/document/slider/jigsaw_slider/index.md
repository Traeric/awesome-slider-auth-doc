# 移动拼图认证
当点击登录或注册时，按照将打乱的图片移动组成完整的图片完成认证。
## 基础用法
在需要用到移动拼图认证的地方添加相关标签即可，滑块的宽度可自适应父级标签。

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-jigsaw-slider />
    </div>
</template>
```

</CodeRun>

## 自定义背景图片
拼图模块有一个默认背景，如果不想使用该默认背景可以自己替换，通过`refresh`方法传递即可完成。
::: warning 提示
在认证失败的时也会触发`refresh`方法更换背景。
:::

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-jigsaw-slider :refresh="refresh" />
    </div>
</template>

<script>
export default {
    setup() {
        function refresh(callback) {
            let bgArr = ['https://cn.bing.com/th?id=OHR.BeechTrees_ZH-CN9605292244_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.ElanValley_ZH-CN9533069637_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.WinterWaxwing_ZH-CN9435499385_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.SquirrelsCairngorms_ZH-CN9369511507_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.AmmoniteShell_ZH-CN9232274077_1920x1080.jpg&rf=LaDigue_1920x1080.jpg',
                'https://cn.bing.com/th?id=OHR.IrohazakaRoad_ZH-CN9151363864_1920x1080.jpg&rf=LaDigue_1920x1080.jpg'];
            callback({
                "background": bgArr[Math.floor(Math.random() * bgArr.length)]
            });
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

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 300px;">
        <as-jigsaw-slider :success="success" />
    </div>
</template>

<script>
export default {
    methods: {
        success() {
            this.$as_message({
                message: "认证成功",
                type: "success",
                elementLike: true
            });
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

<script setup>
    import {onMounted} from "vue";
    import {initPage} from "../../../.vitepress/theme/customer";


    onMounted(() => {
        initPage();
    });
</script>
