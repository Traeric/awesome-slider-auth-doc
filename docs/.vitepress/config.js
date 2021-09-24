// vitepress/config.js
module.exports = {
    title: "Awesome Slider Auth 2.0.1",// 网站标题
    description: 'AwesomeSliderAuth组件库说明文档', //网站描述
    base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/linktolink.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        logo: "/logo.png",
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '教程', link: '/document/' },
        ],
        //   侧边导航
        sidebar: {
            '/document/': [
                { text: '介绍', link: '/document/' },
                { text: '快速开始', link: '/document/quick_start/' },
                { 
                    text: '人机校验',
                    collapsable: false,
                    children: [
                        { text: '滑动拼图认证', link: '/document/slider/default_slider/' },
                    ] 
                },
            ]
        }
    }
}
