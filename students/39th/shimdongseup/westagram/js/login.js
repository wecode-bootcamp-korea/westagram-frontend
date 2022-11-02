const idEl = document.querySelector(".idInput");
const pwEl = document.querySelector(".pwInput");
const loginBtnEl = document.querySelector(".loginBtn");
const loginBtnBox = document.querySelector(".loginBtnBox");

const id = "1@1";
const pw = "11111";

//로그인 유효성 검사
function loginActive() {
  if (idEl.value.indexOf("@") !== -1 && pwEl.value.length >= 5) {
    loginBtnEl.style.backgroundColor = "#0095f6";
    loginBtnEl.style.cursor = "pointer";
  } else {
    loginBtnEl.style.backgroundColor = "#b2dffc";
    loginBtnEl.style.cursor = null;
  }
}
idEl.addEventListener("keyup", loginActive);
pwEl.addEventListener("keyup", loginActive);
idEl.addEventListener("keydown", function enterLogin(e) {
  if (e.keyCode === 13) {
    idVarify();
  }
});
pwEl.addEventListener("keydown", function enterLogin(e) {
  if (e.keyCode === 13) {
    idVarify();
  }
});

loginBtnBox.addEventListener("click", function idVarify() {
  if (loginBtnEl.style.backgroundColor == "rgb(0, 149, 246)") {
    if (idEl.value !== id || pwEl.value !== pw) {
      alert("아이디 혹은 비밀번호를 다시 확인해주세요. id:1@1 pw:11111");
      idEl.value = null;
      pwEl.value = null;
    } else {
      window.location.href = "./main.html";
    }
  }
});

function idVarify() {
  if (loginBtnEl.style.backgroundColor == "rgb(0, 149, 246)") {
    if (idEl.value !== id || pwEl.value !== pw) {
      alert("아이디 혹은 비밀번호를 다시 확인해주세요. id:1@1 pw:11111");
      // idEl.value = null;
      pwEl.value = null;
    } else {
      window.location.href = "./main.html";
    }
  }
}
