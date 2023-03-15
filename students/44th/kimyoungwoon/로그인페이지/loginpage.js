const idInput = document.querySelector('#enterId');
const passwordInput = document.querySelector('#enterPassword');
const loginBtn = document.querySelector('button');

function enableLogin() {
  if (idInput.value && passwordInput.value) {
    loginBtn.classList.add('enable');
  } else {
    loginBtn.classList.remove('enable');
  }
}

idInput.addEventListener('input', enableLogin);
passwordInput.addEventListener('input', enableLogin);
