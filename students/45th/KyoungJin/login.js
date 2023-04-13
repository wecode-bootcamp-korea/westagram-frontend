const Id = document.getElementById("Id");
const Pw = document.getElementById("Password");
const Button = document.getElementById("login-button");

/**Id.addEventListener("keyup", login);
Pw.addEventListener("keyup", login);

function login() {
  if (!(Id.value && Pw.value)) {
    Button.disabled = true;
  } else {
    Button.disabled = false;
    Button.style.cursor = "pointer";
    Button.classList.remove("no-login");
    Button.classList.add("yes-login");
  }
}**/

function loginbutton() {
  if (Id.value && Pw.value) {
    Button.disabled = false;
    Button.style.cursor = "pointer";
    Button.classList.remove("no-login");
    Button.classList.add("yes-login");
  } else {
    Button.disabled = true;
    Button.classList.remove("yes-login");
    Button.classList.add("no-login");
  }
}

Id.addEventListener("keyup", loginbutton);
Pw.addEventListener("keyup", loginbutton);
