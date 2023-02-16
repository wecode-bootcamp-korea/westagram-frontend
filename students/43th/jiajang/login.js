let loginIdInput = document.querySelector(".id-input");
let loginPwInput = document.querySelector(".pw-input");
let loginBtn = document.querySelector(".login-btn");

function checkInput() {
  if (loginIdInput.value.length != 0 && loginPwInput.value.length != 0) {
    loginBtn.style.backgroundColor = "#5395E9";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

loginIdInput.addEventListener("keyup", checkInput);
loginPwInput.addEventListener("keyup", checkInput);
