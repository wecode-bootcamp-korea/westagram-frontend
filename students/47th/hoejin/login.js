const idForm = document.getElementById("name");
const pwForm = document.getElementById("password");
const loginButton = document.getElementById("button");

function changeColor() {
  let idValue = idForm.value;
  let pwValue = pwForm.value;
  // console.log("아이디 value", idForm.value);
  // console.log("비밀번호 value", pwForm.value);
  if (
    idValue.length > 0 &&
    idValue.indexOf("@") !== -1 &&
    pwValue.length >= 5
  ) {
    loginButton.style.backgroundColor = "#0095f6";
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = "#cae0f9";
    loginButton.disabled = true;
  }
  return;
}

function moveLink() {
  location.replace("main.html");
}

idForm.addEventListener("keyup", changeColor);
pwForm.addEventListener("keyup", changeColor);
loginButton.addEventListener("click", moveLink);
