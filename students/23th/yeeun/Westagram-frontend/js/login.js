'use strict';

const loginForm = document.getElementsByClassName('loginForm')[0];
const idInput = document.getElementById("id");
const pwInput = document.getElementById("pw");
const loginBtn = document.getElementById("loginBtn");

function handleInput() {
  const idValue = idInput.value;
  const pwValue = pwInput.value;
  if(idValue.length > 0 && pwValue.length > 0) {
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.5;
    loginBtn.style.cursor = "default";
  }
}

function goToMain () {
  
  location.replace('http://127.0.0.1:5500/students/23th/yeeun/Westagram-frontend/main.html');
}

function init() {
  loginForm.addEventListener('input', handleInput);
  loginBtn.addEventListener('click', goToMain);
}

init();