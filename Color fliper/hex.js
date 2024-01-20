const hex = [1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.getElementById("btn");
const color = document.querySelector(".color");


button.addEventListener("click", function(){
    i = 0;
    let hexColor = "#";
    while( i < 6 ) {
        hexColor += hex[getRandomNumber()];
        i++;
    };
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

    
});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}