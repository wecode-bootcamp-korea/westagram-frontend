const id = document.querySelector(".text");
const pw = document.querySelector(".password");
const btton = document.querySelector(".btton");
const input = document.querySelector(".input");

function changeColor(e) {
  console.log(e);
  let idValue = id.value;
  let pwValue = pw.value;
  if (idValue.length > 1 && pwValue.length > 6) {
    btton.disabled = false;
  } else {
    btton.disabled = true;
  }
}

id.addEventListener("keypress", changeColor);
pw.addEventListener("keypress", changeColor);
