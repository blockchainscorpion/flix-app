/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={currentPage:window.location.pathname,apiData:{API_KEY:"0764feff15f2d9ad932c8dc7a24a2147",apiUrl:"https://api.themoviedb.org/3/"}};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(){n=function(){return r};var t,r={},a=Object.prototype,o=a.hasOwnProperty,c=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function p(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var a=e&&e.prototype instanceof w?e:w,o=Object.create(a.prototype),i=new B(r||[]);return c(o,"_invoke",{value:I(t,n,i)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var f="suspendedStart",m="suspendedYield",v="executing",g="completed",y={};function w(){}function x(){}function b(){}var E={};p(E,s,(function(){return this}));var _=Object.getPrototypeOf,L=_&&_(_(O([])));L&&L!==a&&o.call(L,s)&&(E=L);var k=b.prototype=w.prototype=Object.create(E);function P(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,n){function r(a,c,i,s){var l=h(t[a],t,c);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==e(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):n.resolve(p).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(l.arg)}var a;c(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,a){r(t,e,n,a)}))}return a=a?a.then(o,o):o()}})}function I(e,n,r){var a=f;return function(o,c){if(a===v)throw Error("Generator is already running");if(a===g){if("throw"===o)throw c;return{value:t,done:!0}}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var l=h(e,n,r);if("normal"===l.type){if(a=r.done?g:m,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=g,r.method="throw",r.arg=l.arg)}}}function j(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=h(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var c=o.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,c=function e(){for(;++a<n.length;)if(o.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return c.next=c}}throw new TypeError(e(n)+" is not iterable")}return x.prototype=b,c(k,"constructor",{value:b,configurable:!0}),c(b,"constructor",{value:x,configurable:!0}),x.displayName=p(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,p(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},r.awrap=function(t){return{__await:t}},P(S.prototype),p(S.prototype,l,(function(){return this})),r.AsyncIterator=S,r.async=function(t,e,n,a,o){void 0===o&&(o=Promise);var c=new S(d(t,e,n,a),o);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},P(k),p(k,u,"Generator"),p(k,s,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=O,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return i.type="throw",i.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=o.call(c,"catchLoc"),l=o.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:O(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},r}function r(t,e,n,r,a,o,c){try{var i=t[o](c),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function i(t){r(c,a,o,i,s,"next",t)}function s(t){r(c,a,o,i,s,"throw",t)}i(void 0)}))}}var o={currentPage:window.location.pathname,search:{term:"",type:"",page:1,totalPages:0,totalResults:0}};function c(){return(c=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("movie/popular");case 2:t.sent.results.forEach((function(t){var e=document.createElement("div");e.classList.add("card"),e.innerHTML='<a href="movie-details.html?id='.concat(t.id,'">\n            ').concat(t.poster_path?'<img\n              src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'"\n              class="card-img-top"\n              alt="').concat(t.title,'"\n            />'):'<img\n              src="images/no-image.jpg"\n              class="card-img-top"\n              alt="'.concat(t.title,'"\n            />'),'\n          </a>\n          <div class="card-body">\n            <h5 class="card-title">').concat(t.title,'</h5>\n            <p class="card-text">\n              <small class="text-muted">Release: ').concat(t.release_date,"</small>\n            </p>\n          </div>"),document.getElementById("popular-movies").appendChild(e)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=document.createElement("div");n.classList.add("alert",e),n.appendChild(document.createTextNode(t)),document.querySelector("#alert").appendChild(n),setTimeout((function(){return n.remove()}),3e3)}function s(t){return l.apply(this,arguments)}function l(){return(l=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.forEach((function(t){var n=document.createElement("div");n.classList.add("card"),n.innerHTML='\n    \n      <a href="'.concat(o.search.type,"-details.html?id=").concat(t.id,'">\n      ').concat(t.poster_path?'<img src=\n      "https://image.tmdb.org/t/p/w500/'.concat(t.poster_path,'"\n      class="card-img-top"\n        alt="').concat("movie"===o.search.type?t.title:t.name,'"\n        />'):'<img src=\n        "images/no-image.jpg" class="card-img-top" alt="'.concat("movie"===o.search.type?t.title:t.name,'"\n          />'),' </a>\n      <div class="card-body">\n        <h5 class="card-title">').concat("movie"===o.search.type?t.title:t.name,'\n        </h5>\n        <p class="card-text">\n        <small class="text-muted">Release:\n        ').concat("movie"===o.search.type?t.release_date:t.first_air_date,"</small>\n        </p>\n      </div>"),document.getElementById("search-results-heading").innerHTML="\n      <h2>".concat(e.length," of ").concat(o.search.totalResults," Results for ").concat(o.search.term," </h2>"),document.getElementById("search-results").appendChild(n)})),u();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return p.apply(this,arguments)}function p(){return p=a(n().mark((function t(){var e;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(e=document.createElement("div")).classList.add("pagination"),e.innerHTML='\n  <button class="btn btn-primary" id="prev">Prev</button>\n  <button class="btn btn-primary" id="next">Next</button>\n  <div class="page-counter">Page '.concat(o.search.page," of ").concat(o.search.totalPages,"</div>\n  "),document.getElementById("pagination").appendChild(e),1===o.search.page?document.getElementById("prev").disabled=!0:o.search.page===o.search.totalPages&&(document.getElementById("next").disabled=!0),document.getElementById("next"),document.getElementById("next").addEventListener("click",a(n().mark((function t(){var e,r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementById("search-results").innerHTML="",document.getElementById("search-results-heading").innerHTML="",document.getElementById("pagination").innerHTML="",t.next=5,_();case 5:e=t.sent,r=e.results,e.total_pages,s(r,o.search.page++);case 9:case"end":return t.stop()}}),t)})))),document.getElementById("prev").addEventListener("click",function(){var t=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.search.page--;case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function d(){return(d=a(n().mark((function t(){var e,r,a,c,l,u,p;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=window.location.search,r=new URLSearchParams(e),o.search.type=r.get("type"),o.search.term=r.get("search-term"),o.search.page=r.get("pagination"),""===o.search.term||null===o.search.term){t.next=24;break}return t.next=8,_();case 8:if(a=t.sent,c=a.results,l=a.total_pages,u=a.page,p=a.total_results,o.search.page=u,o.search.totalPages=l,o.search.totalResults=p,0!==c.length){t.next=19;break}return i("No results found"),t.abrupt("return");case 19:s(c),console.log(c),document.getElementById("search-term").value="",t.next=26;break;case 24:return i("Enter a search term"),t.abrupt("return");case 26:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("movie/now_playing");case 2:t.sent.results.forEach((function(t){var e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML='\n            <a href="movie-details.html?id='.concat(t.id,'">\n              <img src="https://image.tmdb.org/t/p/w500').concat(t.poster_path,'" alt="').concat(t.title,'" />\n            </a>\n            <h4 class="swiper-rating">\n              <i class="fas fa-star text-secondary"></i> ').concat(t.vote_average.toFixed(1)," / 10\n            </h4>\n          "),document.querySelector(".swiper-wrapper").appendChild(e),m()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("tv/popular");case 2:t.sent.results.forEach((function(t){var e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML='\n            <a href="show-details.html?id='.concat(t.id,'">\n              <img src="https://image.tmdb.org/t/p/w500').concat(t.poster_path,'" alt="').concat(t.name,'" />\n            </a>\n            <h4 class="swiper-rating">\n              <i class="fas fa-star text-secondary"></i> ').concat(t.vote_average.toFixed(1)," / 10\n            </h4>\n          "),document.querySelector(".swiper-wrapper").appendChild(e),m()}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){new Swiper(".swiper",{slidesPerView:1,spaceBetween:30,freeMode:!0,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{500:{slidesPerView:2},700:{slidesPerView:3},1200:{slidesPerView:4}}})}function v(){return(v=a(n().mark((function t(){var e,r,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.search.split("=")[1],t.next=3,b("movie/".concat(e));case 3:w("movie",(r=t.sent).backdrop_path),(a=document.createElement("div")).innerHTML='\n            <div class="details-top">\n          <div>\n            '.concat(r.poster_path?'<img\n              src="https://image.tmdb.org/t/p/w500'.concat(r.poster_path,'"\n              class="card-img-top"\n              alt="').concat(r.title,'"\n            />'):'<img\n              src="images/no-image.jpg"\n              class="card-img-top"\n              alt="'.concat(r.title,'"\n            />'),"\n          </div>\n          <div>\n            <h2>").concat(r.title,'</h2>\n            <p>\n              <i class="fas fa-star text-primary"></i>\n              ').concat(r.vote_average.toFixed(1),' / 10\n            </p>\n            <p class="text-muted">Release Date: ').concat(r.release_date,"</p>\n            <p>\n              ").concat(r.overview,'\n            </p>\n            <h5>Genres</h5>\n            <ul class="list-group">\n              \n              ').concat(r.genres.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n            </ul>\n            <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>\n          </div>\n        </div>\n        <div class="details-bottom">\n          <h2>Movie Info</h2>\n          <ul>\n            <li><span class="text-secondary">Budget:</span> ').concat(k(r.budget),'</li>\n            <li><span class="text-secondary">Revenue:</span> $').concat(k(r.revenue),'</li>\n            <li><span class="text-secondary">Runtime:</span> ').concat(r.runtime,' minutes</li>\n            <li><span class="text-secondary">Status:</span> ').concat(r.status,'</li>\n          </ul>\n          <h4>Production Companies</h4>\n          <div class="list-group">').concat(r.production_companies.map((function(t){return"<span>".concat(t.name,"</span>")})).join(""),"</div>\n        </div>"),document.querySelector("#movie-details").appendChild(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=a(n().mark((function t(){var e,r,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.location.search.split("=")[1],t.next=3,b("tv/".concat(e));case 3:w("tv",(r=t.sent).backdrop_path),(a=document.createElement("div")).innerHTML='\n            <div class="details-top">\n          <div>\n            '.concat(r.backdrop_path?'<img\n              src="https://image.tmdb.org/t/p/w500'.concat(r.backdrop_path,'"\n              class="card-img-top"\n              alt="').concat(r.name,'"\n            />'):'<img\n              src="images/no-image.jpg"\n              class="card-img-top"\n              alt="'.concat(r.name,'"\n            />'),"\n          </div>\n          <div>\n            <h2>").concat(r.name,'</h2>\n            <p>\n              <i class="fas fa-star text-primary"></i>\n              ').concat(r.vote_average.toFixed(1),' / 10\n            </p>\n            <p class="text-muted">Release Date: ').concat(r.first_air_date,"</p>\n            <p>\n              ").concat(r.overview,'\n            </p>\n            <h5>Genres</h5>\n            <ul class="list-group">\n              \n              ').concat(r.genres.map((function(t){return"<li>".concat(t.name,"</li>")})).join(""),'\n            </ul>\n            <a href="/flixx-app/index.html" target="_blank" class="btn">Visit Movie Homepage</a>\n          </div>\n        </div>\n        <div class="details-bottom">\n          <h2>Movie Info</h2>\n          <ul>\n            <li><span class="text-secondary">Number of episodes:</span> ').concat(k(r.number_of_episodes),'\n            </li>\n            <li><span class="text-secondary">Last Aired:</span>  ').concat(r.last_air_date,'\n            </li>\n            <li><span class="text-secondary">Episode Runtime:</span> ').concat(r.episode_run_time,' minutes</li>\n            <li><span class="text-secondary">Status:</span> ').concat(r.status,'</li>\n          </ul>\n          <h4>Production Countries</h4>\n          <div class="list-group">').concat(r.production_countries.map((function(t){return"<span>".concat(t.name,"</span>")})).join(""),"</div>\n        </div>"),document.querySelector("#show-details").appendChild(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=a(n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b("tv/popular");case 2:t.sent.results.forEach((function(t){var e=document.createElement("div");e.classList.add("card"),e.innerHTML='<a href="show-details.html?id='.concat(t.id,'">\n            ').concat(t.poster_path?'<img\n              src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'"\n              class="card-img-top"\n              alt="').concat(t.name,'"\n            />'):'<img\n              src="images/no-image.jpg"\n              class="card-img-top"\n              alt="'.concat(t.name,'"\n            />'),'\n          </a>\n          <div class="card-body">\n            <h5 class="card-title">').concat(t.name,'</h5>\n            <p class="card-text">\n              <small class="text-muted">First Aired: ').concat(t.first_air_date,"</small>\n            </p>\n          </div>"),document.getElementById("popular-shows").appendChild(e)}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,e){return x.apply(this,arguments)}function x(){return(x=a(n().mark((function t(e,r){var a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(a=document.createElement("div")).style.backgroundImage="url(https://image.tmdb.org/t/p/w500".concat(r,")"),a.style.backgroundSize="cover",a.style.backgroundPosition="center",a.style.backgroundRepeat="no-repeat",a.style.height="100vh",a.style.width="100vw",a.style.position="absolute",a.style.top="0",a.style.left="0",a.style.zIndex="-1",a.style.opacity="0.2","movie"===e?document.querySelector("#movie-details").appendChild(a):document.querySelector("#show-details").appendChild(a);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return E.apply(this,arguments)}function E(){return(E=a(n().mark((function e(r){var a,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.apiData.apiUrl).concat(r,"?api_key=").concat(t.apiData.API_KEY,"&language=en-US"));case 2:return(a=e.sent).ok?document.querySelector(".spinner").classList.add("hide"):(console.log("Error: "+a.statusText),document.querySelector(".spinner").classList.add("show")),e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return L.apply(this,arguments)}function L(){return(L=a(n().mark((function e(){var r,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(t.apiData.apiUrl,"search/").concat(o.search.type,"?api_key=").concat(t.apiData.API_KEY,"&language=en-US&query=").concat(o.search.term));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function k(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}document.addEventListener("DOMContentLoaded",(function(){switch(o.currentPage){case"/index.html":!function(){h.apply(this,arguments)}(),function(){c.apply(this,arguments)}();break;case"/shows.html":!function(){f.apply(this,arguments)}(),function(){y.apply(this,arguments)}();break;case"/movie-details.html":!function(){v.apply(this,arguments)}();break;case"/show-details.html":!function(){g.apply(this,arguments)}();break;case"/search.html":!function(){d.apply(this,arguments)}(),console.log(o.currentPage);break;default:console.log("nada")}document.querySelectorAll(".nav-link").forEach((function(t){t.getAttribute("href")===o.currentPage&&t.classList.add("active")}))}))})();