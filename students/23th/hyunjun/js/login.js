const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#pw");
const button = document.querySelector(".btn");

function Btn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if(idValue && passwordValue) { //* && (and)그리고 *//
        button.disabled = true; //* 만약 true 일 경우 button 활성화 *//
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6"
    }
    if(!idValue || !passwordValue){   //* || (or)또는 *//
        button.disabled = false; //* 만약 false 일 경우 button 비활성화 *//
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
};

inputId.addEventListener('keyup', Btn);
inputPassword.addEventListener('keyup', Btn);
//* inputId와 inputPassword에 keyup을 연결하여 loginBtn을 호출하게 한다. *//