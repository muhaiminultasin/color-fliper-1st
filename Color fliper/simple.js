const colors = ["green", "black", "yellow", "blue", "red"];


const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {
    let randomNumber = colors[getRandomNumber()];
    document.body.style.backgroundColor = randomNumber;
    color.innerHTML = randomNumber;

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
    

}