const loginId = document.querySelector('.login__id');
const loginPw = document.querySelector('.login__pw');
const loginBtn = document.querySelector('.login__btn');

const validation = document.querySelector('.validation');

function validationTest() {
  const id = loginId.value;
  const pw = loginPw.value;
  if (id.includes('@') && pw.length > 4) {
    validation.innerHTML = '';
    loginBtn.classList.add('btn__active');
  } else {
    loginBtn.classList.remove('btn__active');
    validation.innerHTML = `사용자의 이름과 비밀번호를 확인하고<br>다시 시도하세요.`;
  }
}

loginPw.addEventListener('keyup', () => {
  validationTest();
});
