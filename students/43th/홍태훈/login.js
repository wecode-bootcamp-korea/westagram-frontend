const id = document.getElementById("id");
const pw = document.getElementById("password");
const button = document.querySelector(".button");
console.log(id.value);
console.log(button);
document.body.addEventListener("keyup", () => {
  console.log(id.value);
  console.log(pw.value);
  if (id.value.length >= 1 && pw.value.length >= 1) {
    button.style.backgroundColor = "blue";
  } else {
    button.style.backgroundColor = "#c4e0fc";
  }
});
