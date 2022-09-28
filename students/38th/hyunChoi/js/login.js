const inputId = document.querySelector('#id');
const inputPassword = document.querySelector('#password');
const button = document.querySelector('#LogInButton');

function loginBtn(){
    let idValu = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValu.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.backgroundColor = '#3e3efe';
        button.style.cursor = 'pointer';
    }else {
        button.disabled = true;
        button.style.backgroundColor = '#3ecefe';
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);