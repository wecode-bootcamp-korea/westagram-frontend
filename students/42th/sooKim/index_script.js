// "use strict";

// const inputId = document.getElementById('id');
const inputId = document.querySelector(".userId")
const inputPw = document.querySelector(".userPw")
const loginBtn = document.querySelector('#btn');


function colorOnOff (){
  if(inputId.value.length >= 1 && inputPw.value.length >= 1){
    loginBtn.style.backgroundColor = '#3E7FDE';
    loginBtn.disabled = false;
  }
  else{
    loginBtn.style.backgroundColor = '#8CB4F0';
    loginBtn.disabled = true;
  }
}

inputPw.addEventListener('keyup', colorOnOff);

function goMain(){
  location.href = "main.html";
}

