const thisIsPassword = document.getElementById('password');
const thisIsText = document.getElementById('text');

thisIsPassword.addEventListener('keyup', function() {
  const loginBtnOn = document.getElementsByClassName('login-btn')[0];

  if (thisIsText.value && thisIsPassword.value) {
    loginBtnOn.disabled = false;
    loginBtnOn.classList.add('login-btn-on')
  } else {
    loginBtnOn.disabled = true;
    loginBtnOn.classList.remove('login-btn-on')
  }
})