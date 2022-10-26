const idEl = document.querySelector(".idInput");
const pwEl = document.querySelector(".pwInput");
const loginBtnEl = document.querySelector(".loginBtn");

function loginActive() {
  if(idEl.value.indexOf('@') !== -1 && pwEl.value.length >= 5){
    loginBtnEl.style.backgroundColor = '#0095f6';
    loginBtnEl.style.cursor = "pointer";
  }else {
    loginBtnEl.style.backgroundColor = '#b2dffc';
    loginBtnEl.style.cursor = "none";
  }
}
idEl.addEventListener('keyup',loginActive);
pwEl.addEventListener('keyup',loginActive);