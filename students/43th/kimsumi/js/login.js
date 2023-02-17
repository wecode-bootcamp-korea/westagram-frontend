const loginForm = document.querySelector(".login_form");
const user = document.querySelector('.inp_user');
const password = document.querySelector('.inp_psassword');
const loginButton = document.querySelector('.btn_login');

function westaBtn() {
  if (user.value && password.value) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

function westaLogin(event)  {
  westaBtn()
}
user.addEventListener("keyup", westaLogin);
password.addEventListener("keyup", westaLogin);

function westaSubmit(event) {
  event.preventDefault(); // 새로고침 방지
  if (user.value.indexOf("@") === -1) {
    alert("올바른 이메일 주소를 사용해주세요.");
  } else if (password.value.length < 8) {
    alert("최소 8자 이상의 올바른 비밀번호를 사용해주세요.");
  }
  user.value = ""; // 텍스트상자 안의 텍스트 초기화
  password.value = ""; // 텍스트상자 안의 텍스트 초기화
  westaBtn()
}
loginForm.addEventListener("submit", westaSubmit);