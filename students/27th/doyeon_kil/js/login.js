const idContainer = document.getElementById("id");
const pwContainer = document.getElementById("pw");
const buttonAbler = document.getElementById("login-button");

let idCheck = false;
let pwCheck = false;

idContainer.addEventListener("keyup", () => {
  const regex = /[0-9a-zA-z-_.]*@[0-9a-zA-z-_.]/g;

  idCheck = idContainer.value.match(regex) != null ? true : false;
  buttonAbler.disabled = !(idCheck && pwCheck);
});

pwContainer.addEventListener("keyup", () => {
  pwCheck = pwContainer.value.length > 4 ? true : false;
  buttonAbler.disabled = !(idCheck && pwCheck);
});
