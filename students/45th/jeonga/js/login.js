const loginId = document.querySelector(".login-id");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-button");
const loginIdWrapper = document.querySelector(".login-id__wrapper");
const loginPwWrapper = document.querySelector(".login-password__wrapper");

const checkValid = () => {
  const check = /\s+@\s+/;
  let result = check.test(loginId.value);
  if (result === false) {
    const emailError = document.createElement("span");
    emailError.className = "login-id__error";
    emailError.innerHTML = "@를 포함해주세요";
    emailError.style.color = "red";
    emailError.style.fontSize = "12px";
    loginIdWrapper.appendChild(emailError);
  }
  if (loginPassword.value.length < 5) {
    const pwError = document.createElement("span");
    pwError.className = "login-password__error";
    pwError.innerHTML = "비밀번호는 5글자 이상이어야 합니다.";
    pwError.style.color = "red";
    pwError.style.fontSize = "12px";
    loginPwWrapper.appendChild(pwError);
  }
  loginBtn.removeEventListener("click", checkValid);
};

const mouseEnter = () => {
  loginBtn.style.backgroundColor = "#1877f2";
};

const mouseLeave = () => {
  loginBtn.style.backgroundColor = "#0095f6";
};

const buttonOn = () => {
  loginBtn.style.backgroundColor = "#0095f6";
  loginBtn.classList.add("blue");
  loginBtn.addEventListener("mouseenter", mouseEnter);
  loginBtn.addEventListener("mouseleave", mouseLeave);
  loginBtn.addEventListener("click", checkValid);
};

const buttonOff = () => {
  loginBtn.style.backgroundColor = "#c4e1fb";
  loginBtn.classList.remove("blue");
  loginBtn.removeEventListener("mouseenter", mouseEnter);
  loginBtn.removeEventListener("mouseleave", mouseLeave);
};

const buttonPaint = () => {
  loginId.value.length > 0 && loginPassword.value.length > 0
    ? buttonOn()
    : buttonOff();
};

loginId.addEventListener("keyup", buttonPaint);
loginPassword.addEventListener("keyup", buttonPaint);
