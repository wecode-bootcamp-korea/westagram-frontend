const inputId = document.querySelector("#login-id");
const inputPassword = document.querySelector("#login-pwd");
const button = document.querySelector(".login-btn");

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    }else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#C4E1FB";
    }
}

function loginSuccess() {
    alert('로그인 성공!');
    inputId.value = null;
    inputPassword.value = null;
    button.disabled = true;
    button.style.cursor = "default";
    button.style.backgroundColor = "#C4E1FB";
}

function newPage() {
    window.location.herf = "https://www.naver.com"
}

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);
button.addEventListener('click', loginSuccess);