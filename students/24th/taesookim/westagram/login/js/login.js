const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("keyup", () => {
  const loginBtn = document.querySelector("button");
  const usernameVal = document.querySelector(".username").value;
  const passwordVal = document.querySelector(".password").value;
  if (usernameVal.indexOf("@") >= 0 && passwordVal.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
  } else if (!usernameVal || passwordVal.length < 5) {
    loginBtn.style.backgroundColor = "#b2dffc";
  }
});
