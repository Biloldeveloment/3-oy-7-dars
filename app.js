

let inyondi = document.querySelector("yondi");
/* let inbody = document.querySelector("yondi"); */

let body = document.querySelector("body");
setInterval(() => {
    let a = Math.floor(Math.random() * 245 - 1 + 1) + 1
    let b = Math.floor(Math.random() * 225 - 1 + 1) + 1
    let c = Math.floor(Math.random() * 215 - 1 + 1) + 1
    body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 3000);


let ochiq=document.querySelector(".ochiq img");
setInterval(()=>{
    let src=ochiq.getAttribute("src");
    if (src === "images/ochuu-removebg-preview.png") {
        console.log(1);
        ochiq.setAttribute("src", "images/yonibketti.png");
    }else{
        console.log(2);
        ochiq.setAttribute("src", "images/ochuu-removebg-preview.png")
    }
},2000)