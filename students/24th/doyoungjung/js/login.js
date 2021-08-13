"use strict";

const inputId = document.querySelector(".loginId");
const inputPassword = document.querySelector(".loginPassword");
const loginButton = document.querySelector(".loginBtn");

function countValue(event) {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;
  (idValue.length > 0 && passwordValue.length >= 5 && idValue.indexOf("@") !== -1) ?
    (loginButton.style.opacity = "1",
      loginButton.style.cursor = "pointer") :
    loginButton.style.opacity = "0.2"
}

inputId.addEventListener("keyup", countValue);
inputPassword.addEventListener("keyup", countValue);

