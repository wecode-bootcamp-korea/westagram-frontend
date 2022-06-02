const USER_ID = document.querySelector('.userName');
const USER_PW = document.querySelector('.userPassword');
const LOGIN_BUTTON = document.querySelector('.loginButton');

// keyup 이벤트시 enabledButton함수 실행
USER_ID.addEventListener('keyup', enabledButton);
USER_PW.addEventListener('keyup', enabledButton);


// input에 입력되는 값을 보려면 e.target.value
// 이벤트 객체의 프로퍼티
function enabledButton() {
  if (USER_ID.value && USER_PW.value) {
    LOGIN_BUTTON.disabled = false;
  } else LOGIN_BUTTON.disabled = true;
}

