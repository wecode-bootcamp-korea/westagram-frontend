//기본 설정
'use strict';

// Id, Password 1글자 이상 입력시 로그인 버튼 활설화
// const loginBtn = document.querySelector('.loginBtn');
// const inputBox = document.querySelectorAll('.inputBox');
// const inputEmail = document.querySelector('#inputEmail');
// const inputPw = document.querySelector('#inputPw');
// for (let i = 0; i < inputBox.length; i++) {
//   inputBox[i].addEventListener('input', () => {
//     return ((inputEmail.value && inputPw.value) ? loginBtn.style.backgroundColor = '#2196f3' : loginBtn.style.backgroundColor = '#c4e1fb');
//   })
// };

//Id에 @가 들어가는지?, Password가 5자 이상인지? 확인하는 유효성 검사 기능
const loginBtn = document.querySelector('.loginBtn');
const inputBox = document.querySelectorAll('.inputBox');
const inputEmail = document.querySelector('#inputEmail');
const inputPw = document.querySelector('#inputPw');
for (let i = 0; i < inputBox.length; i++) {
  inputBox[i].addEventListener('input', () => {
    return ((inputEmail.value && inputPw.value) ? loginBtn.style.backgroundColor = '#2196f3' : loginBtn.style.backgroundColor = '#c4e1fb');
  })
};