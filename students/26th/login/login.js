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



const inputId = document.getElementsByClassName('userId')[0];
const inputPw = document.getElementsByClassName('userPw')[0];
const button = document.getElementsByClassName('loginBtn')[0];

let userIdValue = '';
let userPwValue = '';

inputId.addEventListener('input', function checkId (event) {
    userIdValue = event.target.value;
});

inputPw.addEventListener('input', function checkPw (event) {
    userPwValue = event.target.value;

    if(userIdValue && userPwValue){
        button.style.backgroundColor = 'rgb(65,147,239)';
    } else {
        button.style.backgroundColor = 'rgb(198,222,250)';
    }
});


//click event 추가?


// const inputId = document.getElementsByClassName('userId')[0];
// const inputPw = document.getElementsByClassName('userPw')[0];
// const button = document.getElementsByClassName('loginBtn')[0];

// let userIdValue = '';
// let userPwValue = '';

// inputId.addEventListener('keyup', function checkId (event) {
//     userIdValue = event.target.value;
// });

// inputPw.addEventListener('keyup', function checkPw (event) {
//     userPwValue = event.target.value;

//     if(userIdValue && userPwValue){
//         button.style.backgroundColor = 'rgb(65,147,239)';
//     } else {
//         button.style.backgroundColor = 'rgb(198,222,250)';
//     }
// });