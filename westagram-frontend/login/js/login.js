const user_id = document.getElementById("id_login");
const user_pw = document.querySelector(".passward");
const loginBtn = document.querySelector(".loginBtn");

function input() {
  if (user_id.value && user_pw.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#3e94f7";
  } else {
    loginBtn.disabled = true;
    loginBtn.style.backgroundColor = "#b2dffc";
  }
}
user_pw.addEventListener("keyup", input);
user_id.addEventListener("keyup", input);

function newPage() {
  window.location.href = "../Feed/Feed.html";
}

loginBtn.addEventListener("click", newPage);
