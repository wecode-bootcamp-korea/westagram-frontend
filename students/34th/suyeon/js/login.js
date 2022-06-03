const userId = document.querySelector("#userName");
const userPw = document.querySelector("#pw");
const loginButton = document.querySelector("#logInBtn");

function logInActive() {
  loginButton.style.backgroundColor = "#0195f7";
  loginButton.disabled = false;
}

function logInInactive() {
  loginButton.style.backgroundColor = "#b2dffc";
  loginButton.disabled = true;
}

window.addEventListener("keyup", () => {
  userId.value && userPw.value ? logInActive() : logInInactive();
});

// //로그인 버튼 클릭 시 메인 페이지로 이동 - 아직 구현 못함...
// loginButton.addEventListener("click", () => {
//   location.href = "mainpage.html";
// });
