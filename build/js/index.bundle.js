!function(){document.getElementById("link-to-nav").addEventListener("click",(function(){document.getElementById("bookmark").scrollIntoView({block:"start",behavior:"smooth"})}));const e=document.querySelector(".list"),t=document.querySelectorAll(".example"),c=document.querySelectorAll(".menu__item");function s(e){t.forEach((t=>{t.classList.contains(e)?t.style.display="block":t.style.display="none"}))}e.addEventListener("click",(e=>{const t=e.target.dataset.id,a=e.target;switch(a.classList.contains("menu__item")&&c.forEach((e=>{e.classList.remove("menu__item_active"),a.classList.add("menu__item_active")})),t){case"all":s("example");break;case"web":case"apps":case"other":s(t)}}))}();