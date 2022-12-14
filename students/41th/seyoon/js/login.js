const loginForm = document.querySelector(".loginForm");
const idInput = document.querySelector(".user-id");
const pwdInput = document.querySelector(".user-pw");
const loginBtn = document.querySelector(".login-btn");

loginForm.addEventListener("keyup", () => {
  if (idInput.value && pwdInput.value) loginBtn.classList.add("btn-blue");
  else loginBtn.classList.remove("btn-blue");
});
