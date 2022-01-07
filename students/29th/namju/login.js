const inputAccount = document.getElementById("inputAccount");
const inputPassword = document.getElementById("inputPassword");
const btnLogin = document.getElementById("btnLogin");

const activateBtnLogin = () => {
  inputAccount.value.includes("@") && inputPassword.value.length >= 5
    ? (btnLogin.disabled = false)
    : (btnLogin.disabled = true);
};

const goToMainPage = () => {
  window.location.href = "./main.html";
};

const goToMainPageEnter = (e) => {
  e.key === "Enter" && btnLogin.disabled === false
    ? (window.location.href = "./main.html")
    : false;
};

inputAccount.addEventListener("keyup", activateBtnLogin);
inputPassword.addEventListener("keyup", activateBtnLogin);
btnLogin.addEventListener("click", goToMainPage);

inputAccount.addEventListener("keydown", goToMainPageEnter);
inputPassword.addEventListener("keydown", goToMainPageEnter);
