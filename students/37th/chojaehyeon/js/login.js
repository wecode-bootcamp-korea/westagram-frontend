const idInput = document.querySelector("#id-input");
const pwInput = document.querySelector("#pw-input");
const loginButton = document.querySelector("#login-button");
const loginLink = document.querySelector("#login-link");

console.log(loginLink);
function typedLogin() {
  let loginId = idInput.value;
  let loginPw = pwInput.value;

  if (loginId.includes("@") && loginPw.length >= 5) {
    loginButton.classList = "on-button";
    loginLink.className = "on-link";
  } else {
    loginButton.classList = "off-button";
    loginLink.className = "off-link";
  }
}

idInput.addEventListener("keyup", typedLogin);
pwInput.addEventListener("keyup", typedLogin);
