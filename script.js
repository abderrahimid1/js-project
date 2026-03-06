document.addEventListener("DOMContentLoaded", function(){

const box = document.getElementById("color-box");
const button = document.getElementById("change-color-btn");

function getRandomColor(){
let letters = "0123456789ABCDEF";
let color = "#";

for(let i = 0; i < 6; i++){
color += letters[Math.floor(Math.random() * 16)];
}

return color;
}

button.addEventListener("click", function(){
box.style.backgroundColor = getRandomColor();
});

});