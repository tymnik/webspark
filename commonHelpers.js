import{f as a}from"./assets/vendor-a4e39586.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=[{img:"/img/cards/img1.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img2.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img3.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img4.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img5.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img6.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img7.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img8.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img9.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img10.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img11.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img12.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img13.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img14.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:"/img/cards/img15.webp",likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"}];function r(){const m=document.getElementById("gallery"),s=document.getElementById("previewBtn"),l=document.getElementById("rowsBtn"),c=document.getElementById("loadMoreBtn");let e="preview",t=8;function o(){const i=d.slice(0,Math.min(t,d.length));m.innerHTML=i.map(n=>`
      <div class="card">
        <img src="${n.img}" alt="Image">
       <div class="card-info">
          <div class="details-today">
            <h3>Today</h3>
            <div class="details-stats">
              <p>
                <svg class="like-icon"><use href="/img/sprite.svg${n.likeIcon}"></use></svg> ${n.likes}
              </p>
              <p>
                <svg class="comment-icon"><use href="/img/sprite.svg${n.commentIcon}"></use></svg> ${n.comments}
              </p>
            </div>
          </div>
          <div class="details-date">
            <h3>${n.date}</h3>
            <div class="details-date-stats">
              <p>
                <svg class="like-icon"><use href="/img/sprite.svg${n.likeIcon}"></use></svg> ${n.likes2}
              </p>
              <p>
                <svg class="comment-icon"><use href="/img/sprite.svg${n.commentIcon}"></use></svg> ${n.comments2}
              </p>
            </div>
          </div>
          <div class="upload">
            <p>Image upload <span class="upload-date">${n.uploadDate}</span></p>
          </div>
       </div>
      </div>
    `).join("")}s.addEventListener("click",()=>{e="preview",m.classList.remove("rows"),m.classList.add("preview"),t=8,o()}),l.addEventListener("click",()=>{e="rows",m.classList.remove("preview"),m.classList.add("rows"),t=9,o()}),c.addEventListener("click",()=>{t+=e==="preview"?8:9,o()}),o()}document.addEventListener("DOMContentLoaded",()=>{const m=document.getElementById("fromDate"),s=document.getElementById("toDate");r();const l=a(m,{allowInput:!0,dateFormat:"d-m-Y",altFormat:"DD-MM-YYYY",minDate:"2020-01",onClose:()=>{c.close()}}),c=a(s,{allowInput:!0,dateFormat:"d-m-Y",altFormat:"DD-MM-YYYY",defaultDate:"01-01-2024",maxDate:"today",onClose:()=>{l.close()}});function e(o){const n=document.getElementById(o)._flatpickr;n.isOpen?n.close():n.open()}function t(o){const i=document.getElementById(o);i.value=""}document.querySelectorAll("[data-toggle]").forEach(o=>{o.addEventListener("click",()=>{const i=o.parentElement.querySelector("[data-input]").id;e(i)})}),document.querySelectorAll("[data-clear]").forEach(o=>{o.addEventListener("click",()=>{const i=o.parentElement.querySelector("[data-input]").id;t(i)})})});
//# sourceMappingURL=commonHelpers.js.map