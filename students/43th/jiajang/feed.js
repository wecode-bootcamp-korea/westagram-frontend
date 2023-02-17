const navElement = document.querySelector("nav");
const navWrapElement = document.querySelector(".nav-wrap");
const hideNavBtn = document.querySelector(".nav-bottom-icon");

// 사이드바 토글

hideNavBtn.addEventListener("click", function () {
  navElement.className.includes("nav-open-btn")
    ? navWrapElement.classList.remove("nav-closed-no-element")
    : (navWrapElement.classList.add("nav-closed-no-element"),
      navWrapElement.classList.add("nav-bottom-icon"));
});
