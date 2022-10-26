// 문법이나 이상한 짓을 못하도록 선언하기
"use strict";

const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const loginBtn = document.querySelector(".btn");
inputId.addEventListener("keyup", onLoginBtn);
inputPw.addEventListener("keyup", onLoginBtn);

function onLoginBtn() {
  if (inputId.value && inputPw.value) {
    loginBtn.style.opacity = 1;
    loginBtn.disabled = false;
  } else {
    loginBtn.style.opacity = 0.5;
    loginBtn.disabled = true;
  }
}
