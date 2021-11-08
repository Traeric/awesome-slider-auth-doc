<template>
    <CodeTemplate>
        <template #show>
            <as-button type="primary" @click="messageInfo" style="margin-right: 20px;">Info消息</as-button>
            <as-button type="positive" @click="messageSuccess" style="margin-right: 20px;">Success消息</as-button>
            <as-button type="warning" @click="messageWarn" style="margin-right: 20px;">Warn消息</as-button>
            <as-button type="negative" @click="messageError">Error消息</as-button>
            <p></p>
            <as-button type="primary" @click="messageElementInfo" plain style="margin-right: 20px;">Info消息</as-button>
            <as-button type="positive" @click="messageElementSuccess" plain style="margin-right: 20px;">Success消息</as-button>
            <as-button type="warning" @click="messageElementWarn" plain style="margin-right: 20px;">Warn消息</as-button>
            <as-button type="negative" @click="messageElementError" plain>Error消息</as-button>
        </template>
        <template #code>
            <div v-text="code"></div>
        </template>
    </CodeTemplate>
</template>
<script lang="ts" setup>
    import CodeTemplate from "../../../vue/CodeTemplate.vue";
    import {AsMessage} from "awesome-slider-auth";

    function messageInfo() {
        AsMessage({
            message: "Info提示基础用法",
            type: "info"
        });
    }

    function messageSuccess() {
        AsMessage({
            message: "Success提示基础用法",
            type: "success"
        });
    }

    function messageWarn() {
        AsMessage({
            message: "Warn提示基础用法",
            type: "warn"
        });
    }

    function messageError() {
        AsMessage({
            message: "Error提示基础用法",
            type: "error"
        });
    }

    function messageElementInfo() {
        AsMessage({
            message: "Info提示基础用法",
            type: "info",
            elementLike: true,
        });
    }

    function messageElementSuccess() {
        AsMessage({
            message: "Success提示基础用法",
            type: "success",
            elementLike: true
        });
    }

    function messageElementWarn() {
        AsMessage({
            message: "Warn提示基础用法",
            type: "warn",
            elementLike: true
        });
    }

    function messageElementError() {
        AsMessage({
            message: "Error提示基础用法",
            type: "error",
            elementLike: true
        });
    }

    let code = `
        <template>
            <as-button type="primary" @click="messageInfo">Info消息</as-button>
            <as-button type="positive" @click="messageSuccess">Success消息</as-button>
            <as-button type="warning" @click="messageWarn">Warn消息</as-button>
            <as-button type="negative" @click="messageError">Error消息</as-button>

            <as-button type="primary" @click="messageElementInfo">eleemnt Info消息</as-button>
            <as-button type="positive" @click="messageElementSuccess">element Success消息</as-button>
            <as-button type="warning" @click="messageElementWarn">element Warn消息</as-button>
            <as-button type="negative" @click="messageElementError">element Error消息</as-button>
        </template>
        <script setup>
            import {AsMessage} from "awesome-slider-auth";
            
            function messageInfo() {
                AsMessage({
                    message: "Info提示基础用法",
                    type: "info"
                });
            }

            function messageSuccess() {
                AsMessage({
                    message: "Success提示基础用法",
                    type: "success"
                });
            }

            function messageWarn() {
                AsMessage({
                    message: "Warn提示基础用法",
                    type: "warn"
                });
            }

            function messageError() {
                AsMessage({
                    message: "Error提示基础用法",
                    type: "error"
                });
            }

            function messageElementInfo() {
                AsMessage({
                    message: "Info提示基础用法",
                    type: "info",
                    elementLike: true,
                });
            }

            function messageElementSuccess() {
                AsMessage({
                    message: "Success提示基础用法",
                    type: "success",
                    elementLike: true
                });
            }

            function messageElementWarn() {
                AsMessage({
                    message: "Warn提示基础用法",
                    type: "warn",
                    elementLike: true
                });
            }

            function messageElementError() {
                AsMessage({
                    message: "Error提示基础用法",
                    type: "error",
                    elementLike: true
                });
            }
        <\/script>
    `;
</script>
