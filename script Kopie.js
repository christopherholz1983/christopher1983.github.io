const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click",()=>{
mobileMenu.classList.toggle("active");
hamburger.classList.toggle("active");

});