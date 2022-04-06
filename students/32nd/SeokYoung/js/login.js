const loginBtn = document.querySelector("#loginBtn");
const inputBox = document.querySelector("#inputBox");
const inputId = document.querySelector("#inputId");
const inputPass = document.querySelector("#inputPass");

loginBtn.addEventListener("click", btnHandler);
inputBox.addEventListener("keyup", activeLogin);
inputId.addEventListener("keyup", checkId);

function activeLogin() {
  if (inputId.value && inputPass.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "rgb(" + 0 + "," + 149 + "," + 246 + ")";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "rgb(" + 178 + "," + 223 + "," + 252 + ")";
  }
}

function btnHandler() {
  const idCheck = "@";
  if (!inputId.value.includes(idCheck)) {
    alert("이메일 형식이 아닙니다.");
  } else if (inputPass.value.length < 8) {
    alert("비밀번호는 8자리 이상이여야 합니다.");
  } else {
    alert("로그인은 완료했는데,,,유효성은 모르겠네요. 일단 다음으로 가세요");
  }
}

function checkId() {
  // const checkEmailForm = `@`;
  console.log(inputId.value);
}
