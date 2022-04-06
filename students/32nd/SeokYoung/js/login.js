const loginBtn = document.querySelector("#loginBtn");
const inputBox = document.querySelector("#inputBox");
const inputId = document.querySelector("#inputId");
const inputPass = document.querySelector("#inputPass");

loginBtn.addEventListener("click", btnHandler);
inputBox.addEventListener("keyup", activeLogin);
inputId.addEventListener("keyup", checkId);

function btnHandler() {
  console.log(inputId.value);
  console.log(inputPass.value.length);
  alert("비밀번호를 확인해주세요!");
}

function activeLogin() {
  if (inputId.value && inputPass.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "rgb(" + 0 + "," + 149 + "," + 246 + ")";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "rgb(" + 178 + "," + 223 + "," + 252 + ")";
  }
}

function checkId() {
  // const checkEmailForm = `@`;
  console.log(inputId.value);
}
