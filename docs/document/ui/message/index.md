# Message消息提示
该组件常用于在添加、修改、删除等操作后的提示
## 基础用法
Message注册了一个全局`$as_message`方法用于调用，也可以直接导入`AsMessage`模块使用。 可以接收一个字符串或一个`VNode`作为参数。

<script setup>
import BaseMessage from "./BaseMessage.vue";
import ElementMessage from "./ElementMessage.vue";
import TypeMessage from "./TypeMessage.vue";
import CloseMessage from "./CloseMessage.vue";
</script>

<BaseMessage />
## 不同风格
除了默认的风格，Message还支持[Element Plus](https://element-plus.gitee.io/zh-CN/component/message.html)风格，设置`elementLike`为true即可。

<ElementMessage />
## 不同类型
Message支持四种类型，分别是`info`、`success`、`warn`、`error`，通过`type`设置即可。

<TypeMessage />

## 关闭时间和关闭回调
Message的展示时间可以由`duration`控制，单位为ms，此外，在关闭时会触发一个回调函数`onClose`。

<CloseMessage />

## API
### 属性
| 属性          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| message          | 消息内容 | String|VNode  | Awesome Slider Auth Message! |
| type    | 消息类型 | info|success|warn|error | info |
| offset | 消息离顶部的距离 | Number | 20 |
| duration | 消息展示时间 | Number | 3000 |
| elementLike | element风格 | Boolean | false |

### 事件
| 事件名  | 说明             | 返回值 |
| ------- | ---------------- | ------ |
| onClose | 关闭时触发的回调函数 | -   |

