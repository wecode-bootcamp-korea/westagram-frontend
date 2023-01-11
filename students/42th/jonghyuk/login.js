const formWrap = document.getElementsByClassName("background")[0];
const idForm = document.getElementsByClassName("login")[0];
const pwForm = document.querySelector("#pw");
const loginButton = document.querySelector("#loginbtn");

console.log(idForm);
console.log(pwForm);
console.log(loginButton);

function loginValue() {
  if (idForm.value && pwForm.value) {
    loginButton.style.backgroundColor = "skyblue";
  } else if (!(idForm.value && pwForm.value)) {
    loginButton.style.backgroundColor = "#c4e1fb";
  }
}

formWrap.addEventListener("keyup", loginValue);
