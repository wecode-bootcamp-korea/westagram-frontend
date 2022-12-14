const idInput = document.getElementById("id_input");
const pwInput = document.getElementById("pw_input");
const loginBtn = document.querySelector(".login_btn");

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
