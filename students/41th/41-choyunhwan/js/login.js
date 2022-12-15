const loginBtn = document.querySelector(".loginbtn");
const IDINPUT = document.querySelector(".idinput");
const PASSWORDINPUT = document.querySelector(".passwordinput");

PASSWORDINPUT.addEventListener("Keyup", click);

function click() {
  if (IDINPUT.value && PASSWORDINPUT.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "blue";
  } else {
    loginBtn.disabled = true;
  }
}
