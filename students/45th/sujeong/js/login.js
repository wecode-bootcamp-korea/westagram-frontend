/** @format */
const loginId = document.getElementsByClassName("loginId")[0]
const loginPw = document.getElementsByClassName("loginPw")[0]
const loginBt = document.getElementsByClassName("loginBt")[ 0 ] 

loginId.addEventListener("keyup", loginBtnOn);
loginPw.addEventListener("keyup", loginBtnOn);

function loginBtnOn () { 

const IdValue = loginId.value;
const PwValue = loginPw.value;

  function btnOff () {
    loginBt.classList.remove("loginBt_on")
  };
  
  function btnOn () {
    loginBt.classList.add("loginBt_on")
  };

  (IdValue == "" || PwValue == "" ? btnOff() : btnOn());

  (IdValue.includes("@") === true && PwValue.length >= 5 ? btnOn() : btnOff());
}