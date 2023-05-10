let userId = document.querySelector("#user_id");
let userPw = document.querySelector("#user_pw");
let loginButton = document.querySelector("#login_btn");

userId.addEventListener("keyup", activateBtn);
userPw.addEventListener("keyup", activateBtn);

function activateBtn() {
  const isUserIdValid = userId.value.includes("@");
  const isUserPwValid = userPw.value.length;

  if (isUserIdValid && isUserPwValid >= 5) {
    loginButton.disabled = false;
    loginButton.classList.remove("disabled");
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.classList.add("disabled");
  }
}
