const userId = document.querySelector(".login-box--login-form__userID");
const userPswd = document.querySelector(".login-box--login-form__pswd");
const loginBtn = document.querySelector(".login-box--login-form__btn");

function btnEable() {
  if (userId.value !== "" && userPswd.value !== "") {
    console.log(userId.value);
    console.log(userPswd.value);
    loginBtn.removeAttribute("disabled");
  }
}

userId.addEventListener("input", btnEable);
userPswd.addEventListener("input", btnEable);
