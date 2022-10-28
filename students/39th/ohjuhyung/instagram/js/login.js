const inputId = document.querySelector(".id");
const inputPw = document.querySelector(".password");
const loginBtn = document.querySelector(".loginBtn");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("keyup", (event) => {
  if (inputId.value.length >= 5 && inputPw.value.length >= 10) {
    loginBtn.style.backgroundColor = "#0095f6";
  }
});

loginForm.addEventListener("keyup", (event) => {
  if (inputId.value.length >= 1 || inputPw.value.length >= 1) {
    inputPw.style.color = "black";
    inputId.style.color = "black";
  }
});
