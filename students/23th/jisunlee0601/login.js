const loginForm = document.querySelector(".inputContainer");
const inputId = document.querySelector("#loginID");
const inputPw = document.querySelector("#loginPW");
const loginSubmitBtn = document.querySelector(".loginSubmitBtn");
const idValue = inputId.value;
const pwValue = inputPw.value;

function buttonStyle() {
    if(idValue.length > 0 && pwValue.length > 0){
        loginSubmitBtn.disabled = false;
        loginSubmitBtn.style.opacity = "1";
        loginSubmitBtn.style.cursor = "pointer";
    } else {
        loginSubmitBtn.disabled = true;
        loginSubmitBtn.style.opacity = "0.3";
        loginSubmitBtn.style.cursor = "default";
    }
}

loginForm.addEventListener("input", buttonStyle);