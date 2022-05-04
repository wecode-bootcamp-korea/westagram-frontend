const loginForm = document.querySelector('.loginForm');
const loginId = document.querySelector('.loginId');
const loginPw = document.querySelector('.loginPw');
const loginBtn = document.querySelector('.loginBtn');

const onBtnActive = () => {
  const idValue = loginId.value;
  const pwValue = loginPw.value;

  idValue.includes('@') && idValue.length > 0 && pwValue.length > 5
    ? (loginBtn.disabled = false)
    : (loginBtn.disabled = true);
};

loginId.addEventListener('keyup', onBtnActive);
loginPw.addEventListener('keyup', onBtnActive);
