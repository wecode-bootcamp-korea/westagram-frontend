const loginBtn = document.getElementById("loginBtn");

const idValue = document.getElementById("id");
const pwValue = document.getElementById("password");

function btnActive() {
  if (!idValue.value || pwValue.value.length === 0) {
    loginBtn.disabled = true;
  } else if (idValue.value && pwValue.value.length > 0) {
    loginBtn.disabled = false;
  }
}
btnActive();
idValue.addEventListener("keyup", function () {
  btnActive();
});
pwValue.addEventListener("keyup", function () {
  btnActive();
});
