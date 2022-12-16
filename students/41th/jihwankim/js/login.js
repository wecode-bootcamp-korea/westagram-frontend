const loginId = document.querySelector(".login_id");
const loginPw = document.querySelector(".login_pw");
const loginBtn = document.querySelector(".login_btn");

function loginOnclick() {
  loginBtn.disabled = loginId.value && loginPw.value ? false : true;

  if (loginBtn.disabled === false) {
    loginBtn.style.cursor = "pointer";
    loginBtn.style.backgroundColor = "black";
  }
}

loginId.addEventListener("keyup", loginOnclick);
loginPw.addEventListener("keyup", loginOnclick);
