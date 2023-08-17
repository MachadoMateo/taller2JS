const menu = document.querySelector(".menu");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    menu.style.backgroundColor = "green"; 
  } else {
    menu.style.backgroundColor = "blue"; 
  }
});