// 변수
const id = document.querySelector(`#id`);
const pw = document.querySelector(`#pw`);
const form = document.querySelector(`form`);
const loginButton = document.querySelector(`#loginButton`);

// 함수
const okLogin = () => {
  if (id.value.length !== 0 && pw.value.length !== 0) {
    loginButton.style.backgroundColor = `#3C9BF2`;
    loginButton.style.cursor = `pointer`;
    // loginButton.click = alert(`로그인 시도`);
  } else {
    loginButton.style.backgroundColor = `#C4E1FB`;
    loginButton.style.cursor = null;
  }
};

// 실행
form.addEventListener(`click`, e => e.preventDefault());
id.addEventListener(`keyup`, okLogin);
pw.addEventListener(`keyup`, okLogin);
loginButton.addEventListener(`click`, () => loginButton.style.cursor === `pointer` ? alert(`
    로그인 전송
    id: ${id.value}
    pw: ${pw.value}
  `) : null
);