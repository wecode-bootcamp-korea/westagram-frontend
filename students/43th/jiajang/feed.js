const navElement = document.querySelector("nav");
const navWrapElement = document.querySelector(".nav-wrap");
const hideNavBtn = document.querySelector(".nav-bottom-icon");

// 사이드바 토글

hideNavBtn.addEventListener("click", function () {
  navElement.classList.toggle("nav-closed");
  navWrapElement.classList.toggle("nav-closed-no-element");
  let closedNavElement = document.querySelector(".nav-closed");
  let navOpenBtn = document.createElement("div");
  navElement.appendChild(navOpenBtn);
  navOpenBtn.classList.toggle("nav-open-btn");
  closedNavElement.style.transition = "all 0.5s";
});
