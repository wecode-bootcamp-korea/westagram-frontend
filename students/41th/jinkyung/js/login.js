const loginBtn = document.getElementById("login_btn");
const idElement = document.getElementById("id_input");
const pwElement = document.getElementById("pw_input");

function loginActive() {
  idElement.value.indexOf("@") !== -1 && pwElement.value.length >= 5
    ? (loginBtn.className = "active")
    : // loginBtn.style.backgroundColor = "red";

      loginBtn.classList.remove("active");
  // loginBtn.style.backgroundColor = "green";
}

idElement.addEventListener("keyup", loginActive);
pwElement.addEventListener("keyup", loginActive);
