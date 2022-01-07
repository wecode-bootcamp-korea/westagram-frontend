const loginId = document.getElementsByClassName("input-id")[0];

const loginPw = document.getElementsByClassName("input-pw")[0];

const loginBtn = document.querySelector("#btn-login");

document.addEventListener('keyup', function() {
    const idValue = loginId.value;
    const pwValue = loginPw.value;
    if(idValue.indexOf("@") !== -1 && pwValue.length > 5) {
        loginBtn.disabled = false;
        loginBtn.style.cursor = "pointer";
        loginBtn.style.backgroundColor = "#1c7ed6";
    } else { 
        loginBtn.disabled = true;
        loginBtn.style.cursor = "default";
        loginBtn.style.backgroundColor = "#bfdffd";
    }
});

