const idContainer = document.getElementById("id");
const pwContainer = document.getElementById("pw");
const buttonAbler = document.getElementById("login-button");

let idCheck = false;
let pwCheck = false;

idContainer.addEventListener("keyup", () => {
  idCheck = idContainer.value.length > 0 ? true : false;
  console.log("id", idCheck, idCheck && pwCheck);
  buttonAbler.disabled = !(idCheck && pwCheck);
});

pwContainer.addEventListener("keyup", () => {
  pwCheck = pwContainer.value.length > 0 ? true : false;
  console.log("pw", pwCheck, idCheck && pwCheck);
  buttonAbler.disabled = !(idCheck && pwCheck);
});
