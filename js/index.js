const navigationMenu = document.querySelector(".navigation-menu")
const menuBtn = document.querySelector(".navigation-icon")
const menuCross = document.querySelector(".navigation-cross")
let rellax = new Rellax('.rellax');
AOS.init({
    mirror: true
});

menuBtn.addEventListener("click", e => {
    e.preventDefault()
    navigationMenu.style.left = "0"
    menuBtn.style.display = "none"
    menuCross.style.display = "block"
})

menuCross.addEventListener("click", e => {
    e.preventDefault()
    navigationMenu.style.left = "-100%"
    menuBtn.style.display = "block"
    menuCross.style.display = "none"
})
