const inputId = document.querySelector('.input__id');
const inputPw = document.querySelector('.input__pw');
const loginBtn = document.querySelector('.login__btn');


function inputFn() {
    if (inputId.value.indexOf('@') !== -1 && inputPw.value.length >= 5) {
        loginBtn.dsiabled === false;
        loginBtn.style.backgroundColor = '#0095F6';
    } else {
        loginBtn.dsiabled === true;
        loginBtn.style.backgroundColor = '#BFE0FD';
    }
}
inputId.addEventListener('keyup', inputFn);
inputPw.addEventListener('keyup', inputFn);
