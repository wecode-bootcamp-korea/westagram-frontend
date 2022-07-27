const $loginForm = document.querySelector('.loginForm');
const $id = document.querySelector('.id');
const $pw = document.querySelector('.password');
const $loginBtn = document.querySelector('.loginBtn');

$loginForm.addEventListener('keyup', () => {
  if ($id.value.length >= 1 && $pw.value.length >= 1) {
    $loginBtn.disabled = false;
  } else {
    $loginBtn.disabled = true;
  }
});
