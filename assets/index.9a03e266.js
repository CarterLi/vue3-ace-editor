import{a as c,w as u,r as l,c as a,u as d,o as p,V as f,b as v}from"./vendor.7317da2a.js";const m=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};m();const g="vue3-ace-editor-demo",y="Vue3-ace-editor demo with syntax checking",h="1.0.0",_={dev:"vite",build:"vite build --outDir ..",preview:"vite preview"},b={"ace-builds":"^1.4.14",vue:"^3.2.31","vue3-ace-editor":"^2.2.2"},k={"@vitejs/plugin-vue":"^2.2.4",vite:"^2.8.6"};var w={name:g,description:y,version:h,scripts:_,dependencies:b,devDependencies:k};const L={setup(i){c.config.setModuleUrl("ace/mode/json_worker",u);const o=l(JSON.stringify(w,null,2));return(s,r)=>(p(),a(d(f),{value:o.value,"onUpdate:value":r[0]||(r[0]=e=>o.value=e),lang:"json",theme:"chrome",style:{height:"100%"},options:{useWorker:!0}},null,8,["value"]))}};v(L).mount("#app");
