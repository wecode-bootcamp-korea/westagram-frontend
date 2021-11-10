const allForm = document.querySelector('.login-form');
const loginForm = document.querySelector('.id-form');
const passwordForm = document.querySelector('.password-form');
const submitButton = document.querySelector('.submit-button');

const POINTER_CURSOR = 'non-disabled';

function handleLoginAction() {
  if (loginForm.value && passwordForm.value) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '#0095F6';
    submitButton.classList.add(POINTER_CURSOR);
  }
}
allForm.addEventListener('keydown', handleLoginAction);

function handleLogoutAction() {
  if (!loginForm.value || !passwordForm.value) {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = '#b5d7fa';
    submitButton.classList.remove(POINTER_CURSOR);
  }
}
allForm.addEventListener('keydown', handleLogoutAction);

function replacePage() {
  loginForm.value = '';
  passwordForm.value = '';
  location.href = 'main.html';
}
submitButton.addEventListener('click', replacePage);