const form = document.getElementById("facebookForm");
const btn = document.querySelector("button.login");
const inputId = document.querySelector("input.idInputStyle");
const inputPwd = document.querySelector("input.pwdInputStyle");



btn.disabled = true;

form.addEventListener("keyup", () => {
    if(inputId.value.length >=1 && inputPwd.value.length>=1) {
        btn.disabled = false
        btn.style.backgroundColor ='#0095f6'
    }else {
        btn.disabled = true
        btn.style.backgroundColor ='rgba(var(--d69,0,149,246),.3)'
    }
});



// function logIn() {
//     if(inputId.value.length >5 && inputPwd.value.length>5) {
//         btn.disabled = 'false'
//         btn.style.backgroundColor ='#0095f6'
//     }else {
//         btn.disabled = 'true'
//     }
// }


// 왜 안될까?? 이유 변수로 활당한것이기 때문에 addEventListner 위로 위치해야함

// const logIn = () => {
//     if(inputId.value.length >5||inputPwd.value.length>5) {
//         btn.disabled = false
//         btn.style.backgroundColor ='#0095f6'
//     }else {
//         btn.disabled = true
//     }
// }