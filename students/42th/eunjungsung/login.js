"use strict";

const userId = document.getElementById("user-id");
const userPw = document.getElementById("user-pw");
const loginBtn = document.getElementById("login-btn");
const logo = document.getElementById("logo");

// function loginCheck() {
//   if (userId.value.length > 0 && userPw.value.length > 0) {
//     loginBtn.style.backgroundColor = "#458eff";
//     loginBtn.disabled = false;
//   } else {
//     loginBtn.style.backgroundColor = "#c4e1fb";
//     loginBtn.disabled = true;
//   }
// }

function loginCheck() {
  if (
    userId.value.length > 0 &&
    userId.value.indexOf("@") > 0 &&
    userPw.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = "#458eff";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.disabled = true;
  }
}

function moveToMain() {
  location.replace("./main.html");
}

userId.addEventListener("keyup", loginCheck);
userPw.addEventListener("keyup", loginCheck);
loginBtn.addEventListener("click", moveToMain);
logo.addEventListener("click", moveToMain);
