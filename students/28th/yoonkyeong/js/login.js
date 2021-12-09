const inputId = document.querySelector("#id_input");
const inputPassword = document.querySelector("#password");
const button = document.querySelector("#btn-login");
const body = document.querySelector("body");

function activateLoginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
};

function clickLoginBtn() {
    location.href="main.html";
};
function enterLogin(e) {
    if (e.keyCode==13 && button.disabled === false) {
        clickLoginBtn();
    };
};

window.addEventListener('keydown',einterLogin);
inputId.addEventListener('keyup', activateLoginBtn);
inputPassword.addEventListener('keyup', activateLoginBtn);
