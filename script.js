const button = document.querySelector("#btn");

let colors = ["red", "green", "blue", "yellow", "black", "orange", "pink"];
let index = 0;

button.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[index];
    index++;
    if(index === colors.length){
        index = 0;
    }

})