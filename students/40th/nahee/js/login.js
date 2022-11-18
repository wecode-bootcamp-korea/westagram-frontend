const idElement = document.getElementsByClassName("idBox")[0];
const pwdElement = document.getElementsByClassName("pwdBox")[0];
const loginButton = document.getElementsByClassName("loginBtn")[0];
function login() {
  const allValue = idElement.value && pwdElement.value;
  allValue ? (loginButton.disabled = false) : (loginButton.disabled = true);
}

function newPage() {
  window.open("main.html");
}

function loginValidation() {
  idElement.value.includes("@") && pwdElement.value.length >= 5
    ? newPage()
    : alert("아이디, 비밀번호를 확인해주세요.");
}

idElement.addEventListener("input", login);
pwdElement.addEventListener("keyup", login);
loginButton.addEventListener("click", loginValidation);
