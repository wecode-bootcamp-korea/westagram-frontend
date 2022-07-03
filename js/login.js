"use strict";

const input = document.getElementsByClassName("loginForm")[0];
const loginBtn = document.getElementById("loginBtn");

const handleInput = ( ) => {
    const idValue = document. getElementById("id").value;
    const pwValue = document. getElementById("pw").value;

    const isValidId = checkValue(idValue);
    const isValidpw = checkValue(pwValue);

    const isValidValue = isValidId && isValidpw;

    if(isValidValue){
        handleBtn(true);
    } else {
        handleBtn(false);
    }
};

const checkValue = (value) => {
    if (value.length > 0) {
        return true;
    } else {
        return false;
    }
};

const handleBtn = (isBtnValid) => {
    id(isBtnValid){
        loginBtn.disabled = false;
        loginBtn.style.opacity = 1;
        loginBtn.style.cursor = "pointer";

        if(window.event.code === "Enter"){
            success();
        }
    } else{
        loginBtn.disabled = true;
        loginBtn.style.opacity = 0.5;
        loginBtn.style.cursor="default";
    }
}

const success = () => {
    location.href = "http://127.0.0.1:5500/main.html";
};

const init = () => {
input.addEventListener("input", handleInput);
input.addEventListener("keyup", handleInput);
loginBtn.addEventListener("click", success);
};

init();