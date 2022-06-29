const loginId = document.querySelector(".login-id");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-btn");


function inputValue(){
    if(loginId.value.length > 0 && loginPassword.value.length > 0){
        loginBtn.classList.add('onBtn');
    }else{
        loginBtn.classList.remove('onBtn');
    }
        
}
loginId.addEventListener('keyup',inputValue)
loginPassword.addEventListener('keyup',inputValue )