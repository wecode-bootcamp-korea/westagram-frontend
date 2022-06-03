const inputBox = document.querySelector('#login');
const loginButton = document.querySelector('.btn');
const inputId = document.querySelector('.inputId');
const inputPw = document.querySelector('.inputPw');
// const mainPg = document.querySelector('#login');

function changeColor() {
  if (inputId.value.includes('@') && inputPw.value.length >= 5) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

inputBox.addEventListener('keyup', changeColor);

function mainPage(e) {
  e.preventDefault();
  if ((loginButton.disabled = false)) {
    location.href = 'main.html';
  }
}

inputBox.addEventListener('submit', mainPage);
