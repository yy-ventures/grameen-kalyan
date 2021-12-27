// buttons 
const smileListOne = document.getElementById("smileList1")
const smileListTwo = document.getElementById("smileList2")
const smileListThree = document.getElementById("smileList3")
const smileListFour = document.getElementById("smileList4")
const smileListFive = document.getElementById("smileList5")
const smileListSix = document.getElementById("smileList6")

// circle
const smileCircle = document.getElementById("smileCircle")

// function
smileListTwo.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/gynae.webp')"
})

smileListTwo.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/medicine.webp')"
})

smileListThree.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/pediatric.webp')"
})

smileListThree.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/medicine.webp')"
})

smileListFour.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/eye.jpg')"
})

smileListFour.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/medicine.webp')"
})

smileListFive.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/ent.webp')"
})

smileListFive.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/medicine.webp')"
})

smileListSix.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/orthopedic.webp')"
})

smileListSix.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/healthcare/health-story/medicine.webp')"
})