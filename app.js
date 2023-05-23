//menu btn
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-nav");
});
