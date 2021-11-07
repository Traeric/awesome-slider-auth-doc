// vitepress/config.js
module.exports = {
    title: "Awesome Slider Auth",// 网站标题
    description: 'AwesomeSliderAuth组件库说明文档', //网站描述
    base: '/awesome-slider-auth-doc/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/awesome-slider-auth-doc/linktolink.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        logo: "/logo.png",
        // lastUpdated: 'Last Updated',
        // 启动页面丝滑滚动
        smoothScroll: true,
        // 头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '教程', link: '/document/' },
            {
                text: "更多选项",
                items: [
                    { text : '项目地址', link: 'https://github.com/Traeric/awesome-slider-auth' },
                    { text : '关注作者', link: 'https://github.com/Traeric' }
                ],
            }
        ],
        //   侧边导航
        sidebar: {
            '/document/': [
                { text: '安装', link: '/document/' },
                { text: '快速开始', link: '/document/quick_start/' },
                { 
                    text: '人机校验',
                    collapsable: false,
                    children: [
                        { text: '滑动拼图认证', link: '/document/slider/puzzle_slider/' },
                        { text: '滑动滑块认证', link: '/document/slider/simple_slider/' },
                        { text: '文字点选认证', link: '/document/slider/text_slider/' },
                    ] 
                },
                {
                    text: 'UI组件',
                    collapsable: false,
                    children: [
                        {text: '按钮组件', link: '/document/ui/button/'},
                        {text: '字体图标', link: '/document/ui/font_icons/'},
                        {text: 'Message消息提示', link: '/document/ui/message/'},
                    ]
                },
            ]
        }
    },
    markdown: {
        lineNumbers: true,
    }
}
