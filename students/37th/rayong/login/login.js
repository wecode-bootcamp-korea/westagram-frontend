const inputBox = document.querySelector('#inputBox')
const inputId = document.querySelector('#inputId');
const inputPw = document.querySelector('#inputPassword');

function activateButton() {
    if (inputPw.value.length >= 5 && inputId.value.indexOf('@') !== -1) {
        loginBtn.classList.remove('blue');
    } else {
        loginBtn.classList.add('blue')
    }
}

inputBox.addEventListener('keyup', activateButton);