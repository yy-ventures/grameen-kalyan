// buttons 
const smileListOne = document.getElementById("smileList1")
const smileListTwo = document.getElementById("smileList2")
const smileListThree = document.getElementById("smileList3")
const smileListFour = document.getElementById("smileList4")
const smileListFive = document.getElementById("smileList5")

// circle
const smileCircle = document.getElementById("smileCircle")

// function
smileListTwo.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/emergency-response.webp')"
})

smileListTwo.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/mother-child.webp')"
})

smileListThree.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/complience-priority.webp')"
})

smileListThree.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/mother-child.webp')"
})

smileListFour.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/diagnosis-key.webp')"
})

smileListFour.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/mother-child.webp')"
})

smileListFive.addEventListener("mouseover", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/fighting-pandemic.webp')"
})

smileListFive.addEventListener("mouseleave", e => {
    e.preventDefault()
    smileCircle.style.backgroundImage = "url('../assets/stories/mother-child.webp')"
})