const loginIdInput = document.querySelector("#loginIdInput");
const loginPwInput = document.querySelector("#loginPwInput");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.disabled = true;
function btnActive() {
  const loginId = loginIdInput.value;
  const loginPw = loginPwInput.value;
  const isValid = loginId.length > 0 && loginPw.length > 0;
  isValid ? (loginBtn.disabled = false) : (loginBtn.disabled = true);
}
loginIdInput.addEventListener("input", btnActive);
loginPwInput.addEventListener("input", btnActive);

function loginValidation() {
  const isValid =
    loginIdInput.value.includes("@") && loginPwInput.value.length > 5;
  if (isValid) {
    location.href = "main.html";
  } else {
    alert("유효하지않음")
  }
}
loginBtn.addEventListener("click", loginValidation);
