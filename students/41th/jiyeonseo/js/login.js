const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.querySelector(".loginBtn");

function onKeyUp() {
  idInput.value !== "" && pwInput.value !== ""
    ? (loginBtn.style.backgroundColor = "#033b71")
    : (loginBtn.style.backgroundColor = "#c5e1fb");
}

idInput.addEventListener("keyup", onKeyUp);
pwInput.addEventListener("keyup", onKeyUp);
