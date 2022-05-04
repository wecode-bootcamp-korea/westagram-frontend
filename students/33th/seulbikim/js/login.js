const loginForm = document.querySelector('.login__form');
const loginId = document.querySelector('.login__input-id');
const loginPw = document.querySelector('.login__input-pw');

const loginHandler = (e) => {
  const loginBtn = document.querySelector('.login__btn');
  const idValue = loginId.value;
  const pwValue = loginPw.value;

  idValue.includes('@') && idValue.length > 0 && pwValue.length > 5
    ? (loginBtn.disabled = false)
    : (loginBtn.disabled = true);
};

loginForm.addEventListener('keyup', loginHandler);
