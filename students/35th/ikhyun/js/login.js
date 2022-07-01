const loginButton = document.querySelector(".login-button");
const loginId = document.querySelector(".login-id");
const loginPassword = document.querySelector(".login-password");

function goToMain() {
  window.location.href = "./main.html";
}

function checkInput() {
  loginId.value.includes("@") && loginPassword.value.length >= 5
    ? ((loginButton.style.opacity = "1"),
      (loginButton.style.cursor = "pointer"),
      loginButton.addEventListener("click", goToMain))
    : ((loginButton.style.opacity = ""),
      loginButton.removeEventListener("click", goToMain),
      (loginButton.style.cursor = ""));
}

loginPassword.addEventListener("keyup", checkInput);
loginId.addEventListener("keyup", checkInput);
