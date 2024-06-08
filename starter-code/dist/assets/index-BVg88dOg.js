var q=(c,e,t)=>{if(!e.has(c))throw TypeError("Cannot "+t)};var h=(c,e,t)=>(q(c,e,"read from private field"),t?t.call(c):e.get(c)),v=(c,e,t)=>{if(e.has(c))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(c):e.set(c,t)},w=(c,e,t,s)=>(q(c,e,"write to private field"),s?s.call(c,t):e.set(c,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var f;class M{constructor(){v(this,f,"../data.json")}async fetchData(){try{const e=await fetch(h(this,f));if(!e.ok)throw new Error("Failed to fetch data. Please check you json file");return await e.json()}catch(e){console.error(e)}}}f=new WeakMap;function C(c){const e=document.querySelector(".gallery-container");let t;e.addEventListener("click",s=>{s.target.tagName==="IMG"&&(t=Number(s.target.id),c(t))})}class b{constructor(e=null){this.image_data=e}loadImages(){const e=new Image,t=new Image;return e.src=this.image_data.images.hero.large,t.src=this.image_data.artist.image,Promise.all([this.imageLoaded(e),this.imageLoaded(t)])}loadGridImages(e){const t=e.map(s=>{const o=new Image;return o.src=s.images.thumbnail,new Promise((r,l)=>{o.onload=r,o.onerror=l})});return Promise.all(t)}imageLoaded(e){return new Promise((t,s)=>{e.onload=()=>t(e),e.onerror=s})}}var g;class T{constructor(){v(this,g,void 0);w(this,g,null)}typeWriterEffect(e,t,s){const o=t.querySelector(".year");o.innerText="";let r=0;const l=()=>{r<e.length?(o.innerHTML+=e.charAt(r),r+=1,w(this,g,setTimeout(l,150))):(s.forEach(n=>{n.classList.remove("disabled")}),clearTimeout(h(this,g)))};l()}}g=new WeakMap;var p,y;class x{constructor(e){v(this,p,void 0);v(this,y,void 0);this.data=e,w(this,p,new T),w(this,y,new b)}loadGridsImage(){const e=this.data.map((s,o)=>({id:o,image_name:s.name,image_photo:s.images.thumbnail,author:s.artist.name})),t=document.querySelector(".gallery-container");t.innerHTML="",e.forEach(s=>{const o=document.createElement("div");o.className="gallery-container__item",o.id=`item-${s.id}`,o.innerHTML=`
                <figure>
                     <img src="${s.image_photo}" alt="${s.image_name}" id="${s.id}">
                     <figcaption class="image-description">
                        <span class="image-description__name">${s.image_name}</span>
                        <span class="image-description__author">${s.author}</span>
                     </figcaption>
                </figure>    
            `,t.appendChild(o)})}loadShowCaseWindow(e,t,s){let o=document.querySelector(".modal-window");if(!o){s.querySelector(".header__start-slideshow").remove(),o=document.createElement("section"),o.className="modal-window",o.innerHTML=`
                <div class="modal-window__content show">
                    <div class="gallery-image">
                        <img class="art" src="" alt="">
                        <div class="image-details">
                            <h1 class="image-details__name"></h1>
                            <h2 class="image-details__author"></h2>
                        </div>
                        <div class="view-image">
                            <div class="view-image__icon">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z"/></g></svg>   
                            </div>
                            <p class="view-image__text">
                                View Image
                            </p>
                        </div>
                    </div>
                    <div class="modal-window__content__image-flex">
                         <img class="author-image" src="" alt="">
                    </div>
                    <div class="modal-window__content__story">
                        <span class="modal-window__content__story__text">
                            
                        </span>
                        <a class="modal-window__content__story__source" href="#">Go to Source</a>
                    </div>
                </div
              `,t.insertAdjacentElement("afterend",o),o.insertAdjacentHTML("afterend",`
                    <div class="progress-bar">
                        <div class="progress-bar__fill"></div>
                    </div>
                    <section class="control-menu">
                    <section class="image-description-overview">
                        <span class="image-description-overview__name"></span>
                        <span class="year"></span>
                        <span class="image-description-overview__author"></span>
                    </section>
                        <div class="control-menu__leftRight">
                          <div class="control-menu__leftRight__left">
                              <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>
                          </div>
                          <div class="control-menu__leftRight__right">
                            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>
                          </div>
                        </div>
                    </section>
                `);const n=document.querySelector(".control-menu"),i=document.querySelector(".progress-bar");[n,i].forEach(d=>{d.classList.add("hidden")}),s.insertAdjacentHTML("beforeend",`
                    <div class="control-menu__close-button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                `),s.querySelector(".control-menu__close-button").classList.add("opening"),setTimeout(()=>{s.querySelector(".control-menu__close-button").classList.remove("opening")},500)}t.remove(),this.updateModalContent(o,e)}updateModalContent(e,t){const s=e.querySelector(".modal-window__content"),o=document.querySelector(".control-menu__leftRight__left"),r=document.querySelector(".control-menu__leftRight__right"),l=document.querySelector(".image-description-overview"),n=document.querySelector(".control-menu"),i=document.querySelector(".progress-bar");document.querySelector(".year").innerText="",[o,r].forEach(d=>{d.classList.add("disabled")}),s.classList.remove("visible"),l.classList.remove("visible"),s.classList.add("hidden"),l.classList.add("hidden"),new b(t).loadImages().then(([d,_])=>{setTimeout(()=>{e.querySelector(".art").src=d.src,e.querySelector(".art").alt=t.name,h(this,p).typeWriterEffect(t.year.toString(),document,[o,r]),e.querySelector(".image-details__name").textContent=t.name,e.querySelector(".image-details__author").textContent=t.artist.name,e.querySelector(".author-image").src=_.src,e.querySelector(".author-image").alt=t.artist.name,e.querySelector(".modal-window__content__story__text").textContent=t.description,e.querySelector(".modal-window__content__story__source").href=t.source,l.querySelector(".image-description-overview__name").innerText=t.name,l.querySelector(".image-description-overview__author").innerText=t.artist.name,[n,i].forEach(m=>{m.classList.contains("visible")||m.classList.add("visible"),m.classList.remove("hidden")}),s.classList.add("visible"),l.classList.add("visible"),s.classList.remove("hidden")},500)}).catch(d=>{console.error("Error loading images:",d)})}closeModalWindow(e,t,s){const o=document.querySelector(".header"),r=document.querySelector(".modal-window"),l=r.querySelector(".modal-window__content"),n=document.querySelector(".control-menu"),i=document.querySelector(".progress-bar"),u=document.querySelector(".progress-bar__fill"),d=document.querySelector(".control-menu__close-button"),_=document.querySelector(".year");[r,d,_,l,n,u].forEach(m=>{m.classList.remove("visible"),m.classList.add("closing")}),d.remove(),t.insertAdjacentElement("beforeend",e),t.querySelector(".header__start-slideshow").classList.add("opening"),setTimeout(()=>{r.parentNode.removeChild(r),t.querySelector(".header__start-slideshow").classList.remove("opening"),n.parentNode.removeChild(n),i.parentNode.removeChild(i),o.insertAdjacentElement("afterend",s),s.classList.add("opening")},500)}openFullImage(e){let{name:t,images:{gallery:s}}=e;const o=document.body;o.className="modal-open";const r=new Image;r.src=s,r.alt=t,h(this,y).imageLoaded(r).then(l=>{const n=document.createElement("div");n.className="modal",n.innerHTML=`
                    <div class="modal-container">
                       <div class="close-container">
                           <button class="close-button">
                                <h4 class="close">Close</h4>
                           </button>
                       </div>
                       <div class="full-image">
                       </div> 
                    </div>
                `;const i=n.querySelector(".full-image");i.appendChild(l),document.body.appendChild(n),i.classList.add("opening"),setTimeout(()=>{i.classList.remove("opening")},600);const u=document.querySelector(".close-button");u.addEventListener("click",()=>{i.classList.add("closing"),u.classList.add("closing"),setTimeout(()=>{o.classList.remove("modal-open"),n.remove()},600)})})}}p=new WeakMap,y=new WeakMap;let a;document.addEventListener("DOMContentLoaded",async()=>{const c=document.querySelector(".gallery-container"),e=new M,t=new b,s=document.querySelector(".header__name"),o=s.querySelector(".header__start-slideshow");await e.fetchData().then(n=>{const i=new x(n);t.loadGridImages(n).then(()=>{i.loadGridsImage(),c.classList.add("opening"),setTimeout(()=>{c.classList.remove("opening")},1e3)}),o.addEventListener("click",()=>{r(n,c,s,i)}),C(u=>{a=u;let d=n[u];if(d){i.loadShowCaseWindow(d,c,s),document.querySelector(".control-menu__close-button").addEventListener("click",()=>{i.closeModalWindow(o,s,c),console.log(c.classList),setTimeout(()=>{c.classList.remove("opening")},1e3)});const m=document.querySelector(".control-menu__leftRight__left"),L=document.querySelector(".control-menu__leftRight__right"),S=document.querySelector(".view-image");l(a+1,n.length),L.addEventListener("click",()=>{a=(a+1)%n.length,i.loadShowCaseWindow(n[a],c,s),l(a+1,n.length)}),m.addEventListener("click",()=>{a=(a-1+n.length)%n.length,i.loadShowCaseWindow(n[a],c,s),l(a+1,n.length)}),S.addEventListener("click",()=>{i.openFullImage(n[a])})}})});function r(n,i,u,d){a=0;let _=n[0];if(_){d.loadShowCaseWindow(_,i,u),document.querySelector(".control-menu__close-button").addEventListener("click",()=>{d.closeModalWindow(o,u,i),setTimeout(()=>{i.classList.remove("opening")},1e3)});const L=document.querySelector(".control-menu__leftRight__left"),S=document.querySelector(".control-menu__leftRight__right"),E=document.querySelector(".view-image");l(a+1,n.length),S.addEventListener("click",()=>{a=(a+1)%n.length,d.loadShowCaseWindow(n[a],i,u),l(a+1,n.length)}),L.addEventListener("click",()=>{a=(a-1+n.length)%n.length,d.loadShowCaseWindow(n[a],i,u),l(a+1,n.length)}),E.addEventListener("click",()=>{d.openFullImage(n[a])})}}function l(n,i){const u=document.querySelector(".progress-bar__fill"),d=n/i*100;u.style.width=`${d}%`}});
