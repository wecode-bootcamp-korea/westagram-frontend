/** @format */
function loginForm (x) {
  return document.getElementsByClassName(x)[0]
}

loginForm("loginId").addEventListener("input", loginBtnOn)
loginForm("loginPw").addEventListener("input", loginBtnOn);

function loginBtnOn () { 

  const IdValue = loginForm("loginId").value;
  const PwValue = loginForm("loginPw").value;

  function btnOff () {
    loginForm("loginBtn").classList.remove("loginBtn_on")
  };

  function btnOn () {
    loginForm("loginBtn").classList.add("loginBtn_on")
  }

  (IdValue && PwValue && IdValue.includes("@") && PwValue.length >= 5 ? btnOn() : btnOff() );

}