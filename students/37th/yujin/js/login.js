"use strict";

const loginId = document.querySelector('.login-id');
const loginPw = document.querySelector('.login-pw');
const loginBtn = document.querySelector('.login-btn');


// function btnActive(event) {
//     const userId = loginId.value;
//     const userPw = loginPw.value; 

//     event.preventDefault();

//     if(userId && userPw) {
//         loginBtn.classList.add('active');
//     }        
//     else if (!userId || !userPw) {
//         loginBtn.classList.remove('active');
//     }
// }   
// loginId.addEventListener('keyup', btnActive);
// loginPw.addEventListener('keyup', btnActive);

function btnAct() {
    const idValue = loginId.value;
    const pwValue = loginPw.value;

    if((idValue && pwValue) && (idValue.indexOf("@") !== -1) && pwValue.length >= 5) {
        loginBtn.disabled = false;
        loginBtn.classList.add("active");
    } else { 
        loginBtn.disabled = true;
        loginBtn.classList.remove("active");
    }
}


loginId.addEventListener('keyup', btnAct);
loginPw.addEventListener('keyup', btnAct);