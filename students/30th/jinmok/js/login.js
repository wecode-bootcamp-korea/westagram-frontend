'use strict';

const nameInput = document.getElementsByTagName('input')[0];
const passwordInput = document.getElementsByTagName('input')[1];
const namePlaceholder = document.getElementsByClassName('input-placeholder')[0];
const passwordPlaceholder = document.getElementsByClassName('input-placeholder')[1];
const visiblePassword = document.getElementById('visible-password');
const passwordDiv = document.getElementsByClassName('password-input')[0];
const loginBtn = document.querySelector("#login-btn");

function activateBtn(passwordInputValueLength, nameInputValueLength = 1) {
    if(passwordInputValueLength > 5 && nameInputValueLength > 0) {
        loginBtn.style.backgroundColor = '#0095F6';
        loginBtn.style.cursor = "pointer";
    } else {
        loginBtn.style.backgroundColor = '#c5e0fc';
        loginBtn.style.cursor = "default";
    }
}

function visualizePassword() {
    if (passwordInput.type === 'password'){
        visiblePassword.innerHTML = "비밀번호 표시";
    } else if (passwordInput.type === 'text') {
        visiblePassword.innerHTML = "숨기기";
    }
}

function keypressInput(input, placeholder) {
    input.style.transform = 'translateY(5px)'
    placeholder.style.fontSize = '10px';
    placeholder.style.transform = 'translateY(-9px)';
}

function eraseInput(input, placeholder) {
    input.style.transform = 'translateY(-1px)';
    placeholder.style.fontSize = '12px';
    placeholder.style.transform = 'translateY(0.1px)';
}

function keypressNameInput(e) {
    if(e.code !== "Enter"){
        keypressInput(nameInput, namePlaceholder);
        activateBtn(passwordInput.value.length);
    }
}

function earaseNameInput() {
    if(nameInput.value === '') {
        eraseInput(nameInput, namePlaceholder);
        activateBtn(passwordInput.value.length, nameInput.value.length);
    }
}

function keypressPasswordInput(e) {
    if(e.code !== "Enter"){
        keypressInput(passwordInput, passwordPlaceholder);
        visualizePassword();
        activateBtn(passwordInput.value.length, nameInput.value.length);
        passwordInput.style.width = String(passwordDiv.offsetWidth - visiblePassword.offsetWidth-30)+'px';
    }
}

function earasePasswordInput() {
    if(passwordInput.value === '') {
        eraseInput(passwordInput, passwordPlaceholder);
        visiblePassword.innerHTML = "";
    }
    activateBtn(passwordInput.value.length, nameInput.value.length);
}


nameInput.addEventListener('keyup', earaseNameInput);
nameInput.addEventListener('keypress', keypressNameInput);
passwordInput.addEventListener('keyup', earasePasswordInput);
passwordInput.addEventListener('keypress', keypressPasswordInput);

visiblePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password'){
        passwordInput.type = "text";
        visiblePassword.innerHTML = "숨기기";
    } else if (passwordInput.type === 'text') {
        passwordInput.type = "password";
        visiblePassword.innerHTML = "비밀번호 표시";
    }
})

