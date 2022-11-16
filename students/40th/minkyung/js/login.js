const inputId = document.querySelector("#user-id");
const inputPassword = document.querySelector("#user-password");
const loginBtn = document.querySelector("#login_btn");

function loginActivate() {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    loginBtn.disabled = false;
    loginBtn.style.cursor = "pointer";
    loginBtn.style.opacity = 1;
  } else {
    loginBtn.disabled = true;
    loginBtn.style.cursor = "default";
    loginBtn.style.opacity = 0.5;
  }
}

inputId.addEventListener("keyup", loginActivate);
inputPassword.addEventListener("keyup", loginActivate);
