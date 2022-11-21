//이벤트 위임(+이벤트 버블링, 이벤트 캡쳐링)

// 함수는 각 각 독립적인 역할을 해야함. (단일체계원칙) --> 확장성, 유지 보수 가능
// Eventlistener들을 마지막에 init 안에 정리하여 코드 실행. - entry point가 될 수 있게
// isValidId / isValidPw  - checkId/Pw  value.length > 0 ? true : false ;
// isValidPw - value.includes("@")  ? ture : false;
// boolean naming convention : 'is' or 'has'로 시작하는 name
// 3항연산자 사용할 것 --> 리엑트에서 무조건 사용.
// 3항 연산자도 중첩으로 코드 작성이 가능하나 가독성이 떨어지기 때문에 if/else문을 쓰는 것이 더 깔끔.
// not연산자 !isBtnValue

const inputId = document.getElementById("input_id");
const inputPwd = document.getElementById("input_pwd");
const loginButton = document.getElementById("login_btn");
// console.log(inputId);
// console.log(inputPwd);
// console.log(loginButton);

const validate = () => {
  let idValue = inputId.value;
  let pwValue = inputPwd.value;

  if (idValue.includes("@") && pwValue.length >= 5) {
    loginButton.disabled = false;
    loginButton.style.opacity = 1;
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.style.opacity = 0.3;
    loginButton.style.cursor = "default";
  }
};

const init = () => {
  inputId.addEventListener("keyup", validate);
  inputPwd.addEventListener("keyup", validate);
};

init();
