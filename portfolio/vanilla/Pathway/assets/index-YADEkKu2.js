var u=Object.defineProperty;var p=(i,t,s)=>t in i?u(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s;var a=(i,t,s)=>p(i,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class m{constructor(t,s){a(this,"parent");a(this,"elements");this.parent=document.querySelector(t),this.elements=s}createElement(t,s={}){const{children:n=[],...e}=s,r=document.createElement(t);return Object.keys(e).forEach(o=>{r.setAttribute(o,e[o])}),n.forEach(o=>{if(typeof o=="string")r.appendChild(document.createTextNode(o));else{const{tag:c,props:l={}}=o,d=this.createElement(c,l);r.appendChild(d)}}),r}mount(){this.elements.forEach(t=>{var r;const{tag:s,props:n}=t,e=this.createElement(s,n);(r=this.parent)==null||r.appendChild(e)})}}const g=[{link:"#",img:"./assets/img/destination-1.jpg",imageAlt:"destination-1",title:"Banff",subTitle:"Canada"},{link:"#",img:"./assets/img/destination-2.jpg",imageAlt:"destination-2",title:"Machu Picchu",subTitle:"Peru"},{link:"#",img:"./assets/img/destination-3.jpg",imageAlt:"destination-3",title:"Lauterbrunnen",subTitle:"Switzerland"},{link:"#",img:"./assets/img/destination-4.jpg",imageAlt:"destination-4",title:"Zhangjiajie",subTitle:"China"}],f=new m(".slider-js",g.map(({link:i,img:t,imageAlt:s,title:n,subTitle:e})=>({tag:"li",props:{class:"destinations__slider__item",children:[{tag:"a",props:{href:i,children:[{tag:"img",props:{"data-src":t,alt:s}},{tag:"div",props:{class:"flex-column",children:[{tag:"span",props:{class:"destinations__slider__item__title",children:[n]}},{tag:"span",props:{class:"destinations__slider__item__sub-title",children:[e]}}]}}]}}]}})));document.querySelector(".current-year").textContent=new Date().getFullYear().toString();f.mount();const h=new IntersectionObserver((i,t)=>{i.forEach(s=>{s.isIntersecting&&(s.target.querySelectorAll("img").forEach(n=>{n.dataset.src&&(n.src=n.dataset.src)}),t.unobserve(s.target))})},{});document.querySelectorAll("section").forEach(i=>{h.observe(i)});