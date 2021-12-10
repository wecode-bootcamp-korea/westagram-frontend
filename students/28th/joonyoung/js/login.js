const ACTIVE = "active",
  EMAIL = "email",
  PASSWORD = "password";
const loginForm = document.querySelector(".login");
const loginBtn = document.querySelector("button");
let validation = { email: "", password: "" };

loginForm.addEventListener("input", (e) => {
  validation[e.target?.dataset?.type] = e.target.value;
  if (validation[EMAIL].includes("@") && validation[PASSWORD].length >= 6) {
    loginBtn.classList.add(ACTIVE);
  } else loginBtn.classList.remove(ACTIVE);
});
loginForm.addEventListener("keydown", (e) => {
  e.key === "Enter" && loginToMain();
});

loginBtn.addEventListener("click", (e) => {
  loginToMain();
});

const loginToMain = () => {
  if (loginBtn.classList.contains(ACTIVE)) window.location.href = "./main.html";
};
