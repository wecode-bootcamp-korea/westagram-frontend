const user_id = document.getElementById("user_id");
const user_pw = document.getElementById("user_pw");
const login_btn = document.getElementsByClassName("btn-login")[0];

user_id.addEventListener("keyup", loginActive);
user_pw.addEventListener("keyup", loginActive);
login_btn.addEventListener("click", loginValidation);

const pwString = "@";

function loginActive() {
  if (user_id.value && user_pw.value) {
    login_btn.disabled = false;
    login_btn.classList.add("active");
  } else {
    login_btn.disabled = true;
    login_btn.classList.remove("active");
  }
}

function loginValidation() {
  if (user_pw.value.length < 5 && !user_id.value.includes(pwString)) {
    alert("아이디에 @ 포함하고 비밀번호는 다섯글자 이상인지 확인해주세요");
  }
}
