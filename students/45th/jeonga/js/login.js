const loginId = document.querySelector(".login-id");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-button");

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
