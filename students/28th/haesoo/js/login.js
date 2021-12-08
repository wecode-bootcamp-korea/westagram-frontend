const logInForm = document.querySelector(".login-form");
const loginId = document.querySelector(".login-form__id");
const loginPassword = document.querySelector(".login-form__password");
const loginButton = document.querySelector(".login-button");

logInForm.addEventListener("keyup", handleKeyup);

function handleKeyup(event) {
  const target = event.target;
  const inputClass = target.className;
  const isLoginId = "login-form__id";
  const isLoginPassword = "login-form__password";

  if (inputClass === isLoginId || inputClass === isLoginPassword) {
    if (loginId.value.length > 0 && loginPassword.value.length > 0) {
      loginButton.disabled = false;
    }
  }

  if (!loginButton.disabled) {
    loginButton.addEventListener("click", handleButtonClick);
  }
}

function handleButtonClick() {
  location.href = "./main.html";
}
