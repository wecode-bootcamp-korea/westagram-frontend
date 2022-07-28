const usernameInput = document.getElementById("input_username");
const passwordInput = document.getElementById("input_password");
const loginBtn = document.getElementById("login_btn");

/*
[삼항 조건 연산자 없이 if 구문만으로 구현]
passwordInput.addEventListener("keyup", () => {
  if (usernameInput.value.length > 0 && passwordInput.value.length > 0) {
    loginBtn.disabled = false;
    loginBtn.classList.remove("login_btn-disabled");
    loginBtn.classList.add("login_btn-abled");
  } else {
    loginBtn.disabled = true;
  }
});
*/

const loginAbled = () => {
  loginBtn.classList.remove("login_btn-disabled");
  loginBtn.classList.add("login_btn-abled");
  loginBtn.disabled = false;
};

const loginDisabled = () => {
  loginBtn.disabled = true;
};

const loginPossible = () => {
  usernameInput.value.length > 0 && passwordInput.value.length > 0
    ? loginAbled()
    : loginDisabled();
};

passwordInput.addEventListener("keyup", loginPossible);
