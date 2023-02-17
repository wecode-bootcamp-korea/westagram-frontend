"use strict";

const loginId = document.getElementById('login_id');
const loginPw = document.getElementById('login_pw');
const loginBtn = document.getElementById('login_btn');

function loginBtnActive() {
  if ((loginId.value.length > 0 && loginId.value.indexOf("@") !== -1) && loginPw.value.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.disabled = true;
  }
}

function toMainPage() {
  location.replace("./main.html");
}

loginId.addEventListener('keyup', loginBtnActive);
loginPw.addEventListener('keyup', loginBtnActive);
loginBtn.addEventListener('click', toMainPage);