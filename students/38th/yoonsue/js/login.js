const idInput = document.querySelector(".id");
const pwInput = document.querySelector(".pw");
const loginBtn = document.getElementsByTagName("button")[0];
const btnDiv = document.querySelector(".button");

function logInControl(e) {
  const valueLength = pwInput.value.length;
  const idValueLength = idInput.value.length;
  let pwValue = valueLength;

  return idInput.value.includes('@') && pwValue >= 6
    ? (loginBtn.disabled = false, 
      btnDiv.href = "main.html"
      )
    : (loginBtn.disabled = true);
}

idInput.addEventListener("keyup", logInControl);
pwInput.addEventListener("keyup", logInControl);
