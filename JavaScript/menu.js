const toggleBtn = document.querySelector(".header-toggleBtn");
const menu = document.querySelector(".header-click");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
