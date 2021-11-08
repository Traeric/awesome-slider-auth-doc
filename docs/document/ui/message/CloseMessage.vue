<template>
    <CodeTemplate>
        <template #show>
            <as-button type="primary" @click="messageDuration" style="margin-right: 20px;">设置关闭时间</as-button>
            <as-button type="positive" @click="messageClose">关闭时触发回调</as-button>
        </template>
        <template #code>
            <div v-text="code"></div>
        </template>
    </CodeTemplate>
</template>
<script lang="ts" setup>
    import CodeTemplate from "../../../vue/CodeTemplate.vue";
    import {AsMessage} from "awesome-slider-auth";

    function messageDuration() {
        AsMessage({
            message: "设置关闭时间为1秒",
            duration: 1000
        });
    }

    function messageClose() {
        AsMessage({
            message: '触发关闭回调',
            duration: 3000,
            onClose: () => {
                AsMessage("关闭回调触发成功！");
            }
        });
    }

    let code = 
`<template>
    <as-button type="primary" @click="messageDuration">设置关闭时间</as-button>
    <as-button type="positive" @click="messageClose">关闭时触发回调</as-button>
</template>
<script setup>
    import {AsMessage} from "awesome-slider-auth";
    
    function messageDuration() {
        AsMessage({
            message: "设置关闭时间为1秒",
            duration: 1000
        });
    }

    function messageClose() {
        AsMessage({
            message: '触发关闭回调',
            duration: 3000,
            onClose: () => {
                AsMessage("关闭回调触发成功！");
            }
        });
    }
<\/script>`;
</script>
