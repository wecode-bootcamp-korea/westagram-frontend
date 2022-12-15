const idValue = document.querySelector(".idinput");
const passwordValue = document.querySelector(".passwordinput");
const Btn = document.querySelector(".loginbtn");

passwordValue.addEventListener("keyup", function () {
  if (idValue.value && passwordValue.value) {
    Btn.disabled = false;
    Btn.style.backgroundColor = "blue";
  } else {
    Btn.disabled = true;
    Btn.style.backgroundColor = "#B3DBFF";
  }
});
