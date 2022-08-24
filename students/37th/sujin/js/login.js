const inputArea = document.querySelector('.input-area');
const idInput = document.querySelector('.input-id');
const pwInput = document.querySelector('.input-pw');
const loginButton = document.querySelector('.btn-login');

idInput.addEventListener('keyup', activeLoginButton);
pwInput.addEventListener('keyup', activeLoginButton);
loginButton.addEventListener('click', testValidation);

function activeLoginButton(){
    switch(!(idInput.value && pwInput.value)){
        case true : loginButton.disabled = true; break;
        case false : loginButton.disabled = false; break;
    }
}

function testValidation(e){
    e.preventDefault();

    if(!(idInput.value.includes('@') && pwInput.value.length >= 5)){
        inputArea.classList.add('error');
    } else {
        location.href='./main.html';
    }
    
}










