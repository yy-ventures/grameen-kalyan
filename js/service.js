// scroll bottom section
const heathCareBtn = document.getElementById("healthCare")
const wellBeingBtn = document.getElementById("wellBeing")
const emergencyResponseBtn = document.getElementById("emergencyResponse")
const socialBusinessBtn = document.getElementById("socialBusiness")

// scroll bottom buttons 
const healthCareScroll = document.getElementById("healthCare-scroll")
const wellBeingScroll = document.getElementById("wellbeing-scroll")
const emergencyScroll = document.getElementById("emergency-scroll")
const socialScroll = document.getElementById("social-scroll")

// call function
heathCareBtn.addEventListener("click", e => {
    e.preventDefault()
    window.scrollTo(0, findSection(healthCareScroll))
})

wellBeingBtn.addEventListener("click", e => {
    e.preventDefault()
    window.scrollTo(0, findSection(wellBeingScroll))
})

emergencyResponseBtn.addEventListener("click", e => {
    e.preventDefault()
    window.scrollTo(0, findSection(emergencyScroll))
})

socialBusinessBtn.addEventListener("click", e => {
    e.preventDefault()
    window.scrollTo(0, findSection(socialScroll))
})

const findSection = secId => {
    let currentTop = 0
    if(secId.offsetParent){
        do{
            currentTop += secId.offsetTop;
        }while ((secId = secId.offsetParent))
        return [currentTop]
    } 
}