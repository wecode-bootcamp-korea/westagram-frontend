const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector("button");

emailInput.addEventListener("keyup", validateBtn);
passwordInput.addEventListener("keyup", validateBtn);

function validateBtn() {
  if (emailInput.value && passwordInput.value) {
    loginButton.classList.add("onBtn");
  } else {
    loginButton.classList.remove("onBtn");
  }
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  return password.length >= 8 && /^\d+$/.test(password);
}

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    alert("Invalid email.");
  } else if (!validatePassword(password)) {
    alert("password is only number type and over 8 digits.");
  } else {
    window.location.href = "main.html";
  }
});
