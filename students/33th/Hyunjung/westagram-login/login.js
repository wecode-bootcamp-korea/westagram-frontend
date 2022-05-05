const inputId = document.getElementsByClassName("inputDecoration")[0];
const inputPw = document.getElementsByClassName("inputDecoration")[1];
const buttonLogin = document.querySelector(".buttonLogin");

function activateOnOff(){
    if(inputId.value && inputPw.value){
        buttonLogin.classList.add('btnActive');
        buttonLogin.disabled = false;
    }else{
        buttonLogin.classList.remove('btnActive');
        buttonLogin.disabled = true;
    }
} 

inputId.addEventListener('keyup',activateOnOff);
inputPw.addEventListener('keyup',activateOnOff);


