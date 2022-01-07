const inputId = document.querySelector(".id");
const inputPassword = document.querySelector(".password");
const button = document.querySelector(".button");

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if (idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.backgroundColor = "#1c7ed6";
    }
    else {
        button.disabled = true;
        button.style.backgroundColor = "#bfdffd";
    }
};

inputId.addEventListener('keydown', loginBtn);
inputPassword.addEventListener('keydown', loginBtn);