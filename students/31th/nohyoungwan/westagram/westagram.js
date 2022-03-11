// const inputId = document.getElementsByClassName("id");
const inputId = document.querySelector('.id');
const inputPassword = document.querySelector('.passWord');
const button = document.querySelector('.loginButton');
console.log(button)

function handleInput() {
    const invalue = inputId.value;
    const pwvalue = inputPassword.value;

    if (invalue.length > 0 && pwvalue.length > 0 ) {
        button.disabled = false;
        button.style.cursor = pointer;
        button.style.backgroundColor = "#1c7ed6";
    }
    else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
};


inputId.addEventListener("keyup", handleInput);
inputPassword.addEventListener("keyup", handleInput);


