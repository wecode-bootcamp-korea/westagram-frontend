const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginBtn = document.getElementById("login-button");

console.log(id.value);

const activeLoginBtn = () => {
  if (pw.value.length >= 5) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.disabled = true;
  }
};

id.addEventListener("keyup", activeLoginBtn);
pw.addEventListener("keyup", activeLoginBtn);

const loginForm = document.getElementById("login-form");

const login = (e) => {
  e.preventDefault();
  location.href = "../Main/index.html";
};

loginForm.addEventListener("submit", login);
