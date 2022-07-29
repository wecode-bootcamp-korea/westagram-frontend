const inputForm = document.querySelector(".inputForm");
const passwordInput = document.getElementById("pw-input");
const loginButton = document.getElementById("login-button");

function activateLogin() {
  const idValue = inputForm[0].value;
  const passWordValue = inputForm[1].value;
  const isValidate = idValue.indexOf("@") !== -1 && passWordValue.length >= 5;

  if (isValidate) {
    loginButton.disabled = false;
    loginButton.style.cssText = "background: #0095f6; cursor: pointer;";
  } else {
    loginButton.disabled = true;
    loginButton.style.cssText = "background: #a4dcff; cursor: no-drop;";
  }
}

inputForm.addEventListener("keyup", activateLogin);
