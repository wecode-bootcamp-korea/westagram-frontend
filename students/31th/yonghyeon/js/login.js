'use strict';

const inputId = document.querySelector('.loginForm_id');
const inputPw = document.querySelector('.loginForm_password');
const loginBtn = document.querySelector('.loginForm_loginBtn');

const doLogin = () => {
  const id = inputId.value;
  const pw = inputPw.value;
  if (id.length >= 1 && pw.length >= 1) {
    loginBtn.disabled = false;
    loginBtn.style.curser = 'pointer';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.curser = 'default';
  }
};

const doValidation = () => {
  const id = inputId.value;
  const pw = inputPw.value;
  if (!id.includes('@') && pw.length > 5) {
    alert(`이메일에 '@'가 포함되어야 합니다.`);
  } else if (pw.length < 5 && id.includes('@')) {
    alert('비밀번호가 5자리 이상이어야 합니다.');
  }

  if (!id.includes('@') && pw.length < 5) {
    alert(`이메일에 '@'가 포함되어야 하고, 비밀번호가 5자리 이상이어야 합니다.`);
  }
};

inputId.addEventListener('keyup', doLogin);
inputPw.addEventListener('keyup', doLogin);

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  doValidation();
});
