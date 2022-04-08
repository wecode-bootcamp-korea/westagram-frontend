const Id = document.querySelector(".inputId");
const Pwd = document.querySelector(".inputPwd");
const loginbtn = document.querySelector(".login_btn");

Id.addEventListener("keyup", active);
Pwd.addEventListener("keyup", active);

function active() {
  const idValue = Id.value;
  const pwdValue = Pwd.value;
  if (idValue.indexOf("@") != -1 && pwdValue.length >= 5) {
    loginbtn.disabled = false;
  } else {
    loginbtn.disabled = true;
  }
}
