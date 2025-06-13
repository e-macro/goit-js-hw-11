import{a as p,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(r){const s="50767734-ec8f632e6fcf50a626b02f32f",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get(`https://pixabay.com/api?${a}/`).then(o=>o.data)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery"),g=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li class="image-box">
        <a href="${o}">
        <img src="${a}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${t}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${i}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${u}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${d}</span>
            </div>
        </div>
    </li>`).join("");c.innerHTML=s,g.refresh()}function y(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements["search-text"].value;y(),v(),m(s).then(a=>{if(!a.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}h(a.hits)}).catch(a=>n.error({message:`${a}`})).finally(()=>L())});
//# sourceMappingURL=index.js.map
