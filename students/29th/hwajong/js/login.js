const loginId = document.querySelector('.login-id');
const loginPwd = document.querySelector('.login-password');
const loginBtn = document.querySelector('.btn');



function activateButton(event) {
    if (loginPwd.value === '' || loginId.value === ''){
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = '#acd5e8';
    } else {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = '#458eff';
    }
}

loginId.addEventListener('keydown', activateButton);
loginPwd.addEventListener('keydown', activateButton);