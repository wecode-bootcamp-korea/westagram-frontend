// 로그인 버튼 활성화 기능

// DOM
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginButton = document.querySelector(".login-button button");

usernameInput.addEventListener("keyup", activateLoginButton);
passwordInput.addEventListener("keyup", activateLoginButton);

// 버튼 활성화 함수
function activateLoginButton() {
  // id @포함, pw 5글자 이상 조건
  const loginInputValidation = usernameInput.value.includes("@") && passwordInput.value.trim().length >= 5 ;
  // 조건 충족시 버튼 활성화 & 버튼 컬러 변경(삼항조건문)
  loginButton.disabled = !loginInputValidation;
  loginButton.style.backgroundColor = loginInputValidation ? "#0995f6" : "";
  loginButton.style.cursor
}

// BOM (Browser Object Model)
loginButton.addEventListener("click", () => {
  window.alert("Hello World!")
});
