const userEmail = document.getElementById("userEmail");
const userPw = document.getElementById("userPw");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");

// make login toggle button
[userEmail, userPw].map((elem) =>
  elem.addEventListener("input", makeToggleLoginBtn)
);

function makeToggleLoginBtn() {
  let emailValueLength = userEmail.value.length;
  let pwValueLength = userPw.value.length;
  let isInputValid = emailValueLength && pwValueLength;

  isInputValid
    ? (loginSubmitBtn.style.backgroundColor = "var(--color-blue)")
    : (loginSubmitBtn.style.backgroundColor = "var(--color-opacity-blue)");

  loginSubmitBtn.disabled = !isInputValid;
}
