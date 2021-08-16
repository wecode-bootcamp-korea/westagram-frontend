"use strict";
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-form__submit");

function success() {
  alert("환영합니다!");
  location.replace(
    "http://127.0.0.1:5500/students/24th/cheoljinju/westagram/main.html"
  );
}

loginForm.addEventListener("keyup", () => {
  const idInput = loginForm.querySelector(".login-form__id").value;
  const pwInput = loginForm.querySelector(".login-form__pw").value;
  idInput.indexOf("@") !== -1 && pwInput.length >= 5
    ? loginBtn.classList.add("active")
    : loginBtn.classList.remove("active");
  loginBtn.disabled =
    idInput.indexOf("@") !== -1 && pwInput.length >= 5 ? false : true;
});

loginBtn.addEventListener("click", success);
