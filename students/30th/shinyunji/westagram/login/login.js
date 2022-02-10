const inputId = document.getElementById('inputId');
const inputPw = document.getElementById('inputPw');
const btnLogin = document.getElementById('btnLogin');
const divBorder = document.getElementById('border');

divBorder.addEventListener('keyup', function(){
    return (inputId.value)&&(inputPw.value) ? btnLogin.style.backgroundColor = "#0395F6"
    : btnLogin.style.backgroundColor = "#c4e1fb" ;
})