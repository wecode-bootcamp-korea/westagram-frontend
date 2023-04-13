const userName = document.querySelector("#id");
const passWord = document.querySelector("#password");
const btn = document.querySelector(".btn");

function logInBtn() {
    let idValue = userName.value;
    let passwordValue = passWord.value;

    if(idValue.length > 0 && passwordValue.length > 0) {
        btn.disabled = false;
        btn.style.cursor = "default";
        btn.style.backgroundColor = "#0095f6";
    }else {
        btn.disabled = true;
        btn.style.cursor = "default";
        btn.style.backgroundColor = "#B9DFFC";
    }
};

userName.addEventListener('keyup', logInBtn);
passWord.addEventListener('keyup', logInBtn);


