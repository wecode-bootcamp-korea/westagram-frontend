//수업 참고하여 작성한 코드

"use strict";

const inputs = document.getElementsByClassName('loginForm')[0];
const loginBtn = document.getElementById('loginBtn');

function handleInput (){
    const idValue = document.getElementById('id').value;
    const pwValue = document.getElementById('pw').value;
    
    if (idValue.length > 0 && pwValue.length >0){
        handleBtn(true);
    } else {
        handleBtn(false);
    }
}

function handleBtn (value){
    loginBtn.disabled = value ? false : true;
    loginBtn.style.backgroundColor = value ? '#4192ef' : '#c6defa';
    loginBtn.style.cursor = value ? 'pointer' : 'default';
}

const init = () => {
    inputs.addEventListener('input', handleInput);
}

init();


//수업 전 시도했던 방법

// const inputId = document.getElementsByClassName('userId')[0];
// const inputPw = document.getElementsByClassName('userPw')[0];
// const button = document.getElementsByClassName('loginBtn')[0];

// let userIdValue = '';
// let userPwValue = '';

// const checkId = (e) => {
//     userIdValue = e.target.value;
// }

// const checkPw = (e) => {
//     userPwValue = e.target.value;
//     if(userIdValue && userPwValue) {
//         button.style.backgroundColor = 'rgb(65,147,239)';
//     } else {
//         button.style.backgroundColor = 'rgb(198,222,250)'
//     }
// }

// inputId.addEventListener('input', checkId);
// inputPw.addEventListener('input', checkPw);