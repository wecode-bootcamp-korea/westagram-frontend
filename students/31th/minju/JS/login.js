const loginForm = document.querySelector('.loginForm');

const checkValidation = () => {
    const id = document.querySelector('.loginForm__id').value;
    const pwd = document.querySelector('.loginForm__pwd').value;
    const loginBtn = document.querySelector('.loginForm__submit');
    loginBtn.disabled = true;
    
    if(id.includes('@') && pwd.length >= 5){
        loginBtn.classList.add('checked');
        loginBtn.disabled = false;
    }else{
        loginBtn.classList.remove('checked');
    }
}

loginForm.addEventListener('keyup', checkValidation);






