const loadingIcon = document.getElementById("loadingIcon");

window.addEventListener("load", () => {
  loadingIcon.style.display = "block";

  setTimeout(() => {
    loadingIcon.style.display = "none";
  }, 3000); 
});