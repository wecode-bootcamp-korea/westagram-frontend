const inputId = document.querySelector("#loginId");
const inputPw = document.querySelector("#loginPassword");
const btnLogin = document.querySelector("#loginButton");

// function activeBtn() {
//   if (!inputId.value || !inputPw.value) {
//     btnLogin.style.backgroundColor = "#c5e1fb";
//     btnLogin.disabled = true;
//   } else {
//     btnLogin.style.backgroundColor = "#0084ff";
//     btnLogin.disabled = false;
//   }
// }

function inactiveBtn() {
  btnLogin.style.backgroundColor = "#c5e1fb";
  btnLogin.disabled = true;
}

function activeBtn() {
  btnLogin.style.backgroundColor = "#0084ff";
  btnLogin.disabled = false;
}

function moveToMain(event) {
  event.preventDefault();
  location.href = "main.html";
}

// window.addEventListener("keyup", activeBtn);
window.addEventListener("keyup", () => {
  inputId.value && inputPw.value ? activeBtn() : inactiveBtn();
});

btnLogin.addEventListener("click", moveToMain);
