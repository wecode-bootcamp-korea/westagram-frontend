const getId = document.querySelector('.inputId');
const getPassword = document.querySelector('.inputPassword');
const loginButton = document.querySelector('.loginButton');
const idBox = document.querySelector('.inputIdBox');
const pwBox = document.querySelector('.inputPasswordBox');



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

function idValidation () {

    let idInclude = getId.value.includes('@')
    if (idInclude === false) {
        
        let idMessage = document.createElement('div')
        idBox.appendChild(idMessage)
        idMessage.innerHTML = '이메일을 확인해주세요.'
    } 
};

function pwAlidation () {

    let pwInclude = getPassword.value.length
    if (pwInclude < 8) {
        
        let pwMessage = document.createElement('div')
        pwBox.appendChild(pwMessage)
        pwMessage.innerHTML = '비밀번호를 확인해주세요'
    } 
};


getId.addEventListener('keyup', logout);
getPassword.addEventListener('keyup', logout);

loginButton.addEventListener('click', idValidation);
loginButton.addEventListener('click', pwAlidation);
