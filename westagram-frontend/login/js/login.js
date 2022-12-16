const user_id = document.querySelector(".id");
const user_pw = document.querySelector(".passward");
const loginBtn = document.querySelector(".loginBtn");

function input() {
  if (user_id.value && user_pw.value) {
    loginBtn.disable = false;
    loginBtn.style.backgroundColor = "#3e94f7";
  } else {
    loginBtn.disable = true;
    loginBtn.style.backgroundColor = "#b2dffc";
  }
  return;
}
