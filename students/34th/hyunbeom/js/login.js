const loginForm = document.querySelector(".login-form");
const id = document.querySelector(".login-form__id");
const password = document.querySelector(".login-form__password");
const button = document.querySelector(".login-form__btn");

function btnHandler() {
  const idValue = id.value;
  const passwordValue = password.value;

  if (idValue.indexOf("@") >= 0 && passwordValue.length >= 5) {
    button.style.backgroundColor = "#9ac9f4";
    button.disabled = false;
  } else if (!idValue || passwordValue.length < 5) {
    button.style.backgroundColor = "#c4e0fb";
    button.disabled = true;
  }
}

loginForm.addEventListener("keyup", btnHandler);
