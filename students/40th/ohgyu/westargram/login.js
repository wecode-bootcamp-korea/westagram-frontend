const loginBtn = document.getElementById("loginBtn");

const idValue = document.getElementById("id");
const pwValue = document.getElementById("password");

function btnActive() {
  if (!idValue.value || pwValue.value.length === 0) {
    loginBtn.disabled = true;
  } else if (idValue.value.includes("@") && pwValue.value.length > 5) {
    loginBtn.disabled = false;
  }
}
btnActive();
idValue.addEventListener("input", function () {
  btnActive();
});
pwValue.addEventListener("input", function () {
  btnActive();
});
