const idInput = document.getElementById("idInput");
const pwdInput = document.getElementById("pwdInput");
const inputElem = document.getElementsByTagName("input");
const loginBtnElem = document.getElementsByClassName("loginBtn")[0];

idInput.addEventListener("keyup", isInputValueOne);
pwdInput.addEventListener("keyup", isInputValueOne);

function isInputValueOne() {
  const idInPutValue = idInput.value;
  const pwdInputValue = pwdInput.value;
  if (idInPutValue.length >= 1 && pwdInputValue.length >= 1) {
    loginBtnElem.disabled = false;
    localStorage.clear();
    localStorage.setItem("id", idInput.value);
  } else {
    loginBtnElem.disabled = true;
  }
}

const validation = () => {
  const idInPutValue = idInput.value;
  const pwdInputValue = pwdInput.value;
  const emailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const pwdPattern =
    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{5,}$";
  if (!emailPattern.test(idInPutValue)) {
    alert("이메일을 정확하게 입력해주세요");
  } else if (!pwdInputValue.length >= 5) {
    alert("비밀번호를 5글자 이상 입력해주세요");
  } else {
    location.href = "main.html";
  }
};

loginBtnElem.addEventListener("click", validation);
