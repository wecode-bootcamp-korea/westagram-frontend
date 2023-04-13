// 변수
const id = document.querySelector(`#id`);
const pw = document.querySelector(`#pw`);
const form = document.querySelector(`form`);
const loginButton = document.querySelector(`#loginButton`);

// 실행
form.addEventListener(`click`, e => e.preventDefault());  // submit 새로고침 방지

form.addEventListener(`keyup`, () => {  // id, pw 입력
  if (id.value.length !== 0 && pw.value.length !== 0) {
    loginButton.style.backgroundColor = `#3C9BF2`;
    loginButton.style.cursor = `pointer`;
  } else {
    loginButton.style.backgroundColor = `#C4E1FB`;
    loginButton.style.cursor = null;
  }
});

loginButton.addEventListener(`click`, () => loginButton.style.cursor === `pointer` ? alert(`` + // 로그인 정보 확인
  `로그인 전송
    id: ${id.value}
    pw: ${pw.value}
  `) : null
);