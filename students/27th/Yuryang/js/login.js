"use strict";

// 로그인 버튼을 누르면 main.html로 연결

// id,pw 각각 한 글자 이상 써야 버튼이 활성화
// 활성화 되면 연한 파란색 -> 파란색
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login");
const input = document.querySelector("#input");

id.addEventListener("keyup", function (event) {
  if (!!id.value && !!password.value) {
    loginBtn.removeAttribute("disabled", false);
    loginBtn.style.backgroundColor = "#499ee9";
  } else !id.value && !password.value;
  button.removeAttribute("disabled", true);
  button.style.backgroundColor = "#c4e1fb";
});

password.addEventListener("keyup", function (event) {
  if (!!id.value && !!password.value) {
    loginBtn.removeAttribute("disabled", false);
    loginBtn.style.backgroundColor = "#499ee9";
  } else !id.value && !password.value;
  button.removeAttribute("disabled", true);
  button.style.backgroundColor = "#c4e1fb";
});

// function goToMain() {
//   loaction.href = "main.html";
// }
