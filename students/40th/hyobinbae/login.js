// const loginBtnJs = document.getElementsByClassName("loginBtn")[0];

const inputId = document.getElementById("UserId").value;
const inputPw = document.getElementById("PW").value;

function disabledBtn() {
  if (inputId.length >= 1 && inputPw.length >= 1) {
    document.getElementsByClassName("disabled") == false;
    return (loginBtn.style.backgroundColor = "rgb(42, 148, 255)");
  } else if (inputId.length < 1 || inputPw.length < 1) {
    document.getElementsByClassName("disabled") == true;
  }
}

disabledBtn();
