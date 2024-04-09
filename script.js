const courseButton = document.querySelector(".course-btn").addEventListener("click", function(){
    alert("Login First")
})
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", function(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
