const dropDownBtn = document.getElementById("container-btn")
const containerList = document.getElementById("container-list")
const downSign = document.getElementById("down-sign")

dropDownBtn.addEventListener("click", e => {
    e.preventDefault()
    if(containerList.style.display === "block"){
        containerList.style.display = "none"
        downSign.style.transform = "rotate(0deg)"
    }else{
        containerList.style.display = "block"
        downSign.style.transform = "rotate(-180deg)"
    }
})