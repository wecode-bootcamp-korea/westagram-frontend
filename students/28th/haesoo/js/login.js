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
    if (loginId.value && loginPassword.value) {
      loginButton.disabled = false;
    }
  }

  if (!loginButton.disabled) {
    loginButton.addEventListener("click", handleButtonClick);
    pressEnterKey();
  }
}

function handleButtonClick() {
  goMainPage();
}

function pressEnterKey() {
  loginId.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      goMainPage();
    }
  });

  loginPassword.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      goMainPage();
    }
  });
}

function goMainPage() {
  location.href = "./main.html";
}
