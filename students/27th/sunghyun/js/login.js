const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.loginBtn');

id.addEventListener('keyup', checkloginForm);
password.addEventListener('keyup', checkloginForm);

function checkloginForm() {
  if (!!id.value && !!password.value) {
    loginBtn.classList.remove('loginBtn--disable');
    return;
  }
  loginBtn.classList.add('loginBtn--disable');
}
