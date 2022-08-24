const inputBox = document.querySelector('#inputBox')
const inputId = document.querySelector('#inputId');
const inputPw = document.querySelector('#inputPassword');

function activateButton() {
    if (inputId.value && inputPw.value) {
        loginBtn.classList.remove('blue');
    }
    return;
}

inputBox.addEventListener('keyup', activateButton);