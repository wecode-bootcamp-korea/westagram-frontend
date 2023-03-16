const inputId = document.getElementsByClassName("input_id")[0];
const inputPw = document.getElementsByClassName("input_pw")[0];
const btnLogin = document.getElementsByClassName("btn_login_on")[0];

function btnOn() {
  if (inputId.value.length > 0 && inputPw.value.length > 0) {
    btnLogin.disabled = false;
    btnLogin.classList.remove("btn_login_off");
  } else {
    btnLogin.disabled = true;
    btnLogin.classList.add("btn_login_off");
  }
}

inputId.addEventListener("keyup", btnOn);
inputPw.addEventListener("keyup", btnOn);

btnLogin.addEventListener("click", () => {
  if (inputId.value.indexOf("@") >= 1 && inputPw.value.length > 4) {
    alert("pass");
  } else {
    alert("일치하지 않음");
  }
});
