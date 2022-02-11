/* 
// button 클릭 이벤트 - 이벤트 위임 활용 전
function btnAbled() {
  if (idInput.value && pwInput.value) {
    loginBtn.disabled = false;
    loginBtn.classList.add("submit-button-after");
  } else {
    loginBtn.disabled = true;
    loginBtn.classList.remove("submit-button-after");
  }
}
*/

"use strict";

const loginForm = document.querySelector(".loginForm");
const loginBtn = document.querySelector(".loginBtn");

// button 이벤트
function handleBtn(btnValid) {
  // 파라미터 : true, false 일때 요소+Valid
  // 1) 버튼 변경
  loginBtn.disabled = !btnValid; // 반대값
  loginBtn.style.opacity = btnValid ? 1 : 0.5; // true 1, false 0.5
  loginBtn.style.cursor = btnValid ? "pointer" : "default"; // default - 마우스 커서
  // 2) 페이지 이동
  // Q> window.event 를 쓴 이유 : 클릭 후 어디서든 엔터치면 이동? window.event 정확한 의미는 브라우저 어디에서나? 인지
  if (window.event.code === "Enter") {
    success();
  }
}

// id 검사 - @ 포함 / 통과 true / X false
function checkId(value) {
  if (value.includes("@")) {
    return true;
  } else {
    return false;
  }
}

// pw 검사 - 5자 이상 / 통과 true / X false
function checkPw(value) {
  if (value.length >= 5) {
    return true;
  } else {
    return false;
  }
}

// input 이벤트
/*Q> 사실 button에도 해당 이벤트가 걸려있는건가?
A 요소에 따라 B가 바뀐다. 라고 하려면 이벤트 위임이 좋은가?*/

function handleInput() {
  // 1. value를 받아온다
  const idValue = document.querySelector("#id").value;
  const pwValue = document.querySelector("#password").value;
  // 2. id, pw 유효성 검사
  const isValidId = checkId(idValue); // id 검사
  const isValidPw = checkPw(pwValue); // pw 검사
  // 3. 결과에 따라 버튼 live
  if (isValidId && isValidPw) {
    handleBtn(true);
  } else {
    handleBtn(false);
  }
}

// 페이지 이동
function success() {
  alert("환영합니다!");
  location.href = "./main.html";
  // location.replace = "./main.html";
  // window.location.pathname = "./main.html";
  // Q> href는 window 안붙이고, pathname은 window 붙이는 이유?
}

const init = () => {
  loginForm.addEventListener("keyup", handleInput); // 일반적인 키입력
  loginForm.addEventListener("input", handleInput); // 복붙 CASE / input 혹은 textarea 요소에 값이 변경되었을 때
  loginBtn.addEventListener("click", success);
};

init();
