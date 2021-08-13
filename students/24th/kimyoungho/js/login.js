const id = document.getElementById('id');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const loginForm = document.getElementsByClassName('loginForm')[0];

loginForm.addEventListener('keyup', () => {
  if (id.value.length >= 1 && password.value.length >= 1) {
    loginButton.style.backgroundColor = '#0095F6';
    loginButton.disabled = false;
    loginButton.style.cursor = 'pointer';
  } else {
    loginButton.style.backgroundColor = '#C5E1FC';
    loginButton.style.cursor = 'default';
  }
});

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  loginCheck();
});

function loginCheck() {
  if (id.value.length <= 4 && id.value.length >= 15) {
    alert('아이디는 5자~15자 이내로 입력해주세요');
    id.focus();
  } else if (password.value.length <= 4 && password.value.length >= 15) {
    alert('비밀번호는 5자~15자 이내로 입력해주세요');
    password.focus();
  }
}
