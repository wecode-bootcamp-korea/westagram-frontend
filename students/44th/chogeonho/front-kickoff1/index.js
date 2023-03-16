// const id = document.getElementById("id");
// const pw = document.getElementById("pw");
//const login = document.getElementById("login");

// login.addEventListener("click", function () {
//   const id = document.getElementById("id").value;
//   const password = document.getElementById("pw").value;

//   if (!id) {
//     alert("아이디를 입력해주세요!");
//     return;
//   } else if (!password) {
//     alert("비밀번호를 입력해주세요!");
//     return;
//   } else {
//     alert("로그인 성공!");
//   }
// });

const loginId = document.getElementById("login_id");
const loginPw = document.getElementById("login_pw");
const loginBtn = document.getElementById("login_btn");

const implement = () => {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    loginPw.value.length >= 5
  ) {
    //loginBtn.style.backgroundColor = "#0095F6";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#C0DFFD";
    loginBtn.disabled = true;
  }

  // if (loginId.value.length < 30) {
  //   alert("너무 짧습니다");
  // }
};

const MoveToMain = () => {
  location.replace("./main.html");
};

loginId.addEventListener("keyup", implement);
loginPw.addEventListener("keyup", implement);
loginBtn.addEventListener("click", MoveToMain);
