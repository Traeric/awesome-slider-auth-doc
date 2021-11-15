<template>
    <div class="wrap">
        <div class="operation">
            <div class="sorce-code">
                <i class="iconfont icon-source-code" title="查看源码" @click="openSourceCode"></i>
            </div>
            <div class="sorce-code">
                <i class="iconfont icon-fuzhiwenjian" title="复制代码" @click="copyCode"></i>
            </div>
        </div>
        <div class="show">
            <slot name="show"></slot>
        </div>
        <div class="code" ref="codeRef">
            <div ref="innerCodeRef" class="inner-code">
                <as-code-block :theme="props.theme" ref="asCodeBlockRef"></as-code-block>
                <div class="code-origin" ref="codeOriginRef">
                    <slot name="code"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {AsMessage} from "awesome-slider-auth";

let props = defineProps({
    theme: {
        type: String,
        default: 'light'
    }
});

const codeRef = ref();
const codeOriginRef = ref();
const innerCodeRef = ref();
const asCodeBlockRef = ref();
let code = ref('');
let codeOpen = false;

onMounted(() => {
    // 获取源代码
    code.value = codeOriginRef.value.innerText;
    // 格式化代码
    asCodeBlockRef.value.formatCode(code.value);
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

function copyCode() {
    // 复制数据到剪切板
    const cInput = document.createElement('input');
    cInput.value = code.value;
    document.body.appendChild(cInput);
    // 选取文本域内容;
    cInput.select() 
    // 执行浏览器复制命令
    // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
    // Input要在正常的编辑状态下原生复制方法才会生效
    document.execCommand('Copy')
    // 复制成功后再将构造的标签 移除
    cInput.remove();
    // 提示复制成功
    AsMessage({
        message: `复制成功`,
        type: "success"
    });
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
