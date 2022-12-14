const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const btn = document.querySelector("#btn");

function loginEvent() {
  if (inputId.value && inputPw.value) {
    btn.style.opacity = 1;
  } else {
    btn.style.opacity = 0.5;
  }
}

inputId.addEventListener("keydown", loginEvent);
inputPw.addEventListener("keydown", loginEvent);
