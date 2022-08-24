const id = document.getElementById("id");
const pw = document.getElementById("password");
const loginBtn = document.getElementById("login-button");

console.log(id.value);

const activeLoginBtn = () => {
  if (id.value.length >= 1 && pw.value.length >= 1) {
    loginBtn.style.backgroundColor = "#0095F6";
  } else loginBtn.style.backgroundColor = "#c4e1fb";
};

id.addEventListener("keyup", activeLoginBtn);
pw.addEventListener("keyup", activeLoginBtn);

const loginForm = document.getElementsByTagName("form")[0];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "../Main/index.html";
});
