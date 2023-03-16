const userId = document.getElementById("loginBox");
const userPassword = document.getElementById("passwordBox");
let loginBtn = document.getElementById("loginButton");
// let pageToMain = document.getElementByTagName("a")[0];

userId.addEventListener("keyup", function (event) {
  if (userId.value && userPassword.value) {
    loginBtn.disabled = false;
    // pageToMain.href = "students/44th/HyominShin/js/main.js";
  } else {
    loginBtn.disabled = true;
    // pageToMain.href = "#none";
  }
});

userPassword.addEventListener("keyup", function (event) {
  if (userId.value && userPassword.value) {
    loginBtn.disabled = false;
    // pageToMain.href = "students/44th/HyominShin/js/main.js";
  } else {
    loginBtn.disabled = true;
    // pageToMain.href = "#none";
  }
});
