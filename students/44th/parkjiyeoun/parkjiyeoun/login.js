const inputId = document.getElementsByClassName("input_id")[0];
const inputPw = document.getElementsByClassName("input_pw")[0];
const btnLogin = document.getElementsByClassName("btn_login")[0];

function checkValue() {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    btnLogin.classList.remove("btn_login_off");
  } else {
    btnLogin.classList.add("btn_login_off");
  }
}

inputId.addEventListener("keyup", checkValue);
inputPw.addEventListener("keyup", checkValue);
