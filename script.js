const btnmMenuOpen = document.querySelector("#icon-burger-open");
const btnmMenuClose = document.querySelector("#icon-burger-close");
const menu = document.querySelector(".nav__links");
const allItems = document.querySelectorAll(".nav__links-li a");
const gradient = document.querySelector(".header__gradient");

function openMenu() {
  btnmMenuClose.classList.remove("none");
  btnmMenuOpen.classList.add("none");
  btnmMenuClose.classList.add("block");
  //Gradient
  gradient.classList.add("active");
  //Menu
  menu.classList.add("active");
}

function closeMenu() {
  btnmMenuClose.classList.add("none");
  btnmMenuOpen.classList.remove("none");
  btnmMenuOpen.classList.add("block");
  //Gradient
  gradient.classList.remove("active");
  //Menu
  menu.classList.remove("active");
}

//Items
if (window.matchMedia("(max-width: 827px")) {
  allItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}

gradient.addEventListener("click", closeMenu);
btnmMenuOpen.addEventListener("click", openMenu);
btnmMenuClose.addEventListener("click", closeMenu);
