let id = document.getElementById("user-id");
let password = document.getElementById("user-password");
let login = document.getElementById("login");
let checkString = "@";
password.addEventListener("keyup", checkIdPassword);
id.addEventListener("keyup", checkIdPassword);

function checkIdPassword() {
  id.value.indexOf(checkString) != -1 && password.value.length > 5
    ? (login.style.backgroundColor = "#0095F6")
    : (login.style.backgroundColor = "#c4e1fb");

  id.value.indexOf(checkString) != -1 && password.value.length > 5
    ? (login.disabled = false)
    : (login.disabled = true);
}
