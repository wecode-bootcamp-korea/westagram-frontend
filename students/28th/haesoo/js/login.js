// 로그인 아이디 인풋에서는 아이디 관련 validation 검사
// 패스워드 인풋에서는 비밀번호 관련 validation 검사
// 두 개 다 검사 통과하면 disalbed 해제

const loginForm = document.querySelector(".login-form");
const loginId = document.querySelector(".js-id");
const loginPassword = document.querySelector(".js-password");
const loginButton = document.querySelector(".login-button");
const validIdMessage = document.querySelector(".valid-id-message");
const validPwMessage = document.querySelector(".valid-password-message");

let isIdValid = false;
let isPasswordValid = false;
let isValid = false;

loginForm.addEventListener("submit", handleSubmit);
loginId.addEventListener("keyup", handleCheckIdValid);
loginPassword.addEventListener("keyup", handleCheckPwValid);

function handleCheckIdValid(event) {
  const id = event.target.value;

  if (!id.includes("@")) {
    loginId.style.color = "red";
    validIdMessage.classList.remove("hide");
    validIdMessage.classList.add("show");
    isIdValid = false;
  } else {
    loginId.style.color = "blue";
    validIdMessage.classList.add("hide");
    validIdMessage.classList.remove("show");
    isIdValid = true;
  }

  onLoginButton();
}

function handleCheckPwValid(event) {
  const password = event.target.value;

  if (password.length < 12) {
    validPwMessage.classList.remove("hide");
    validPwMessage.classList.add("show");
    isPasswordValid = false;
  } else {
    validPwMessage.classList.add("hide");
    validPwMessage.classList.remove("show");
    isPasswordValid = true;
  }

  onLoginButton();
}

function onLoginButton() {
  if (isIdValid && isPasswordValid) {
    loginButton.disabled = false;
    isValid = true;
    return;
  } else {
    loginButton.disabled = true;
    isValid = false;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (isValid) {
    location.href = "/students/28th/haesoo/main.html";
  } else {
    alert("아이디와 비밀번호를 확인해주세요.");
  }
}
