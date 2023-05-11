const idBox = document.getElementById("id");
const passwordBox = document.getElementById("password");
const loginBtn = document.querySelector("button");

idBox.addEventListener("keyup", activeBtn);
passwordBox.addEventListener("keyup", activeBtn);

// function activeBtn() {
//   if (idBox.value && passwordBox.value) {
//     loginBtn.classList.add("activeBtn");
//     loginBtn.disabled = false;
//   } else {
//     loginBtn.classList.remove("activeBtn");
//     loginBtn.disabled = true;
//   }
// }

function activeBtn() {
  // 변수 선언 함수 안에!! (새로운 값이 계속 업데이트 되어야 하는 경우**)
  const passwordValue = passwordBox.value;
  const idValue = idBox.value;
  if (idValue.includes("@") && passwordValue.length > 4) {
    loginBtn.classList.add("activeBtn");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("activeBtn");
    loginBtn.disabled = true;
  }
}
