# Message消息提示
该组件常用于在添加、修改、删除等操作后的提示
## 基础用法
Message注册了一个全局`$as_message`方法用于调用。 可以接收一个字符串或一个`VNode`作为参数。

<script setup>
import Message from "./Message.vue";
</script>

<Message />

