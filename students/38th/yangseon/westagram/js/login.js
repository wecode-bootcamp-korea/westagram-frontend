let login = document.getElementsByClassName("input-login")[0];
let password = document.getElementsByClassName("input-password")[0];
let button = document.getElementsByClassName("login-button")[0];

function onKeyUp() {
  let log = login.value;
  let pass = password.value;
  if (log.length > 0 && pass.length >= 6) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

login.addEventListener("keyup", onKeyUp);
password.addEventListener("keyup", onKeyUp);
