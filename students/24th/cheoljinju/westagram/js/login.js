"use strict";
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-form__submit");
// loginBtn.disabled = true;

loginForm.addEventListener("keyup", () => {
  const idInput = loginForm.querySelector(".login-form__id").value;
  const pwInput = loginForm.querySelector(".login-form__pw").value;
  idInput.indexOf("@") !== -1 && pwInput.length >= 5
    ? loginBtn.classList.add("active")
    : loginBtn.classList.remove("active");
  loginBtn.disabled = idInput.indexOf("@") !== -1 && pwInput.length >= 5 ? loginBtn.disabled = false : loginBtn.disabled = true; 
});
