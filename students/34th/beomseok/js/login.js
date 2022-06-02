const inputBox = document.querySelector('input');
const loginButton = document.querySelector('.btn');
const inputId = document.querySelector('.inputId');
const inputPw = document.querySelector('.inputPw');

function changeColor() {
  if (!(inputId.value.length >= 1) && !(inputPw.value.length >= 1)) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

inputBox.addEventListener('keyup', changeColor);
