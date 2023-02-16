const loginInput = document.getElementsByTagName("input")[0];
const passwordInput = document.getElementsByTagName("input")[1];
const loginBtn = document.getElementsByClassName("logBtn")[0];

function active() {
  let loginlength = loginInput.value.length;
  let passwordlength = passwordInput.value.length;

  if ((loginlength && passwordlength) >= 1) {
    loginBtn.style.backgroundColor = "#39f";
  }

  console.log(loginlength > 0 && passwordlength > 0);
}

loginInput.addEventListener("keyup", active);
passwordInput.addEventListener("keyup", active);
