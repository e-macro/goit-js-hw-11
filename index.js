import{a as p,S as f,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function m(r){return p.get("https://pixabay.com/api",{key:"50767734-ec8f632e6fcf50a626b02f32f",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}).then(s=>s.data)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery"),g=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function h(r){const a=r.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li class="image-box">
        <a href="${o}">
        <img src="${s}" alt="${e}" width="300">
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
    </li>`).join("");c.innerHTML=a,g.refresh()}function y(){c.innerHTML=""}function v(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",r=>{r.preventDefault();const a=r.target.elements["search-text"].value;y(),v(),m(a).then(s=>{if(!s.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}h(s.hits)}).catch(s=>n.error({message:`${s}`})).finally(()=>b())});
//# sourceMappingURL=index.js.map
