"use strict";

const inputs = document.getElementsByClassName("loginform")[0];
const loginBtn = document.getElementById("loginBtn");

const handleInput = () => {
  const idValue = document.getElementById("id").value;
  const pwValue = document.getElementById("pw").value;

  const isValidId = checkValue(idValue);
  const isValidPw = checkValue(pwValue);

  console.log(idValue, pwValue);
  if (isValidId && isValidPw) {
    loginButton(true);
  } else {
    loginButton(false);
  }
};

function loginButton(btnValid) {
  if (btnValid) {
    loginBtn.disabled = false;
    loginBtn.style.opacity = 1;
    loginBtn.style.cursor = "pointer";

    if (window.event.keyCode === 13) {
      success();
    }
  } else {
    loginBtn.disabled = true;
    loginBtn.style.opacity = 0.4;
    loginBtn.style.cursor = "default";
  }
}

function checkValue(value) {
  if (value.length > 0) {
    return true;
  } else {
    return false;
  }
}

// loginButton.addEventListener("keyup", function (e) {
//   const id = document.getElementById(".id").value;
//   const pw = document.getElementById(".pw").value;

//   if (id.length > 0 && pw.length > 0) {
//     return disabled;
//   }

// });
// const success = () => console.log("Success");

function success() {
  alert("환영합니다!");
  location.replace("http://127.0.0.1:5500/students/28th/seongyong/main.html");
}

function init() {
  console.log(inputs, loginBtn);
  // inputs.addEventListner("input", handleInput);
  // inputs.addEventListner("keyup", handleInput);
  inputs.addEventListener("input", handleInput);
  loginBtn.addEventListener("click", loginButton);
  // loginBtn.addEventListener("click", () => console.log("Click"));
}

init();
