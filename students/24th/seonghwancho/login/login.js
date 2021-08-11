'use strict';

const loginBtn = document.querySelector('.loginBtn');
const inputBox = document.querySelectorAll('.inputBox');
const inputEmail = document.querySelector('#inputEmail');
const inputPw = document.querySelector('#inputPw');

for (let i = 0; i < inputBox.length; i++) {
  inputBox[i].addEventListener('input', () => {
    if (inputEmail.value && inputPw.value) {
      loginBtn.style.backgroundColor = '#2196f3';
    }
  })
};




