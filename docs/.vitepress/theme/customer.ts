function initPage() {
    let doIcon = document.getElementsByClassName("code-btn-do");
    let unDoIcon = document.getElementsByClassName("code-btn-undo");

    // 增加重复执行标签
    for (let i = 0; i < doIcon.length; i++) {
        let element = doIcon[i];
        element.classList.add("iconfont");
        element.classList.add("icon-zhihang");
        element.innerHTML = "";
    }
    // 增加重置代码
    for (let i = 0; i < unDoIcon.length; i++) {
        let element = unDoIcon[i];
        element.classList.add("iconfont");
        element.classList.add("icon-zhongxinzhihang1");
        element.innerHTML = "";
    }

    let codeRun = document.getElementsByClassName("lib-code-run");
    // 替换代码区tools位置
    for (let i = 0; i < codeRun.length; i++) {
        let element = codeRun[i];
        // 获取tools
        let tools = element.querySelector(".tools");
        element.insertBefore(tools, element.childNodes[0]);
        // 增加展开代码
        let iDom = document.createElement("i");
        iDom.classList.add("iconfont");
        iDom.classList.add("icon-source-code");
        iDom.classList.add("code-btn");
        iDom.setAttribute("title", "查看源码")
        tools.appendChild(iDom);
        // 关闭代码面板
        let editDom = element.querySelector(".code");
        (<HTMLDivElement>editDom).style.height = "0";
        (<HTMLDivElement>editDom).style.transition = "height .5s";
        // 为展开代码按钮绑定事件
        let close = true;
        iDom.addEventListener("click", () => {
            if (close) {
                (<HTMLDivElement>editDom).style.height = (<HTMLDivElement>element.querySelector(".language-vue")).offsetHeight + 'px';
            } else {
                (<HTMLDivElement>editDom).style.height = '0';
            }
            close = !close;
        });
    }
}

export {
    initPage,
}

