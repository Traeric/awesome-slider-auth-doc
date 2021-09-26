<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <!-- <template #sidebar-top>
      <SearchBar @onEvent="SearchEvent" />
    </template> -->
    <template #navbar-search>
      <SearchBar @onEvent="SearchEvent" />
    </template>
  </Layout>
  <!-- <Content /> make sure to include markdown outlet -->
</template>
<script>
//import 'quick-plugin-md/dist/styles/index.css'
import { onMounted, ref } from 'vue'
import { html } from 'quick.lib'
import { useRouter, useData } from 'vitepress'
//import Theme from '/@theme/index';
//import theme from 'vitepress/dist/client/theme-default/index.js';
import DefaultTheme from 'vitepress/theme';
const Layout = DefaultTheme.Layout

//const { theme } = useData()
//import Layout from 'vitepress/dist/client/theme-default/Layout.vue';

export default {
  components: { Layout },
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


    return { SearchEvent }
  }
}
</script>

<style lang="less">
</style>
