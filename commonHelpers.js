import{f as r}from"./assets/vendor-a4e39586.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="/webspark/assets/sprite-62aac618.svg",s="/webspark/assets/img1-719fbb66.webp",u=[{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"},{img:s,likeIcon:"#like",likes:128,likes2:67,commentIcon:"#comment",comments:31,comments2:22,date:"9-08-2016",uploadDate:"11-04-2016"}];function p(){const c=document.getElementById("gallery"),i=document.getElementById("previewBtn"),a=document.getElementById("rowsBtn"),l=document.getElementById("loadMoreBtn");let e="preview",t=8;function o(){const m=u.slice(0,Math.min(t,u.length));c.innerHTML=m.map(n=>`
      <div class="card">
        <img src="${n.img}" alt="Image">
       <div class="card-info">
          <div class="details-today">
            <h3>Today</h3>
            <div class="details-stats">
              <p>
                <svg class="like-icon"><use href="${d}${n.likeIcon}"></use></svg> ${n.likes}
              </p>
              <p>
                <svg class="comment-icon"><use href="${d}${n.commentIcon}"></use></svg> ${n.comments}
              </p>
            </div>
          </div>
          <div class="details-date">
            <h3>${n.date}</h3>
            <div class="details-date-stats">
              <p>
                <svg class="like-icon"><use href="${d}${n.likeIcon}"></use></svg> ${n.likes2}
              </p>
              <p>
                <svg class="comment-icon"><use href="${d}${n.commentIcon}"></use></svg> ${n.comments2}
              </p>
            </div>
          </div>
          <div class="upload">
            <p>Image upload <span class="upload-date">${n.uploadDate}</span></p>
          </div>
       </div>
      </div>
    `).join("")}i.addEventListener("click",()=>{e="preview",c.classList.remove("rows"),c.classList.add("preview"),t=8,o()}),a.addEventListener("click",()=>{e="rows",c.classList.remove("preview"),c.classList.add("rows"),t=9,o()}),l.addEventListener("click",()=>{t+=e==="preview"?8:9,o()}),o()}document.addEventListener("DOMContentLoaded",()=>{const c=document.getElementById("fromDate"),i=document.getElementById("toDate");p();const a=r(c,{allowInput:!0,dateFormat:"d-m-Y",altFormat:"DD-MM-YYYY",minDate:"2020-01",onClose:()=>{l.close()}}),l=r(i,{allowInput:!0,dateFormat:"d-m-Y",altFormat:"DD-MM-YYYY",defaultDate:"01-01-2024",maxDate:"today",onClose:()=>{a.close()}});function e(o){const n=document.getElementById(o)._flatpickr;n.isOpen?n.close():n.open()}function t(o){const m=document.getElementById(o);m.value=""}document.querySelectorAll("[data-toggle]").forEach(o=>{o.addEventListener("click",()=>{const m=o.parentElement.querySelector("[data-input]").id;e(m)})}),document.querySelectorAll("[data-clear]").forEach(o=>{o.addEventListener("click",()=>{const m=o.parentElement.querySelector("[data-input]").id;t(m)})})});
//# sourceMappingURL=commonHelpers.js.map
