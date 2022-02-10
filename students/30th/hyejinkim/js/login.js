const idInput = document.querySelector("#id");
const pwInput = document.querySelector("#password");
const loginBtn = document.querySelector(".submit-button");

function btnAbled() {
  if (idInput.value && pwInput.value) {
    loginBtn.disabled = false;
    loginBtn.classList.add("submit-button-after");
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("submit-button-after");
  }
}

idInput.addEventListener("keyup", btnAbled);
pwInput.addEventListener("keyup", btnAbled);
