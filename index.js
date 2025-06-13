import{a as p,S as u,i as r}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();function m(t){const s="50767734-ec8f632e6fcf50a626b02f32f",i=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return p.get("https://pixabay.com/api",i).then(l=>l.data)}function f(t){return t.map(({webformatURL:s,largeImageURL:i,tags:l,likes:e,views:a,comments:n,downloads:c})=>`
    <li class="image-box">
        <img src="${s}" alt="${l}" data-source:"${i}" width="300">
        <ul class="image-stats">
            <li class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${e}</span>
            </li>
            <li class="image-stat">
                <span class="label">Views</span>
                <span class="value">${a}</span>
            </li>
            <li class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${n}</span>
            </li>
            <li class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${c}</span>
            </li>
        </ul>
    </li>`).join("")}function d(t){return t.map(()=>`
    <li class="image-box">
        <span class="loader"></span>
        <ul class="image-stats">
            <li class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${likes}</span>
            </li>
            <li class="image-stat">
                <span class="label">Views</span>
                <span class="value">${views}</span>
            </li>
            <li class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${comments}</span>
            </li>
            <li class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${downloads}</span>
            </li>
        </ul>
    </li>`).join("")}new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});const g=document.querySelector(".form");document.querySelector(".image-box");const o=document.querySelector(".gallery");g.addEventListener("submit",t=>{t.preventDefault(),t.target.elements["search-text"].value,o.innerHTML(d()),m().then(s=>{s.data||r.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"}),o.innerHTML(f(s.data))}).catch(s=>r.error({message:`${s}`}))});
//# sourceMappingURL=index.js.map
