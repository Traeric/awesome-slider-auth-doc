import{_ as e,f as t,l as a,m as s,u as i,o as l,c as o,d as n,p as r,q as c,t as v,j as u,N as f,F as d,s as m,r as p,b as k,i as h}from"./app.d3e775d6.js";const y={key:0,class:"home-hero"},g={key:0,class:"figure"},x=["src","alt"],_={key:1,id:"main-title",class:"title"},I={key:2,class:"tagline"};var T=e(t({setup(e){const{site:t,frontmatter:d}=a(),m=s((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),p=s((()=>d.value.heroText||t.value.title)),k=s((()=>d.value.tagline||t.value.description));return(e,t)=>i(m)?(l(),o("header",y,[i(d).heroImage?(l(),o("figure",g,[n("img",{class:"image",src:i(r)(i(d).heroImage),alt:i(d).heroAlt},null,8,x)])):c("v-if",!0),i(p)?(l(),o("h1",_,v(i(p)),1)):c("v-if",!0),i(k)?(l(),o("p",I,v(i(k)),1)):c("v-if",!0),i(d).actionLink&&i(d).actionText?(l(),u(f,{key:3,item:{link:i(d).actionLink,text:i(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),i(d).altActionLink&&i(d).altActionText?(l(),u(f,{key:4,item:{link:i(d).altActionLink,text:i(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}}),[["__scopeId","data-v-370f18c0"]]);const A={key:0,class:"home-features"},L={class:"wrapper"},b={class:"container"},$={class:"features"},j={key:0,class:"title"},q={key:1,class:"details"};var w=e(t({setup(e){const{frontmatter:t}=a(),r=s((()=>t.value.features&&t.value.features.length>0)),u=s((()=>t.value.features?t.value.features:[]));return(e,t)=>i(r)?(l(),o("div",A,[n("div",L,[n("div",b,[n("div",$,[(l(!0),o(d,null,m(i(u),((e,t)=>(l(),o("section",{key:t,class:"feature"},[e.title?(l(),o("h2",j,v(e.title),1)):c("v-if",!0),e.details?(l(),o("p",q,v(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}}),[["__scopeId","data-v-e39c13e0"]]);const C={key:0,class:"footer"},F={class:"container"},N={class:"text"};var z=e(t({setup(e){const{frontmatter:t}=a();return(e,a)=>i(t).footer?(l(),o("footer",C,[n("div",F,[n("p",N,v(i(t).footer),1)])])):c("v-if",!0)}}),[["__scopeId","data-v-30918238"]]);const B={class:"home","aria-labelledby":"main-title"},D={class:"home-content"};var E=e(t({setup:e=>(e,t)=>{const a=p("Content");return l(),o("main",B,[k(T),h(e.$slots,"hero",{},void 0,!0),k(w),n("div",D,[k(a)]),h(e.$slots,"features",{},void 0,!0),k(z),h(e.$slots,"footer",{},void 0,!0)])}}),[["__scopeId","data-v-10122c92"]]);export{E as default};
