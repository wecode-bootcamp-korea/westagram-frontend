// const id = document.getElementById("id");
// const pw = document.getElementById("pw");
const login = document.getElementById("login");

login.addEventListener("click", function () {
  const id = document.getElementById("id").value;
  const password = document.getElementById("pw").value;

  if (!id) {
    alert("아이디를 입력해주세요!");
    return;
  } else if (!password) {
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    alert("로그인 성공!");
  }
});

// const loginBtn = document.querySelector(".login_btn");
// const userId = document.querySelector(".user_id");

// window.addEventListener("keyup", () => {
//   const userPw = document.querySelector(".user_pw");
//   if (userPw.value.length > 0 && userId.value.length > 0) {
//     loginBtn.disabled = false;
//     loginBtn.classList.add("active");
//   } else {
//     loginBtn.disabled = true;
//     loginBtn.classList.remove("active");
//   }
// });
