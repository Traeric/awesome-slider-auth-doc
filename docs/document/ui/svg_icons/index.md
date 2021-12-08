# svg图标
由于作者AI水平有限，目前还暂未研究自定义的svg图标，所有图标均取自[阿里巴巴矢量图标库](https://www.iconfont.cn/)，不过后续会自研svg图标，这还需要一点时间。
## 使用方式
[AwesomeSliderAuth](/)已经将每个svg图标封装成了组件，svg图标和使用其他组件一样。
::: tip 提示
可直接在组件上设置css来控制图标大小以及颜色等。
:::

<CodeRun auto editable>

```vue
<template>
    <div class="flex">
        <star style="color: #3eaf7c; width: 24px; height: 24px;"></star>
        <success style="color: #e7c000; width: 24px; height: 24px;"></success>
        <top style="color: #cc0000; width: 24px; height: 24px;"></top>
        <loading style="color: #66b1ff; width: 24px; height: 24px;"></loading>
        <auth style="color: #66b1ff; width: 24px; height: 24px;"></auth>
    </div>
</template>
```

</CodeRun>

## 图标集合
<div class="icon-gather">
    <div class="icon-item" @click="fontClick">
        <error-message></error-message>
        <span class="icon-text">error-message</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <success-message></success-message>
        <span class="icon-text">success-message</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <top></top>
        <span class="icon-text">top</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <execute></execute>
        <span class="icon-text">execute</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <restart></restart>
        <span class="icon-text">restart</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <source-code></source-code>
        <span class="icon-text">source-code</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <info-message></info-message>
        <span class="icon-text">info-message</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <warning-message></warning-message>
        <span class="icon-text">warning-message</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <search></search>
        <span class="icon-text">search</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <refresh></refresh>
        <span class="icon-text">refresh</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <auth></auth>
        <span class="icon-text">auth</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <load></load>
        <span class="icon-text">load</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <loading></loading>
        <span class="icon-text">loading</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <success></success>
        <span class="icon-text">success</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <star></star>
        <span class="icon-text">star</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <auth-success></auth-success>
        <span class="icon-text">auth-success</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <error></error>
        <span class="icon-text">error</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <fail></fail>
        <span class="icon-text">fail</span>
    </div>
    <div class="icon-item" @click="fontClick">
        <arrow></arrow>
        <span class="icon-text">arrow</span>
    </div>
    <div class="icon-item">
        <i class="iconfont"></i>
        <span class="icon-text"></span>
    </div>
</div>

<script setup>
import {ref, onMounted} from "vue";
import {AsMessage} from "awesome-slider-auth";
import {initPage} from "../../../.vitepress/theme/customer";


onMounted(() => {
    initPage();
});

/**
 * 字体图标点击复制
 */
function fontClick(e) {
    // 获取所点击的字体类名
    let fontClassName = e.currentTarget.children[1].innerText;
    if (!fontClassName) {
        return;
    }
    // 复制数据到剪切板
    const cInput = document.createElement('input');
    cInput.value = `<${fontClassName}></${fontClassName}>`;
    document.body.appendChild(cInput);
    cInput.select() // 选取文本域内容;
    // 执行浏览器复制命令
    // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
    // Input要在正常的编辑状态下原生复制方法才会生效
    document.execCommand('Copy')
    // 复制成功后再将构造的标签 移除
    cInput.remove();
    // 提示复制成功
    AsMessage({
        message: `【${fontClassName}】复制成功`,
        type: "success"
    });
}
</script>
