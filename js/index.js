const navigationMenu = document.querySelector(".navigation-menu")
const menuBtn = document.querySelector(".navigation-icon")
const menuCross = document.querySelector(".navigation-cross")

// button and icons selectors
const searchBtn = document.getElementById("search-icon");
const searchInputBox = document.getElementById("search-input-box");
const crossBtn = document.getElementById("cross-btn")
const searchInputContainer = document.getElementById("search-input-container")
const phoneBtn = document.getElementById("phone-icon")
const phoneBox = document.querySelector(".phone-hover")
const contactForm = document.querySelector(".contact-input-box")
const contactCross = document.querySelector(".cross-contact")
const contactBtn = document.getElementById("email-icon")

let searchShow = false;
let phoneShow = false;
let contactShow = false;

let rellax = new Rellax('.rellax');


AOS.init({
    mirror: false,
    disable: 'mobile'
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



// search btn event

const handleSearchBtnShow = () => {
    searchInputBox.style.transform = "translateX(0)"
}
const handleSearchBtnHide = () => {
    searchInputBox.style.transform = "translateX(425px)"
    searchInputContainer.value = ""
}
const handlePhoneBoxShow = () => {
    phoneBox.style.transform = "translateX(0)"
}
const handlePhoneBoxHide = () => {
    phoneBox.style.transform = "translateX(400px)"
}
const handleContactFormShow = () => {
    contactForm.style.transform = "translateX(0)"
}
const handleContactFormHide = () => {
    contactForm.style.transform = "translateX(565px)" 
}

// search box event 
searchBtn.addEventListener("click", e => {
    e.preventDefault()
    handleSearchBtnShow()
    handlePhoneBoxHide()
    handleContactFormHide()
})

crossBtn.addEventListener("click", e => {
    e.preventDefault()
    handleSearchBtnHide()
})

// phone box event
phoneBtn.addEventListener("mouseover", e => {
    e.preventDefault()
    handlePhoneBoxShow()
    handleContactFormHide()
    handleSearchBtnHide()
})

phoneBtn.addEventListener("mouseleave", e => {
    e.preventDefault()
    handlePhoneBoxHide()
})

// contact form event

contactBtn.addEventListener("click", e => {
    e.preventDefault()
    handleContactFormShow()
    handleSearchBtnHide()
    handlePhoneBoxHide()
})

contactCross.addEventListener("click", e => {
    e.preventDefault()
    handleContactFormHide()
})