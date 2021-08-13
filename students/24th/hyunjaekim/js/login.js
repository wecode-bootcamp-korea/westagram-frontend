const loginContainer = document.querySelector(".loginContainer");

const loginBtn = document.querySelector(".loginBtn");

function validateEmail() {
  const userID = document.querySelector(".userID");
  const userPW = document.querySelector(".userPW");

  const idArray = userID.value.split(""); // 받아온 id를 array화
  if (idArray.indexOf("@") >= 0) {
    activeLoginBtn(userID, userPW);
  }
}

function activeLoginBtn(userID, userPW) {
  userID.value.length > 4 && userPW.value.length > 4 ? loginBtn.classList.add("active") : loginBtn.classList.remove("active");
}

function init() {
  loginContainer.addEventListener("keyup", () => validateEmail());
}

init();
