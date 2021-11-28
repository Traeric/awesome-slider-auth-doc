<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <!-- <template #sidebar-top>
      <SearchBar @onEvent="SearchEvent" />
    </template> -->
    <template #navbar-search>
      <SearchBar @onEvent="SearchEvent" :words="keywords" />
      <as-top />
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
        buttonList[0].innerText = "";
        buttonList[0].classList.add("iconfont");
        buttonList[0].classList.add("icon-sousuo");
      }

      let inputList = document.getElementsByClassName("code-search-input");
      let barList = document.getElementsByClassName("code-search-bar");
      if (inputList != null && inputList != undefined && inputList.length > 0) {
        // 添加搜索边框样式
        inputList[0].addEventListener("focus", () => {
          barList[0].classList.add("code-search-bar-focused");
        });

        inputList[0].addEventListener("blur", () => {
          barList[0].classList.remove("code-search-bar-focused");
        });
      }

      // 调整搜索框的位置
      let headDom = document.getElementsByClassName("nav-bar")[0];
      let searchDom = document.getElementsByClassName("code-search-bar")[0];
      headDom.insertBefore(searchDom, headDom.childNodes[3]);
    });

    return { SearchEvent, keywords }
  }
}
</script>

<style lang="less">
</style>
