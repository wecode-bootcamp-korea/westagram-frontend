/** @format */
const loginId = document.getElementsByClassName("loginId")[0]
const loginPw = document.getElementsByClassName("loginPw")[0]
const loginBt = document.getElementsByClassName("loginBt")[ 0 ] 

loginId.addEventListener("keyup", loginBtnOn);
loginPw.addEventListener("keyup", loginBtnOn);

function loginBtnOn () {
  (loginId.value == "" || loginPw.value == "" ? loginBt.classList.remove("loginBt_on") : loginBt.classList.add("loginBt_on"))
  
  loginId.value.includes("@") === true && loginPw.value.length >= 5 ? loginBt.classList.add("loginBt_on") : loginBt.classList.remove("loginBt_on")

}
