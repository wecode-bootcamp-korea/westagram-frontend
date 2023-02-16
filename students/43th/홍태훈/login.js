const idInput = document.getElementsByClassName("idBox")[0];
const pwInput = document.getElementsByClassName("passwordBox")[0];
const inputButton = document.getElementsByClassName("button_on")[0];

function onButton() {
  const id = idInput.value;
  const pw = pwInput.value;

  if (id && pw) {
    inputButton.classList.remove("button_off");
  } else {
    inputButton.classList.add("button_on");
  }
}

idInput.addEventListener("keyup", onButton);
pwInput.addEventListener("keyup", onButton);
