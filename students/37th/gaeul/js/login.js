// 이벤트 위임 + (이벤트 버블링, 이벤트 캡쳐링)
// const loginForm = document.getElementsByClassName('loginForm')[0];
// getElementsByClassName : 배열 형태
// getElementById = 문서 전체의 유일값

const nameEmail = document.querySelector(".nameEmail");
const passWord = document.querySelector(".passWord");
const loginBtn = document.querySelector(".login-btn");

function loginActive() {
  const idValue = nameEmail.value;
  const pwValue = passWord.value;

  if(idValue.includes('@') && (pwValue.length >= 5)) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = '#0095f6';
    loginBtn.style.cursor = 'pointer';
  } else {
    loginBtn.disabled = true;
    loginBtn.style.cursor = 'default';
    loginBtn.style.backgroundColor = '#b2dffc';
  }
}

const init = () => {
  nameEmail.addEventListener('keyup', loginActive);
  passWord.addEventListener('keyup', loginActive);
}

init();


