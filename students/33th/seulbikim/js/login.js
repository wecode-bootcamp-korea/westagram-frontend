const loginForm = document.querySelector('.login__form');

const checkID = (idValue) => {
  return idValue.includes('@') && idValue.length > 0;
};

const checkPw = (pwValue) => {
  return pwValue.length > 5;
};

const loginHandler = (e) => {
  const loginBtn = document.querySelector('.login__btn');
  const idValue = document.querySelector('.login__input-id').value;
  const pwValue = document.querySelector('.login__input-pw').value;
  loginBtn.disabled = !(checkID(idValue) && checkPw(pwValue));
};

loginForm.addEventListener('keyup', loginHandler);
