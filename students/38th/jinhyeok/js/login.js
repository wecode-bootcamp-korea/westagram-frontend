const userId = document.getElementById("userId");
const userPassword = document.getElementById("userPassword");
const loginButton = document.getElementById("loginButton");

//아이디 비밀번호 체크
function validationCheck() {
  userId.value.includes("@") && userPassword.value.length > 5
    ? (loginButton.disabled = false)
    : (loginButton.disabled = true);
}

userId.addEventListener("keypress", validationCheck);
userPassword.addEventListener("keypress", validationCheck);
