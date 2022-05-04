const inputId = document.querySelector('#id_field');
const inputPassword = document.querySelector('#pw_field');
const button = document.querySelector('.login_btn');

function loginBtn(){
    let idValu = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValu  && passwordValue){
        button.disabled = false;
        button.style.cursor = 'pointer';
        button.style.backgroundColor = '#1c7ed6';
    }else{
        button.disabled =true;
        button.style.cursor ='default';
        button.style.backgroundColor = '#bfdffd';
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);