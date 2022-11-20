const loginId = document.getElementById("id");
const loginPw = document.getElementById("password");
const loginBtn = document.getElementById("button");

function color() {
  if (loginId.value.length > 0 && loginPw.value.length > 0) {
    loginBtn.style.backgroundColor = "#0080FF";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroungColor = "#bfdffd";
    loginBtn.disabled = true;
  }
}

loginId.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
