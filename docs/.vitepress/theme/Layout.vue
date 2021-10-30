<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <!-- <template #sidebar-top>
      <SearchBar @onEvent="SearchEvent" />
    </template> -->
    <template #navbar-search>
      <SearchBar @onEvent="SearchEvent" :words="keywords" />
    </template>
  </Layout>
  <!-- <Content /> make sure to include markdown outlet -->
</template>
<script>
//import 'quick-plugin-md/dist/styles/index.css'
import { onMounted } from 'vue';
import { useRouter, useData } from 'vitepress'
//import Theme from '/@theme/index';
//import theme from 'vitepress/dist/client/theme-default/index.js';
import DefaultTheme from 'vitepress/theme';
const Layout = DefaultTheme.Layout

import keywords from "../../../keywords.json";

//const { theme } = useData()
//import Layout from 'vitepress/dist/client/theme-default/Layout.vue';

export default {
  components: { 
    Layout 
  },
  setup () {
    // const { siteData } = useSiteData()
    const { site } = useData()
    /** 路由 */
    const router = useRouter();
    /** 搜索事件触发 */
    const SearchEvent = (data) => {
      // 发布根目录
      let _url = site.value.base + data.url.substr(1);
      // let _url = data.url.substr(1);
      // let _url = data.url;
      router.go(_url);
    };

    onMounted(() => {
      let buttonList = document.getElementsByClassName("code-search-btn");
      if (buttonList != null && buttonList != undefined && buttonList.length > 0) {
          buttonList[0].addEventListener("click", () => {
              let inputList = document.getElementsByClassName('code-search-input');
              if (inputList !== null && inputList !== undefined && inputList.length > 0) {
                inputList[0].style.cssText = `
                  width: 75% !important;
                  transition: all 1s;
                  padding: .3rem !important;
                `;

                buttonList[0].style.cssText = `
                  width: 25% !important;
                  transition: width 1s;
                `;
              }
          });
      }
    });

    return { SearchEvent, keywords }
  }
}

/**
 * 字体图标点击复制
 */
function fontClick() {
  let fontItems = document.getElementsByClassName("icon-item");
  for (let i = 0; i < fontItems.length; i++) {
    fontItems[i].addEventListener("click", e => {
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
    });
  }
}
</script>

<style lang="less">
</style>
