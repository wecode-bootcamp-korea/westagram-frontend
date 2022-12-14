const idInput = document.getElementById("idInput");
const pwInput = document.getElementById("pwInput");
const loginBtn = document.querySelector(".loginBtn");

const disabledLogIn = () => {
  idInput.value.length >= 1 && pwInput.value.length >= 1
    ? (loginBtn.disabled = false)
    : (loginBtn.disabled = true);
};

const moveToMain = () => {
  location.href = "../jisoo/main.html";
};

idInput.addEventListener("keyup", disabledLogIn);
pwInput.addEventListener("keyup", disabledLogIn);
loginBtn.addEventListener("click", moveToMain);
