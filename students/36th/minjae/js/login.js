"use strict";

const loginForm = document.querySelector("#login-form");
const usernameInput = document.getElementById("input_username");
const passwordInput = document.getElementById("input_password");
const loginBtn = document.getElementById("login_btn");

const loginAbled = () => {
  loginBtn.classList.remove("login_btn-disabled");
  loginBtn.classList.add("login_btn-abled");
  loginBtn.disabled = false;
};

const loginDisabled = () => {
  loginBtn.disabled = true;
};

const loginPossible = () => {
  usernameInput.value.length > 0 && passwordInput.value.length > 0
    ? loginAbled()
    : loginDisabled();
};

loginForm.addEventListener("input", loginPossible);
