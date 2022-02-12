const idInput = document.getElementById('idInput');
const pwInput = document.getElementById('pwInput');
const loginBtn = document.getElementsByClassName('loginButton')[0];


function inputKeyboardEvent() {

  if (idInput.value.length > 0 && pwInput.value.length >= 5) {
    loginBtn.style.backgroundColor = "#0095f6";
  }
  if (idInput.value.length == 0 && pwInput.value.length > 0) {
    loginBtn.style.backgroundColor = "#b9def7";
  }

  if (idInput.value.length > 0 && pwInput.value.length == 0) {
    loginBtn.style.backgroundColor = "#b9def7";
  }

}

idInput.addEventListener('keyup', inputKeyboardEvent);
pwInput.addEventListener('keyup', inputKeyboardEvent);
loginBtn.addEventListener('click', loginBtnClick);
