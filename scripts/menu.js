var r=document.querySelector(".page-header"),n=t=>{let e=r.offsetHeight;t.getAttribute("href")&&t.style.setProperty("--top-step",e)};var o=document.querySelector(".burger"),s=document.querySelector(".main-nav"),c=()=>{o.classList.toggle("burger--is-open"),s.classList.toggle("main-nav--is-open")},i=t=>{let e=t.target;e.closest(".main-nav")&&n(e),e.closest(".main-nav--is-open")&&e.matches(".main-nav__link")&&c()},u=()=>{o.addEventListener("click",c),s.addEventListener("click",i)};export{u as addBurgerListener};
