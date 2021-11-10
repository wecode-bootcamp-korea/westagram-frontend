const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('.loginBtn');

id.addEventListener('keyup', checkloginForm);
password.addEventListener('keyup', checkloginForm);

function checkloginForm() {
  const allchecked = !!id.value && !!password.value;

  allchecked
    ? loginBtn.classList.remove('loginBtn--disable')
    : loginBtn.classList.add('loginBtn--disable');

  loginBtn.disabled = !allchecked;
}
