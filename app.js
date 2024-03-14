const header=document.querySelector("header");
const scroll_btn=document.querySelector("#scroll");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.screenY > 10);
    scroll_btn.classList.toggle("active",window.screenY > 50);

});