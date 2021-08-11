"use strict";
const loginForm = document.querySelector(".login-form");
const loginBtn = document.querySelector(".login-form__submit");
// loginBtn.disabled = true;

loginForm.addEventListener("keyup", () => {
  const idInput = loginForm.querySelector(".login-form__id").value;
  const pwInput = loginForm.querySelector(".login-form__pw").value;
  idInput && pwInput
    ? loginBtn.classList.add("active")
    : loginBtn.classList.remove("active");
  if (idInput && pwInput) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
});
