let loginTextInput = document.getElementById("loginText");
let pwTextInput = document.getElementById("pwText");
let loginBtnActive = document.getElementById("loginBtn");

function changeColorBtn() {
  let idValue = loginTextInput.value;
  let pwValue = pwTextInput.value;

  if (idValue.length >= 5 && idValue.includes("@") && pwValue.length >= 5) {
    loginBtnActive.style.backgroundColor = "#1c7ed6";
  } else {
    loginBtnActive.style.backgroundColor = "#b3dbff";
  }
}

loginTextInput.addEventListener("keyup", changeColorBtn);
pwTextInput.addEventListener("keyup", changeColorBtn);
