const loginId = document.querySelector(".id");
const loginPw = document.querySelector(".password");
const loginBtn = document.querySelector(".button");

document.body.addEventListener("keyup", () => {
  let idvalue = loginId.value;
  let pwvalue = loginPw.value;

  if (idvalue.length >= 1 && pwvalue.length >= 1) {
    loginBtn.style.backgroundColor = "#1f9dfd";
  } else {
    loginBtn.style.backgroundColor = "#acd7f8";
  }
});
