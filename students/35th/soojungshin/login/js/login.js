"use strict";


const loginId = document.getElementById("loginId")
const loginPw = document.getElementById("loginPw")

const loginConfirm = document.getElementById("loginConfirm")


function checkIdPw() {
  if (loginId.value.includes("@") && loginPw.value.length >= 6) {
    return loginConfirm.style.backgroundColor = "#3e89ee"
  } else if (!(loginId.value.includes("@")) || loginPw.value.length < 6) {
    //loginId값에 @가 빠지거나, loginPw의 length가 6자리 이하일 경우 버튼이 원래대로 돌아오는 코드 추가
    return loginConfirm.style.backgroundColor = ""
    //백그라운드 컬러 값 원복
  }
}

loginId.addEventListener("keyup", checkIdPw)
loginPw.addEventListener("keyup", checkIdPw)
