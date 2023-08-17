let boton = document.querySelector(".openbtn");
boton.addEventListener("click", function(){
    let mostrar = document.querySelector("#mySidebar");
    mostrar.classList.toggle("sidebar");
    
    
})
let boton1 = document.querySelector(".closebtn");
boton1.addEventListener("click",function(){
    let ocultar = document.querySelector("#mySidebar");
    ocultar.classList.toggle("sidebar")
})

let menu = document.querySelector(".sidebar");
menu.addEventListener("click",function(){
    let mostrarmenu = document.querySelector("#mySidebar");
    mostrarmenu.style.left = "";
    
})



