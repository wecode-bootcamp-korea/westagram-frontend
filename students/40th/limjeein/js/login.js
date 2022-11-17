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

submitBtn.addEventListener("click", function () {
  if (userId.value.indexOf("@") > -1) {
    if (userPw.value.length >= 5) {
      return true;
    } else if (userPw.value.length < 5) {
      alert("비밀번호를 다시 확인해주세요");
    }
  } else if (userId.value.indexOf("@") == -1) {
    alert("아이디를 다시 확인해주세요");
    if (userPw.value.length < 5) {
      alert("비밀번호를 다시 확인해주세요");
    }
  }
});
