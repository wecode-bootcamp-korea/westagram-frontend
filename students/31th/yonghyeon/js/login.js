const inputId = document.querySelector('.loginForm_id');
const inputPw = document.querySelector('.loginForm_password');
const loginBtn = document.querySelector('.loginForm_loginBtn');

function doLogin() {
  const id = inputId.value;
  const pw = inputPw.value;

  if (id.length >= 1 && pw.length >= 1) {
    loginBtn.disabled = false;
    loginBtn.style.curser = 'pointer';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.curser = 'default';
  }
}

inputId.addEventListener('keyup', doLogin);
inputPw.addEventListener('keyup', doLogin);
