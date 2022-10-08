let button = document.querySelector("#btn")
let sideBar = document.querySelector(".sidebar")
let searchBtn = document.querySelector(".bx-search")
let circleBtn = document.querySelector(".circle")
let theme = document.querySelector(".theme")
let container = document.querySelector(".container")

button.addEventListener("click",handeSideBar)



function handeSideBar()
{
    sideBar.classList.toggle("active")
    searchBtn.classList.toggle("remove-hover")
    button.classList.toggle("bx-x")
}



