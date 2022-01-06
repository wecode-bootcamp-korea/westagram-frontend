const inputAccount = document.getElementById("inputAccount");
const inputPassword = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogin");

// const activateBtnLogin = () => {
//   inputAccount.value && inputPassword.value
//     ? (btnLogin.disabled = false)
//     : (btnLogin.disabled = true);
// };

const activateBtnLogin = () => {
  inputAccount.value.includes("@") && inputPassword.value.length >= 5
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
};

const goToMainPage = () => {
  window.location.href = "./main.html";
};

inputAccount.addEventListener("keyup", activateBtnLogin);
inputPassword.addEventListener("keyup", activateBtnLogin);
btnLogin.addEventListener("click", goToMainPage);
