const idText = document.querySelector("#userId");
const pswText = document.querySelector("#userPsw");
const btn = document.querySelector("#btnOnOff");

idText.addEventListener("keyup", switchOn);
pswText.addEventListener("keyup", switchOn);

function switchOn() {
  if (idText.value && pswText.value) {
    // btn.classList.add("loginbtncolorchange");
    btn.disabled = false;
  }
  // btn.classList.remove("loginbtncolorchange");
  else btn.disabled = true;
}

btn.addEventListener("click", loginSuccess);

function loginSuccess() {
  if (idText.value == "wecode" && pswText.value == 1234) {
    alert("로그인 성공!");
    location.href =
      "http://127.0.0.1:5500/westagram-frontend/students/41th/pyeonganha/main.html";
  } else {
    alert("로그인 실패!");
  }
}
