"use strict";

const id = document.querySelector(".login-id");
const password = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-button");

const checkIdAndPwd = () => {
  if (id.value.includes("@") && password.value.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.removeAttribute("disabled");
  } else {
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.setAttribute("disabled", true);
  }
};

id.addEventListener("keyup", () => {
  checkIdAndPwd();
});

password.addEventListener("keyup", () => {
  checkIdAndPwd();
});
