const inputID = document.querySelector("#userID");
const inputPassword = document.querySelector("#userPW");
const button = document.querySelector(".btn")

let activateBtn = () => {
    let idValue = inputID.value;
    let pwValue = inputPassword.value;

    if (idValue.length != 0 && pwValue.length != 0) {
        button.disabled = false
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default"
        button.style.backgroundColor = "#bfdffd";
    }
};

function clickButton() {
    alert(`아이디 또는 비밀번호가 틀렸습니다`);
}

inputID.addEventListener('keyup', activateBtn);
inputPassword.addEventListener('keyup', activateBtn);