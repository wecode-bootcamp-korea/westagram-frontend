const inputId = document.querySelector("#id-input");
const inputPassword = document.querySelector("#password-input");
const button = document.querySelector("#login");

const POINTER = "pointer";
const KEYUP = "keyup";

function loginBtn(e) {
  e.preventDefault();
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  // login success
  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.cursor = POINTER;
    button.setAttribute("style", "opacity:1;");
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#bfdffd";
  }
}

inputPassword.addEventListener(KEYUP, loginBtn);
