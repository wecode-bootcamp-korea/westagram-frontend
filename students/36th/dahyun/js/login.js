const $loginForm = document.querySelector('.loginForm');
const $id = document.querySelector('.id');
const $pw = document.querySelector('.password');
const $loginBtn = document.querySelector('.loginBtn');

$loginForm.addEventListener('keyup', () => {
  $id.value.length >= 1 && $pw.value.length >= 1
    ? ($loginBtn.disabled = false)
    : ($loginBtn.disabled = true);
});
