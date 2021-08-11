const inputId = document.querySelector(".loginId");
const inputPassword = document.querySelector(".loginPassword");
const loginButton = document.querySelector(".loginBtn");

function loginCondition(event) {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;
    if (idValue.length > 0 && passwordValue.length > 0) {
        loginButton.style.opacity = "1";
        loginButton.style.cursor = "pointer";
    } else {
        loginButton.style.opacity = "0.2";
    }
};

inputId.addEventListener("keyup", loginCondition);
inputPassword.addEventListener("keyup", loginCondition);
