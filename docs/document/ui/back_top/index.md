# 回到顶部
该组件常用于当页面比较长时回到顶部。
## 基础用法
当页面滑动到一定位置出现。

<CodeRun auto>

```vue
<template>
    <div>向下滚动页面出现回到顶部组件。</div>
    <as-top :visibility-height="10" />
</template>
```

</CodeRun>

## 自定义内容
在`40px * 40px`的区域内, 其中的内容可自定义。

<CodeRun auto>

```vue
<template>
    <div>向下滚动页面出现回到顶部组件（自定义样式）。</div>
    <as-top :bottom="100" :visibility-height="10">
        <div
            style="
                height: 100%;
                width: 100%;
                background-color: #f2f5f6;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
                text-align: center;
                line-height: 40px;
                color: #1989fa;
            "
        >
            UP
        </div>
    </as-top>
</template>
```

</CodeRun>

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| bottom        | 组件距离页面底部距离 | number  | 50 |
| right         | 组件距离页面右部距离 | number  | 50 |
| visibility-height | 页面滑动到指定距离显示组件 | number | 200 |

<script setup>
    import {onMounted} from "vue";
    import {initPage} from "../../../.vitepress/theme/customer";


    onMounted(() => {
        initPage();
    });
</script>
