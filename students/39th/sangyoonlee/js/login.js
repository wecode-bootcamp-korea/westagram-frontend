const loginId = document.querySelector("#input-id");
const loginPw = document.querySelector("#input-pw");
const loginBtn = document.querySelector(".first-box__login-form__btn");

const opacityClass = "opacity";

let isIdVaild = false;
let isPwVaild = false;
let allVaild = false;

function btnActivate() {
  if (isIdVaild && isPwVaild) {
    loginBtn.classList.remove(opacityClass);
    allVaild = true;
  } else {
    loginBtn.classList.add(opacityClass);
    allVaild = false;
  }
}

function handleBtnActivateById(event) {
  const idValue = event.target.value;
  isIdVaild = idValue.indexOf("@") !== -1 ? true : false;
  btnActivate();
}

function handleBtnActivateByPw(event) {
  const PwValue = event.target.value;
  isPwVaild = PwValue.length >= 5 ? true : false;
  btnActivate();
}

function handleBtnClick() {
  // console.log(allVaild);
  if (allVaild) {
    window.location.href = "main.html";
  }
}

loginId.addEventListener("input", handleBtnActivateById);
loginPw.addEventListener("input", handleBtnActivateByPw);
loginBtn.addEventListener("click", handleBtnClick);
