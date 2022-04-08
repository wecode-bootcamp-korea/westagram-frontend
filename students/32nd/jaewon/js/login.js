const loginId = document.querySelector('.input__id');
const loginPw = document.querySelector('.input__pw');
const loginBtn = document.querySelector('.login__btn');


function login() {
    if (loginId.value.indexOf('@') !== -1 && loginPw.value.length >= 5) {
        loginBtn.dsiabled === false;
        loginBtn.style.backgroundColor = '#0095F6';
    } else {
        loginBtn.dsiabled === true;
        loginBtn.style.backgroundColor = '#BFE0FD';
    }
}
loginId.addEventListener('keyup', login);
loginPw.addEventListener('keyup', login);
