//로그인 버튼 활성화
const blueBtn = document.getElementsByClassName("log-btn")[0];
const keyEnter = document.getElementsByClassName("loginText")[0];

function btnClick(event) {
  event.preventDefault();
  location.href = "main.html";
}

function changeBtn(btnValid) {
  blueBtn.disabled = btnValid ? false : true;
  blueBtn.style.backgroundColor = btnValid ? "#0095f6" : "#C4E1FB";
  blueBtn.style.cursor = btnValid ? "pointer" : "default";
}

function checkLogin() {
  const inputName = document.querySelector("#name");
  const inputPassword = document.querySelector("#password");
  if (inputName.value.length > 0 && inputPassword.value.length > 0) {
    changeBtn(true);
  } else {
    changeBtn(false);
  }
}

//entry point
blueBtn.addEventListener("click", btnClick);
window.addEventListener("keyup", checkLogin);
