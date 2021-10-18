"use strict";

const inputs = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.getElementById("loginButton");

function handleInput() {
    const idValue = document.getElementById("id").value;
    const pwValue = document.getElementById("pw").value;

    const isValidId = checkId(idValue);
    const isValidPw = checkPw(pwValue);

    if (isValidId && isValidPw) {
        handleBtn(true);
    } else {
        handleBtn(false);
    }
}

function checkId(value) {
    if (value.length > 0)
 {
     return true;
 } else {
     return false;
 }
} 

function checkPw(value) {
    if (value.length > 0)
    {
        return true;
    } else {
        return false;
    }
}

function handleBtn(btnValid) {
    if (btnValid) {
        loginBtn.disabled = false;
        loginBtn.style.opacity = 1;
        loginBtn.style.cursor = "pointer"

        if (window.event.code === "Enter") {
            success();
        }
 } else {
     loginBtn.disabled = true;
     loginBtn.style.opacity = 0.5;
     loginBtn.style.cursor = "default";
 }
}

function success() {
    alert("환영합니다!");
};

const init = () => {
    inputs.addEventListener("input", handleInput);
    inputs.addEventListener("keyup", handleInput);
    loginBtn.addEventListener("click", success);
};


init();