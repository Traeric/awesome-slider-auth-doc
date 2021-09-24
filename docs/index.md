# Hello World


<CodeRun editable>
```vue
<template>
  <div class="code-index-page">
    <Badge dot>消息</Badge>
    <Badge :text="the.tag.text">消息数</Badge>
    <Button style="margin: 0 0.5rem;" type="primary" @click="onTagEvent">
      <Icon type="icon-jiahao" /> 加消息数
    </Button>
  </div>
</template>

<script>

export default {
  setup() {
    // 使用外挂方式引入，具体查看demo
    const $plus = window.$plus;
    const reactive = $plus.vue.reactive;
    // 组件变量
    const the = reactive({
      tag: {
        text: 9,
      },
    });

    /** 标签事件 */
    const onTagEvent = () => {
      console.log('onTagEvent:', the.tag.text);
      the.tag.text = the.tag.text + 1;
    };

    return { the, onTagEvent };
  },
};
</script>

<style lang="less">
.code-index-page {
  .qv-badge {
    margin: 0.5rem;
  }
}
</style>

```
</CodeRun>

<CodeRun dll="json" styled="height:20rem" ubb editable="true">

```js
// js语言类别 在线测试执行代码
return 1+1;
```
</CodeRun>



