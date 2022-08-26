'use strict';

const loginId = document.querySelector('.login__id');
const loginPw = document.querySelector('.login__pw');
const loginBtn = document.querySelector('.login__btn');
const validation = document.querySelector('.validation');

function validationTest() {
  const id = loginId.value;
  const pw = loginPw.value;
  return id.includes('@') && pw.length > 4 ? true : false;
}

function handdleBtn() {
  const isValue = validationTest();
  if (isValue) {
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    validation.innerHTML = '';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.3;
    validation.innerHTML = `사용자의 이름과 비밀번호를 확인하고<br>다시 시도하세요.`;
  }
}

function init() {
  loginPw.addEventListener('input', handdleBtn);
  loginId.addEventListener('input', handdleBtn);
  loginBtn.addEventListener('click', () => {
    location.href = 'main.html';
  });
}

init();
