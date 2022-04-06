"use strict";

const id = document.querySelector(".login-id");
const password = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-button");

const checkIdAndPwd = () => {
  if (id.value && password.value) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.removeAttribute("disabled");
  } else {
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.setAttribute("disabled", true);
  }
};

id.addEventListener("keydown", (e) => {
  console.log(e.target.value);
  console.log(id.value);
  checkIdAndPwd();
});

password.addEventListener("keydown", (e) => {
  checkIdAndPwd();
});
