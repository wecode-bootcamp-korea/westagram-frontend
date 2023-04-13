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

loginButton.addEventListener(`click`, () => { // 로그인 전송

  if (loginButton.style.cursor === `pointer`) {

    let exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/; // 알파벳+숫자@알파벳+숫자.알파벳+숫자

    !(exptext.test(id.value)) ? alert("이메일형식이 올바르지 않습니다.") :
      pw.value.length < 5 ? alert("비밀번호 길이가 짧습니다.") :
        alert(`
          로그인 전송
          id: ${id.value}
          pw: ${pw.value}
    `);
  }

});
