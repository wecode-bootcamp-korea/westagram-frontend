function btnActive() {
  const loginIdInput = document.querySelector("#loginIdInput");
  const loginPwInput = document.querySelector("#loginPwInput");
  const loginBtn = document.querySelector("#loginBtn");

  if (loginIdInput.value.length > 0 && loginPwInput.value.length > 0) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}
