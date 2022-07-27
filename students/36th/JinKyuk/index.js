const inputForm = document.querySelector(".inputForm");
const passwordInput = document.getElementById("pw-input");
const loginButton = document.getElementById("login-button");
/* console.log(inputForm[0]); */

function activateLogin() {
  const idValue = inputForm[0].value;
  const passWordValue = inputForm[1].value;
  const ableCondition = idValue.length > 0 && passWordValue.length > 0;
  const disableCondition = idValue.length === 0 || passWordValue.length === 0;

  if (disableCondition) {
    loginButton.disabled = true;
    loginButton.style.cssText = "background: #a4dcff; cursor: no-drop;";
  } else if (ableCondition) {
    loginButton.disabled = false;
    loginButton.style.cssText = "background: #0095f6; cursor: pointer;";
  }
}

inputForm.addEventListener("keyup", activateLogin);
