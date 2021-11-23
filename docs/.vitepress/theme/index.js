import qpmd from 'quick-plugin-md';
import './customer.css';
import Layout from './Layout.vue';
import NotFound from "./NotFound.vue";
import "awesome-slider-auth/dist/index.css";
import AwesomeSliderAuth from "awesome-slider-auth";
import 'quick-plugin-md/styles/index.css';
import { onMounted } from '@vue/runtime-core';

export default {
    // ...DefaultTheme,
    Layout,
    NotFound, // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
        // app.component('Picture', Picture);
        // 注册全局组件
        app.use(AwesomeSliderAuth);
        app.use(qpmd);
    }
};
