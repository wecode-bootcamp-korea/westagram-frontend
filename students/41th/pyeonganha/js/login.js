const idText = document.querySelector("#userId");
const pswText = document.querySelector("#userPsw");
const btn = document.querySelector("#btnOnOff");

idText.addEventListener("keyup", switchOn);
pswText.addEventListener("keyup", switchOn);

function switchOn() {
  if (idText.value && pswText.value) {
    btn.disabled = false;
  } else btn.disabled = true;
}

btn.addEventListener("click", loginSuccess);

function loginSuccess() {
  if (idText.value == "wecode" && pswText.value == 1234) {
    alert("로그인 성공!");
  }
}
