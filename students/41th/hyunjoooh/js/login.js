const loginBtn = document.getElementsByClassName("login_btn")[0];
const inputId = document.getElementsByClassName("id")[0];
const inputPw = document.getElementsByClassName("pw")[0];

const onKeyUpLogin = (e) => {
  inputId.value.length && inputPw.value.length > 3
    ? ((loginBtn.style.backgroundColor = "rgb(74, 116, 240)"),
      (loginBtn.style.cursor = "pointer"))
    : ((loginBtn.style.backgroundColor = "rgb(184, 199, 244)"),
      (loginBtn.style.cursor = "none"));
  return;
};

const loginBtnActiveColorChange = (e) => {
  loginBtn.style.backgroundColor = "rgb(38, 76, 187)";
};

const loginBtnClickColorChange = (e) => {
  loginBtn.style.backgroundColor = "rgb(74, 116, 240)";
};

inputPw.addEventListener("keyup", onKeyUpLogin);
inputId.addEventListener("keyup", onKeyUpLogin);
loginBtn.addEventListener("mousedown", loginBtnActiveColorChange);
loginBtn.addEventListener("mouseup", loginBtnClickColorChange);
