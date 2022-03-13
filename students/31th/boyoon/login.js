//"use strict"; // 자바스크립트는 유동적인 언어이기 때문에, 이러한 유동성 때문에 JS에서 에러가 발생할 가능성이 높아서 씁니다.

// [Mission2] id, pw 입력 시 로그인 버튼 활성화 기능

const inputId = document.querySelector("input#id");
const password = document.querySelector("input#password");
const btn = document.querySelector(".btn");

// 함수 선언식 
function loginBtn() {
  westaId = inputId.value;
  westaPassword = password.value;

  if (westaId.length > 0 && westaPassword.length > 0) {
    btn.disabled = false;
    btn.style.backgroundColor = "#0096F6";
    btn.style.cursor = "pointer";
  }else {
    btn.disabled = true;
    btn.style.backgroundColor = "#C0DFFD";
    btn.style.cursor = "default";
  }
}


inputId.addEventListener("keyup", loginBtn);
password.addEventListener("keyup", loginBtn);

// 웹페이지 만들때 keyup 이외에도 마우스로 클릭 복사 등으로 로그인할 수 있기 때문에, 
inputId.addEventListener("input", loginBtn);
password.addEventListener("input", loginBtn);
