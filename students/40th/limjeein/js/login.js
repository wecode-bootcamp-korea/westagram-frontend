const userId = document.getElementById("userIdValue");
const userPw = document.getElementById("userPwValue");
const submitBtn = document.getElementById("userBtn");

userId.addEventListener("keyup", () => {
  if (userId.value.length >= 1) {
    userPw.addEventListener("keyup", userBtnOn);
  } else if (userId.value.length >= "") {
    submitBtn.style.opacity = 0.5;
  }
});

function userBtnOn() {
  if (userPw.value.length >= 1) {
    submitBtn.style.opacity = 1;
  } else if (userPw.value.length >= "") {
    submitBtn.style.opacity = 0.5;
  }
}
