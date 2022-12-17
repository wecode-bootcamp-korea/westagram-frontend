const user_id = document.getElementById("id_login");
const user_pw = document.querySelector(".passward");
const loginBtn = document.querySelector(".loginBtn");

function input() {
  if (user_id.value.length >= 5 && user_pw.value.length >= 5) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#3e94f7";
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}
user_pw.addEventListener("keyup", input);
user_id.addEventListener("keyup", input);

function newPage() {
  alert(`환영합니다! ${user_id.value}님!`);
  window.location.href = "../Feed/Feed.html";
}

loginBtn.addEventListener("click", newPage);
