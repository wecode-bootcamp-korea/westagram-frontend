// 유효성검사 추가
const loginForm = document.querySelector(".login");

loginForm.addEventListener("keyup", () => {
  const loginBtn = document.querySelector(".login__btn");
  // const loginBtn = document.getElementById("getDisable");
  const loginEmail = document.querySelector(".login__email").value;
  const loginPassWord = document.querySelector(".login__pw").value;

  loginBtn.disable = true;
  if (loginEmail.indexOf("@") >= 0 && loginPassWord.length >= 5) {
    loginBtn.disable = false;

    // loginBtn.removeAttr("disabled");
    loginBtn.style.backgroundColor = "#0595f6";
    loginBtn.style.cursor = "pointer";
  } else if (!loginEmail || loginPassWord < 5) {
    loginBtn.disable = true;
    // loginBtn.attr("disabled");
    loginBtn.style.backgroundColor = "#c4e1fb";
    loginBtn.style.cursor = "default";
  }
});
