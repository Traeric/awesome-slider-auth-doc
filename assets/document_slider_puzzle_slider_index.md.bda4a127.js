import{_ as n,r as s,o as a,c as t,b as e,w as p,d as c,e as l,a as o}from"./app.92fdeae4.js";const u='{"title":"滑动拼图认证","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"刷新频率以及认证误差","slug":"刷新频率以及认证误差"},{"level":2,"title":"自定义背景图片以及滑块位置","slug":"自定义背景图片以及滑块位置"},{"level":2,"title":"认证成功","slug":"认证成功"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"属性","slug":"属性"},{"level":3,"title":"事件","slug":"事件"}],"relativePath":"document/slider/puzzle_slider/index.md","lastUpdated":1635589597789}',r={},i=c("h1",{id:"滑动拼图认证",tabindex:"-1"},[l("滑动拼图认证 "),c("a",{class:"header-anchor",href:"#滑动拼图认证","aria-hidden":"true"},"#")],-1),k=c("p",null,"当点击登录或注册时，通过滑动拼图与画面中缺失的部分重合进行验证。",-1),d=c("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),c("a",{class:"header-anchor",href:"#基础用法","aria-hidden":"true"},"#")],-1),b=c("p",null,"在需要用到认证滑块的地方添加滑块标签即可，滑块的宽度可自适应父级标签。",-1),m=c("div",{class:"language-vue line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("div")]),l(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("wrap"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token special-attr"},[c("span",{class:"token attr-name"},"style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),c("span",{class:"token value css language-css"},[c("span",{class:"token property"},"width"),c("span",{class:"token punctuation"},":"),l(" 350px"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token property"},"margin-top"),c("span",{class:"token punctuation"},":"),l(" 50px"),c("span",{class:"token punctuation"},";")]),c("span",{class:"token punctuation"},'"')])]),c("span",{class:"token punctuation"},">")]),l("\n        "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("as-puzzle-slider")]),l(),c("span",{class:"token punctuation"},"/>")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("div")]),c("span",{class:"token punctuation"},">")]),l("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br")])],-1),g=o('<h2 id="刷新频率以及认证误差" tabindex="-1">刷新频率以及认证误差 <a class="header-anchor" href="#刷新频率以及认证误差" aria-hidden="true">#</a></h2><ul><li>如果认证失败后，滑块还自动归位，但是拼图和背景不会有任何改变，但是为了安全考虑，在错误次数超过限制后会调用refresh方法请求新的位置跟背景图片，默认的次数是<code>3</code>，如果想要自己设置，可以选择使用<code>refreshFrequency</code>参数设置</li><li>当两个滑块之间满足一定距离时会认证成功，这个距离默认为<code>5px</code>，也可以选择使用<code>errorRange</code>参数设置。</li></ul>',2),h=c("div",{class:"language-vue line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("div")]),l(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("wrap"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token special-attr"},[c("span",{class:"token attr-name"},"style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),c("span",{class:"token value css language-css"},[c("span",{class:"token property"},"width"),c("span",{class:"token punctuation"},":"),l(" 350px"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token property"},"margin-top"),c("span",{class:"token punctuation"},":"),l(" 50px"),c("span",{class:"token punctuation"},";")]),c("span",{class:"token punctuation"},'"')])]),c("span",{class:"token punctuation"},">")]),l("\n        "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("as-puzzle-slider")]),l(),c("span",{class:"token attr-name"},":refreshFrequency"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("5"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token attr-name"},":errorRange"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("10"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token punctuation"},"/>")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("div")]),c("span",{class:"token punctuation"},">")]),l("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br")])],-1),v=c("h2",{id:"自定义背景图片以及滑块位置",tabindex:"-1"},[l("自定义背景图片以及滑块位置 "),c("a",{class:"header-anchor",href:"#自定义背景图片以及滑块位置","aria-hidden":"true"},"#")],-1),f=c("div",{class:"tip custom-block"},[c("p",{class:"custom-block-title"},"提示"),c("p",null,"在未指定图片背景以及滑块位置时，AwesomeSliderAuth会自动生成滑块位置以及使用默认背景。但是这是不安全的，AwesomeSliderAuth并不建议这些操作在前端实现，而应该在后端生成并传给AwesomeSliderAuth，而通过指定refresh方法即可将这些数据传递给AwesomeSliderAuth。")],-1),_=c("div",{class:"language-vue line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("div")]),l(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("wrap"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token special-attr"},[c("span",{class:"token attr-name"},"style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),c("span",{class:"token value css language-css"},[c("span",{class:"token property"},"width"),c("span",{class:"token punctuation"},":"),l(" 350px"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token property"},"margin-top"),c("span",{class:"token punctuation"},":"),l(" 50px"),c("span",{class:"token punctuation"},";")]),c("span",{class:"token punctuation"},'"')])]),c("span",{class:"token punctuation"},">")]),l("\n        "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("as-puzzle-slider")]),l(),c("span",{class:"token attr-name"},":refresh"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("refresh"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token punctuation"},"/>")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("div")]),c("span",{class:"token punctuation"},">")]),l("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[l("\n"),c("span",{class:"token keyword"},"export"),l(),c("span",{class:"token keyword"},"default"),l(),c("span",{class:"token punctuation"},"{"),l("\n    "),c("span",{class:"token function"},"setup"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token punctuation"},"{"),l("\n        "),c("span",{class:"token keyword"},"function"),l(),c("span",{class:"token function"},"refresh"),c("span",{class:"token punctuation"},"("),c("span",{class:"token parameter"},"callback"),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token punctuation"},"{"),l("\n            "),c("span",{class:"token comment"},"// 模拟ajax请求"),l("\n            "),c("span",{class:"token function"},"setTimeout"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token operator"},"=>"),l(),c("span",{class:"token punctuation"},"{"),l("\n                "),c("span",{class:"token comment"},"// 模拟ajax请求到数据"),l("\n                "),c("span",{class:"token keyword"},"const"),l(" data "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token punctuation"},"{"),l("\n                    "),c("span",{class:"token string"},'"x"'),c("span",{class:"token operator"},":"),l(" Math"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"random"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token operator"},"*"),l(),c("span",{class:"token number"},"450"),c("span",{class:"token punctuation"},","),l("\n                    "),c("span",{class:"token string"},'"y"'),c("span",{class:"token operator"},":"),l(" Math"),c("span",{class:"token punctuation"},"."),c("span",{class:"token function"},"random"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token operator"},"*"),l(),c("span",{class:"token number"},"150"),c("span",{class:"token punctuation"},","),l("\n                    "),c("span",{class:"token string"},'"background"'),c("span",{class:"token operator"},":"),l(),c("span",{class:"token string"},'"https://cn.bing.com/th?id=OHR.MidAutumnFestival2021_ZH-CN7657484762_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"'),c("span",{class:"token punctuation"},","),l("\n                "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},";"),l("\n                "),c("span",{class:"token comment"},"// 将数据传递给refresh的回调函数 AwesomeSliderAuth会在需要刷新时调用该refresh方法，并获取回调函数中的对象，根据对象中的数据初始化背景以及拼图位置"),l("\n                "),c("span",{class:"token function"},"callback"),c("span",{class:"token punctuation"},"("),l("data"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n            "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),l(),c("span",{class:"token number"},"500"),c("span",{class:"token punctuation"},")"),c("span",{class:"token punctuation"},";"),l("\n        "),c("span",{class:"token punctuation"},"}"),l("\n\n        "),c("span",{class:"token keyword"},"return"),l(),c("span",{class:"token punctuation"},"{"),l("\n            refresh\n        "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},";"),l("\n    "),c("span",{class:"token punctuation"},"}"),l("\n"),c("span",{class:"token punctuation"},"}"),l("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("script")]),c("span",{class:"token punctuation"},">")]),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br"),c("span",{class:"line-number"},"13"),c("br"),c("span",{class:"line-number"},"14"),c("br"),c("span",{class:"line-number"},"15"),c("br"),c("span",{class:"line-number"},"16"),c("br"),c("span",{class:"line-number"},"17"),c("br"),c("span",{class:"line-number"},"18"),c("br"),c("span",{class:"line-number"},"19"),c("br"),c("span",{class:"line-number"},"20"),c("br"),c("span",{class:"line-number"},"21"),c("br"),c("span",{class:"line-number"},"22"),c("br"),c("span",{class:"line-number"},"23"),c("br"),c("span",{class:"line-number"},"24"),c("br"),c("span",{class:"line-number"},"25"),c("br"),c("span",{class:"line-number"},"26"),c("br"),c("span",{class:"line-number"},"27"),c("br"),c("span",{class:"line-number"},"28"),c("br"),c("span",{class:"line-number"},"29"),c("br")])],-1),y=c("h2",{id:"认证成功",tabindex:"-1"},[l("认证成功 "),c("a",{class:"header-anchor",href:"#认证成功","aria-hidden":"true"},"#")],-1),w=c("div",{class:"tip custom-block"},[c("p",{class:"custom-block-title"},"提示"),c("p",null,"对于用户来说，最关心的可能就是在将拼图拉到正确位置后，如何拿到正确的结果，其实AwesomeASliderAuth在判断滑块重叠后会触发一个回调方法，用户可以在该方法中定义认证成功后要执行的操作")],-1),x=c("div",{class:"language-vue line-numbers-mode"},[c("pre",null,[c("code",null,[c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("div")]),l(),c("span",{class:"token attr-name"},"class"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("wrap"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token special-attr"},[c("span",{class:"token attr-name"},"style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),c("span",{class:"token value css language-css"},[c("span",{class:"token property"},"width"),c("span",{class:"token punctuation"},":"),l(" 350px"),c("span",{class:"token punctuation"},";"),l(),c("span",{class:"token property"},"margin-top"),c("span",{class:"token punctuation"},":"),l(" 50px"),c("span",{class:"token punctuation"},";")]),c("span",{class:"token punctuation"},'"')])]),c("span",{class:"token punctuation"},">")]),l("\n        "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("as-puzzle-slider")]),l(),c("span",{class:"token attr-name"},":success"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("success"),c("span",{class:"token punctuation"},'"')]),l(),c("span",{class:"token punctuation"},"/>")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("div")]),c("span",{class:"token punctuation"},">")]),l("\n    "),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("div")]),l(),c("span",{class:"token attr-name"},":style"),c("span",{class:"token attr-value"},[c("span",{class:"token punctuation attr-equals"},"="),c("span",{class:"token punctuation"},'"'),l("{"),c("span",{class:"token punctuation"},"'"),l("color"),c("span",{class:"token punctuation"},"'"),l(": flag ? "),c("span",{class:"token punctuation"},"'"),l("#67C23A"),c("span",{class:"token punctuation"},"'"),l(" : "),c("span",{class:"token punctuation"},"'"),l("#409EFF"),c("span",{class:"token punctuation"},"'"),l(", "),c("span",{class:"token punctuation"},"'"),l("margin-top"),c("span",{class:"token punctuation"},"'"),l(": "),c("span",{class:"token punctuation"},"'"),l("20px"),c("span",{class:"token punctuation"},"'"),l("}"),c("span",{class:"token punctuation"},'"')]),c("span",{class:"token punctuation"},">")]),l("{{ tips }}"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("div")]),c("span",{class:"token punctuation"},">")]),l("\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("template")]),c("span",{class:"token punctuation"},">")]),l("\n\n"),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"<"),l("script")]),c("span",{class:"token punctuation"},">")]),c("span",{class:"token script"},[c("span",{class:"token language-javascript"},[l("\n"),c("span",{class:"token keyword"},"export"),l(),c("span",{class:"token keyword"},"default"),l(),c("span",{class:"token punctuation"},"{"),l("\n    methods"),c("span",{class:"token operator"},":"),l(),c("span",{class:"token punctuation"},"{"),l("\n        "),c("span",{class:"token comment"},"// 认证成功后的回调函数"),l("\n        "),c("span",{class:"token function"},"success"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token punctuation"},"{"),l("\n            "),c("span",{class:"token keyword"},"this"),c("span",{class:"token punctuation"},"."),l("tips "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token string"},'"认证成功"'),c("span",{class:"token punctuation"},";"),l("\n            "),c("span",{class:"token keyword"},"this"),c("span",{class:"token punctuation"},"."),l("flag "),c("span",{class:"token operator"},"="),l(),c("span",{class:"token boolean"},"true"),c("span",{class:"token punctuation"},";"),l("\n        "),c("span",{class:"token punctuation"},"}"),l("\n    "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),l("\n    "),c("span",{class:"token function"},"data"),c("span",{class:"token punctuation"},"("),c("span",{class:"token punctuation"},")"),l(),c("span",{class:"token punctuation"},"{"),l("\n        "),c("span",{class:"token keyword"},"return"),l(),c("span",{class:"token punctuation"},"{"),l("\n            tips"),c("span",{class:"token operator"},":"),l(),c("span",{class:"token string"},'"滑动认证"'),c("span",{class:"token punctuation"},","),l("\n            flag"),c("span",{class:"token operator"},":"),l(),c("span",{class:"token boolean"},"false"),l("\n        "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},";"),l("\n    "),c("span",{class:"token punctuation"},"}"),c("span",{class:"token punctuation"},","),l("\n"),c("span",{class:"token punctuation"},"}"),l("\n")])]),c("span",{class:"token tag"},[c("span",{class:"token tag"},[c("span",{class:"token punctuation"},"</"),l("script")]),c("span",{class:"token punctuation"},">")]),l("\n")])]),c("div",{class:"line-numbers-wrapper"},[c("span",{class:"line-number"},"1"),c("br"),c("span",{class:"line-number"},"2"),c("br"),c("span",{class:"line-number"},"3"),c("br"),c("span",{class:"line-number"},"4"),c("br"),c("span",{class:"line-number"},"5"),c("br"),c("span",{class:"line-number"},"6"),c("br"),c("span",{class:"line-number"},"7"),c("br"),c("span",{class:"line-number"},"8"),c("br"),c("span",{class:"line-number"},"9"),c("br"),c("span",{class:"line-number"},"10"),c("br"),c("span",{class:"line-number"},"11"),c("br"),c("span",{class:"line-number"},"12"),c("br"),c("span",{class:"line-number"},"13"),c("br"),c("span",{class:"line-number"},"14"),c("br"),c("span",{class:"line-number"},"15"),c("br"),c("span",{class:"line-number"},"16"),c("br"),c("span",{class:"line-number"},"17"),c("br"),c("span",{class:"line-number"},"18"),c("br"),c("span",{class:"line-number"},"19"),c("br"),c("span",{class:"line-number"},"20"),c("br"),c("span",{class:"line-number"},"21"),c("br"),c("span",{class:"line-number"},"22"),c("br"),c("span",{class:"line-number"},"23"),c("br"),c("span",{class:"line-number"},"24"),c("br")])],-1),A=o('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-hidden="true">#</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>tips</td><td>滑动区域提示字</td><td>String</td><td>移动滑块，完成拼图</td></tr><tr><td>errorRange</td><td>两个滑块之间允许误差范围</td><td>Number</td><td>5px</td></tr><tr><td>refreshFrequency</td><td>每次允许认证失败的次数</td><td>Number</td><td>3</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>refresh</td><td>滑块认证失败或点击刷新按钮触发</td><td>-</td></tr><tr><td>success</td><td>滑块认证成功触发</td><td>-</td></tr></tbody></table>',5);var q=n(r,[["render",function(n,c,l,o,u,r){const q=s("CodeRun");return a(),t("div",null,[i,k,d,b,e(q,{auto:"",editable:""},{default:p((()=>[m])),_:1}),g,e(q,{auto:"",editable:"true"},{default:p((()=>[h])),_:1}),v,f,e(q,{auto:"",editable:"true"},{default:p((()=>[_])),_:1}),y,w,e(q,{auto:"",editable:"true"},{default:p((()=>[x])),_:1}),A])}]]);export{u as __pageData,q as default};
