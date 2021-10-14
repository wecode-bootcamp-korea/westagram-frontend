//login.js

// const userPw = document.getElementsByClassName('userPw')[0];
// const userId = document.getElementsByClassName('userId')[0];

// const valueId = userId.addEventListener("keydown",function(e){
//     userId.value = e.code;
// })
// const valuePw = userPw.addEventListener("keydown",function (e){
//     userPw.value = e.code;
// })

// valueId && valuePw ? document.getElementsByClassName('loginBtn').style.opacity = 1 : false;

// const idValue = document.getElementById('userId');
// const pwValue = document.getElementById('userPw');
const loginfrm = document.querySelector('.loginFrm');
const input = document.querySelectorAll('input');
const button = document.querySelector('button');

loginfrm.addEventListener("keyup", function (){
    Array.from(input).forEach(function(elem){

    });

})

// Array.from(input).forEach(elem => console.log(elem.value));