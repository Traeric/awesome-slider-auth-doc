function e(){let e=document.getElementsByClassName("code-btn-do"),t=document.getElementsByClassName("code-btn-undo");for(let l=0;l<e.length;l++){let t=e[l];t.classList.add("iconfont"),t.classList.add("icon-execute"),t.innerHTML=""}for(let l=0;l<t.length;l++){let e=t[l];e.classList.add("iconfont"),e.classList.add("icon-restart"),e.innerHTML=""}let s=document.getElementsByClassName("lib-code-run");for(let l=0;l<s.length;l++){let e=s[l],t=e.querySelector(".tools");e.insertBefore(t,e.childNodes[0]);let o=document.createElement("i");o.classList.add("iconfont"),o.classList.add("icon-source-code"),o.classList.add("code-btn"),o.setAttribute("title","查看源码"),t.appendChild(o);let i=e.querySelector(".code");i.classList.remove("edit"),i.style.height="0",i.style.transition="height .5s";let n=!0;o.addEventListener("click",(()=>{n?(i.style.height=e.querySelector(".language-vue").offsetHeight+"px",i.style.borderTopWidth="1px"):(i.style.height="0",setTimeout((()=>{i.style.borderTopWidth="0"}),400)),n=!n}))}}export{e as i};
