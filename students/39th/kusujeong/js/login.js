// 문법이나 이상한 짓을 못하도록 선언하기
"use strict";

// id, pw 둘 다 입력시 로그인버튼 활성화
// 221027 Id, pw validation 기능 추가
const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const loginBtn = document.querySelector(".btn");
inputId.addEventListener("keyup", () => {
  onLoginBtn();
});
inputPw.addEventListener("keyup", () => {
  onLoginBtn();
});

function onLoginBtn() {
  let idValue = inputId.value;
  let pwValue = inputPw.value;
  if (idValue.includes("@") && pwValue.length >= 5) {
    loginBtn.style.opacity = 1;
    loginBtn.disabled = false;
  } else {
    loginBtn.style.opacity = 0.5;
    loginBtn.disabled = true;
  }
}
