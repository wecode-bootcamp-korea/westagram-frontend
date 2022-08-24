const loginWrapperElem = document.querySelector('#loginWrapper');
const inputIdElem = document.querySelector('.loginId');
const inputPasswordElem = document.querySelector('.loginPassword');
const loginButtonElem = document.querySelector('.loginButton');

loginWrapperElem.addEventListener('keyup', () => {
  loginButtonElem.disabled = !!inputIdElem.value && !!inputPasswordElem.value;
});