// selecting all html element
const btn = document.getElementById("change-color-btn")
const colorBox = document.getElementById("color-box")
// adding event listener
btn.addEventListener("click", function(){
    colorBox.style.backgroundColor= getRandomColor()
})

// creating a function generate random number
function getRandomColor(){
    return "rgb(" + randNumber() +"," +randNumber() + ","+randNumber() +")"  
}

function randNumber(){
    return Math.floor(Math.random() * 256)
}