"use strict"

const thisIsEmail = document.getElementById('login-email');
const thisIsPw = document.getElementById('login-pw');
const thisIsBtn = document.getElementById('login-btn');

function loginBtn() {
    let idValue = thisIsEmail.value;
    let pwValue = thisIsPw.value;

    if (idValue.length > 0 && pwValue.length > 0) {
        thisIsBtn.disabled = false;
        thisIsBtn.style.cursor = "pointer";
        thisIsBtn.style.backgroundColor = "#0096f6";
    } else {
        thisIsBtn.disabled = true;
        thisIsBtn.style.cursor = "default";
        thisIsBtn.style.backgroundColor = "#c4e1fb";
    }
};

function success() {
    alert("환영합니다");
};

const init = () => {
    thisIsEmail.addEventListener('keyup', loginBtn);
    thisIsPw.addEventListener('keyup', loginBtn);
    thisIsBtn.addEventListener("click", success);
};
init();