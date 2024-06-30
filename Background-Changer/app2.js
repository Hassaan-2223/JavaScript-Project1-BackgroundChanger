const color = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let btn = document.querySelector(".btn-clr");
let body = document.getElementById("body");
let bg_color = document.getElementById("bg-color");


btn.addEventListener("click",function(){
    let random_color = random();
    body.style.backgroundColor = random_color;
    bg_color.textContent= random_color;
    // console.log(random_number);
    
})

function random(){
    let hex = "#";
    for(i = 0; i<6 ; i++){
        let rn = Math.floor(Math.random()* color.length);
        hex += color[rn];
    }
    return hex;
}