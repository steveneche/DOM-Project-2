const btn = document.getElementById("change-color-btn")
const colorBox = document.getElementById("color-box")
btn.addEventListener("click", function(){
    colorBox.style.backgroundColor= getRandomColor()
})
function getRandomColor(){
    return "rgb(" + randNumber() +"," +randNumber() + ","+randNumber() +")"  
}

function randNumber(){
    return Math.floor(Math.random() * 256)
}