<template>
    <div class="wrap">
        <div class="operation">
            <div class="sorce-code">
                <i class="iconfont icon-source-code" title="查看源码" @click="openSourceCode"></i>
            </div>
            <div class="sorce-code">
                <i class="iconfont icon-fuzhiwenjian" title="复制代码"></i>
            </div>
        </div>
        <div class="show">
            <slot name="show"></slot>
        </div>
        <div class="code" ref="codeRef">
            <div ref="innerCodeRef" class="inner-code">
                <hljsVuePlugin.component autodetect :code="code" />
                <div class="code-origin" ref="codeOriginRef">
                    <slot name="code"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const codeRef = ref();
const codeOriginRef = ref();
const innerCodeRef = ref();
let code = ref('');
let codeOpen = false;

onMounted(() => {
    // 获取源代码
    code.value = codeOriginRef.value.innerText;
});


function openSourceCode() {
    if (codeOpen) {
        codeRef.value.style.borderTop = "1px solid transparent";
        codeRef.value.style.height = "0";
    } else {
        codeRef.value.style.borderTop = "1px solid #dcdfe6";
        codeRef.value.style.height = `${innerCodeRef.value.offsetHeight}px`;
    }
    codeOpen = !codeOpen;
}
</script>
<style lang="stylus" scoped>
.wrap
    border 1px solid #dcdfe6
    border-radius 5px
    overflow hidden
    .operation
        height 45px
        border-bottom 1px solid #dcdfe6
        display flex
        align-items center
        flex-direction row-reverse
        padding-right 10px
        i
            font-size 20px
            cursor pointer
            margin 0 10px
            &.icon-source-code
                color #409EFF
                &:hover
                    color #79bbff
            &.icon-fuzhiwenjian
                color #409EFF
                &:hover
                    color #79bbff
    .show
        padding 10px 20px
    .code
        background-color #f5f7fa
        transition height .5s
        height 0
        .code-origin
            display none
pre
    margin 0
    white-space pre-wrap
    word-break break-all
    font-size 18px
</style>
