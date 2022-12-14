const inputId = document.querySelector('#id');
const inputPassword = document.querySelector('#pw');
const loginBtn = document.querySelector('button');

function logIn() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    loginBtn.style.backgroundColor = "#1c7ed6";
  } else {
    loginBtn.style.backgroundColor = "#C4E1FB"
  }
};

inputId.addEventListener('keyup', logIn);
inputPassword.addEventListener('keyup', logIn);
