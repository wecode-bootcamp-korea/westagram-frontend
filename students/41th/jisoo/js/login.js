const idInput = document.getElementById("id_input");
const pwInput = document.getElementById("pw_input");
const loginBtn = document.querySelector(".login_btn");

const validateId = () => {
  if (idInput.value.length >= 1 && idInput.value.includes("@")) {
    return true;
  }
};

const validatePw = () => {
  if (pwInput.value.length >= 5) {
    return true;
  }
};

const activateLoginBtn = () => {
  validateId() && validatePw()
    ? (loginBtn.disabled = false)
    : (loginBtn.disabled = true);
};

const moveToMain = () => {
  location.href = "../jisoo/main.html";
};

idInput.addEventListener("keyup", activateLoginBtn);
pwInput.addEventListener("keyup", activateLoginBtn);
loginBtn.addEventListener("click", moveToMain);
