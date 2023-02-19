const navElement = document.querySelector("nav");
const navWrapToggleElement = document.querySelector(".nav-wrap-toggle");
const menuIcon = document.querySelector(".fa-bars");

// 사이드바 토글

menuIcon.addEventListener("click", function () {
  navElement.classList.toggle("nav-closed");
  navWrapToggleElement.classList.toggle("hide-nav-elements");
});
