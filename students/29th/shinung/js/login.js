'use strict';

const pwInput = document.querySelector('.login--password');
const loginBtn = document.querySelector('.login--button');
const idInput = document.querySelector('.login--id');

const ID = 'reach';
const PASSWORD = '123';

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
  const password = pwInput.value;

  if (id === '' && password === '') {
    console.log('null');
  } else if (id === ID && password === PASSWORD) {
    console.log('success');
    pwInput.style.borderColor = '#d6d6d6';
    idInput.style.borderColor = '#d6d6d6';
  } else {
    idInput.style.borderColor = 'red';
    pwInput.style.borderColor = 'red';
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
