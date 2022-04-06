const loginInputs = document.querySelector(".login-inputs");
const idInput = document.querySelector(".input-id");
const pwInput = document.querySelector(".input-pw");
const loginBtn = document.querySelector(".login-button");

loginInputs.addEventListener("keyup", () => {
  const isIncludeAt = idInput.value.includes("@");
  const isPwMoreThanFive = pwInput.value.length >= 5;

  loginBtn.disabled = isIncludeAt && isPwMoreThanFive ? false : true;
});
