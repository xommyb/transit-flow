const menu_bar = document.querySelector(".hamburger"); 
const mobile_menu = document.querySelector(".mobile-nav");
 menu_bar.addEventListener("click", function () { menu_bar.classList.toggle("is-active"); 
 mobile_menu.classList.toggle("is-active"); });