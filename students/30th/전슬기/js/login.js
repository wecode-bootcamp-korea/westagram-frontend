const loginForm = document.querySelector(".loginForm");
const inputId = document.querySelector("#loginId");
const inputPw = document.querySelector("#loginPassword");
const btnLogin = document.querySelector("#loginButton");

// function isLoginValid() {
//   (inputId.value && inputPw.value) 불리언 값  반환
// }

function activeBtn() {
  btnLogin.style.backgroundColor =
    inputId.value && inputPw.value ? "#0084ff" : "#c5e1fb";
  btnLogin.disabled = inputId.value && inputPw.value ? false : true;
  btnLogin.style.cursor =
    inputId.value && inputPw.value ? "pointer" : "default";
}

function moveToMain(event) {
  event.preventDefault();
  location.href = "main.html";
}

loginForm.addEventListener("input", activeBtn);
btnLogin.addEventListener("click", moveToMain);
