const button = document.getElementsByClassName("buttonLogin")[0];
const inputId = document.getElementsByClassName("westaID")[0];
const inputPw = document.getElementsByClassName("westaPW")[0];
// console.log(inputPw);

inputId.addEventListener("keyup", validate);
inputPw.addEventListener("keyup", validate);

function validate() {
  if (!(inputId.value && inputPw.value)) {
    button.disabled = true;
  } else {
    button.disabled = false;
    button.style.cursor = "pointer";
  }

  if (!(inputId.value && inputPw.value)) {
    button.classList.remove("buttonLoginDisabled");
  } else {
    button.classList.add("buttonLoginDisabled");
  }
}

function validate() {
  if (!(inputId.value && inputPw.value)) {
    button.disabled = true;
    button.classList.remove("buttonLoginDisabled");
  } else {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.classList.add("buttonLoginDisabled");
  }
}
