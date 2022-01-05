const inputAccount = document.getElementById("inputAccount");
const inputPassword = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogin");

const activateBtnLogin = () => {
  inputAccount.value && inputPassword.value
    ? btnLogin.classList.add("active")
    : btnLogin.classList.remove("active");
};

const goToMainPage = () => {
  if (btnLogin.classList[0] === "active") {
    window.location.href = "./main.html";
  }
};

inputAccount.addEventListener("keyup", activateBtnLogin);
inputPassword.addEventListener("keyup", activateBtnLogin);
btnLogin.addEventListener("click", goToMainPage);
