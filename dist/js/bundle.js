(()=>{var t={220:t=>{t.exports=' <h2 class="text-danger">Error 404 Page Not Found</h2>'},143:t=>{t.exports=' <h1>Hello World</h1> <p class="text-danger">Esta es una prueba con JavaScript</p> <button type="button" class="btn btn-primary btn-lg" id="btnClick">Enviar</button>'},991:t=>{t.exports=' <h2 class="text-danger text-center">Lista de Plublicaciones: <span id="nuposts"></span></h2> <ul class="list-group" id="posts" style="height:70vh;overflow:auto"></ul>'},319:t=>{t.exports=' <h2 class="text-danger mt-6">Lista de productos</h2> '}},e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(143),e=n.n(t),r=n(220),s=n.n(r),o=n(319),a=n.n(o),c=n(991),i=n.n(c);let l=document.getElementById("root");const d=async t=>{switch(l.innerHTML=" ",t){case"#/":return l.appendChild((()=>{const t=document.createElement("div");return t.classList="container mt-5 text-white text-left",t.innerHTML=e(),t.querySelector("#btnClick").addEventListener("click",(()=>{alert("Has dado Click !!")})),t})());case"#/products":return l.appendChild((()=>{const t=document.createElement("div");return t.innerHTML=a(),t})());case"#/posts":return l.appendChild(await(async()=>{const t=document.createElement("div");t.innerHTML=i();const e=t.querySelector("#posts"),n=await(async()=>{const t=await fetch("https://jsonplaceholder.typicode.com/posts");return await t.json()})();return t.querySelector("#nuposts").innerHTML=n.length,n.forEach((t=>{e.innerHTML+=`<li class="list-group-item border-light" id=bglist> \n    <h5 id=uppercase>${t.title}</h5> \n    <p>${t.body}</p>\n    </li>`})),t})());default:return l.appendChild((()=>{const t=document.createElement("div");return t.innerHTML=s(),t})())}};d(window.location.hash),window.addEventListener("hashchange",(()=>{d(window.location.hash)}))})()})();