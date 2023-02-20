// const loginButton = document.querySelector(".login_btn");

// loginButton.addEventListener("click", function () {
//   const loginId = document.querySelector("#login_id").value;
//   const loginPassword = document.querySelector("#login_pw").value;

//   loginId && loginPassword
//     ? (document.querySelector(".login_btn").style.backgroundColor = "#39f")
//     : 0;
// });

"use strict"; /*엄격한 모드: 사소한 오류방지*/

const loginId = document.getElementById("login_id");
const loginPw = document.getElementById("login_pw");
const loginBtn = document.querySelector(".login_btn");
function color() {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    loginPw.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = "#39f";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.disabled = true;
  }
}
function success() {
  location.replace("./main.html");
}

function init() {
  loginId.addEventListener("keyup", color);
  loginPw.addEventListener("keyup", color);
  loginBtn.addEventListener("click", success);
}

init();
