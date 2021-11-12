const allForm = document.querySelector('.login-form');
const loginForm = document.querySelector('.id-form');
const passwordForm = document.querySelector('.password-form');
const submitButton = document.querySelector('.submit-button');

const POINTER_CURSOR = 'non-disabled';

function handleLoginAction() {
  if (loginForm.value && passwordForm.value && loginForm.value.includes('@') && passwordForm.value.length >= 5) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = '#0095F6';
    submitButton.classList.add(POINTER_CURSOR);
  } else if (!loginForm.value || !passwordForm.value) {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = '#b5d7fa';
      submitButton.classList.remove(POINTER_CURSOR);
  }
}
allForm.addEventListener('keydown', handleLoginAction);

function replacePage() {
  loginForm.value = '';
  passwordForm.value = '';
  submitButton.disabled = false;
  location.href = 'main.html';
}
allForm.addEventListener('submit', replacePage);