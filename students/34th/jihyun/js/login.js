const formEl = document.querySelector("form");
const btnEl = document.querySelector("button");
const userId = document.querySelector(".userId");
const userPw = document.querySelector(".userPassword");

// 1. < input에 값이 입력되면 버튼 활성화 되기 >
// 0) [p1]- input 이벤트는 <input>, <select> 및 <textarea> 요소의 value 속성이 바뀔 때마다 발생한다.
formEl.addEventListener("input", (e) => {
  // 1) 로그인 버튼 활성화
  if (userId.value && userPw.value) {
    btnEl.style.backgroundColor = "#0095f6";
  } else {
    btnEl.style.backgroundColor = "#c0dffd";
  }

  // 2) input에 값 하나라도 입력되면 회색으로
  if (userId.value) {
    userId.style.borderColor = "#ddd";
  }

  if (userPw.value) {
    userPw.style.borderColor = "#ddd";
  }
});

// 2. < id pw 유효성 검사 >
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userId.value.length === 0 || userPw.value.length === 0) {
    return;
  }

  // 아이디 유효성
  if (userId.value.length < 4 || !userId.value.includes("@")) {
    userId.value = "";
    userId.placeholder = "@포함 4글자 이상 입력하세요";
    userId.style.borderColor = "red";
  }

  // 비번 유효성
  if (userPw.value.length < 4) {
    userPw.value = "";
    userPw.placeholder = "비밀번호 4글자 이상 입력하세요";
    userPw.style.borderColor = "red";
  }

  // 버튼 누르면 main창 연동
  if (userPw.value.length >= 4 && userId.value.length >= 4) {
    location.href = "main.html";
  }
});
