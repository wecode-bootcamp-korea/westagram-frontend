const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".login-btn");

function loginBtn() {
    const idValue = inputId.value;
    const passwordValue = inputPassword.value;

    if (idValue.length > 0 && passwordValue.length > 0) {
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#0095f6";
    } else {
        button.style.cursor = "default";
        button.style.backgroundColor = "#C0DFFD";
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);