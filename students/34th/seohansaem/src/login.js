const loginForm = document.querySelector('.login-form');
const inputId = document.querySelector('.login-id');
const inputPw = document.querySelector('.login-pw');
const handleLogin = (ev) => {
  ev.preventDefault();
  location.href = 'main.html';
};

const handleChangeInfo = () => {
  const _inputId = document.querySelector('.login-id');
  const _inputPw = document.querySelector('.login-pw');

  const _loginButton = document.querySelector('.login-button');
  if (_inputId.value.length > 0 && _inputPw.value.length > 0) {
    _loginButton.disabled = false;
  } else {
    _loginButton.disabled = true;
  }
};

loginForm.addEventListener('submit', handleLogin);

inputId.addEventListener('keyup', handleChangeInfo);
inputPw.addEventListener('keyup', handleChangeInfo);
