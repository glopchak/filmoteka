var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,d.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d);var r=d("31L8x"),n=d("1TPJ0"),o=d("1sEOH"),i=d("3JWO1");function l(e){o.gallery.innerHTML=function(e){return e.map((({poster_path:e,title:t,genres:a,release_date:d,id:r})=>{const n=function(e){return""===e?"no info":null==e?void 0:e.slice(0,4)}(d),o=t.toUpperCase(),l=c(e),s=function(e){return e.map((({id:e})=>e))}(a);return`<li class="gallery__item" id=${r}>\n        <img\n          class="gallery__img"\n          src="${l}"\n          alt=${t}\n        />\n        <p class="gallery__name">${o}</p>\n        <p class="gallery__information">${(0,i.getGenre)(s)} | ${n}</p>\n    </li>`})).join("")}(e)}function c(e){return null===e?poster="https://via.placeholder.com/440x660.jpg?text=Image+Not+Found":`https://image.tmdb.org/t/p/w500${e}`}const s=new(0,n.GetMovieApi),u={backdrop:document.querySelector(".backdrop"),modalOpenClose:document.querySelector(".js-modalOpenClose"),closeBtn:document.querySelector("[data-modal-close]"),modalCard:document.querySelector(".movie-modal")};let g=null,m=[],p=[];function f(){u.backdrop.classList.toggle("is-hidden"),window.removeEventListener("keydown",v),u.modalCard.innerHTML=""}function S(e){e.currentTarget===e.target&&f()}function v(e){"Escape"===e.code&&f()}function O(e){if(!e.target.classList.contains("watched"))return JSON.parse(localStorage.getItem("watchedCard"))&&(m=JSON.parse(localStorage.getItem("watchedCard"))),m.push(g),localStorage.setItem("watchedCard",JSON.stringify(m)),e.target.classList.add("watched"),void(e.target.textContent="REMOVE FROM WATCHED");{m=JSON.parse(localStorage.getItem("watchedCard"));const t=m.filter((e=>Number(e.id)!==Number(g.id)));m=[...t],localStorage.setItem("watchedCard",JSON.stringify(m)),l(m),e.target.classList.remove("watched"),e.target.textContent="ADD TO WATCHED"}}function C(e){if(!e.target.classList.contains("queued"))return JSON.parse(localStorage.getItem("queuedCard"))&&(p=JSON.parse(localStorage.getItem("queuedCard"))),p.push(g),localStorage.setItem("queuedCard",JSON.stringify(p)),e.target.classList.add("queued"),void(e.target.textContent="REMOVE FROM QUEUED");{p=JSON.parse(localStorage.getItem("queuedCard"));const t=p.filter((e=>Number(e.id)!==Number(g.id)));p=[...t],localStorage.setItem("queuedCard",JSON.stringify(p)),l(p),e.target.classList.remove("queued"),e.target.textContent="ADD TO QUEUED"}}u.modalOpenClose.addEventListener("click",(async function(e){var t,a;const d=e.target.parentNode.getAttribute("id");try{g=await s.fetchMoviebyId(d),(0,r.renderMovieCard)(g)}catch(e){console.error(e)}const n={addQueue:document.querySelector(".modal-button-queue"),addWatched:document.querySelector(".modal-button-watched")};n.addQueue.addEventListener("click",C),n.addWatched.addEventListener("click",O),u.backdrop.classList.toggle("is-hidden"),u.closeBtn.addEventListener("click",f),u.backdrop.addEventListener("click",S),window.addEventListener("keydown",v),(null===(t=JSON.parse(localStorage.getItem("watchedCard")))||void 0===t?void 0:t.find((e=>e.id===Number(d))))&&(n.addWatched.textContent="REMOVE FROM WATCHED",n.addWatched.classList.add("watched"));(null===(a=JSON.parse(localStorage.getItem("queuedCard")))||void 0===a?void 0:a.find((e=>e.id===Number(d))))&&(n.addQueue.textContent="REMOVE FROM QUEUED",n.addQueue.classList.add("queued"))}));const E=document.querySelector('[data-action="watched"]'),h=document.querySelector('[data-action="queue"]');function w(e){l(JSON.parse(localStorage.getItem("watchedCard")))}window.addEventListener("DOMContentLoaded",w),E.addEventListener("click",(function(e){E.classList.add("disabled"),h.classList.remove("disabled"),E.disabled=e.target,h.disabled=!e.target,w()})),h.addEventListener("click",(function(e){h.classList.add("disabled"),E.classList.remove("disabled"),h.disabled=e.target,E.disabled=!e.target;l(JSON.parse(localStorage.getItem("queuedCard")))}));
//# sourceMappingURL=my-library.c38b04fd.js.map
