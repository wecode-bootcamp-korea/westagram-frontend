const idInput = document.getElementById("idInput");
const pwdInput = document.getElementById("pwdInput");
const inputElem = document.getElementsByTagName("input");
const loginBtnElem = document.getElementsByClassName("loginBtn")[0];

idInput.addEventListener("keyup", isInputValueOne);
pwdInput.addEventListener("keyup", isInputValueOne);

function isInputValueOne() {
  const idInPutValue = idInput.value;
  const pwdInputValue = pwdInput.value;
  if (idInPutValue.length >= 1 && pwdInputValue.length >= 1) {
    loginBtnElem.disabled = false;
    localStorage.clear();
    localStorage.setItem("id", idInput.value);
  } else {
    loginBtnElem.disabled = true;
  }
}
