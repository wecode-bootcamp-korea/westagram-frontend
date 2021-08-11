const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".btn");

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
        button.style.backgroundColor = "#bfdffd";
    }
};

function clickButton() {
    alert(`아이디 또는 비밀번호가 틀렸습니다`);
}

inputId.addEventListener('keydown', loginBtn);
inputPassword.addEventListener('keydown', loginBtn);