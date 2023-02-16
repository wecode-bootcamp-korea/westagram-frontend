let loginIdInput = document.querySelector(".id-input");
let loginPwInput = document.querySelector(".pw-input");
let loginBtn = document.querySelector(".login-btn");

// 키 이벤트 감지 -> 버튼 활성화

function checkInput() {
  if (loginIdInput.value && loginPwInput.value) {
    loginBtn.style.backgroundColor = "#5395E9";
    loginBtn.style.cursor = "pointer";
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}

loginIdInput.addEventListener("keyup", checkInput);
loginPwInput.addEventListener("keyup", checkInput);

// id, pw validation

// 현재 id, pw 입력 시 무조건 로그인 버튼이 활성화 외어 있도록 구현이 되어 있습니다.
// 실제 로그인 하는 경우를 생각하며 validation(유효성 검사) 기능을 추가해주세요.
// ex) id >>> '@' 포함 / pw >>> 5글자 이상

// const regex = /@/;
// regex.test("jangjia01234@gmail.com"); //true

// function checkId() {
//   const regex = /\@/;
//   regex.test(loginIdInput.value) ? console.log("성공") : console.log("실패");
// }

// checkId();
