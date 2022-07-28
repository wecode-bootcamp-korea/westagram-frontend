const loginId = document.getElementById("LOGIN_ID");
const loginPw = document.getElementById("LOGIN_PW");
const loginBtn = document.getElementById("LOGIN_BTN");

function color() {
  if (loginId.value.length > 0 && loginPw.value.length >= 1) {
    loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.disabled = "disabled";
  }
}

function moveToMain() {
  location.replace("./main.html");
}

loginId.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
loginBtn.addEventListener("click", moveToMain);
