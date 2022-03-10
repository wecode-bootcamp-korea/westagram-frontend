const loginForm = document.querySelector('.loginForm');

loginForm.addEventListener('keydown', checkValidation);

function checkValidation(){
    const id = document.querySelector('.loginForm__id').value;
    const pwdLength = document.querySelector('.loginForm__pwd').value.length;
    const loginBtn = document.querySelector('.loginForm__submit');
    loginBtn.disabled = true;
    id.includes('@') === true && pwdLength >= 5 ?  
        (loginBtn.classList.add('checked') ?  : 
        loginBtn.classList.remove('checked');  
}




