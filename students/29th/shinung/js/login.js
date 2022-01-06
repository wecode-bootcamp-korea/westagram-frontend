'use strict';

const pwInput = document.querySelector('.login--password');
const loginBtn = document.querySelector('.login--button');
const idInput = document.querySelector('.login--id');
const notice = document.querySelector('.login--notice');

const ID = 'hsuj86@gmail.com';
const PASSWORD = '123456';

pwInput.addEventListener('keyup', () => {
  const id = idInput.value;
  const password = pwInput.value;
  if (id && password) {
    loginBtn.style.opacity = '1';
    loginBtn.style.cursor = 'pointer';
  } else {
    loginBtn.style.opacity = '0.5';
    pwInput.style.borderColor = '#d6d6d6';
    idInput.style.borderColor = '#d6d6d6';
  }
});

function handleSubmit() {
  const id = idInput.value;
  const idResult = id.includes('@');
  const password = pwInput.value;
  const idInputBorder = (pwInput.style.borderColor = 'tomato');
  const pwInputBorder = (pwInput.style.borderColor = 'tomato');

  if (id === '' && password === '') {
    return;
  } else if (idResult && password.length <= 5) {
    notice.innerHTML = '비밀번호가 짧습니다.';
    idInputBorder;
  } else if (idResult && password !== PASSWORD) {
    notice.innerHTML = '비밀번호를 올바르지 않습니다.';
  } else if (!idResult && password === PASSWORD) {
    notice.innerHTML = '올바른 이메일 형식이 아닙니다.';
    idInputBorder;
  } else if (id !== ID && password === PASSWORD) {
    notice.innerHTML = '이메일을 올바르지 않습니다.';
    idInputBorder;
  } else if (id === ID && password === PASSWORD) {
    alert('환영합니다.');
    notice.innerHTML = '';
    idInput.value = '';
    pwInput.value = '';
    idInput.style.borderColor = '#d6d6d6';
    pwInputBorder;
  } else {
    idInputBorder;
    pwInputBorder;
  }
}

pwInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSubmit();
    e.preventDefault();
  }
});

loginBtn.addEventListener('click', (e) => {
  handleSubmit();
  e.preventDefault();
});
