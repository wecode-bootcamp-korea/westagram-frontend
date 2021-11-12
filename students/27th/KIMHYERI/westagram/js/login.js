const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#pw");
const button = document.querySelector("#btn");


function loginBtn() {

    if (document.querySelector("#id").value && document.querySelector("#pw").value) {
        button.disabled = false;
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#4193ef"
    } else {
        button.disabled = true;
        button.style.backgroundColor = "#C4E0FC"
    }
};

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);