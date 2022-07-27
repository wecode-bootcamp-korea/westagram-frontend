const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
const button = document.querySelector(".btn");

function loginButton() {
    let idValue = inputId.value;
    console.log(idValue.length);
    let passwordValue = inputPassword.value;
    console.log(passwordValue.length)


    if(idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        button.style.backgroundColor ="#1c7ed6";
        
    }else {
        button.disabled = true;
        button.style.backgroundColor =  "#bfdffd";
    }
};


inputId.addEventListener('keyup', loginButton);
inputPassword.addEventListener('keyup', loginButton)

//keyup과 Keydown 정확히 알기. -> OKAY