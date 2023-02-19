"use strict";

let loginIdInput = document.querySelector(".id-input");
let loginPwInput = document.querySelector(".pw-input");
let loginBtn = document.querySelector(".login-btn");

// 키 이벤트 감지 -> 버튼 활성화

function checkInput() {
  if (loginIdInput.value && loginPwInput.value) {
    loginBtn.style.backgroundColor = "#5395e9";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#c5e1fa";
    loginBtn.disabled = true;
  }
}

// ID, PW validation

function checkLetter() {
  loginIdInput.value.includes("@") && loginPwInput.value.length >= 5
    ? (window.location.href = "./feed.html")
    : alert("아이디 혹은 패스워드를 확인해주세요.");
}

loginIdInput.addEventListener("keydown", checkInput);
loginPwInput.addEventListener("keydown", checkInput);
loginBtn.addEventListener("click", checkLetter);
