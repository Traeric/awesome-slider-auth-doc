<template>
    <CodeTemplate>
        <template #show>
            <as-button type="primary" @click="messageTip" style="margin-right: 20px;">Message消息基础用法</as-button>
            <as-button type="positive" @click="messageVNode">VNode消息基础用法</as-button>
        </template>
        <template #code>
            <div v-text="code"></div>
        </template>
    </CodeTemplate>
</template>
<script lang="ts" setup>
    import CodeTemplate from "../../../vue/CodeTemplate.vue";
    import {AsMessage} from "awesome-slider-auth";
    import { h } from "vue";

    function messageTip() {
        AsMessage("Message提示基础用法");
    }

    function messageVNode() {
        AsMessage(h('p', null, [
          h('span', null, 'Message消息支持 '),
          h('i', { style: 'color: teal' }, 'VNode'),
        ]));
    }

    let code = 
`<template>
    <as-button type="primary" @click="messageTip">测试</as-button>
    <as-button type="warning" @click="messageVNode">VNode消息基础用法</as-button>
</template>
<script setup>
    import {AsMessage} from "awesome-slider-auth";
    import { h } from "vue";
    
    function messageTip() {
        AsMessage("Message提示基础用法");
    }

    function messageVNode() {
        AsMessage(h('p', null, [
            h('span', null, 'Message消息支持 '),
            h('i', { style: 'color: teal' }, 'VNode'),
        ]));
    }
<\/script>`;
</script>
