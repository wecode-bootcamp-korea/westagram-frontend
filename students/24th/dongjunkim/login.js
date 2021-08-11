const inputContainer = document.getElementsByClassName("input-container")[1];
const idInput        = document.getElementById('id-input');
const passwordInput  = document.getElementById('password-input');
const loginBtn       = document.getElementById('login-btn');


inputContainer.addEventListener('keyup', function(event){
    if(idInput.value.length >= 1 && passwordInput.value.length >= 1) {
        loginBtn.style.opacity = 1;
    }else{
        loginBtn.style.opacity = 0.3;        
    }
});