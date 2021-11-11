const userEmail = document.getElementById("userEmail");
const userPw = document.getElementById("userPw");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");
const emailErrorMs = document.getElementById("emailErrorMs");
const pwErrorMs = document.getElementById("pwErrorMs");

// make login toggle button
function makeToggleLoginBtn() {
  let emailValueLength = userEmail.value.length;
  let pwValueLength = userPw.value.length;
  let isEmailValid = userEmail.value.includes("@");
  let isPwValid = pwValueLength >= 5;
  let isInputValid = isEmailValid && isPwValid;

  if (emailValueLength)
    isEmailValid
      ? (emailErrorMs.innerHTML = "")
      : (emailErrorMs.innerHTML = "이메일에는 @가 있어야합니다.");
  else emailErrorMs.innerHTML = "";

  if (pwValueLength)
    isPwValid
      ? (pwErrorMs.innerHTML = "")
      : (pwErrorMs.innerHTML = "비밀번호는 5자리 이상이어야합니다.");
  else pwErrorMs.innerHTML = "";

  isInputValid
    ? (loginSubmitBtn.style.backgroundColor = "var(--color-blue)")
    : (loginSubmitBtn.style.backgroundColor = "var(--color-opacity-blue)");

  loginSubmitBtn.disabled = !isInputValid;
}

// Set input addEventListener
[userEmail, userPw].map((elem) =>
  elem.addEventListener("input", makeToggleLoginBtn)
);
