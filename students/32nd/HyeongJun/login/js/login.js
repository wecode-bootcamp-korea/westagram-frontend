let selectButton = document.querySelector("button");
let id = document.querySelector(".idBox");
let pw = document.querySelector(".pwBox");

selectButton.disabled = true;

id.addEventListener("keyup", loginOn);
pw.addEventListener("keyup", loginOn);

function loginOn() {
  if (id.value && pw.value) {
    selectButton.disabled = false;
    selectButton.style.backgroundColor = "#0095f6";
  } else {
    selectButton.disabled = true;
    selectButton.style.backgroundColor = "#b2dffc";
  }
}
