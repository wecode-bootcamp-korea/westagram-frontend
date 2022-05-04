const loginArea = document.querySelector('.login-area');
const emailInput = document.querySelector('#email-input');
const pswInput = document.querySelector('#psw-input');
const loginBtn = document.querySelector('.login-btn');

loginArea.addEventListener('keyup',(e)=>{
    if(emailInput.value.length > 0 && pswInput.value.length > 0){
        loginBtn.classList.add('btn-active');
        loginBtn.disabled = false;
    }else{
        loginBtn.classList.remove('btn-active');
        loginBtn.disabled = true;
    }
})

