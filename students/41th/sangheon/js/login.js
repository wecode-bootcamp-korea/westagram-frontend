const emailInp = document.getElementById('email');
const pwInp = document.getElementById('password');

function checkInp() {
  const btnLogin = document.getElementById('btnLogin');
  pwInp.value.length > 0 && emailInp.value.length > 0
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
}

emailInp.addEventListener('keyup', checkInp);
pwInp.addEventListener('keyup', checkInp);
