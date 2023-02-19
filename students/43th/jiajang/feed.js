"use strict";

const navElement = document.querySelector("nav");
const navWrapToggleElement = document.querySelector(".nav-wrap-toggle");
const menuIcon = document.querySelector(".fa-bars");

// 사이드바 토글

menuIcon.addEventListener("click", function () {
  navElement.classList.toggle("nav-closed");
  navWrapToggleElement.classList.toggle("hide-nav-elements");
});

// 프로필 박스 토글

const profileImg = document.querySelector(".profile-toggle-img");
const profileImgBox = document.querySelector(".profile-toggle-box");

profileImg.addEventListener("click", () => {
  profileImgBox.classList.toggle("display-block");
});
