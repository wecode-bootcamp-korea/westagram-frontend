const inputUserId = document.querySelector(".user-id");
const inputLoginPassword = document.querySelector(".user-password");
const loginButton = document.querySelector(".login-btn")

inputLoginPassword.addEventListener('keyup', () => {
  const userId = inputUserId.value;
  const userPassword = inputLoginPassword.value;
 ((!userId && userPassword) || (userId && !userPassword) || (!userId && !userPassword))  ? (loginButton.style.backgroundColor = "#b9dffc") : (loginButton.style.backgroundColor = "blue");
});
