const $loginForm = document.querySelector('.loginForm');
const $id = document.querySelector('.id');
const $pw = document.querySelector('.password');
const $loginBtn = document.querySelector('.loginBtn');

const isValidEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

$loginForm.addEventListener('keyup', () => {
  $id.value.indexOf('@') !== -1 && $pw.value.length >= 5
    ? ($loginBtn.disabled = false)
    : ($loginBtn.disabled = true);
});

$loginForm.addEventListener('submit', e => {
  e.preventDefault();

  !isValidEmail($id.value)
    ? alert('ID가 잘못된 형식입니다.')
    : alert('로그인 성공!');
});
