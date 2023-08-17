let boton = document.querySelectorAll(".accordion");
for(let x = 0; x < boton.length; x++){
    boton[x].addEventListener("click", function(){
        let paneles = document.querySelectorAll(".panel");
        if (paneles[x].style.display == "block") {
            paneles[x].style.display = "none";
        }else{
            paneles[x].style.display = "block"
        }
    })
}