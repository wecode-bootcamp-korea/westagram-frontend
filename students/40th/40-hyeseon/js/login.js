const loginId = document.querySelector('#loginId');
const loginPw = document.querySelector('#loginPw');
const loginBtn = document.querySelector('#loginBtn');

loginId.addEventListener('keyup', loginActiveEvent);
loginPw.addEventListener('keyup', loginActiveEvent);
loginBtn.disabled = false;

function loginActiveEvent() {
  if (loginId.value && loginPw.value) {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = '#0995f6';
  } else {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#c0dffd';
  }
}
