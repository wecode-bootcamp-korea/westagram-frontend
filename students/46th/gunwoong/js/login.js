const loginIdInput = document.querySelector("#loginIdInput");
const loginPwInput = document.querySelector("#loginPwInput");
const loginBtn = document.querySelector("#loginBtn");
function btnActive() {
  const loginValidationLength =
    loginIdInput.value.length > 0 && loginPwInput.value.length > 0
      ? (loginBtn.disabled = false)
      : (loginBtn.disabled = true);
}
function loginValidation() {
  const loginValidationIncludes =
    loginIdInput.value.includes("@") && loginPwInput.value.length > 5
      ? location.href("students/46th/gunwoong/main.html")
      : alert("x");
}
loginBtn.addEventListener("click", loginValidation);
