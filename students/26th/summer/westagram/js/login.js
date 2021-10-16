"use strick";

const idTag = document.getElementById("id");
const pwTag = document.getElementById("pw");
const loginBtn = document.getElementById("loginBtn");

let id = "";
let pw = "";

const onInputId = (e) => {
  id = e.target.value;
};

const onInputPw = (e) => {
  pw = e.target.value;

  if (!id || !pw) {
    loginBtn.style.opacity = "0.4";
    loginBtn.disabled;
    return;
  }
  loginBtn.style.opacity = "1";
  loginBtn.abled;
};

const onClickButton = () => {
  if (!id.includes("@")) {
    alert("id를 확인해주세요");
    return;
  }
  if (pw.length < 5) {
    alert("pw를 확인해주세요");
    return;
  }
  window.event.code = Enter;
  alert("로그인 되었습니다.");
};

idTag.addEventListener("input", onInputId);
pwTag.addEventListener("input", onInputPw);
loginBtn.addEventListener("click", onClickButton);
