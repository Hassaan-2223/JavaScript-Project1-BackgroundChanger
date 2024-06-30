const color = ["red","green","blue","aqua"];

let btn = document.querySelector(".btn-clr");
let body = document.getElementById("body");
let bg_color = document.getElementById("bg-color");


btn.addEventListener("click",function(){
    let random_number = random();
    body.style.backgroundColor = color[random_number];
    bg_color.innerText=color[random_number];
    
})

function random(){
    let rno = Math.floor(Math.random()* color.length);
    return rno;
}