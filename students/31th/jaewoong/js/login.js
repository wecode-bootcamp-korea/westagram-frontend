"use strict";

const username = document.querySelector('.username');
const pwd = document.querySelector('.pwd');
const loginBtn = document.querySelector('.loginBtn');
const BTN_ACTIVATE ="btnActivate";

const loginBtnActivate=()=>{
  loginBtn.classList.add(BTN_ACTIVATE);
  loginBtn.disabled=false;
}

const loginBtnDectivate=()=>{
  loginBtn.classList.remove(BTN_ACTIVATE);
  loginBtn.disabled=true;
}

const btnColorHandler = (e) =>{
  e.value=username.value;
  username.value && pwd.value
  ? loginBtnActivate()
  : loginBtnDectivate()
}

const checkId=()=>{
  if(username.value.indexOf("@")== -1)
    return false;
  else
    return true;
}

const checkPwd=()=>{
  if(pwd.value.length<5)
    return false;
  else
    return true;
}

const loginSuccess=()=>{
  localStorage.setItem("ID",username.value);
  window.location ="main.html"
}

const loginInfoHandler =(e)=>{
  e.preventDefault();
  checkId() && checkPwd()
  ? loginSuccess()
  : alert("사용자이름에는 @이 포함되어야 하며 비밀번호는 5글자 이상 입력해주셔야 합니다.")
}

const init=()=>{
  username.addEventListener("input",btnColorHandler);
  pwd.addEventListener("input",btnColorHandler);
  loginBtn.addEventListener("click", loginInfoHandler);
}

init();