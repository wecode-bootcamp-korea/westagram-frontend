const loginWrap = document.querySelector('.loginWrap');
const loginInput = document.querySelector('.loginInput');
const passwordInput = document.querySelector('.passwordInput');
const buttonDefault = document.querySelector('.btnDefalut');

function handleLogin(){
    const loginValue = loginInput.value;  
    const passwordValue = passwordInput.value;
    loginValue.length > 0 && passwordValue.length > 0 
    ? buttonDefault.classList.add('btnChageBlue')
    : buttonDefault.classList.remove('btnChageBlue');
}

loginWrap.addEventListener('keyup', handleLogin);