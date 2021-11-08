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
            <pre>
                <slot name="code"></slot>
            </pre>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const codeRef = ref();
let codeOpen = false;
let codeAreaHeight = 0;

onMounted(() => {
    // 计算代码区域长度
    codeAreaHeight = codeRef.value.offsetHeight;
    // 隐藏代码区
    codeRef.value.style.height = 0;
});


function openSourceCode() {
    if (codeOpen) {
        codeRef.value.style.borderTop = "none";
        codeRef.value.style.height = "0";
    } else {
        codeRef.value.style.borderTop = "1px solid #dcdfe6";
        codeRef.value.style.height = `${codeAreaHeight}px`;
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
        pre
            margin 0
            display block
</style>
