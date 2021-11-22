# 图片验证码认证
当点击登录或注册时，通过填入图片中的文字或计算图片中算式的结果进行验证。
## 基础用法
在需要用到图片验证码的地方添加相应标签即可，宽度可自适应父级标签。

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 120px;">
        <as-picture-captcha/>
    </div>
</template>
```

</CodeRun>

## 自定义文字及颜色
通常组件会自己生成随机字符，但是如果希望传入自定义的字符也可以使用`refresh`方法，只要在方法中返回指定的文字以及验证结果即可。另外还可以返回颜色值来改变文字生成的颜色。

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 120px;">
        <as-picture-captcha :refresh="refresh" />
        <as-picture-captcha :refresh="refreshColor" />
    </div>
</template>

<script>
export default {
    setup() {
        function refresh() {
            return {
                "text": "6666",
                "result": "6666"
            };
        }

        function refreshColor() {
            return {
                "color": "#F56C6C"
            };
        }
        return {
            refresh,
            refreshColor
        };
    }
}
</script>
```

</CodeRun>

## 认证
`as-picture-captcha`组件提供了`auth`进行认证，将用户填入的数据传入`auth`方法中即可获取认证结果。
::: tip 提示
除此之外，还可以通过`refresh`方法在认证失败后刷新图片中的验证码。
:::

<CodeRun auto>

```vue
<template>
    <div class="wrap" style="width: 150px;">
        <as-picture-captcha ref="picRef" />
        <input style="height: 35px; margin: 20px 0; border-radius: 5px; border: 1px solid #aaa; outline: none;" v-model="userData" />
        <as-button type="primary" prefix-icon="icon-renzhengguanli" @click="auth">点击认证</as-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: "",
        };
    },
    methods: {
        auth() {
            if (this.$refs.picRef.auth(this.userData)) {
                this.$as_message({
                    message: "认证成功",
                    type: "success"
                });
            } else {
                this.$as_message({
                    message: "认证失败",
                    type: "error"
                });
                // 刷新数据
                this.$refs.picRef.refresh();
            }
        }
    },
}
</script>
```

</CodeRun>

## API

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| refresh | 刷新方法，可传入刷新的数据以及颜色 | -   |
| module.auth | 认证方法 | `true` \| `false` |
| module.refresh | 刷新验证码 | - |
