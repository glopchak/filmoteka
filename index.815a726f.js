var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("1TPJ0");var s=n("1TPJ0"),i=n("1sEOH"),l=n("3JWO1");function o(e){i.gallery.innerHTML=function(e){return e.map((({poster_path:e,title:t,genre_ids:a,release_date:n,id:s})=>{const i=function(e){return""===e?"no info":null==e?void 0:e.slice(0,4)}(n),o=t.toUpperCase();return`<li class="gallery__item" id=${s}>\n        <img\n          class="gallery__img"\n          src="${r(e)}"\n          alt=${t}\n        />\n        <p class="gallery__name">${o}</p>\n        <p class="gallery__information">${(0,l.getGenre)(a)} | ${i}</p>\n    </li>`})).join("")}(e)}function r(e){return null===e?poster="https://via.placeholder.com/440x660.jpg?text=Image+Not+Found":`https://image.tmdb.org/t/p/w500${e}`}i=n("1sEOH");function c(e,t){i.paginationHome.innerHTML=function(e,t){let a,n="",s=t-1,i=t+1;t>1&&(n+=`<li class="btn prev" data-totalPages="${e}" data-page="${t-1}"      \n    ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>\n  </svg></li>`);t>2&&(n+=`<li class="first numb" data-totalPages="${e}" data-page="1")">1</li>`,t>3&&(n+='<li class="dots">...</li>'));t==e?s-=2:t==e-1&&(s-=1);1==t?i+=2:2==t&&(i+=1);for(var l=s;l<=i;l++)l>e||(0==l&&(l+=1),a=t==l?"active":"",n+=`<li class="numb ${a}" data-totalPages="${e}" data-page="${l}">${l}</li>`);t<e-1&&(t<e-2&&(n+='<li class="dots">...</li>'),n+=`<li class="last numb" data-totalPages="${e}" data-page="${e}">${e}</li>`);t<e&&(n+=`<li class="btn next" data-totalPages="${e}" data-page="${t+1}">\n    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>\n  </svg></li>`);return n}(e,t)}const d=new(0,s.GetMovieApi);window.addEventListener("DOMContentLoaded",(async function(e){try{const e=await d.fetchPopularMovie();o(e.results),c(e.total_pages,e.page)}catch(e){console.error(e.message)}}));i=n("1sEOH"),i=n("1sEOH");const g=new(0,(s=n("1TPJ0")).GetMovieApi);let u="";i.form.addEventListener("submit",(function(e){if(e.preventDefault(),u=e.target.elements.text.value.trim(),""===u)return void i.noSuccess.classList.add("visible");i.noSuccess.classList.remove("visible");(async function(e){try{g.resetPage();const t=await g.fetchSearchedMovie(e);0===t.results.length&&i.noSuccess.classList.add("visible"),o(t.results),c(t.total_pages,t.page)}catch(e){console.error(e)}})(u),i.form.reset()}));i=n("1sEOH");const p=new(0,(s=n("1TPJ0")).GetMovieApi);i.paginationHome.addEventListener("click",(function(e){(function(e){s.isFetchPopularMovie&&async function(e){try{p.setPage(e.target.dataset.page);const t=await p.fetchPopularMovie();o(t.results),c(t.total_pages,t.page)}catch(e){console.error(e)}}(e)})(e),function(e){s.isFetchSearchedMovie&&async function(e,t){try{p.setPage(e.target.dataset.page);const a=await p.fetchSearchedMovie(t);o(a.results),c(a.total_pages,a.page)}catch(e){console.error(e)}}(e,u)}(e)})),n("7ggit"),n("3JWO1");
//# sourceMappingURL=index.815a726f.js.map