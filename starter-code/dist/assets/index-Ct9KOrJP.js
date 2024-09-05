var b=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var p=(i,e,t)=>(b(i,e,"read from private field"),t?t.call(i):e.get(i)),y=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},h=(i,e,t,s)=>(b(i,e,"write to private field"),s?s.call(i,t):e.set(i,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();class E{async fetchData(){try{const e=await fetch("/api/get_images/");if(!e.ok)throw new Error("Failed to fetch data. Please check you json file");return await e.json()}catch(e){console.error(e)}}}function M(i){const e=document.querySelector(".gallery-container");let t;e.addEventListener("click",s=>{s.target.tagName==="IMG"&&(t=Number(s.target.id),i(t))})}class S{constructor(e=null){this.image_data=e}loadImages(){const e=new Image,t=new Image;return e.src=this.image_data.images.hero.large,t.src=this.image_data.artist.image,Promise.all([this.imageLoaded(e),this.imageLoaded(t)])}loadGridImages(e){const t=e.map(s=>{const o=new Image;return o.src=s.images.thumbnail,new Promise((r,l)=>{o.onload=r,o.onerror=l})});return Promise.all(t)}imageLoaded(e){return new Promise((t,s)=>{e.onload=()=>t(e),e.onerror=s})}}var g;class C{constructor(){y(this,g,void 0);h(this,g,null)}typeWriterEffect(e,t,s){const o=t.querySelector(".year");o.innerText="";let r=0;const l=()=>{r<e.length?(o.innerHTML+=e.charAt(r),r+=1,h(this,g,setTimeout(l,150))):(s.forEach(n=>{n.classList.remove("disabled")}),clearTimeout(p(this,g)))};l()}}g=new WeakMap;var v,w;class T{constructor(e){y(this,v,void 0);y(this,w,void 0);this.data=e,h(this,v,new C),h(this,w,new S)}loadGridsImage(){const e=this.data.map((s,o)=>({id:o,image_name:s.name,image_photo:s.images.hero.large,author:s.artist.name})),t=document.querySelector(".gallery-container");t.innerHTML="",e.forEach(s=>{const o=document.createElement("div");o.className="gallery-container__item",o.id=`item-${s.id}`,o.innerHTML=`
                <figure>
                     <img src="${s.image_photo}" alt="${s.image_name}" id="${s.id}">
                     <div>
                         <figcaption class="image-description">
                            <span class="image-description__name">${s.image_name}</span>
                            <span class="image-description__author">${s.author}</span>
                         </figcaption>
                    </div>
                </figure>    
            `,t.appendChild(o)})}loadShowCaseWindow(e,t,s){let o=document.querySelector(".modal-window");if(!o){s.querySelector(".header__start-slideshow").remove(),o=document.createElement("section"),o.className="modal-window",o.innerHTML=`
                <div class="modal-window__content show">
                    <div class="gallery-image">
                        <img loading="lazy" class="art" src="" alt="">
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
                `);const n=document.querySelector(".control-menu"),c=document.querySelector(".progress-bar");[n,c].forEach(d=>{d.classList.add("hidden")}),s.insertAdjacentHTML("beforeend",`
                    <div class="control-menu__close-button">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                `),s.querySelector(".control-menu__close-button").classList.add("opening"),setTimeout(()=>{s.querySelector(".control-menu__close-button").classList.remove("opening")},500)}t.remove(),this.updateModalContent(o,e)}updateModalContent(e,t){const s=e.querySelector(".modal-window__content"),o=document.querySelector(".control-menu__leftRight__left"),r=document.querySelector(".control-menu__leftRight__right"),l=document.querySelector(".image-description-overview"),n=document.querySelector(".control-menu"),c=document.querySelector(".progress-bar");document.querySelector(".year").innerText="",[o,r].forEach(d=>{d.classList.add("disabled")}),s.classList.remove("visible"),l.classList.remove("visible"),s.classList.add("hidden"),l.classList.add("hidden"),new S(t).loadImages().then(([d,_])=>{setTimeout(()=>{e.querySelector(".art").src=d.src,e.querySelector(".art").alt=t.name,p(this,v).typeWriterEffect(t.year.toString(),document,[o,r]),e.querySelector(".image-details__name").textContent=t.name,e.querySelector(".image-details__author").textContent=t.artist.name,e.querySelector(".author-image").src=_.src,e.querySelector(".author-image").alt=t.artist.name,e.querySelector(".modal-window__content__story__text").textContent=t.description,e.querySelector(".modal-window__content__story__source").href=t.source,l.querySelector(".image-description-overview__name").innerText=t.name,l.querySelector(".image-description-overview__author").innerText=t.artist.name,[n,c].forEach(u=>{u.classList.contains("visible")||u.classList.add("visible"),u.classList.remove("hidden")}),s.classList.add("visible"),l.classList.add("visible"),s.classList.remove("hidden")},500)}).catch(d=>{console.error("Error loading images:",d)})}closeModalWindow(e,t,s){const o=document.querySelector(".header"),r=document.querySelector(".modal-window"),l=r.querySelector(".modal-window__content"),n=document.querySelector(".control-menu"),c=document.querySelector(".progress-bar"),m=document.querySelector(".progress-bar__fill"),d=document.querySelector(".control-menu__close-button"),_=document.querySelector(".year");[r,d,_,l,n,m].forEach(u=>{u.classList.remove("visible"),u.classList.add("closing")}),d.remove(),t.insertAdjacentElement("beforeend",e),t.querySelector(".header__start-slideshow").classList.add("opening"),setTimeout(()=>{r.parentNode.removeChild(r),t.querySelector(".header__start-slideshow").classList.remove("opening"),n.parentNode.removeChild(n),c.parentNode.removeChild(c),o.insertAdjacentElement("afterend",s),s.classList.add("opening")},500)}openFullImage(e){let{name:t,images:{gallery:s}}=e;const o=document.body;o.className="modal-open";const r=new Image;r.src=s,r.alt=t,p(this,w).imageLoaded(r).then(l=>{const n=document.createElement("div");n.className="modal",n.innerHTML=`
                    <div class="modal-container">
                       <div class="close-container">
                           <button class="close-button">
                                <h4 class="close">Close</h4>
                           </button>
                       </div>
                       <div class="full-image">
                       </div> 
                    </div>
                `;const c=n.querySelector(".full-image");c.appendChild(l),document.body.appendChild(n),c.classList.add("opening"),setTimeout(()=>{c.classList.remove("opening")},600);const m=document.querySelector(".close-button");m.addEventListener("click",()=>{c.classList.add("closing"),m.classList.add("closing"),setTimeout(()=>{o.classList.remove("modal-open"),n.remove()},600)})})}}v=new WeakMap,w=new WeakMap;let a;document.addEventListener("DOMContentLoaded",async()=>{const i=document.querySelector(".gallery-container"),e=new E,t=new S,s=document.querySelector(".header__name"),o=s.querySelector(".header__start-slideshow");await e.fetchData().then(n=>{const c=new T(n);t.loadGridImages(n).then(()=>{c.loadGridsImage(),i.classList.add("opening"),setTimeout(()=>{i.classList.remove("opening")},1e3)}),o.addEventListener("click",()=>{r(n,i,s,c)}),M(m=>{a=m;let d=n[m];if(d){c.loadShowCaseWindow(d,i,s),document.querySelector(".control-menu__close-button").addEventListener("click",()=>{c.closeModalWindow(o,s,i),console.log(i.classList),setTimeout(()=>{i.classList.remove("opening")},1e3)});const u=document.querySelector(".control-menu__leftRight__left"),f=document.querySelector(".control-menu__leftRight__right"),L=document.querySelector(".view-image");l(a+1,n.length),f.addEventListener("click",()=>{a=(a+1)%n.length,c.loadShowCaseWindow(n[a],i,s),l(a+1,n.length)}),u.addEventListener("click",()=>{a=(a-1+n.length)%n.length,c.loadShowCaseWindow(n[a],i,s),l(a+1,n.length)}),L.addEventListener("click",()=>{c.openFullImage(n[a])})}})});function r(n,c,m,d){a=0;let _=n[0];if(_){d.loadShowCaseWindow(_,c,m),document.querySelector(".control-menu__close-button").addEventListener("click",()=>{d.closeModalWindow(o,m,c),setTimeout(()=>{c.classList.remove("opening")},1e3)});const f=document.querySelector(".control-menu__leftRight__left"),L=document.querySelector(".control-menu__leftRight__right"),q=document.querySelector(".view-image");l(a+1,n.length),L.addEventListener("click",()=>{a=(a+1)%n.length,d.loadShowCaseWindow(n[a],c,m),l(a+1,n.length)}),f.addEventListener("click",()=>{a=(a-1+n.length)%n.length,d.loadShowCaseWindow(n[a],c,m),l(a+1,n.length)}),q.addEventListener("click",()=>{d.openFullImage(n[a])})}}function l(n,c){const m=document.querySelector(".progress-bar__fill"),d=n/c*100;m.style.width=`${d}%`}});
