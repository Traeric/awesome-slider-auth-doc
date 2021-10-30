# 字体图标
由于作者AI水平有限，目前还暂未研究自定义的字体图片，所有图标均取自[阿里巴巴矢量图标库](https://www.iconfont.cn/)，不过后续会自研字体图标，这还需要一点时间。
## 使用方式
如果你已经导入了[AwesomeSliderAuth](/)的css样式文件，则可以直接在项目中使用，通过在`i`标签中添加`iconfont`类名和对应图标类名即可。

<CodeRun auto editable>

```vue
<template>
    <div class="flex">
        <i class="iconfont icon-Star"></i>
        <i class="iconfont icon-wancheng"></i>
        <i class="iconfont icon-top"></i>
        <i class="iconfont icon-jiazaizhong"></i>
        <i class="iconfont icon-renzhengguanli"></i>
    </div>
</template>
```

</CodeRun>

## 图标集合
<div class="icon-gather">
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-shuaxin1"></i>
        <span class="icon-text">icon-shuaxin1</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-renzhengguanli"></i>
        <span class="icon-text">icon-renzhengguanli</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-tongyirenzheng-copy"></i>
        <span class="icon-text">icon-tongyirenzheng-copy</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-jiazaizhong"></i>
        <span class="icon-text">icon-jiazaizhong</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-jiazaizhong4"></i>
        <span class="icon-text">icon-jiazaizhong4</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-top"></i>
        <span class="icon-text">icon-top</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-zhifuchenggong"></i>
        <span class="icon-text">icon-zhifuchenggong</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-wancheng"></i>
        <span class="icon-text">icon-wancheng</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-star-circle"></i>
        <span class="icon-text">icon-star-circle</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-Star"></i>
        <span class="icon-text">icon-Star</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-shibai"></i>
        <span class="icon-text">icon-shibai</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-icon1"></i>
        <span class="icon-text">icon-icon1</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-icon"></i>
        <span class="icon-text">icon-icon</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-shibai1"></i>
        <span class="icon-text">icon-shibai1</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-zuobian"></i>
        <span class="icon-text">icon-zuobian</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item" @click="fontClick">
        <i class="iconfont icon-renzhengshibai"></i>
        <span class="icon-text">icon-renzhengshibai</span>
        <span class="tips"></span>
    </div>
    <div class="icon-item">
        <i class="iconfont"></i>
        <span class="icon-text"></span>
        <span class="tips"></span>
    </div>
    <div class="icon-item">
        <i class="iconfont"></i>
        <span class="icon-text"></span>
        <span class="tips"></span>
    </div>
    <div class="icon-item">
        <i class="iconfont"></i>
        <span class="icon-text"></span>
        <span class="tips"></span>
    </div>
    <div class="icon-item">
        <i class="iconfont"></i>
        <span class="icon-text"></span>
        <span class="tips"></span>
    </div>
</div>

<script setup>
import {ref} from "vue";
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
    cInput.value = fontClassName;
    document.body.appendChild(cInput);
    cInput.select() // 选取文本域内容;
    // 执行浏览器复制命令
    // 复制命令会将当前选中的内容复制到剪切板中（这里就是创建的input标签）
    // Input要在正常的编辑状态下原生复制方法才会生效
    document.execCommand('Copy')
    // 复制成功后再将构造的标签 移除
    cInput.remove();
    // 提示复制成功
    let tipDom = e.currentTarget.children[2];
    tipDom.innerText = "已复制";
    setTimeout(() => {
        tipDom.innerText = "";
    }, 1500);
}
</script>