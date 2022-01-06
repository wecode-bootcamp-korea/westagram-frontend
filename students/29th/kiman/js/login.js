const idbox = document.querySelector("#loginid");
const pwbox = document.querySelector("#loginpw");
const mainlink = document.querySelector(".mainlink");
const btn = document.querySelector("button");
const REMOVE_CLASSNAME = "nonwork";
const USERNAME_KEY = "username";

// id 입력란에 @ 포함 && pw 5글자 이상 시 true
function dologin() {
  const inputid = idbox.value;
  const inputpw = pwbox.value;
  if (inputid.length >= 1 && inputpw.length >= 1) {
    btn.classList.remove(REMOVE_CLASSNAME);
    if (inputid.indexOf("@") != -1 && inputpw.length >= 5) {
      mainlink.href = "main.html";
    } else {
      mainlink.removeAttribute("href");
    }
  } else {
    btn.classList.add(REMOVE_CLASSNAME);
  }
}

idbox.addEventListener("keyup", dologin);
pwbox.addEventListener("keyup", dologin);

function dowaring(event) {
  const inputid = idbox.value;
  const inputpw = pwbox.value;
  if (inputid.indexOf("@") != -1 && inputpw.length >= 5) {
    localStorage.setItem(USERNAME_KEY, inputid);
  } else {
    event.preventDefault();
    alert("ID 혹은 PW를 확인해주세요");
  }
}

btn.addEventListener("click", dowaring);

function enterkey(event) {
  const inputid = idbox.value;
  if (window.event.keyCode == 13) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, inputid);
    btn.click();
  }
}

idbox.addEventListener("keyup", enterkey);
pwbox.addEventListener("keyup", enterkey);
