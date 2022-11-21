const id = document.getElementById("id");
const password = document.getElementById("password");
const button = document.querySelector(".check");

function checkLogin(id, password) {
  if (id.length > 5 && password.length > 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function buttonClick() {
  if (id.value && password.value) {
    checkLogin(id.value, password.value);
    button.style.background = "blue";
    button.style.cursor = "pointer";
  }
  if (!(id.value && password.value)) {
    checkLogin(id.value, password.value);
    button.style.background = "rgba(0, 0, 255, 0.5)";
  }
}
id.addEventListener("input", buttonClick);
password.addEventListener("input", buttonClick);
