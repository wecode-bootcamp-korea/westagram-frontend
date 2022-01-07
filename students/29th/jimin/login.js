const loginId = document.getElementsByClassName("loginId")[0]
const loginPw = document.getElementsByClassName("loginPw")[0]
const loginBtn = document.getElementsByClassName("loginBtn")[0]

function test(){
  loginBtn.disabled = true;
  const loginIdValue = document.getElementsByClassName("loginId")[0].value;
  const loginPwValue = document.getElementsByClassName("loginPw")[0].value;
  
  if ((loginIdValue.length > 0) && (loginPwValue.length > 0)){
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#0095f6";   
  }  
};

loginPw.addEventListener("keyup", test);