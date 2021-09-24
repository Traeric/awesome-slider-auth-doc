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



    return { SearchEvent }
  }
}
</script>

<style lang="less">
</style>
