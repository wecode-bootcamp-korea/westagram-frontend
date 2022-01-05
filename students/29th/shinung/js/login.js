'use strict';

const pwInput = document.querySelector('.login--password');
const loginBtn = document.querySelector('.login--button');

pwInput.addEventListener('keyup', () => {
  const id = document.querySelector('.login--id').value;
  const password = pwInput.value;
  if (id && password) {
    loginBtn.style.opacity = '1';
  } else {
    loginBtn.style.opacity = '0.5';
  }
});
