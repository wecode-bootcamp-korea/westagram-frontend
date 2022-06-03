const loginForm = document.querySelector('.login-form');
const inputId = document.querySelector('.login-id');
const inputPw = document.querySelector('.login-pw');
const loginButton = document.querySelector('.login-button');

const handleLogin = (ev) => {
  ev.preventDefault();
  if (inputId.value.indexOf('@') === -1) {
    alert('전화번호 또는 이메일 형식을 확인해주세요.');
    return;
  } else if (inputPw.value.length < 6) {
    alert('비밀번호를 6자 이상 입력해주세요.');
    return;
  }
  location.href = 'main.html';
};

const handleChangeInfo = () => {
  if (inputId.value && inputPw.value) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

loginForm.addEventListener('submit', handleLogin);

inputId.addEventListener('keyup', handleChangeInfo);
inputPw.addEventListener('keyup', handleChangeInfo);
