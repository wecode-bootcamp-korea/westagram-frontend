const getId = document.querySelector('.inputId');
const getPassword = document.querySelector('.inputPassword');
const loginButton = document.querySelector('.loginButton');

function logout() {
    if (!getId.value || !getPassword.value) {
        loginButton.disabled = true;
        loginButton.style.backgroundColor = '#C0DFFD';
        loginButton.style.cursor = 'default';
    } else if (getId.value && getPassword.value) {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = '#1976d2';
        loginButton.style.cursor = 'pointer';
    };
}


getId.addEventListener('keyup', logout);
getPassword.addEventListener('keyup', logout);