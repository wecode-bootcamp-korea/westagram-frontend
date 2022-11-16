const idElement = document.getElementsByClassName("idBox")[0];
const pwdElement = document.getElementsByClassName("pwdBox")[0];
function login() {
  if (idElement.value && pwdElement.value) {
    document.getElementsByClassName("loginBtn")[0].classList.add("enabled");
  } else {
    document.getElementsByClassName("loginBtn")[0].classList.remove("enabled");
  }
}
idElement.addEventListener("keyup", login);
pwdElement.addEventListener("keyup", login);
