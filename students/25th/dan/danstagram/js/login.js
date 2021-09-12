"use strict";

const loginForm = document.getElementById('loginForm');
const btnLogin = document.getElementById('btnLogin');

// id 조건 체크
function checkId(value){
  return (value.length > 0 ? true : false);
}

// pw 조건 체크
function checkPw(value){
  return (value.length > 0 ? true : false);
}

// id 조건 && pw 조건이 모두 일치하는 지 체크
function checkAllInput(){
  const valueId = document.getElementById('userId').value;
  const valuePw = document.getElementById('userPw').value;

  const isValueId = checkId(valueId);
  const isvaluePw = checkPw(valuePw);
 
  if (isValueId && isvaluePw) {
    Login(true);
  } else {
    Login(false);
  }
}

// id 조건 && pw 조건에 따른 스타일 클래스 추가, 제거
function Login(checkAllInput){
  const btnStyle = btnLogin.classList;
  checkAllInput ? btnStyle.add('active') : btnStyle.remove('active');
  btnLogin.disalbed = !checkAllInput;
}

const init = () => {
  loginForm.addEventListener('input',checkAllInput)
};

init();
