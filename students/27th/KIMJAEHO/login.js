const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#pw");
const button = document.querySelector(".btn");

inputId.addEventListener("keyup", function () {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#1c7ed6";
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#bfdffd";
  }
});

inputPassword.addEventListener("keyup", function () {
  let idValue = inputId.value;
  let passwordValue = inputPassword.value;

  if (idValue.length > 0 && passwordValue.length > 0) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#1c7ed6";
  } else {
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#bfdffd";
  }
});
