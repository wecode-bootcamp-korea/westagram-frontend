const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("button");

function loginBtnAble() {
    let idValue = idInput.value
    let passwordValue = passwordInput.value
    
    if (idValue.length > 0 && passwordValue.length > 5 ){
        loginBtn.disabled = false;
    }else {
        loginBtn.disabled = true;
    }}

    
    idInput.addEventListener('keyup', loginBtnAble)
    passwordInput.addEventListener('keyup', loginBtnAble)