const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.getElementById("loginBtn");

function lgnMatch() {
  if (
    idInput.value.length >= 5 &&
    pwInput.value.length >= 5 &&
    idInput.value.includes("@")
  ) {
    loginBtn.style.backgroundColor = "rgb(0, 149, 246)";
  } else {
    loginBtn.style.backgroundColor = "rgba(var(--d69, 0, 149, 246), 0.3)";
  }
}

function idTyping() {
  if (inInput.value.length >= 1) {
  }
}

idInput.addEventListener("keyup", lgnMatch);
pwInput.addEventListener("keyup", lgnMatch);
