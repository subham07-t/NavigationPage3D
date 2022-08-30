const hamburger_menu = document.querySelector(".hamburger");
const container = document.querySelector(".container");
hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
