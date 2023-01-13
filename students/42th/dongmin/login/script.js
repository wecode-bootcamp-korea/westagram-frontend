class LoginBtn {
  constructor(btn) {
    this.btn = btn;
    this.btn.style = btn.style;
  }

  loginBtnReady(inputId, inputPw) {
    if (inputId.value !== "" && inputPw.value !== "") {
      this.btn.style.backgroundColor = "rgb(80, 190, 250)";
    }
    if (inputId.value === "" || inputPw.value === "") {
      this.btn.style.backgroundColor = "rgb(196, 225, 250)";
    }
  }
}

const loginBtn = new LoginBtn(document.getElementsByClassName("login-btn")[0]);

document.addEventListener("keyup", function (e) {
  const inputId = document.getElementsByClassName("input-id")[0];
  const inputPw = document.getElementsByClassName("input-pw")[0];
  loginBtn.loginBtnReady(inputId, inputPw);
});
