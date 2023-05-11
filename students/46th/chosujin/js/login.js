const inputId = document.querySelector(".id");
const inputPw = document.querySelector(".password");
const buttonId = document.querySelector(".buttonBox");

function loginButton() {
  if (
    inputId.value.length > 0 &&
    inputId.value.includes("@") &&
    inputPw.value.length >= 5
  ) {
    buttonId.style.backgroundColor = "blue";
  } else {
    buttonId.style.backgroundColor = "skyblue";
  }
}

inputId.addEventListener("keyup", loginButton);
inputPw.addEventListener("keyup", loginButton);
