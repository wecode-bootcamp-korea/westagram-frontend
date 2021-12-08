'use strict';

const idInput = document.getElementById('login_id'),
    pwInput = document.getElementById('login_pw');
const loginBtn = document.getElementById('login_btn');


const isActiveLogin = () => {
    let idValue = idInput.value;
    let pwValue = pwInput.value;

    if(
        (idValue && pwValue) && (pwValue.length > 4)
    ) {
        loginBtn.classList.add('login_active');
    }
    else {
        loginBtn.classList.remove('login_active');
    }
    
}

idInput.addEventListener('keyup', isActiveLogin);
pwInput.addEventListener('keyup', isActiveLogin);