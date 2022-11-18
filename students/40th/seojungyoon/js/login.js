const inputId = document.querySelector(".id");
const inputPassword = document.querySelector(".password");
const button = document.querySelector(".button");

console.log(inputId, inputPassword, button);

const idValue = inputId.value;
const passwordValue = inputPassword.value;

function loginBtnColor() {
  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.backgroundColor = "#1877F2";
    button.style.cursor = "pointer";
  } else {
    button.disabled = true;
    button.style.backgroundColor = "#AAC9FF";
  }
}

inputId.addEventListener("keyup", loginBtnColor);
inputPassword.addEventListener("keyup", loginBtnColor);
