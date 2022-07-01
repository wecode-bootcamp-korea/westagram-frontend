"use strict";

const loginId = document.getElementsByClassName('login')[0];
const loginPw = document.getElementsByClassName('login')[1];
const loginButton = document.getElementById('login-button');

const checkValue = () => {

   let pwValueLength = loginPw.value.length;

   return !(loginId.value.includes('@') && pwValueLength>5);

}


const lgnBttnHandler = () => {

   loginButton.disabled = checkValue();

}



const init = () => {

  loginId.addEventListener('input', lgnBttnHandler);
  loginPw.addEventListener('input', lgnBttnHandler);
  loginId.addEventListener('keyup', lgnBttnHandler);
  loginPw.addEventListener('keyup', lgnBttnHandler);
  loginButton.addEventListener('click', () => {
   window.location.href = '../main.html';
})
};

init();