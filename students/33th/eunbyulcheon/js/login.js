
const loginForm = document.querySelector('#input-box');
const loginId = document.querySelector('#user-id');
const loginPw = document.querySelector('#user-password');
const loginBtn = document.querySelector('button');
const loginErrorMsg = document.querySelector('.login-error-msg');

loginForm.addEventListener('submit', showErrorMsg);

function showErrorMsg(event) {
    event.preventDefault();

    const username = loginId.value;
    const password = loginPw.value;
    
    if (username === '' || password === '') {
        loginErrorMsg.classList.remove('hidden');
    } else if (username.length > 1 && password.length > 1) {
        loginErrorMsg.classList.add('hidden');
    }
}

loginId.addEventListener('keyup', validateLogin);
loginPw.addEventListener('keyup', validateLogin);

function validateLogin() {
    const username = loginId.value.length;
    const password = loginPw.value.length;

    if (username > 1 && password > 1) {
        loginBtn.style.backgroundColor = 'hsl(204, 100%, 48%)';
    }
}
