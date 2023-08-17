// Capturamos el elemento de entrada de contraseña por su ID
const passwordInput = document.getElementById("psw");

// aqui agregamos el evento focus para cuando el campo obtiene el foco
passwordInput.addEventListener("focus",function(){
  // Mostramos el mensaje con los requisitos de contraseña
  document.getElementById("message").style.display = "block";
});
// aqui Agregamos el evento blur para cuando el campo pierde el foco
passwordInput.addEventListener("blur",function(){
  // Ocultamos el mensaje de requisitos de contraseña
    document.getElementById("message").style.display = "none"
})
// Agregamos el evento keyup para cuando una tecla se suelta en el campo
passwordInput.addEventListener("keyup",function(){
  // Validamos los requisitos de contraseña
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    const validlengt = passwordInput.value.length >= 8;
    const containsLowercase = lowercaseRegex.test(passwordInput.value);
    const containsUppercase = uppercaseRegex.test(passwordInput.value);
    const containsnumber = numberRegex.test(passwordInput.value);
    

  // Obtenemos los elementos de mensaje individual
    const letterElement = document.getElementById("letter");
    const capitalElement = document.getElementById("capital");
    const numberElement = document.getElementById("number");
    const lengthElement = document.getElementById("length");

  // Validamos y actualizamos los estilos de los elementos de mensaje
  if (containsLowercase) {
    letterElement.classList.remove("invalid");
    letterElement.classList.add("valid");
  }else{
    letterElement.classList.remove("valid");
    letterElement.classList.add("invalid");
  }
  if (containsUppercase) {
    capitalElement.classList.remove("invalid");
    capitalElement.classList.add("valid");
    
  }else{
    capitalElement.classList.remove("valid");
    capitalElement.classList.add("invalid");
  }
  if (containsnumber) {
    numberElement.classList.remove("invalid");
    numberElement.classList.add("valid");
    
  }else{
    numberElement.classList.remove("valid");
    numberElement.classList.add("invalid");
  }
  if (validlengt) {
    lengthElement.classList.remove("invalid");
    lengthElement.classList.add("valid");
    
  }else{
    lengthElement.classList.remove("valid");
    lengthElement.classList.add("invalid");
  }
});
