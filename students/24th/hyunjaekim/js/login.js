const loginContainer = document.querySelector(".loginContainer");
const userID = document.querySelector(".userID");
const userPW = document.querySelector(".userPW");
const loginBtn = document.querySelector(".loginBtn");

function validateEmail() {
  const idArray = userID.value.split(""); // 받아온 id를 array화
  for (let i = 0; i < idArray.length; i++) {
    if (idArray[i] === "@") {
      activeLoginBtn();
    }
  }
}

function activeLoginBtn() {
  userID.value.length > 4 && userPW.value.length > 4 ? loginBtn.classList.add("active") : loginBtn.classList.remove("active");
}

function init() {
  loginContainer.addEventListener("keyup", () => validateEmail());
}

init();
