import{_ as n,r as a,o as s,c as t,b as e,w as l,d as p,e as c,a as o}from"./app.cea27698.js";const u='{"title":"滑动拼图认证","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"自定义背景图片以及滑动提示","slug":"自定义背景图片以及滑动提示"},{"level":2,"title":"认证成功","slug":"认证成功"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"属性","slug":"属性"},{"level":3,"title":"事件","slug":"事件"}],"relativePath":"document/slider/simple_slider/index.md","lastUpdated":1636338716352}',i={},r=p("h1",{id:"滑动拼图认证",tabindex:"-1"},[c("滑动拼图认证 "),p("a",{class:"header-anchor",href:"#滑动拼图认证","aria-hidden":"true"},"#")],-1),k=p("p",null,"当点击登录或注册时，通过将滑块滑动到最右边完成认证。",-1),d=p("h2",{id:"基础用法",tabindex:"-1"},[c("基础用法 "),p("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),b=p("p",null,"在需要用到认证滑块的地方添加滑块标签即可，滑块的宽度可自适应父级标签。",-1),g=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("div")]),c(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("wrap"),p("span",{class:"token punctuation"},'"')]),c(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),c(" 300px"),p("span",{class:"token punctuation"},";"),c(),p("span",{class:"token property"},"margin-top"),p("span",{class:"token punctuation"},":"),c(" 50px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),c("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("as-simple-slider")]),c(),p("span",{class:"token punctuation"},"/>")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("div")]),p("span",{class:"token punctuation"},">")]),c("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br")])],-1),m=p("h2",{id:"自定义背景图片以及滑动提示",tabindex:"-1"},[c("自定义背景图片以及滑动提示 "),p("a",{class:"header-anchor",href:"#自定义背景图片以及滑动提示","aria-hidden":"true"},"#")],-1),h=p("ul",null,[p("li",null,[c("滑块的背景有一个默认值，如果不想使用该默认值可以自己替换，通过"),p("code",null,"background"),c("属性即可完成。")]),p("li",null,[c("滑块滑动的提示文字也可以通过"),p("code",null,"tips"),c("属性进行更改。")])],-1),v=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("div")]),c(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("wrap"),p("span",{class:"token punctuation"},'"')]),c(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),c(" 300px"),p("span",{class:"token punctuation"},";"),c(),p("span",{class:"token property"},"margin-top"),p("span",{class:"token punctuation"},":"),c(" 50px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),c("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("as-simple-slider")]),c(" \n        "),p("span",{class:"token attr-name"},"background"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("https://cn.bing.com/th?id=OHR.AtchafalayaMoss_ZH-CN6079994094_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"),p("span",{class:"token punctuation"},'"')]),c(" \n        "),p("span",{class:"token attr-name"},"tips"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("通过自定义文字，可改变滑块的滑动的提示"),p("span",{class:"token punctuation"},'"')]),c(),p("span",{class:"token punctuation"},"/>")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("div")]),p("span",{class:"token punctuation"},">")]),c("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br")])],-1),f=p("h2",{id:"认证成功",tabindex:"-1"},[c("认证成功 "),p("a",{class:"header-anchor",href:"#认证成功","aria-hidden":"true"},"#")],-1),y=p("p",null,[c("在用户认证成功后需要触发回调函数进行成功后的操作，模块提供了"),p("code",null,"success"),c("属性来执行认证成功后的回调。")],-1),_=p("div",{class:"language-vue line-numbers-mode"},[p("pre",null,[p("code",null,[p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("div")]),c(),p("span",{class:"token attr-name"},"class"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("wrap"),p("span",{class:"token punctuation"},'"')]),c(),p("span",{class:"token special-attr"},[p("span",{class:"token attr-name"},"style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),p("span",{class:"token value css language-css"},[p("span",{class:"token property"},"width"),p("span",{class:"token punctuation"},":"),c(" 300px"),p("span",{class:"token punctuation"},";"),c(),p("span",{class:"token property"},"margin-top"),p("span",{class:"token punctuation"},":"),c(" 50px"),p("span",{class:"token punctuation"},";")]),p("span",{class:"token punctuation"},'"')])]),p("span",{class:"token punctuation"},">")]),c("\n        "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("as-simple-slider")]),c(),p("span",{class:"token attr-name"},":success"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("success"),p("span",{class:"token punctuation"},'"')]),c(),p("span",{class:"token punctuation"},"/>")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("div")]),p("span",{class:"token punctuation"},">")]),c("\n    "),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("div")]),c(),p("span",{class:"token attr-name"},":style"),p("span",{class:"token attr-value"},[p("span",{class:"token punctuation attr-equals"},"="),p("span",{class:"token punctuation"},'"'),c("{"),p("span",{class:"token punctuation"},"'"),c("color"),p("span",{class:"token punctuation"},"'"),c(": flag ? "),p("span",{class:"token punctuation"},"'"),c("#67C23A"),p("span",{class:"token punctuation"},"'"),c(" : "),p("span",{class:"token punctuation"},"'"),c("#409EFF"),p("span",{class:"token punctuation"},"'"),c(", "),p("span",{class:"token punctuation"},"'"),c("margin-top"),p("span",{class:"token punctuation"},"'"),c(": "),p("span",{class:"token punctuation"},"'"),c("20px"),p("span",{class:"token punctuation"},"'"),c("}"),p("span",{class:"token punctuation"},'"')]),p("span",{class:"token punctuation"},">")]),c("{{ tips }}"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("div")]),p("span",{class:"token punctuation"},">")]),c("\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("template")]),p("span",{class:"token punctuation"},">")]),c("\n\n"),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"<"),c("script")]),p("span",{class:"token punctuation"},">")]),p("span",{class:"token script"},[p("span",{class:"token language-javascript"},[c("\n"),p("span",{class:"token keyword"},"export"),c(),p("span",{class:"token keyword"},"default"),c(),p("span",{class:"token punctuation"},"{"),c("\n    methods"),p("span",{class:"token operator"},":"),c(),p("span",{class:"token punctuation"},"{"),c("\n        "),p("span",{class:"token function"},"success"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token punctuation"},"{"),c("\n            "),p("span",{class:"token keyword"},"this"),p("span",{class:"token punctuation"},"."),c("flag "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token boolean"},"true"),p("span",{class:"token punctuation"},";"),c("\n            "),p("span",{class:"token keyword"},"this"),p("span",{class:"token punctuation"},"."),c("tips "),p("span",{class:"token operator"},"="),c(),p("span",{class:"token string"},'"认证成功"'),p("span",{class:"token punctuation"},";"),c("\n        "),p("span",{class:"token punctuation"},"}"),c("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),c("\n    "),p("span",{class:"token function"},"data"),p("span",{class:"token punctuation"},"("),p("span",{class:"token punctuation"},")"),c(),p("span",{class:"token punctuation"},"{"),c("\n        "),p("span",{class:"token keyword"},"return"),c(),p("span",{class:"token punctuation"},"{"),c("\n            flag"),p("span",{class:"token operator"},":"),c(),p("span",{class:"token boolean"},"false"),p("span",{class:"token punctuation"},","),c("\n            tips"),p("span",{class:"token operator"},":"),c(),p("span",{class:"token string"},'"滑动认证"'),p("span",{class:"token punctuation"},","),c("\n        "),p("span",{class:"token punctuation"},"}"),c("\n    "),p("span",{class:"token punctuation"},"}"),p("span",{class:"token punctuation"},","),c("\n"),p("span",{class:"token punctuation"},"}"),c("\n")])]),p("span",{class:"token tag"},[p("span",{class:"token tag"},[p("span",{class:"token punctuation"},"</"),c("script")]),p("span",{class:"token punctuation"},">")]),c("\n")])]),p("div",{class:"line-numbers-wrapper"},[p("span",{class:"line-number"},"1"),p("br"),p("span",{class:"line-number"},"2"),p("br"),p("span",{class:"line-number"},"3"),p("br"),p("span",{class:"line-number"},"4"),p("br"),p("span",{class:"line-number"},"5"),p("br"),p("span",{class:"line-number"},"6"),p("br"),p("span",{class:"line-number"},"7"),p("br"),p("span",{class:"line-number"},"8"),p("br"),p("span",{class:"line-number"},"9"),p("br"),p("span",{class:"line-number"},"10"),p("br"),p("span",{class:"line-number"},"11"),p("br"),p("span",{class:"line-number"},"12"),p("br"),p("span",{class:"line-number"},"13"),p("br"),p("span",{class:"line-number"},"14"),p("br"),p("span",{class:"line-number"},"15"),p("br"),p("span",{class:"line-number"},"16"),p("br"),p("span",{class:"line-number"},"17"),p("br"),p("span",{class:"line-number"},"18"),p("br"),p("span",{class:"line-number"},"19"),p("br"),p("span",{class:"line-number"},"20"),p("br"),p("span",{class:"line-number"},"21"),p("br"),p("span",{class:"line-number"},"22"),p("br"),p("span",{class:"line-number"},"23"),p("br")])],-1),x=o('',5);var w=n(i,[["render",function(n,p,c,o,u,i){const w=a("CodeRun");return s(),t("div",null,[r,k,d,b,e(w,{auto:"",editable:""},{default:l((()=>[g])),_:1}),m,h,e(w,{auto:"",editable:"true"},{default:l((()=>[v])),_:1}),f,y,e(w,{auto:"",editable:"true"},{default:l((()=>[_])),_:1}),x])}]]);export{u as __pageData,w as default};
