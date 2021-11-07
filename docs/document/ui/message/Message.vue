<template>
    <CodeTemplate>
        <template #show>
            <as-button type="primary" @click="messageTip">测试</as-button>
        </template>
        <template #code>
            <div v-text="code"></div>
        </template>
    </CodeTemplate>
</template>
<script lang="ts" setup>
    import CodeTemplate from "../../../vue/CodeTemplate.vue";
    import {AsMessage} from "awesome-slider-auth";

    function messageTip() {
        AsMessage();
    }

    let code = `
        <template></template>
        <script><\/script>
    `;
</script>
