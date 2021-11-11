const loginForm = document.querySelector('.loginForm');

function loginOn() {
    const userId = document.querySelector('.userId').value;
    const password = document.querySelector('.password').value;
    const loginBtn = document.querySelector('.loginBtn');

    if (userId.indexOf('@') > -1 && password.length >= 5) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#0095f6';
        loginBtn.style.cursor = 'pointer';
    } else if (userId.length === 0 || password.length < 5) {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = '#b2dffc';
        loginBtn.style.cursor = 'default';

    }

}

loginForm.addEventListener('keyup', loginOn);
