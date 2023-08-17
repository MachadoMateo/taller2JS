
const myBtn = document.getElementById("myBtn");
const menu = document.getElementById("menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    myBtn.style.display = "block";
    menu.style.top = "0";
  } else {
    myBtn.style.display = "none";
    menu.style.top = "-50px";
  }
});

myBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  menu.style.top = "0";
});