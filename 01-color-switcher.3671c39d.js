let t="";const e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyColor:document.querySelector("body")};e.startBtn.addEventListener("click",(()=>{e.startBtn.disabled=!0,t=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;e.bodyColor.style.background=t}),1e3)})),e.stopBtn.addEventListener("click",(()=>{e.startBtn.disabled=!1,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.3671c39d.js.map
