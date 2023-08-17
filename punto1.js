// de esta manera podemos mostrar un menu de forma responsive, claro esta ya debemos tener previamente la clase css del
let boton = document.querySelector(".active");
boton.addEventListener("click",function(){
    let menu = document.querySelector("#myNavbar");
    menu.classList.toggle("responsive");
})

let boton1 = document.querySelector(".icon");
boton1.addEventListener("click",function(){
    let menu = document.querySelector("#myNavbar");
    menu.classList.toggle("responsive");
})
