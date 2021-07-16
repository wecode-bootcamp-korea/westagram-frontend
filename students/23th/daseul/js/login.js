const inputIdPw = document.querySelector('.login-input');
const idInput = document.querySelector('.login-input input[type=text]');
const pwInput = document.querySelector('.login-input input[type=password]');
const loginBtn = document.querySelector('.login-btn button');

inputIdPw.addEventListener('keyup', function(e){
  (pwInput.value && idInput.value) ? loginBtn.classList.add('btnColorToBlue') : loginBtn.classList.remove('btnColorToBlue');
});

loginBtn.addEventListener('click', function(e){
  if(idInput.value.includes('@') == false) {
    alert('@가 포함되어야 합니다.');
  } else if (pwInput.value.length <= 5) {
    alert('비밀번호는 5글자 이상이어야 합니다.');
  }
})
