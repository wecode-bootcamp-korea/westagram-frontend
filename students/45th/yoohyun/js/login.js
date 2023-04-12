const loginForm = document.querySelector(".inputWrapper");
const userId = document.querySelector(".idInput>input");
const userPw = document.querySelector(".pwInput>input");
const loginBtn = document.querySelector(".loginBtn>button");

loginForm.addEventListener("keyup", changeBtnColor);

function changeBtnColor() {
  userId.value.length >= 1 && userPw.value.length >= 1
    ? (loginBtn.style.backgroundColor = "rgb(0,149,246)")
    : (loginBtn.style.backgroundColor = "#4cb5f9");
}

// pseudo-code : changeBtnColor function
// 아이디 인풋창 입력 값 길이가 1이상
// 비번 인풋창 입력 값 길이가 1이상
// 1,2 동시에 만족 &&
// 버튼 컬러 변경
