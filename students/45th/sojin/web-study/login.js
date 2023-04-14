const user = document.getElementsByClassName("user")[0];
const password = document.getElementsByClassName("password")[0];
const loginBtn = document.getElementsByClassName("loginBtn")[0];

function userloginForm() {
  const uservaluelength = user;
  const passwordvaluelength = password;
  if (
    (uservaluelength.value.length && passwordvaluelength.value.length) !== 0
  ) {
    loginBtn.style.backgroundColor = "#0000FF";
  } else {
    loginBtn.style.backgroundColor = "#afddec";
  }
}
user.addEventListener("keyup", userloginForm);
password.addEventListener("keyup", userloginForm);
