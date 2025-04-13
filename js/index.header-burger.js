const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__menu-link");

// Toggle menu function
function toggleMenu() {
  burger.classList.toggle("active");
  nav.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

// Close menu function
function closeMenu() {
  burger.classList.remove("active");
  nav.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

// Add click event listener to burger button
burger.addEventListener("click", toggleMenu);

// Add click event listeners to all menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});