var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=i);var r=i("1sEOH"),n=i("1TPJ0"),a=i("gteGC"),c=i("boIUg"),s=i("aUMDt");getMovieApi=new(0,n.GetMovieApi),r.paginationHome.addEventListener("click",(function(e){(function(e){n.isFetchPopularMovie&&async function(e){try{getMovieApi.setPage(e.target.dataset.page);const t=await getMovieApi.fetchPopularMovie();(0,c.renderMovieCard)(t.results),(0,s.renderNumerationOfHome)(t.total_pages,t.page)}catch(e){console.error(e)}}(e)})(e),function(e){n.isFetchSearchedMovie&&async function(e,t){try{getMovieApi.setPage(e.target.dataset.page);const o=await getMovieApi.fetchSearchedMovie(t);(0,c.renderMovieCard)(o.results),(0,s.renderNumerationOfHome)(o.total_pages,o.page)}catch(e){console.error(e)}}(e,a.inputValue)}(e)}));
//# sourceMappingURL=index.98c3f225.js.map