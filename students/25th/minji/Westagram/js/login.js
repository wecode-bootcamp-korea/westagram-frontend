const user_id = document.getElementById("user_id");
const user_pw = document.getElementById("user_pw");
const btn_login = document.getElementById("btn_login");

let activateButton = () => {
  // if (user_id.value && user_pw.value) {
  //   btn_login.style.opacity = 1;
  // } else {
  //   btn_login.style.opacity = 0.4;
  // }

  if (user_id.value.includes("@") && user_pw.value.length >= 5) {
    btn_login.style.opacity = 1;
  } else {
    btn_login.style.opacity = 0.4;
  }
};

user_id.addEventListener("keyup", activateButton);
user_pw.addEventListener("keyup", activateButton);
