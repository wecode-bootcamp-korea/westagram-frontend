function checkInput() {
  const inputId = document.getElementById("contactLogin").value;
  const inputPw = document.getElementById("passwordLogin").value;
  const loginButton = document.getElementById("loginButton");

  inputId.length > 0 && inputPw.length > 0
    ? loginButton.classList.add("welcomeBlue")
    : loginButton.classList.remove("welcomeBlue");
}

document.getElementById("contactLogin").addEventListener("input", checkInput);
document.getElementById("passwordLogin").addEventListener("input", checkInput);
