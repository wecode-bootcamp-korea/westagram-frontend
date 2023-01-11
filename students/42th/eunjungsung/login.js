"use strict";

const loginForm = document.getElementById("login-form");
const idForm = document.getElementById("userid");
const pwForm = document.getElementById("userpw");
const loginBtn = document.getElementById("login-btn");

function loginCheck() {
  if (idForm.value.length > 0 && pwForm.value.length > 0) {
    loginBtn.style.backgroundColor = "#458eff";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#eeeeee";
    loginBtn.disabled = true;
  }
}

idForm.addEventListener("keyup", loginCheck);
pwForm.addEventListener("keyup", loginCheck);
