const loginInput = document.getElementsByTagName("input")[0];
const passwordInput = document.getElementsByTagName("input")[1];
const loginBtn = document.getElementsByClassName("logBtn")[0];

function active() {
  let loginValue = loginInput.value;
  let passwordValue = passwordInput.value;

  if (loginValue.indexOf("@") > -1 || passwordValue.length >= 5) {
    loginBtn.style.backgroundColor = "#39f";
  } else {
    loginBtn.style.backgroundColor = "#67b6fa";
  }
}

loginInput.addEventListener("keyup", active);
passwordInput.addEventListener("keyup", active);
