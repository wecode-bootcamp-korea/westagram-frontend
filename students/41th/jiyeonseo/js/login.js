const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.querySelector(".loginBtn");

let idCheck = false;
let pwCheck = false;

function checkId() {
  idInput.value !== "" && idInput.value.includes("@")
    ? (idCheck = true)
    : (idCheck = false);
  activeButton();
}

function checkPw() {
  pwInput.value.length >= 5 ? (pwCheck = true) : (pwCheck = false);
  console.log(pwCheck);
  activeButton();
}

function activeButton() {
  idCheck === true && pwCheck === true
    ? (loginBtn.style.backgroundColor = "#033b71")
    : (loginBtn.style.backgroundColor = "#c5e1fb");
}

idInput.addEventListener("keyup", checkId);
pwInput.addEventListener("keyup", checkPw);
