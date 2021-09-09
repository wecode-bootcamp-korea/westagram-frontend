const id = document.querySelector('.login__id');
const password = document.querySelector('.login__password');
const btn = document.querySelector('.login__button');

let isId = false,
  isPassword = false;

const getInput = (e) => {
  // 아이디 & 비번 값 체크
  if (e.target.className === 'login__id') isId = e.target.value ? true : false;
  if (e.target.className === 'login__password') isPassword = e.target.value ? true : false;

  // 활성화 & 배경 컬러 변경
  if (isId && isPassword) {
    btn.disabled = false;
    btn.style.backgroundColor = '#376088';
  } else {
    btn.disabled = 'disabled';
    btn.style.backgroundColor = '#c4e1fb';
  }
};
id.addEventListener('input', getInput);
password.addEventListener('input', getInput);
