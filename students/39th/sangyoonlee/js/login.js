const loginId = document.querySelector("#input-id");
const loginPw = document.querySelector("#input-pw");
const loginBtn = document.querySelector(".first-box__login-form__btn");

const opacityClass = "opacity";

let hasIdValue = false;
let hasPwValue = false;

function btnActivate() {
  if (hasIdValue && hasPwValue) {
    loginBtn.classList.remove(opacityClass);
  } else {
    loginBtn.classList.add(opacityClass);
  }
}

function handleBtnActivateById(event) {
  hasIdValue = event.target.value ? true : false;
  btnActivate();
}

function handleBtnActivateByPw(event) {
  hasPwValue = event.target.value ? true : false;
  btnActivate();
}

loginId.addEventListener("input", handleBtnActivateById);
loginPw.addEventListener("input", handleBtnActivateByPw);
