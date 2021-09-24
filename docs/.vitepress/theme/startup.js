// 样式库
import 'quick-plugin-md/styles/index.css';
import qpmd from 'quick-plugin-md';
import AwesomeSliderAuth from "awesome-slider-auth";

const install = function(app, opts) {
    opts = opts || {};
    // 判断是否安装
    if (install.installed) return;
    // 插件库
    app.use(qpmd);
    app.use(AwesomeSliderAuth);

    // 全局挂载
    let $plus = {
        AwesomeSliderAuth,
        // 自定义挂载
        version: '2.0.1',
    };

    let _resp = `version:${$plus.version}`;

    if (typeof window !== 'undefined' && opts.plus) {
        if (window.$plus) {
            // 添加其它自定义外挂
            for (let key in window.$plus) {
                $plus[key] = window.$plus[key];
            }
        }

        // 全局原生挂载
        window.$plus = $plus;
        // window.$qveui = qveui;
        // window.$quick = quick;
        _resp += ';window.$plus';

        // 读取当前外挂的组件
        _resp += '[';
        // 显示外挂的key
        for (let _key in $plus) {
            _resp += ',' + _key;
        }
        _resp += `];`;
    }

    // 调试日志
    if (typeof opts.log !== 'undefined') {
        //调试日志输出
        console.log('docs', _resp);
    }
};

// 导出该组件
export default {
    install,
};
