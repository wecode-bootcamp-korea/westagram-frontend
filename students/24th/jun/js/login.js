// 첫번째 방법
// const inputId = document.querySelector(".loginId");
// const inputPw = document.querySelector(".loginPw");
//
// const revitalizeBtn = document.querySelector(".loginBtn");
// inputPw.addEventListener("keydown", () => {
//     if (inputId.value && inputPw.value) {
//         revitalizeBtn.disabled = false;
//         revitalizeBtn.style.backgroundColor = "#4390E7";
//     }
// });
// inputId.addEventListener("keydown", () => {
//     if (inputId.value && inputPw.value) {
//         revitalizeBtn.disabled = false;
//         revitalizeBtn.style.backgroundColor = "#4390E7";
//     }
// });

// inputPw.addEventListener("focusout", () => {
//     if (inputId.value == "" || inputPw.value == "") {
//         revitalizeBtn.disabled = true;
//         revitalizeBtn.style.backgroundColor = "#c4e1fb";
//     }
// });
// inputId.addEventListener("focusout", () => {
//     if (inputPw.value == "" || inputId.value == "") {
//         revitalizeBtn.disabled = true;
//         revitalizeBtn.style.backgroundColor = "#c4e1fb";
//     }
// });

const loginTable = document.querySelector('.loginTable');
const inputId = document.querySelector('.loginId');
const inputPw = document.querySelector('.loginPw');
const loginBtn = document.querySelector('.loginBtn');

const checkF = (e) => {
    if(inputId.value.includes('@') && inputPw.value.length >= 5 ? 
        loginBtn.disabled = false : loginBtn.disabled = true){
            loginBtn.style.backgroundColor = "#c4e1fb";
        } else {
            loginBtn.style.backgroundColor = "#4390E7";
        }
    }
    
loginTable.addEventListener('keyup', checkF);
