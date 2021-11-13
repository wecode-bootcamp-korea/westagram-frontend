const loginForm = document.getElementById("userLogin");
const EMAIL_REQUIRED = "이메일에는 @가 있어야합니다.";
const PASSSWORD_REQUIRED = "비밀번호는 5자리 이상이어야합니다.";

function showErrorMessage(isValid, errorType, message) {
  isValid ? (errorType.innerHTML = "") : (errorType.innerHTML = message);
}

function removeErrorMessage(errorType) {
  errorType.innerHTML = "";
}

function validateInput() {
  let emailValueLength = loginForm.userEmail.value.length;
  let pwValueLength = loginForm.userPw.value.length;
  let isEmailValid = loginForm.userEmail.value.includes("@");
  let isPwValid = pwValueLength >= 5;

  emailValueLength
    ? showErrorMessage(isEmailValid, emailErrorMs, EMAIL_REQUIRED)
    : removeErrorMessage(emailErrorMs);

  pwValueLength
    ? showErrorMessage(isPwValid, pwErrorMs, PASSSWORD_REQUIRED)
    : removeErrorMessage(pwErrorMs);

  return isEmailValid && isPwValid;
}

function enableButton() {
  const isInputValid = validateInput();

  loginSubmitBtn.style.backgroundColor = isInputValid
    ? "var(--color-blue)"
    : "var(--color-opacity-blue)";

  loginSubmitBtn.disabled = !isInputValid;
}

function goToMain() {
  location.href = "main.html";
}

function init() {
  [userEmail, userPw].map((elem) =>
    elem.addEventListener("input", enableButton)
  );
  loginSubmitBtn.addEventListener("click", goToMain);
}

init();
