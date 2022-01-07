const inputId = document.querySelector(".login-id");
const inputPassword = document.querySelector(".login-password");
const button = document.querySelector(".login-btn");

function loginBtn() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#325aa8";
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "rgba(105, 155, 224, 0.5)";
  }
}

inputId.addEventListener("keyup", loginBtn);
inputPassword.addEventListener("keyup", loginBtn);
