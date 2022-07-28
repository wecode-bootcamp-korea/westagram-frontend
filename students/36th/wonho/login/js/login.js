const button = document.querySelector('button');
const input = document.querySelector('input')[0];
const id = document.querySelector('#username');
const pw = document.querySelector('#password');

function activateButton() {
    switch(!(id.value && pw.value)) {
        case true:
            button.setAttribute('disabled','');
            button.style.opacity = 0.5;
        break;
        case false:
            button.removeAttribute('disabled')
            button.style.opacity = 1;
        break;
    }
}

username.addEventListener('keyup', activateButton);
password.addEventListener('keyup', activateButton);