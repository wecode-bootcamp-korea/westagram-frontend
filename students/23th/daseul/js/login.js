const inputIdPw = document.querySelector('.login-input');
const idInput = document.querySelector('.login-input input[type=text]');
const pwInput = document.querySelector('.login-input input[type=password]');
const loginBtn = document.querySelector('.login-btn button');

inputIdPw.addEventListener('keyup', function(e){
  (pwInput.value && idInput.value) ? loginBtn.classList.add('btnColorToBlue') : loginBtn.classList.remove('btnColorToBlue');
})
