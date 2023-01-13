const inputId = document.getElementById("we-id");
const inputPw = document.getElementById("we-password");
const loginBtn = document.getElementById("login-button");

function color() {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    loginBtn.style.backgroundColor = "#0678FA";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#87CEEB";
    loginBtn.disabled = true;
  }
}

inputId.addEventListener("keyup", color);
inputPw.addEventListener("keyup", color);
